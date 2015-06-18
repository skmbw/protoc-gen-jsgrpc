// Code generated by protoc-gen-jsgrpc.
// source: multi/multi3.proto
// DO NOT EDIT!

goog.provide('multitest');

goog.require('goog.proto2');



/**
 * @enum {number}
 */
multitest.Multi3.HatType = {
  FEDORA: 1,
  FEZ: 2
};

multitest.Multi3.HatTypeNames = {
  1: "FEDORA",
  2: "FEZ",
};

/**
 * Message multitest.Multi3.
 * @constructor
 * @extends {goog.proto2.Message}
 * @final
 */
multitest.Multi3 = function () {
  goog.proto2.Message.call(this);
};
goog.inherits(my.test.Request, goog.proto2.Message);

/**
 * Sets the value of the hat_type field.
 * @param {multitest.Multi3.HatType} value The value.
 */
multitest.Multi3.prototype.setHatType = function(value) {
  this.set$Value(1, value);
};

/**
 * Gets the value of the hat_type field.
 * @return {?multitest.Multi3.HatType} The value.
 */
multitest.Multi3.prototype.getHatType = function() {
  return /** @type {?multitest.Multi3.HatType} */ (this.get$Value(1));
};

