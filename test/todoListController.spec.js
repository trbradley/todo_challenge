describe('todoListController', function() {
  beforeEach(module('TodoList'));
  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.taskList.length).toEqual(0);
  });

  describe('#addTask', function() {
    it('adds a new task to the list', function() {
      ctrl.newTask = 'This is a new task'
      ctrl.addTask();
      expect(ctrl.taskList[0].text).toEqual('This is a new task')
    });
  });

  describe('#editTask', function() {
    it('sets the task state to being edited', function() {
      var task = {"text": "This task is going to be edited"}
      ctrl.editTask(task);
      expect(task.beingEdited).toBe(true);
    });
  })

});
