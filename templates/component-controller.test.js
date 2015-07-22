'use strict';

describe('<%= components.controller %>', function () {
  var <%= components.controller %>;
  var <%= components.service %>Mock;

  beforeEach(module('<%= modules.controller %>'));
  beforeEach(module(initMocks));
  beforeEach(inject(initController));

  it('should exist', function () {
    expect(<%= components.controller %>).to.be.an('Object');
  });

  it('should call service', function () {
    <%= components.controller %>.name();
    expect(<%= components.service %>Mock.getName.calledOnce).to.eql(true);
  });

  it('should write more tests', function () {
    expect(false).to.eql(true);
  });

  function registerService($provide) {

    return function (name, mock) {
      $provide.service(name, function () {
        return mock;
      });
    };

  }

  function initMocks($provide) {
    var addMockService = registerService($provide);

    <%= components.service %>Mock = {
      getName: sinon.spy();
    }

    addMockService('<%= components.service %>',<%= components.service %>Mock);
  }

  function initController($controller) {
    <%= components.controller %> = $controller('<%= components.controller %>');

  }

});

