var $rootScope, $scope, $SearchFormCtrl, $location, $httpBackend, $authRequestHandler;

describe("Testing_CountryInfo_SearchFormCtrl", function(){
	beforeEach(function() {
	   module('intro');
	   inject(function(_$rootScope_, _$controller_, _$filter_, _ngTableParams_, _CountrySearch_, _$location_, $injector){
               $scope = _$rootScope_.$new();
               $controller = _$controller_;
	       $location =_$location_;
               $SearchFormCtrl=$controller('SearchFormCtrl', {
			'$scope': $scope,
			'$filter':_$filter_,
			'ngTableParams':_ngTableParams_,
			'CountrySearch':_CountrySearch_,
			'$location': _$location_
	       });
	       $httpBackend = $injector.get('$httpBackend');    
	  });
	
	});
			
	it("has SearchFormCtrl defined", function(){
		expect($SearchFormCtrl).toBeDefined();
	});
	
	it('$scope.data starts off equalling { }', function(){
		expect($scope.data).toEqual({});
	});
	
	it('has $scope.submit() defined', function(){
		expect($scope.submit).toBeDefined();
	});
	
	it('has $scope.reset() defined',function(){
		expect($scope.reset).toBeDefined();
	});
	
	it('passes a countryName to $scope.edit()', function(){
		countryName = 'Iraq';
	        $scope.edit.capture = true;
	        $scope.edit(countryName);
	        console.log($location.path.url);
	        expect($location.path.url).toEqual('/countries/'+countryName+'/edit');
	    
	});
});