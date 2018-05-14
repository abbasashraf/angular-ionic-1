angular.module('app.controller')
    .controller('loginCtrl', function ($scope) {
        var userObj = {}
        $scope.user = {
            email: '',
            password: ''
        }
        $scope.error = false;
        $scope.errorMessage = ''

        $scope.loginFunc = function () {
            //console.log('login func', $scope.user)
            //$scope.error = true;
            firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password)
            .then(function (user) {
                $ionicHistory.push('home');
                console.log(user, "user")
            })
            .catch(function (error) {
                // Handle Errors here.
                //console.log("catch")
                $scope.errorMessage = error.message;
                $scope.error = true;
                // console.log($scope.errorMessage, "error")
                // console.log($scope.error)
                
                // ...
            });
            
            console.log($scope.errorMessage, "error")
        }

    })

