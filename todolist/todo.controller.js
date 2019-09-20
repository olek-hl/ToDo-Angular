(function() {
    'use strict';

angular
    .module('todoList')
    .controller('TodoListController', TodoListController);

function TodoListController() {
	var vm = this;
	vm.todos = [
		{'title':'test1','date':'21.03.2016','done':false},
		{'title':'test2','date':'21.03.2016','done':false}
	];
	vm.addTodo = addTodo;
	vm.undoneTasks = undoneTasks;
	vm.removeTask = removeTask;
	vm.isShow = isShow;
	vm.checkAll = false;
	vm.toggleCheckAll = toggleCheckAll;
	vm.removeChecked = removeChecked;

	function addTodo() {
		if(vm.title) {
			vm.todos.push({'title':vm.title, 'date': vm.date,'done':false});
        	vm.title = '';
        	vm.date = '';
        }
	}
	function undoneTasks() {
		var count = 0;		
    	angular.forEach(vm.todos, function(task) {
    	var done = task.done;
      	count += done ? 0 : 1;
    	});
    return count;
	}
	function removeTask(index) {
		vm.todos.splice(index, 1);
	}
	function isShow() {
		var listLength = vm.todos.length; 
		return listLength > 0;
	}
	function toggleCheckAll() {
		angular.forEach(vm.todos, function(task) {
        task.done =vm.checkAll;
      });
	}
	function removeChecked() {
		var oldTasks = vm.todos;
    	vm.todos = [];
    	angular.forEach(oldTasks, function(task) {
      	if (!task.done) vm.todos.push(task);
      	vm.checkAll = false;
    	});  
	}

}
})();


