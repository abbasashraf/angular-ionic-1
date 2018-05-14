// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'app.controller', 'ngCordova', 'firebase'])

  .run(function ($ionicPlatform, $rootScope, $firebaseAuth, $firebase, $window, $firebaseArray, $firebaseObject) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
      console.log($firebase)
      var config = {
        apiKey: "AIzaSyCQPyAijJ8ls0EN-Mi1c4-jPkj863hKvDk",
        authDomain: "quizapp-5281b.firebaseapp.com",
        databaseURL: "https://quizapp-5281b.firebaseio.com",
        projectId: "quizapp-5281b",
        storageBucket: "quizapp-5281b.appspot.com",
        messagingSenderId: "144096262049"
      };
      firebase.initializeApp(config);

    });

  })


app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

  $urlRouterProvider.otherwise('/main');
});
