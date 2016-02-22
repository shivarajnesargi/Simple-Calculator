angular.module('calculatorApp').controller('subtractionController',function($scope)
	{
		$scope.subtractNumbers=function()
		{
			$scope.result=parseFloat($scope.firstNumber)-parseFloat($scope.secondNumber);
		}	

	});