(function (){
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['ApiBasePath', '$http'];
function MenuDataService(ApiBasePath, $http) {
  this.getAllCategories = () => {
    return $http({
      method: 'GET',
      url: ApiBasePath + 'categories.json'
    }).then(response => response.data);
  };

  this.getItemsForCategory = categoryShortName => {
    return $http({
      method: 'GET',
      url: ApiBasePath + 'menu_items.json',
      params: {category: categoryShortName}
    }).then(response => response.data.menu_items);
  }
}

}
)();
