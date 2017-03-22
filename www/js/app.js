'use strict'

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('myApp', ['ionic'])

app.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

 
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('registro', {
    url: '/signup',
    templateUrl: 'templates/registro.html',
    controller: 'RegistroController'
  })

  .state('contactos', {
    url: '/contactos',
    templateUrl: 'templates/contactos.html',
    controller: 'ContactosController'
  });
  $urlRouterProvider.otherwise('/');  
});
 
app.controller('MainCtrl', function($scope) {
 
});

app.controller('ContactosController', function($scope,$ionicHistory){
  $scope.personas = ['Saúl', 'Efŕen', 'Abdiel'];
  
  $scope.regresar = function(){
    alert("Click en regresar");
    //$ionicHistory.backView();
  }
});

app.controller('RegistroController', function($scope,$ionicHistory, $ionicPopup){
  //console.log("Si esta cargando");

  $scope.usuario = {};
  $scope.regresar = function(){
    window.location.href = '#/';
  }

  $scope.registrarse = function(){
      var myPopup = $ionicPopup.show({
    template: `
        El usuario es: ${$scope.usuario.email}.<br>
        El password es: ${$scope.usuario.password}
      `,
    title: '¿Los datos son correctos?',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
  }
});