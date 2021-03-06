angular.module('app')
	.config(["$routeProvider" ,function ($routeProvider) {
		$routeProvider
			.when('/' , {controller: 'PostsCtrl', templateUrl: 'posts.html'})
			.when('/register' , {controller: 'RegisterCtrl', templateUrl: 'register.html'})
			.when('/login' , {controller: 'LoginCtrl', templateUrl: 'login.html'})
			.when('/logout' , {controller: 'LoginCtrl', templateUrl: 'logout.html'})
			.when('/post/:slug' , {controller: 'SinglePostCtrl', templateUrl: 'singlePost.html'})
			.when('/post/id/:id' , {controller: 'SinglePostCtrl', templateUrl: 'singlePost.html'})
			.when('/user/:username' , {controller: 'ProfileCtrl', templateUrl: 'user.html'})
			.when('/user/:username/edit' , {controller: 'ProfileCtrl', templateUrl: 'profile/userProfile.html'})
	}])