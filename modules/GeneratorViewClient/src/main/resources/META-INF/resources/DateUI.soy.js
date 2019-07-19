/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from DateUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DateUI.
 * @public
 */

goog.module('DateUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (*|null|undefined),
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
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
  /** @type {?} */
  var label = opt_data.label;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var finalValue__soy242 = (value != null) ? value : '';
  var defaultLanguage__soy244 = defaultLanguageId;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'date_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
    incrementalDom.elementClose('label');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'date_' + id);
        incrementalDom.attr('class', 'flatpickr input-group');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group-item input-group-prepend');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('input');
            incrementalDom.attr('class', 'form-control');
            incrementalDom.attr('type', 'text');
            incrementalDom.attr('data-path', path);
            incrementalDom.attr('name', 'date_' + id);
            incrementalDom.attr('placeholder', placeholder);
            incrementalDom.attr('data-input', '');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('input');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group-item input-group-item-shrink input-group-prepend label label-info');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'input-button');
            incrementalDom.attr('title', 'toggle');
            incrementalDom.attr('data-toggle', '');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('i');
              incrementalDom.attr('class', 'icon-calendar');
              incrementalDom.attr('style', 'font-size: 14px');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('i');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group-item input-group-item-shrink input-group-prepend label label-danger');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('class', 'input-button');
            incrementalDom.attr('title', 'clear');
            incrementalDom.attr('data-clear', '');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('i');
              incrementalDom.attr('class', 'icon-remove');
              incrementalDom.attr('style', 'font-size: 16px');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('i');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (*|null|undefined),
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DateUI.render';
}

exports.render.params = ["id","label","value","placeholder","defaultLanguageId","path"];
exports.render.types = {"id":"any","label":"?","value":"string","placeholder":"any","defaultLanguageId":"string","path":"string"};
templates = exports;
return exports;

});

class DateUI extends Component {}
Soy.register(DateUI, templates);
export { DateUI, templates };
export default templates;
/* jshint ignore:end */
