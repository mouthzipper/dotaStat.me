angular.module('confessmeApp', [
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/common/header.html'
          },
          'content-header' : {
            templateUrl: 'views/common/content-header.html'
          },
          'content': {
            templateUrl: 'views/tabs/fresh/fresh.html'
          },
          'footer': {
            templateUrl: 'views/common/footer.html'
          }
        }
      })
      .state('about', {
        url:'/about',
        templateUrl:'views/about.html'
      });
    $urlRouterProvider.otherwise('/');
  })
;