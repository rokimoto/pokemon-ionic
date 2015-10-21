// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pokemon_app', ['ionic', 'phonecatFilters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'states/menu.html'
    })

    .state('app.pokemon', {
      url: "/pokemon",
      views: {
        'menuContent': {
          templateUrl: 'states/pokemon.html'
        }
      }
    })

    .state('app.detail', {
      url: "/pokemon/:pokeId",
      views: {
        'menuContent': {
          templateUrl: 'states/detail.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/pokemon');

})




