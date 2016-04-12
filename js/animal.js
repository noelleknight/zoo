(function(ns) {
  'use strict';


  ns.Animal = function Animal(name, birthday) {
    if(typeof name !== "string") {
      throw new TypeError('You are putting in the wrong type of value');
    }
    else if (name) {this.name = name; }
    this.birthday = birthday;
  };

  ns.Animal.prototype.age = function age () {
    if (this.isDead) {
      throw new Error('This animal is expired, therefore ageless.');
    }
    var today = new Date();
    var thisYear = today.getFullYear();
    return (thisYear - this.birthday);
  };

  ns.Animal.prototype.expire = function expire() {

    this.isDead = true;
    return this.isDead;
  };

  ns.Animal.prototype.toString = function toString(){
    return this.name + ',' + this.birthday;
  };

  window.zoo = ns;

})(window.zoo || {});
