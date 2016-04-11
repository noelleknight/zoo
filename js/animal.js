(function(ns) {
  'use strict';


ns.Animal = function Animal(name, birthday) {

    if (name) {this.name = name; }
    this.birthday = birthday;

};

ns.Animal.prototype.age = function age () {

  var today = new Date();
  var thisYear = today.getFullYear();
  // return thisYear;
   return (thisYear - this.birthday);

};

// var a = new Animal();
// var myAge = a.age();

// create a method (function) on the prototype that all Person objects will use
// ns.Person.prototype.raise = function raise (percentage) {
//     this.salary *= 1 + (percentage / 100);
//   };

//   ns.Person.prototype.toString = function toString(){
//     return this.name + ',' + this.salary;
//   };
// ns.Person.prototype.name = 'Bubbles';
// // var jordan = new ns.Person( 'Jordan', 50000 );
// // console.log( jordan.name ); //'Jordan'


  window.zoo = ns;

})(window.zoo || {});
