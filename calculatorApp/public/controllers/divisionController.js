angular.module('calculatorApp').controller('divisionController',function($scope)
{
		$scope.divideNumbers=function()
		{
			$scope.result=parseFloat($scope.firstNumber/$scope.secondNumber);
		}	

	});