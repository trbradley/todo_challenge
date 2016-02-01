todoList.controller('TodoListController', [function() {
  var self = this;
  self.taskList = []

  self.addTask = function() {
    self.taskList.push({'text': self.newTask});
    self.newTask = '';
    console.log(self.taskList)
  };

  self.editTask = function(task) {
     task.beingEdited = !task.beingEdited;
  };

  self.taskCompleted = function(task) {
    task.completed = !task.completed;
  };

  self.clearComplete = function() {
    self.taskList = self.taskList.filter(function(obj) {
      return obj.completed === false
    });
  };
}]);
