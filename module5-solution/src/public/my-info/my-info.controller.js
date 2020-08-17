(function(){
"use strict";

angular.module('public').controller('InfoController', InfoController);

InfoController.$inject = ['myInfoData', 'SignUpService'];
function InfoController(myInfoData, SignUpService) {
	var $ctrl = this;
	var promise = SignUpService.dishInfo();

	$ctrl.flag = false;
	if ($ctrl.myInfoData = myInfoData)
		$ctrl.flag = true;
	if (promise) {
		promise.then(function (response) {
			var img = ""
			$ctrl.dish = {
				pic: response.category_short_name,
				title: response.name,
				description: response.description,
			}
		});
	}
}

})();
