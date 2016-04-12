(function(ns) {
  'use strict';

  ns.Cheetah = function Cheetah(name, birthday) {

    ns.Animal.call(this, name, birthday);
  };

  ns.Cheetah.prototype = Object.create(ns.Animal.prototype);
  ns.Cheetah.prototype.constructor = ns.Cheetah;

  ns.Cheetah.prototype.birth = function birth(babyname) {
    if(typeof babyname !== "string") {
      throw new TypeError('This should be a stringy type of thing!');
    }
    return this.name + ' had a baby named, ' + babyname;
  };

  ns.Cheetah.prototype.spots = function spots(spotsnum) {
    if(!Number(spotsnum)){
      throw new TypeError('Please enter a number!');
    }
    return (spotsnum * 10);
  };

  ns.Cheetah.prototype.toString = function toString(){
    return this.name + ',' + this.birthday;
  };

  window.zoo = ns;

})(window.zoo || {});
