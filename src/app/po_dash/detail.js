(function(){
  'use strict';

  angular.module( 'dolmen' )
  .controller( 'ShowDetailController', function( $http ){
    var list = this;
    list.details = [ ];

    $http.get( 'app/po_dash/request_detail.json' )
    .then( function( response ){
      console.log( response );
      list.details = response.data;
    });
  });
})();









// (function(){
//   'use strict';
//
//   var app = angular.module('dolmen');
//
//       app.controller('DetailController', function($firebaseArray, $location){
//
//       var self = this;
//
//       var firebaseDetail = new Firebase('https://dolmen.firebaseio.com');
//
//       self.data = $firebaseArray(firebaseDetail);
//       console.log(self.data);
//
//       self.display = function() {
//         self.data.$add({
//           date: self.date,
//           category: self.category,
//           address: self.address,
//           tenant: self.tenant,
//           phone: self.phone,
//           email: self.email,
//           description: self.description,
//           instructions: self.instructions,
//           comments: self.comments
//         }).then(function(){
//           $location.path('/details');
//         });
//       };
//     });
//
//     app.controller('ShowDetailController', function($http){
//       var display = this;
//       this.detail = { };
//       // console.log(this.detail);
//
//       this.addDetail = function(spices) {
//         spices.details.push(this.detail);
//         this.detail = { };
//       };
//
//       $http.get('https://dolmen.firebaseio.com/' + '.json').then(function(adobo){
//         display.details = adobo.data;
//       });
//     });
//
//
// });