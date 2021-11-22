declare var angular: any;

angular.module('secondAppModule', [])
	.component('secondAppCmp', {
		templateUrl: require('./second-app.template.html').default,
		controller: [
			'$scope', function ($scope) {
				$scope.name = 'Second app';
				$scope.inputValue = '';
			}]
	});