angular.module('app.controller', ['firebase'])
  .controller('signupCtrl', [
    '$scope', '$rootScope', '$firebaseAuth', '$window',
    function ($scope, $rootScope, $firebaseAuth, $window) {
      var userObj = {}
      // var firebase = new Firebase("https://education.firebaseio.com/");
      $scope.user = {
        name: '',
        email: '',
        password: ''
      }
      $scope.error = false;
      $scope.errorMessage = ''

      $scope.signupFunc = function () {
        console.log('Signup func', $scope.user)
        firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function (user) {
          console.log(user, "user")
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage, "error")
          // ...
        });
      }

    }])
