var app = angular.module('civilsOnline', [
  'ui.router'
]);
app.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('loginMain', {
    url:'/',
    templateUrl:'views/loginMain.html'
  })
  .state('SignUp', {
    url:'/SignUp',
    templateUrl:'views/signUp.html'
  })
  .state('SignIn', {
    url:'/SignIn',
    templateUrl:'views/signIn.html'
  })
  .state('ForgotPassword', {
    url:'/ForgotPassword',
    templateUrl:'views/resetpassword.html'
  });

});

app.run(function($rootScope){

    $rootScope
        .$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log("loading");
                $("#view-container").html('');
                $(".loading").removeClass("hidel");
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
              console.log("loaded");
              $(".loading").addClass("hidel");
        });

});
