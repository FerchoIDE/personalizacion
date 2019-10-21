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
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  placeholder: (*|null|undefined),
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined)
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
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  var _values__soy245 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  var _val__soy247 = (_values__soy245[defaultLanguageId] != null) ? _values__soy245[defaultLanguageId] : '';
  var defaultLanguage__soy249 = defaultLanguageId;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'date_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
      soyIdom.print(required ? '*' : '');
    incrementalDom.elementClose('label');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'date_' + id);
        incrementalDom.attr('class', 'flatpickr input-group');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group-item input-group-prepend');
      incrementalDom.elementOpenEnd();
        if (_val__soy247 == '' || (_val__soy247.length) == 0 || _val__soy247[0] == '') {
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('type', 'text');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('name', 'date_' + id);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('data-input', '');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        } else {
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('type', 'text');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('value', _val__soy247[0]);
              incrementalDom.attr('name', 'date_' + id);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('data-input', '');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        }
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
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  placeholder: (*|null|undefined),
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DateUI.render';
}

exports.render.params = ["id","label","values","placeholder","defaultLanguageId","path","required"];
exports.render.types = {"id":"any","label":"?","values":"map<string,list<?>>","placeholder":"any","defaultLanguageId":"string","path":"string","required":"bool"};
templates = exports;
return exports;

});

class DateUI extends Component {}
Soy.register(DateUI, templates);
export { DateUI, templates };
export default templates;
/* jshint ignore:end */
