'use strict';

angular.module('chromechatApp.Services')
  .factory('$websocketService', [function() {
    return function(scope) {
      return {
        onmessage: function(message){
          scope.broadcast(message.data);
        }
      };
    };
  }]);
