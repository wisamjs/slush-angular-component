'use strict';

angular.module('<%= modules.controller %>', [])
  .controller(<%= components.controller %>, function (<%= components.service %>) {
    (function (vm) {
      angular.extend(vm, {
        name: name

      });

      function name() {
        return <%= components.service %>.getName();
      }

    }(this));

  });

