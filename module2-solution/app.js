(function () {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getItems();

    list1.bought = function(item){
      ShoppingListCheckOffService.boughtItem(item);
      list1.items = ShoppingListCheckOffService.getItems();
    }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService (){
  var service = this;
  var items = [
    {shopItem:1, name: "cookies", quantity: 20},
    {shopItem:2, name: "ice cream", quantity: 12},
    {shopItem:3, name: "cheesecake", quantity: 5},
    {shopItem:4, name: "potato chips", quantity: 8},
    {shopItem:5, name: "chocolates", quantity: 15} ];
  var boughtItems = [];

  service.boughtItem = function(item){
    items = items.filter(function(element){
      return element.shopItem != item.shopItem
    });

    boughtItems.push(item);
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.getItems = function(){
    return items;
  };
};

}
)();
