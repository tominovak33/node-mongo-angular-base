angular.module("app",[]),angular.module("app").controller("PostsCtrl",["$scope","$http","PostsService",function(t,s,o){t.addPost=function(){t.postBody&&o.send({username:"tomi7",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},o.get().success(function(s){t.posts=s})}]),angular.module("app").service("PostsService",["$http",function(t){this.get=function(){return t.get("/api/posts")},this.send=function(s){return t.post("/api/posts",s)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzQ3RybC5qcyIsInBvc3RzU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRodHRwIiwiUG9zdHNTZXJ2aWNlIiwiYWRkUG9zdCIsInBvc3RCb2R5Iiwic2VuZCIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZ2V0Iiwic2VydmljZSIsInRoaXMiXSwibWFwcGluZ3MiOiJBQUNBQSxRQUFBQyxPQUFBLFVDREFELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsUUFBQSxlQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQ0FGLEVBQUFHLFFBQUEsV0FDQUgsRUFBQUksVUFDQUYsRUFBQUcsTUFDQUMsU0FBQSxRQUNBQyxLQUFBUCxFQUFBSSxXQUVBSSxRQUFBLFNBQUFDLEdBQ0FULEVBQUFVLE1BQUFDLFFBQUFGLEdBQ0FULEVBQUFJLFNBQUEsUUFLQUYsRUFBQVUsTUFDQUosUUFBQSxTQUFBRSxHQUNBVixFQUFBVSxNQUFBQSxPQ2pCQWIsUUFBQUMsT0FBQSxPQUNBZSxRQUFBLGdCQUFBLFFBQUEsU0FBQVosR0FDQWEsS0FBQUYsSUFBQSxXQUNBLE1BQUFYLEdBQUFXLElBQUEsZUFFQUUsS0FBQVQsS0FBQSxTQUFBSSxHQUNBLE1BQUFSLEdBQUFRLEtBQUEsYUFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIGZpbGUgbXVzdCBiZSB0aGUgZmlyc3QgaW4gdGhlIGxpc3QgdG8gYmUgY29uY2F0ZW5hdGVkXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuY29udHJvbGxlcignUG9zdHNDdHJsJywgW1wiJHNjb3BlXCIgLCBcIiRodHRwXCIsIFwiUG9zdHNTZXJ2aWNlXCIgLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgUG9zdHNTZXJ2aWNlKSB7XG5cdFx0JHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRcdFBvc3RzU2VydmljZS5zZW5kKHtcblx0XHRcdFx0XHR1c2VybmFtZTogJ3RvbWk3Jyxcblx0XHRcdFx0XHRib2R5OiAkc2NvcGUucG9zdEJvZHlcblx0XHRcdFx0fSlcblx0XHRcdFx0LnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcblx0XHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcblx0XHRcdFx0XHQkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRQb3N0c1NlcnZpY2UuZ2V0KClcblx0XHQuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzO1xuXHRcdH0pXG5cblx0fV0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG5cdC5zZXJ2aWNlKCdQb3N0c1NlcnZpY2UnLCBbXCIkaHR0cFwiICwgZnVuY3Rpb24gKCRodHRwKSB7XG5cdFx0dGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XG5cdFx0fVxuXHRcdHRoaXMuc2VuZCA9IGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xuXHRcdH1cblx0fV0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9