# Todo Challenge

Author: Thomas Bradley

This is my submission for the Todo List Challenge. Built with AngularJS and tested with Karma and PhantomJS.
Please note, some feature tests are currently broken due to new implementation of CSS. Next steps are to update these to the new design and implement final user stories.

## Installation

* `git clone`
* `$ bower install`
* `$ npm install`
* `$ http-server`
* `$ open index.html`

## Challenge

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

Further user stories to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count
```

## Extensions

* Deploy the app
* Create a persistence layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Improve CSS
