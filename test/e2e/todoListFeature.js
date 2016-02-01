describe('Todo List', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Todo List');
  });

  it('does not allow empty tasks', function() {
    browser.get('http://localhost:8080');
    element(by.buttonText("Add Task")).click();
    expect(element(by.tagName('span')).isPresent()).toBe(false);
  });

  it('can add tasks', function() {
    browser.get('http://localhost:8080');
    element(by.model('todoCtrl.newTask')).sendKeys('Learn AngularJS');
    element(by.buttonText('Add Task')).click();
    expect(element(by.tagName('li')).getText()).toEqual('Learn AngularJS');
  });

  it('allows tasks to be edited', function() {
    browser.get('http://localhost:8080');
    element(by.model("todoCtrl.newTask")).sendKeys('Learn AngularJS.');
    element(by.buttonText("Add Task")).click();
    element(by.tagName('span')).click();
    element(by.model("task.text")).sendKeys(' Or not.');
    element(by.buttonText('Save Changes')).click();
    expect(element(by.tagName('span')).getText()).toEqual('Learn AngularJS. Or not.');
  });

  it('crosses out the task when the done button is clicked', function() {
    browser.get('http://localhost:8080');
    element(by.model("todoCtrl.newTask")).sendKeys('Learn AngularJS');
    element(by.buttonText("Add Task")).click();
    element(by.buttonText("Completed")).click();
    expect(element(by.tagName('span')).getAttribute('class')).toMatch('completed-true')
  });
});
