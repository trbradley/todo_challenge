describe('todoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.taskList).toBeUndefined();
  });

});
