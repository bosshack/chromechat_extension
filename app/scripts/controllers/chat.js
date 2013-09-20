'use strict';

angular.module('chromechatApp.Controllers', [])
  .controller('ChatController', ['$scope', function($scope) {
    $scope.messages = [];
    $scope.users = [
      { username: 'knewter' },
      { username: 'nrstott' }
    ];
    $scope.$on('message', function(evt, data){
      $scope.messages.push({ username: 'knewter', text: data.text });
      console.log(data);
    });
  }]);
