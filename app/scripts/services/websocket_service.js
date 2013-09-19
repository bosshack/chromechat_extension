'use strict';

angular.module('chromechatApp.Services')
  .factory('$websocketService', [function() {
    var topicName = 'inboundMessage';

    return function(scope) {
      return {
        onmessage: function(message){
          scope.$broadcast(topicName, angular.fromJson(message.data));
        }
      };
    };
  }]);
