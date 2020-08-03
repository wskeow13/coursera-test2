(function (){
  'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl : 'foundItems.html',
    scope : {
      onRemove : '&',
      items : '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.menuSearch = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (response) {
        menu.found = response;
      })
    .catch( function (error) {
      console.log('Error while retrieving data.');
    });
  };
  menu.removeItem = function (index) {
    menu.found.splice(index,1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method : "GET",
      url : (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var dat = result.data;
      var fditems=[];
        for (var i in dat.menu_items) {
          if (dat.menu_items[i].description.indexOf(searchTerm) === -1) {
            console.log("Not found.");
          }
          else fditems.push(dat.menu_items[i]);
          }
         console.log(fditems);
         return fditems;
       });
    };
 }

})();
