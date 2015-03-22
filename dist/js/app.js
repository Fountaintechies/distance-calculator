angular.module("myApp", [
	'myApp.controllers',
	'myApp.filters',
	'myApp.services', ['underscore']
]);
;angular.module("myApp.controllers", []).controller("songCtrl", function($scope, songService) {
	// Write your code here

	$scope.$watch('songs', function(newValue, oldValue) {
		// Write your code here
	});

	$scope.songs = songService.get();

	$scope.addSong = function( /** String */ artist, /** String */ title) {
		$scope.songs.push({
			artist: artist,
			title: title
		});
		$scope.newSong.title = "";
		$scope.newSong.artist = "";
	};

	$scope.newSong = {};

	$scope.isEmpty = function( /** String */ str) {

		return _.isEmpty(str);
	};

});
;;/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp.filters", []).filter("titleize", function() {
	return function( /** String */ input) {
		return _.titleize(input);
	};
});
;;angular.module("myApp.services", []).factory("songService", function() {
	// Write code here


	var STORAGE_ID = 'myApp.songs',
		factory = {};

	factory.get = function() {
		return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
	};

	factory.put = function(songs) {
		localStorage.setItem(STORAGE_ID, JSON.stringify(songs));
	};

	return factory;


});
