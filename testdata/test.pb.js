// Code generated by protoc-gen-jsgrpc.
// source: test.proto
// DO NOT EDIT!

/*
Package test is a generated protocol buffer package.

It is generated from these files:
	test.proto

It has these top-level messages:
	TestAllTypes
*/
goog.provide('test.TestAllTypes');
goog.provide('test.TestAllTypes.NestedEnum');
goog.provide('test.TestAllTypes.NestedEnumNames');
goog.provide('test.TestAllTypes.NestedMessage');
goog.provide('test.TestAllTypes.OptionalGroup');
goog.provide('test.TestAllTypes.RepeatedGroup');

goog.require('goog.proto2.Message');



/**
 * @enum {number}
 */
test.TestAllTypes.NestedEnum = {
  NONE: 0,
  FOO: 1,
  BAR: 2,
  BAZ: 3
};

test.TestAllTypes.NestedEnumNames = {
  0: "NONE",
  1: "FOO",
  2: "BAR",
  3: "BAZ"
};

/**
 * Message test.TestAllTypes.
 * @constructor
 * @extends {goog.proto2.Message}
 * @final
 */
test.TestAllTypes = function () {
  goog.proto2.Message.call(this);
};
goog.inherits(test.TestAllTypes, goog.proto2.Message);

/**
 * Sets the value of the optional_int32 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalInt32 = function(value) {
  this.set$Value(1, value);
};

/**
 * Gets the value of the optional_int32 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalInt32 = function() {
  return /** @type {?Number} */ (this.get$Value(1));
};

/**
 * Sets the value of the optional_int64 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalInt64 = function(value) {
  this.set$Value(2, value);
};

/**
 * Gets the value of the optional_int64 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalInt64 = function() {
  return /** @type {?Number} */ (this.get$Value(2));
};

/**
 * Sets the value of the optional_uint32 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalUint32 = function(value) {
  this.set$Value(3, value);
};

/**
 * Gets the value of the optional_uint32 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalUint32 = function() {
  return /** @type {?Number} */ (this.get$Value(3));
};

/**
 * Sets the value of the optional_uint64 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalUint64 = function(value) {
  this.set$Value(4, value);
};

/**
 * Gets the value of the optional_uint64 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalUint64 = function() {
  return /** @type {?Number} */ (this.get$Value(4));
};

/**
 * Sets the value of the optional_sint32 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalSint32 = function(value) {
  this.set$Value(5, value);
};

/**
 * Gets the value of the optional_sint32 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalSint32 = function() {
  return /** @type {?Number} */ (this.get$Value(5));
};

/**
 * Sets the value of the optional_sint64 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalSint64 = function(value) {
  this.set$Value(6, value);
};

/**
 * Gets the value of the optional_sint64 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalSint64 = function() {
  return /** @type {?Number} */ (this.get$Value(6));
};

/**
 * Sets the value of the optional_fixed32 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalFixed32 = function(value) {
  this.set$Value(7, value);
};

/**
 * Gets the value of the optional_fixed32 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalFixed32 = function() {
  return /** @type {?Number} */ (this.get$Value(7));
};

/**
 * Sets the value of the optional_fixed64 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalFixed64 = function(value) {
  this.set$Value(8, value);
};

/**
 * Gets the value of the optional_fixed64 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalFixed64 = function() {
  return /** @type {?Number} */ (this.get$Value(8));
};

/**
 * Sets the value of the optional_sfixed32 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalSfixed32 = function(value) {
  this.set$Value(9, value);
};

/**
 * Gets the value of the optional_sfixed32 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalSfixed32 = function() {
  return /** @type {?Number} */ (this.get$Value(9));
};

/**
 * Sets the value of the optional_sfixed64 field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalSfixed64 = function(value) {
  this.set$Value(10, value);
};

/**
 * Gets the value of the optional_sfixed64 field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalSfixed64 = function() {
  return /** @type {?Number} */ (this.get$Value(10));
};

/**
 * Sets the value of the optional_float field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalFloat = function(value) {
  this.set$Value(11, value);
};

/**
 * Gets the value of the optional_float field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalFloat = function() {
  return /** @type {?Number} */ (this.get$Value(11));
};

/**
 * Sets the value of the optional_double field.
 * @param {Number} value The value.
 */
test.TestAllTypes.prototype.setOptionalDouble = function(value) {
  this.set$Value(12, value);
};

/**
 * Gets the value of the optional_double field.
 * @return {?Number} The value.
 */
test.TestAllTypes.prototype.getOptionalDouble = function() {
  return /** @type {?Number} */ (this.get$Value(12));
};

/**
 * Sets the value of the optional_bool field.
 * @param {Boolean} value The value.
 */
test.TestAllTypes.prototype.setOptionalBool = function(value) {
  this.set$Value(13, value);
};

/**
 * Gets the value of the optional_bool field.
 * @return {?Boolean} The value.
 */
test.TestAllTypes.prototype.getOptionalBool = function() {
  return /** @type {?Boolean} */ (this.get$Value(13));
};

/**
 * Sets the value of the optional_string field.
 * @param {String} value The value.
 */
test.TestAllTypes.prototype.setOptionalString = function(value) {
  this.set$Value(14, value);
};

/**
 * Gets the value of the optional_string field.
 * @return {?String} The value.
 */
test.TestAllTypes.prototype.getOptionalString = function() {
  return /** @type {?String} */ (this.get$Value(14));
};

/**
 * Sets the value of the optional_bytes field.
 * @param {String} value The value.
 */
test.TestAllTypes.prototype.setOptionalBytes = function(value) {
  this.set$Value(15, value);
};

/**
 * Gets the value of the optional_bytes field.
 * @return {?String} The value.
 */
test.TestAllTypes.prototype.getOptionalBytes = function() {
  return /** @type {?String} */ (this.get$Value(15));
};

/**
 * Sets the value of the optionalgroup field.
 * @param {test.TestAllTypes.OptionalGroup} value The value.
 */
test.TestAllTypes.prototype.setOptionalgroup = function(value) {
  this.set$Value(16, value);
};

/**
 * Gets the value of the optionalgroup field.
 * @return {?test.TestAllTypes.OptionalGroup} The value.
 */
test.TestAllTypes.prototype.getOptionalgroup = function() {
  return /** @type {?test.TestAllTypes.OptionalGroup} */ (this.get$Value(16));
};

/**
 * Sets the value of the optional_nested_message field.
 * @param {test.TestAllTypes.NestedMessage} value The value.
 */
test.TestAllTypes.prototype.setOptionalNestedMessage = function(value) {
  this.set$Value(18, value);
};

/**
 * Gets the value of the optional_nested_message field.
 * @return {?test.TestAllTypes.NestedMessage} The value.
 */
test.TestAllTypes.prototype.getOptionalNestedMessage = function() {
  return /** @type {?test.TestAllTypes.NestedMessage} */ (this.get$Value(18));
};

/**
 * Sets the value of the optional_nested_enum field.
 * @param {test.TestAllTypes.NestedEnum} value The value.
 */
test.TestAllTypes.prototype.setOptionalNestedEnum = function(value) {
  this.set$Value(21, value);
};

/**
 * Gets the value of the optional_nested_enum field.
 * @return {?test.TestAllTypes.NestedEnum} The value.
 */
test.TestAllTypes.prototype.getOptionalNestedEnum = function() {
  return /** @type {?test.TestAllTypes.NestedEnum} */ (this.get$Value(21));
};

/**
 * Adds the value to the repeated_int32 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedInt32 = function(value) {
  this.add$Value(31, value);
};

/**
 * Gets the value of the repeated_int32 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedInt32 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(31, index));
};

/**
 * Gets the number of values in the repeated_int32 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedInt32 = function() {
  return this.count$Values(31);
};

/**
 * Clears the values in the repeated_int32 field.
 */
test.TestAllTypes.prototype.clearRepeatedInt32 = function() {
  return this.clear$Field(31);
};

/**
 * Adds the value to the repeated_int64 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedInt64 = function(value) {
  this.add$Value(32, value);
};

/**
 * Gets the value of the repeated_int64 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedInt64 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(32, index));
};

/**
 * Gets the number of values in the repeated_int64 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedInt64 = function() {
  return this.count$Values(32);
};

/**
 * Clears the values in the repeated_int64 field.
 */
test.TestAllTypes.prototype.clearRepeatedInt64 = function() {
  return this.clear$Field(32);
};

/**
 * Adds the value to the repeated_uint32 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedUint32 = function(value) {
  this.add$Value(33, value);
};

/**
 * Gets the value of the repeated_uint32 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedUint32 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(33, index));
};

/**
 * Gets the number of values in the repeated_uint32 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedUint32 = function() {
  return this.count$Values(33);
};

/**
 * Clears the values in the repeated_uint32 field.
 */
test.TestAllTypes.prototype.clearRepeatedUint32 = function() {
  return this.clear$Field(33);
};

/**
 * Adds the value to the repeated_uint64 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedUint64 = function(value) {
  this.add$Value(34, value);
};

/**
 * Gets the value of the repeated_uint64 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedUint64 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(34, index));
};

/**
 * Gets the number of values in the repeated_uint64 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedUint64 = function() {
  return this.count$Values(34);
};

/**
 * Clears the values in the repeated_uint64 field.
 */
test.TestAllTypes.prototype.clearRepeatedUint64 = function() {
  return this.clear$Field(34);
};

/**
 * Adds the value to the repeated_sint32 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedSint32 = function(value) {
  this.add$Value(35, value);
};

/**
 * Gets the value of the repeated_sint32 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedSint32 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(35, index));
};

/**
 * Gets the number of values in the repeated_sint32 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedSint32 = function() {
  return this.count$Values(35);
};

/**
 * Clears the values in the repeated_sint32 field.
 */
test.TestAllTypes.prototype.clearRepeatedSint32 = function() {
  return this.clear$Field(35);
};

/**
 * Adds the value to the repeated_sint64 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedSint64 = function(value) {
  this.add$Value(36, value);
};

/**
 * Gets the value of the repeated_sint64 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedSint64 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(36, index));
};

/**
 * Gets the number of values in the repeated_sint64 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedSint64 = function() {
  return this.count$Values(36);
};

/**
 * Clears the values in the repeated_sint64 field.
 */
test.TestAllTypes.prototype.clearRepeatedSint64 = function() {
  return this.clear$Field(36);
};

/**
 * Adds the value to the repeated_fixed32 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedFixed32 = function(value) {
  this.add$Value(37, value);
};

/**
 * Gets the value of the repeated_fixed32 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedFixed32 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(37, index));
};

/**
 * Gets the number of values in the repeated_fixed32 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedFixed32 = function() {
  return this.count$Values(37);
};

/**
 * Clears the values in the repeated_fixed32 field.
 */
test.TestAllTypes.prototype.clearRepeatedFixed32 = function() {
  return this.clear$Field(37);
};

/**
 * Adds the value to the repeated_fixed64 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedFixed64 = function(value) {
  this.add$Value(38, value);
};

/**
 * Gets the value of the repeated_fixed64 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedFixed64 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(38, index));
};

/**
 * Gets the number of values in the repeated_fixed64 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedFixed64 = function() {
  return this.count$Values(38);
};

/**
 * Clears the values in the repeated_fixed64 field.
 */
test.TestAllTypes.prototype.clearRepeatedFixed64 = function() {
  return this.clear$Field(38);
};

/**
 * Adds the value to the repeated_sfixed32 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedSfixed32 = function(value) {
  this.add$Value(39, value);
};

/**
 * Gets the value of the repeated_sfixed32 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedSfixed32 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(39, index));
};

/**
 * Gets the number of values in the repeated_sfixed32 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedSfixed32 = function() {
  return this.count$Values(39);
};

/**
 * Clears the values in the repeated_sfixed32 field.
 */
test.TestAllTypes.prototype.clearRepeatedSfixed32 = function() {
  return this.clear$Field(39);
};

/**
 * Adds the value to the repeated_sfixed64 repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedSfixed64 = function(value) {
  this.add$Value(40, value);
};

/**
 * Gets the value of the repeated_sfixed64 field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedSfixed64 = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(40, index));
};

/**
 * Gets the number of values in the repeated_sfixed64 field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedSfixed64 = function() {
  return this.count$Values(40);
};

/**
 * Clears the values in the repeated_sfixed64 field.
 */
test.TestAllTypes.prototype.clearRepeatedSfixed64 = function() {
  return this.clear$Field(40);
};

/**
 * Adds the value to the repeated_float repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedFloat = function(value) {
  this.add$Value(41, value);
};

/**
 * Gets the value of the repeated_float field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedFloat = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(41, index));
};

/**
 * Gets the number of values in the repeated_float field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedFloat = function() {
  return this.count$Values(41);
};

/**
 * Clears the values in the repeated_float field.
 */
test.TestAllTypes.prototype.clearRepeatedFloat = function() {
  return this.clear$Field(41);
};

/**
 * Adds the value to the repeated_double repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedDouble = function(value) {
  this.add$Value(42, value);
};

/**
 * Gets the value of the repeated_double field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.prototype.getRepeatedDouble = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(42, index));
};

/**
 * Gets the number of values in the repeated_double field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedDouble = function() {
  return this.count$Values(42);
};

/**
 * Clears the values in the repeated_double field.
 */
test.TestAllTypes.prototype.clearRepeatedDouble = function() {
  return this.clear$Field(42);
};

/**
 * Adds the value to the repeated_bool repeated field.
 * @param {Array.<Boolean>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedBool = function(value) {
  this.add$Value(43, value);
};

/**
 * Gets the value of the repeated_bool field.
 * @param {!number} index of the element.
 * @return {?Array.<Boolean>} The value.
 */
test.TestAllTypes.prototype.getRepeatedBool = function(index) {
  return /** @type {?Array.<Boolean>} */ (this.get$Value(43, index));
};

/**
 * Gets the number of values in the repeated_bool field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedBool = function() {
  return this.count$Values(43);
};

/**
 * Clears the values in the repeated_bool field.
 */
test.TestAllTypes.prototype.clearRepeatedBool = function() {
  return this.clear$Field(43);
};

/**
 * Adds the value to the repeated_string repeated field.
 * @param {Array.<String>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedString = function(value) {
  this.add$Value(44, value);
};

/**
 * Gets the value of the repeated_string field.
 * @param {!number} index of the element.
 * @return {?Array.<String>} The value.
 */
test.TestAllTypes.prototype.getRepeatedString = function(index) {
  return /** @type {?Array.<String>} */ (this.get$Value(44, index));
};

/**
 * Gets the number of values in the repeated_string field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedString = function() {
  return this.count$Values(44);
};

/**
 * Clears the values in the repeated_string field.
 */
test.TestAllTypes.prototype.clearRepeatedString = function() {
  return this.clear$Field(44);
};

/**
 * Adds the value to the repeated_bytes repeated field.
 * @param {Array.<String>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedBytes = function(value) {
  this.add$Value(45, value);
};

/**
 * Gets the value of the repeated_bytes field.
 * @param {!number} index of the element.
 * @return {?Array.<String>} The value.
 */
test.TestAllTypes.prototype.getRepeatedBytes = function(index) {
  return /** @type {?Array.<String>} */ (this.get$Value(45, index));
};

/**
 * Gets the number of values in the repeated_bytes field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedBytes = function() {
  return this.count$Values(45);
};

/**
 * Clears the values in the repeated_bytes field.
 */
test.TestAllTypes.prototype.clearRepeatedBytes = function() {
  return this.clear$Field(45);
};

/**
 * Adds the value to the repeatedgroup repeated field.
 * @param {Array.<test.TestAllTypes.RepeatedGroup>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedgroup = function(value) {
  this.add$Value(46, value);
};

/**
 * Gets the value of the repeatedgroup field.
 * @param {!number} index of the element.
 * @return {?Array.<test.TestAllTypes.RepeatedGroup>} The value.
 */
test.TestAllTypes.prototype.getRepeatedgroup = function(index) {
  return /** @type {?Array.<test.TestAllTypes.RepeatedGroup>} */ (this.get$Value(46, index));
};

/**
 * Gets the number of values in the repeatedgroup field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedgroup = function() {
  return this.count$Values(46);
};

/**
 * Clears the values in the repeatedgroup field.
 */
test.TestAllTypes.prototype.clearRepeatedgroup = function() {
  return this.clear$Field(46);
};

/**
 * Adds the value to the repeated_nested_message repeated field.
 * @param {Array.<test.TestAllTypes.NestedMessage>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedNestedMessage = function(value) {
  this.add$Value(48, value);
};

/**
 * Gets the value of the repeated_nested_message field.
 * @param {!number} index of the element.
 * @return {?Array.<test.TestAllTypes.NestedMessage>} The value.
 */
test.TestAllTypes.prototype.getRepeatedNestedMessage = function(index) {
  return /** @type {?Array.<test.TestAllTypes.NestedMessage>} */ (this.get$Value(48, index));
};

/**
 * Gets the number of values in the repeated_nested_message field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedNestedMessage = function() {
  return this.count$Values(48);
};

/**
 * Clears the values in the repeated_nested_message field.
 */
test.TestAllTypes.prototype.clearRepeatedNestedMessage = function() {
  return this.clear$Field(48);
};

/**
 * Adds the value to the repeated_nested_enum repeated field.
 * @param {Array.<test.TestAllTypes.NestedEnum>} value The value.
 */
test.TestAllTypes.prototype.addRepeatedNestedEnum = function(value) {
  this.add$Value(49, value);
};

/**
 * Gets the value of the repeated_nested_enum field.
 * @param {!number} index of the element.
 * @return {?Array.<test.TestAllTypes.NestedEnum>} The value.
 */
test.TestAllTypes.prototype.getRepeatedNestedEnum = function(index) {
  return /** @type {?Array.<test.TestAllTypes.NestedEnum>} */ (this.get$Value(49, index));
};

/**
 * Gets the number of values in the repeated_nested_enum field.
 * @return {!number} number of value.
 */
test.TestAllTypes.prototype.countRepeatedNestedEnum = function() {
  return this.count$Values(49);
};

/**
 * Clears the values in the repeated_nested_enum field.
 */
test.TestAllTypes.prototype.clearRepeatedNestedEnum = function() {
  return this.clear$Field(49);
};

/** @override */
test.TestAllTypes.prototype.getDescriptor = function() {
  if (!test.TestAllTypes.descriptor_) {
    // The descriptor is created lazily when we instantiate a new instance.
    var descriptorObj = {
      0: {
        name: 'TestAllTypes',
        fullName: 'test.TestAllTypes'
      },
      1: {
        name: 'optional_int32',
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
      },
      2: {
        name: 'optional_int64',
        fieldType: goog.proto2.Message.FieldType.INT64,
        type: Number
      },
      3: {
        name: 'optional_uint32',
        fieldType: goog.proto2.Message.FieldType.UINT32,
        type: Number
      },
      4: {
        name: 'optional_uint64',
        fieldType: goog.proto2.Message.FieldType.UINT64,
        type: Number
      },
      5: {
        name: 'optional_sint32',
        fieldType: goog.proto2.Message.FieldType.SINT32,
        type: Number
      },
      6: {
        name: 'optional_sint64',
        fieldType: goog.proto2.Message.FieldType.SINT64,
        type: Number
      },
      7: {
        name: 'optional_fixed32',
        fieldType: goog.proto2.Message.FieldType.FIXED64,
        type: Number
      },
      8: {
        name: 'optional_fixed64',
        fieldType: goog.proto2.Message.FieldType.FIXED64,
        type: Number
      },
      9: {
        name: 'optional_sfixed32',
        fieldType: goog.proto2.Message.FieldType.SFIXED32,
        type: Number
      },
      10: {
        name: 'optional_sfixed64',
        fieldType: goog.proto2.Message.FieldType.SFIXED64,
        type: Number
      },
      11: {
        name: 'optional_float',
        fieldType: goog.proto2.Message.FieldType.FLOAT,
        type: Number
      },
      12: {
        name: 'optional_double',
        fieldType: goog.proto2.Message.FieldType.DOUBLE,
        type: Number
      },
      13: {
        name: 'optional_bool',
        fieldType: goog.proto2.Message.FieldType.BOOL,
        type: Boolean
      },
      14: {
        name: 'optional_string',
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
      },
      15: {
        name: 'optional_bytes',
        fieldType: goog.proto2.Message.FieldType.BYTES,
        type: String
      },
      16: {
        name: 'optionalgroup',
        fieldType: goog.proto2.Message.FieldType.GROUP,
        type: test.TestAllTypes.OptionalGroup
      },
      17: {
        name: 'optional_nested_message',
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: test.TestAllTypes.NestedMessage
      },
      18: {
        name: 'optional_nested_enum',
        fieldType: goog.proto2.Message.FieldType.ENUM,
        type: test.TestAllTypes.NestedEnum
      },
      19: {
        name: 'repeated_int32',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
      },
      20: {
        name: 'repeated_int64',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.INT64,
        type: Number
      },
      21: {
        name: 'repeated_uint32',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.UINT32,
        type: Number
      },
      22: {
        name: 'repeated_uint64',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.UINT64,
        type: Number
      },
      23: {
        name: 'repeated_sint32',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.SINT32,
        type: Number
      },
      24: {
        name: 'repeated_sint64',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.SINT64,
        type: Number
      },
      25: {
        name: 'repeated_fixed32',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.FIXED64,
        type: Number
      },
      26: {
        name: 'repeated_fixed64',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.FIXED64,
        type: Number
      },
      27: {
        name: 'repeated_sfixed32',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.SFIXED32,
        type: Number
      },
      28: {
        name: 'repeated_sfixed64',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.SFIXED64,
        type: Number
      },
      29: {
        name: 'repeated_float',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.FLOAT,
        type: Number
      },
      30: {
        name: 'repeated_double',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.DOUBLE,
        type: Number
      },
      31: {
        name: 'repeated_bool',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.BOOL,
        type: Boolean
      },
      32: {
        name: 'repeated_string',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.STRING,
        type: String
      },
      33: {
        name: 'repeated_bytes',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.BYTES,
        type: String
      },
      34: {
        name: 'repeatedgroup',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.GROUP,
        type: test.TestAllTypes.RepeatedGroup
      },
      35: {
        name: 'repeated_nested_message',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.MESSAGE,
        type: test.TestAllTypes.NestedMessage
      },
      36: {
        name: 'repeated_nested_enum',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.ENUM,
        type: test.TestAllTypes.NestedEnum
      }
    };
    test.TestAllTypes.descriptor_ = goog.proto2.Message.createDescriptor(test.TestAllTypes, descriptorObj);
  }
  return test.TestAllTypes.descriptor_;
};

/**
 * Message test.TestAllTypes.NestedMessage.
 * @constructor
 * @extends {goog.proto2.Message}
 * @final
 */
test.TestAllTypes.NestedMessage = function () {
  goog.proto2.Message.call(this);
};
goog.inherits(test.TestAllTypes.NestedMessage, goog.proto2.Message);

/**
 * Sets the value of the b field.
 * @param {Number} value The value.
 */
test.TestAllTypes.NestedMessage.prototype.setB = function(value) {
  this.set$Value(1, value);
};

/**
 * Gets the value of the b field.
 * @return {?Number} The value.
 */
test.TestAllTypes.NestedMessage.prototype.getB = function() {
  return /** @type {?Number} */ (this.get$Value(1));
};

/** @override */
test.TestAllTypes.NestedMessage.prototype.getDescriptor = function() {
  if (!test.TestAllTypes.NestedMessage.descriptor_) {
    // The descriptor is created lazily when we instantiate a new instance.
    var descriptorObj = {
      0: {
        name: 'NestedMessage',
        fullName: 'test.TestAllTypes.NestedMessage'
      },
      1: {
        name: 'b',
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
      }
    };
    test.TestAllTypes.NestedMessage.descriptor_ = goog.proto2.Message.createDescriptor(test.TestAllTypes.NestedMessage, descriptorObj);
  }
  return test.TestAllTypes.NestedMessage.descriptor_;
};

/**
 * Message test.TestAllTypes.OptionalGroup.
 * @constructor
 * @extends {goog.proto2.Message}
 * @final
 */
test.TestAllTypes.OptionalGroup = function () {
  goog.proto2.Message.call(this);
};
goog.inherits(test.TestAllTypes.OptionalGroup, goog.proto2.Message);

/**
 * Sets the value of the a field.
 * @param {Number} value The value.
 */
test.TestAllTypes.OptionalGroup.prototype.setA = function(value) {
  this.set$Value(17, value);
};

/**
 * Gets the value of the a field.
 * @return {?Number} The value.
 */
test.TestAllTypes.OptionalGroup.prototype.getA = function() {
  return /** @type {?Number} */ (this.get$Value(17));
};

/** @override */
test.TestAllTypes.OptionalGroup.prototype.getDescriptor = function() {
  if (!test.TestAllTypes.OptionalGroup.descriptor_) {
    // The descriptor is created lazily when we instantiate a new instance.
    var descriptorObj = {
      0: {
        name: 'OptionalGroup',
        fullName: 'test.TestAllTypes.OptionalGroup'
      },
      1: {
        name: 'a',
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
      }
    };
    test.TestAllTypes.OptionalGroup.descriptor_ = goog.proto2.Message.createDescriptor(test.TestAllTypes.OptionalGroup, descriptorObj);
  }
  return test.TestAllTypes.OptionalGroup.descriptor_;
};

/**
 * Message test.TestAllTypes.RepeatedGroup.
 * @constructor
 * @extends {goog.proto2.Message}
 * @final
 */
test.TestAllTypes.RepeatedGroup = function () {
  goog.proto2.Message.call(this);
};
goog.inherits(test.TestAllTypes.RepeatedGroup, goog.proto2.Message);

/**
 * Adds the value to the a repeated field.
 * @param {Array.<Number>} value The value.
 */
test.TestAllTypes.RepeatedGroup.prototype.addA = function(value) {
  this.add$Value(47, value);
};

/**
 * Gets the value of the a field.
 * @param {!number} index of the element.
 * @return {?Array.<Number>} The value.
 */
test.TestAllTypes.RepeatedGroup.prototype.getA = function(index) {
  return /** @type {?Array.<Number>} */ (this.get$Value(47, index));
};

/**
 * Gets the number of values in the a field.
 * @return {!number} number of value.
 */
test.TestAllTypes.RepeatedGroup.prototype.countA = function() {
  return this.count$Values(47);
};

/**
 * Clears the values in the a field.
 */
test.TestAllTypes.RepeatedGroup.prototype.clearA = function() {
  return this.clear$Field(47);
};

/** @override */
test.TestAllTypes.RepeatedGroup.prototype.getDescriptor = function() {
  if (!test.TestAllTypes.RepeatedGroup.descriptor_) {
    // The descriptor is created lazily when we instantiate a new instance.
    var descriptorObj = {
      0: {
        name: 'RepeatedGroup',
        fullName: 'test.TestAllTypes.RepeatedGroup'
      },
      1: {
        name: 'a',
        repeated: true,
        fieldType: goog.proto2.Message.FieldType.INT32,
        type: Number
      }
    };
    test.TestAllTypes.RepeatedGroup.descriptor_ = goog.proto2.Message.createDescriptor(test.TestAllTypes.RepeatedGroup, descriptorObj);
  }
  return test.TestAllTypes.RepeatedGroup.descriptor_;
};

