'use strict';

var globalCount = 0;

module.exports = function(prefix) {
  var id = ++globalCount + '';
  return prefix ? prefix + id : id;
};
