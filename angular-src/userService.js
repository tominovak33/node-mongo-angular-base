angular.module('app')
	.service('UserSvc', ["$http", function($http) {
		var svc = this;

		svc.getUser = function () {
			$http.defaults.headers.common['X-Auth'] = window.localStorage.token
			return $http.get('/api/users')
			.then(function (response) {
      			return response
    		})
		}

		svc.login = function (username, password) {
			return $http.post('/api/sessions', {
				username: username, password: password
			})
			.then(function (val) {
				window.localStorage.token = val.data;
				$http.defaults.headers.common['X-Auth'] = val.data
				return svc.getUser();
			})
		}

		svc.register = function (username, password, password_confirm) {
			return $http.post('/api/users', {
				username: username, password: password
			})
			.then(function (val) {
				return svc.login(username, password)
					.then(function(){
						window.location.href= '/';
					})
			})
		}

		svc.authorization = function (permission_level) {
			$http.defaults.headers.common['X-Auth'] = window.localStorage.token;
			return $http.get('/api/users/permissions')
			.then(function (response) {
				console.log(response);
				if (response.data > permission_level) {
					return true;
				}
				return false;
			})
		}

		svc.logout = function () {
			window.localStorage.removeItem('token');
			window.location.href= '/';
		}

		svc.profile = function (username) {
			return $http.get('/api/users/profile', { params: {username: username} })
		}

		svc.profileUpdate = function (profile) {
			return $http.post('/api/users/profile', profile )
		}
	}])