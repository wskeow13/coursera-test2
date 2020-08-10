(function (){
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/menutemplates/categoriescomponentlist.html',
  bindings: {
    categories: '<'
  }
});

}
)();
