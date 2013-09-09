'use strict';

angular.module('chromechatApp',
  [
    'chromechatApp.Controllers',
    'chromechatApp.Directives'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/chat.html',
      controller: 'ChatController'
    });
  }])
  // .value('environment', 'test')
  .value('foo', 'bar');
