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

  ns.Animal.prototype.toString = function toString(){
    return this.name + ',' + this.birthday;
  };

  window.zoo = ns;

})(window.zoo || {});
