/* global angular Firebase */
;(function(){
  'use strict';

  var services = angular.module('dolmen.services', ['firebase']);

  services.factory ('authServices', [
    '$state',
    '$timeout',
    '$firebaseAuth',
]);

//--------Callback setup--------
// var ref = new Firebase("https://dolmen.firebaseio.com");
// var authClient = new FirebaseAuthClient(ref, function(error, user) {
//   if (error) {
//     alert(error);
//     return;
//   }
//   if (user) {
//     doLogin(user);
//   } else {
//     showLoginBox ();
//   }
//
// });








//----------- Start of Firebase Google login snippet -----------
  var ref = new Firebase("https://dolmen.firebaseio.com");
ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    // console.log("Login Failed!", error);
  } else {
    // console.log("Authenticated successfully with payload:", authData);
  }
});
})();
//--------- End of Firebase google login snippet----------

//Firebase simple email and password login
  // var services = angular.module('dolmen.services', ['firebase']);
  //
  // services.factory ('authServices', [
  //   '$state',
  //   '$timeout',
  //   '$firebaseAuth',
  //
  //   function( $state, $timeout, $firebaseAuth )
  //   {
  //     var authServices = {};
  //     var auth = new Firebase( 'https://dolmen.firebaseio.com');
  //     authServices.authObj = $firebaseAuth(auth);
  //     console.log(authServices.authObj);
  //     authServices.login = function (user, pass) {
  //       authServices.authObj.$authWithPassword({
  //         email : user,
  //         password :pass
  //
  //       })
  //       .then(function(response){
  //         $state.go('po_dash');
  //       });
  //     };
  //
  //   //   authServices.logout = function () {
  //   //     authServices.authObj.$unauth();
  //   //   };
  //   //   authServices.getloginstatus = function() {
  //   //   //   //anytime I call a fn in firebase I use $getAuth...
  //   //   return authServices.authObj.$getAuth();
  //   // };
  //
  //     return authServices;
  //   }

  // ]);
