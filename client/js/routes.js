myApp.config(function ($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: '../partials/landing.html'
    })
    .when('/home',{
      templateUrl: '../partials/landing.html'
    })
    .when('/articles',{
      templateUrl: '../partials/articles.html'
    })
    .when('/article/:id',{
      templateUrl: '../partials/article.html'
    })
    .when('/about',{
      templateUrl: '../partials/contact.html'
    })
    .when('/contact',{
      templateUrl: '../partials/about.html'
    })
    .when('/extras',{
      templateUrl: '../partials/reviews.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});
