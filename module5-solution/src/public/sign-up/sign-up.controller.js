(function(){
"use strict";

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController (SignUpService){
  var signup = this;
  signup.user = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dish: ""
  };

  signup.item;
  signup.error_message = '';
  signup.saved_message = '';

  signup.submit = function (){
    SignUpService.sendUser(signup.user);
    var promise = SignUpService.sendDish(signup.user.dish);
    promise.then(function(response){
      signup.item = response;
      if (signup.item)
        signup.saved_message = "Your information has been saved.";
        else
        signup.error_message = "Oops! No such menu number exists."
    });
  }
}

})();
