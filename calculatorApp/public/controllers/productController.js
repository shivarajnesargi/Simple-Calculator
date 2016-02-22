angular.module('calculatorApp').controller('productController',function($scope)
	{
		$scope.multiplyNumbers=function()
		{
			$scope.result=parseFloat($scope.firstNumber)*parseFloat($scope.secondNumber);
		}	

	});