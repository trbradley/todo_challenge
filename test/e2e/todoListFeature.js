describe('Todo List', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Todo List');
  });

  it('can add tasks', function() {
    browser.get('http://localhost:8080');
    element(by.model('todoCtrl.newTask')).sendKeys('Create a to do list');
    element(by.className('btn')).click();
    expect(element(by.tagName('li')).getText()).toEqual('Create a to do list');
  });
});
