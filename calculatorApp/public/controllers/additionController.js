angular.module('calculatorApp').controller('additionController',function($scope)

{
		$scope.addNumbers=function()
		{
			$scope.result=parseFloat($scope.firstNumber)+parseFloat($scope.secondNumber);
		}	

	});
