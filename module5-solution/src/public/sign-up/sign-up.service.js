(function(){
"use strict";

angular.module('public').service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
	var $srvc = this;
	$srvc.items;
	var userinfo;

	$srvc.sendUser = function (user) {
		userinfo = user;
	};

	$srvc.sendDish = function (dish) {
		return $http.get(ApiPath + '/menu_items.json').then(function (response) {
			var foundItems;
			var menuItems = (response.data)['menu_items'];
			for (var i = 0; i < menuItems.length; i++) {
				if (menuItems[i].short_name.toLowerCase() == dish.toLowerCase()) {
					foundItems = menuItems[i];
				}
			}
			$srvc.items = foundItems;
			$srvc.dishInfo();
			return foundItems;
		});
	};

	$srvc.getUserInfo = function () {
		return userinfo;
	};

	$srvc.dishInfo = function () {
		if ($srvc.items)
		{
			var shortName = $srvc.items.short_name;
			return $http.get(ApiPath + '/menu_items/'+ shortName +'.json').then(function (response) {
				return response.data;
			});
		}
		return false;
	};
}

})();
