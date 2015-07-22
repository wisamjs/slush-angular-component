'use strict';

angular.module('<%= modules.directive %>',[])
.directive('<%= components.directive %>', function(){
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      templateUrl: '<%= templateUrl %>',
      controller: '<%= components.controller %>',
      controllerAs: '<%= components.controllerAs %>',
      bindToController: true
    };
})
