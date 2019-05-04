/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from CheckBoxUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CheckBoxUI.
 * @public
 */

goog.module('CheckBoxUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  nameParent: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  checkedOption: (?),
 *  label: (?),
 *  checked: (boolean|null|undefined),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*} */
  var id = opt_data.id;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var nameParent = soy.asserts.assertType(opt_data.nameParent == null || (goog.isString(opt_data.nameParent) || opt_data.nameParent instanceof goog.soy.data.SanitizedContent), 'nameParent', opt_data.nameParent, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var checkedOption = opt_data.checkedOption;
  /** @type {?} */
  var label = opt_data.label;
  /** @type {boolean|null|undefined} */
  var checked = soy.asserts.assertType(opt_data.checked == null || (goog.isBoolean(opt_data.checked) || opt_data.checked === 1 || opt_data.checked === 0), 'checked', opt_data.checked, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var finalValue__soy10 = (checked != null) ? checked : false;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'custom-control custom-checkbox custom-control-inline');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('label');
      if (checkedOption != null) {
        incrementalDom.elementOpenStart('input');
            incrementalDom.attr('data-onclick', 'handleChange');
            incrementalDom.attr('onclick', checkedOption);
            incrementalDom.attr('pattern', nameParent);
            incrementalDom.attr('data-path', path);
            incrementalDom.attr('title', label);
            incrementalDom.attr('id', 'checkbox_' + id);
            incrementalDom.attr('class', 'custom-control-input');
            incrementalDom.attr('type', 'checkbox');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('input');
      } else {
        incrementalDom.elementOpenStart('input');
            incrementalDom.attr('data-onclick', 'handleChange');
            incrementalDom.attr('pattern', nameParent);
            incrementalDom.attr('data-path', path);
            incrementalDom.attr('title', label);
            incrementalDom.attr('id', 'checkbox_' + id);
            incrementalDom.attr('class', 'custom-control-input');
            incrementalDom.attr('type', 'checkbox');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('input');
      }
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'custom-control-label');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'custom-control-label-text');
        incrementalDom.elementOpenEnd();
          soyIdom.print(label);
        incrementalDom.elementClose('span');
      incrementalDom.elementClose('span');
    incrementalDom.elementClose('label');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  nameParent: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  checkedOption: (?),
 *  label: (?),
 *  checked: (boolean|null|undefined),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'CheckBoxUI.render';
}

exports.render.params = ["id","nameParent","checkedOption","label","checked","path"];
exports.render.types = {"id":"any","nameParent":"string","checkedOption":"?","label":"?","checked":"bool","path":"string"};
templates = exports;
return exports;

});

class CheckBoxUI extends Component {}
Soy.register(CheckBoxUI, templates);
export { CheckBoxUI, templates };
export default templates;
/* jshint ignore:end */
