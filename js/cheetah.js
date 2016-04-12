(function(ns) {
  'use strict';

  ns.Cheetah = function Cheetah(name, birthday) {

    ns.Animal.call(this, name, birthday);

  };

  ns.Cheetah.prototype = Object.create(ns.Animal.prototype);
  ns.Cheetah.prototype.constructor = ns.Cheetah;

  ns.Cheetah.prototype.birth = function birth(babyname) {
    return this.name + ' had a baby named, ' + babyname;
  };

  ns.Cheetah.prototype.spots = function spots(spotsnum) {

    return (spotsnum * 10);
    
  };

  window.zoo = ns;

})(window.zoo || {});
