// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var app;

  app = angular.module('kuew');

  app.controller('NewMilestoneController', function($scope) {
    $scope.milestone = {
      name: null,
      type: 'chron',
      purpose: ''
    };
    $scope.transitions = {
      'milestone-type': function() {
        return "milestone-type-" + $scope.milestone.type;
      },
      'milestone-purpose': function() {
        return "milestone-purpose-" + $scope.milestone.purpose;
      },
      'milestone-responsive-type': function() {
        return "milestone-responsive-type-" + $scope.milestone.based_on;
      }
    };
    $scope.allTasks = [
      {
        name: "Task 1",
        id: 1
      }, {
        name: "Task 2",
        id: 2
      }, {
        name: "Task 3",
        id: 3
      }, {
        name: "Task 4",
        id: 4
      }, {
        name: "Task 5",
        id: 5
      }, {
        name: "Task 6",
        id: 6
      }
    ];
    $scope.allMilestones = [
      {
        name: "Milestone 1",
        id: 1
      }, {
        name: "Milestone 2",
        id: 2
      }, {
        name: "Milestone 3",
        id: 3
      }, {
        name: "Milestone 4",
        id: 4
      }, {
        name: "Milestone 5",
        id: 5
      }, {
        name: "Milestone 6",
        id: 6
      }
    ];
    return $scope.minDate = new Date();
  });

}).call(this);
