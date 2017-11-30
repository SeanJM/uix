function Bus(props) {
  this.__t = props.target || this;
  this.__s = {};
}

Bus.prototype.once = function (name, callback) {
  const self = this;
  const once = function (a) {
    self.off(name, once);
    callback.call(self.target, a);
  };
  return this.on(name, once);
};

Bus.prototype.off = function (name, callback) {
  const nl    = name.toLowerCase();
  const index = (this.__s[nl] || []).indexOf(callback);
  if (index > -1) {
    this.__s[nl].splice(index, 1);
  } else if (typeof callback === "undefined") {
    this.__s[nl] = [];
  }
  return this.__t;
};

Bus.prototype.on = function (name, callback) {
  name = name.toLowerCase();
  if (typeof callback === "function") {
    this.__s[name] = (this.__s[name] || []).concat(callback);
  }
  return this.__t;
};

Bus.prototype.trigger = function (name, value) {
  var arr = (this.__s[name.toLowerCase()] || []).slice();
  for (var i = 0, n = arr.length; i < n; i++) {
    arr[i].call(this.__t, value);
  }
  return this.__t;
};

module.exports = Bus;