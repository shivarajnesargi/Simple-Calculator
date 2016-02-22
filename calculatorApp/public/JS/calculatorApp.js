var app=angular.module('calculatorApp',['ngRoute'])
app.config(function($routeProvider)
{

		$routeProvider
		.when('/1',
				{
					controller:'additionController',
					templateUrl:'/views/add.html'
				}
			)
		.when('/2',
				{
					controller:'subtractionController',
					templateUrl:'/views/sub.html'
				}
			)
		.when('/3',
				{
					controller:'productController',
					templateUrl:'/views/prod.html'
				}
			)
		.when('/4',
				{
					controller:'divisionController',
					templateUrl:'/views/div.html'
				}
			)
		.otherwise({redirectTo:'/'});
	});