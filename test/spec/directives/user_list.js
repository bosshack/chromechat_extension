/*global describe, it */
'use strict';

describe('UserList', function () {
  var el, scope;

  beforeEach(function(){
    module('chromechatApp.Directives', 'templates');
    inject(function($compile, $rootScope) {
      el = angular.element("<user-list></user-list>");
      scope = $rootScope;
      $compile(el)(scope);
      scope.$digest();
    });
  });

  it('has a user in it', function () {
    expect(angular.element('ul li', el)[0].innerText).toContain('knewter');
  });
});
