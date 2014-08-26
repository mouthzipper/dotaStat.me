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
            templateUrl: 'views/common/content.html'
          },
          'footer': {
            templateUrl: 'views/common/footer.html'
          }
        }
      })
      .state('protips', {
        url:'/protips',
        templateUrl:'views/protips.html'
      })
      .state('heroboard', {
        url:'/heroboard',
        templateUrl:'views/heroboard.html'
      })
      .state('leaderboard', {
        url:'/leaderboard',
        templateUrl:'views/leaderboard.html'
      });
    $urlRouterProvider.otherwise('/');
  })
;