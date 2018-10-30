angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('mainPage', {
    url: '/page1',
    templateUrl: 'templates/mainPage.html',
    controller: 'mainPageCtrl'
  })

  .state('results', {
    url: '/page2',

    params: {              
            radio1: null
    },

    templateUrl: 'templates/results.html',
    controller: 'resultsCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});
