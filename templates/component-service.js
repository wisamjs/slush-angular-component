'use strict';

angular.module('<%= modules.service %>', [])
  .factory('<%= components.service %>', function () {

    return {
      getName: getName
    };

    function getName() {
      return '<%= components.directive %>';
    }

  });

