angular.module('app.controller', ['firebase'])
    .controller('loginCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window',
        function ($scope, $rootScope, $firebaseAuth, $window) {
            var userObj = {}
            $scope.user = {
                email: '',
                password: ''
            }
            $scope.error = false;
            $scope.errorMessage = ''

            $scope.loginFunc = function () {
                console.log('login func', $scope.user)
                firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function (user) {
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

