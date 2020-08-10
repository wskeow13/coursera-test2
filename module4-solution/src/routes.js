(function (){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/menutemplates/homelist.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/menutemplates/categorieslist.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', MenuDataService => {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('categories.items', {
    url: '/items/{category}',
    templateUrl: 'src/menuapp/menutemplates/itemlist.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', ($stateParams, MenuDataService) => {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });
}

}
)();
