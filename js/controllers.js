var toDoApp = angular.module('toDoApp', []);

toDoApp.controller('TasksController', function($scope) {
	$scope.tasks = [];

	$scope.addNewTask = function() {
		if ($scope.newTask) {
			$scope.tasks.push({name: $scope.newTask, isDone: false});
			$scope.newTask = '';
		}
	}

	$scope.removeTask = function(task) {
		var index = $scope.tasks.indexOf(task);
		$scope.tasks.splice(index, 1);		
	}

	$scope.getStatus = function(task) {
		return task.isDone ? 'Task is done' : 'Task isn\'t done';
	}

	$scope.clear = function() {
		$scope.tasks = [];
	}

	$scope.numberOfTasksDone = function() {
		var tasksDone = 0;
		angular.forEach($scope.tasks, function(task) {
			if (task.isDone) {
				tasksDone++;
			}
		});
		return tasksDone;
	}
})
