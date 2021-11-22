declare var angular: any;

angular.module('firstAppModule', [])
	.component('firstAppCmp', {
		templateUrl: require('./first-app.template.html').default,
		controller: [
			'$scope', function ($scope) {
				$scope.name = 'First app';
				$scope.countries = ['Indonesia', 'Peru', 'Costa Rica', 'Ireland', 'Sweden'];
			}]
	});