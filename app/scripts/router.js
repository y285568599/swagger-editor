'use strict';

PhonicsApp.config([
  '$compileProvider',
  '$stateProvider',
  '$urlRouterProvider',
  Router
]);

function Router($compileProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '',
    views: {
      '': {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      },
      'header@home': {
        templateUrl: 'views/header/header.html',
        controller: 'HeaderCtrl'
      },
      'editor@home': {
        templateUrl: 'views/editor/editor.html',
        controller: 'EditorCtrl'
      },
      'preview@home': {
        templateUrl: 'views/preview/preview.html',
        controller: 'PreviewCtrl'
      }
    }
  })
    .state('home.path', {
      url: '/paths/:pathId',
      views: {
        'preview@home.path': {
          templateUrl: 'views/preview/preview.html',
          controller: 'PathPreviewCtrl'
        }
      }
    });
      // .state('home.path.operation', {
      //   url: ':operationId',
      //   views: {
      //     'preview@home.path.operation': {
      //       controller: 'PreviewCtrl',
      //       templateUrl: 'views/preview/preview.html'
      //     }
      //   }
      // });


  $compileProvider.aHrefSanitizationWhitelist('.');
}
