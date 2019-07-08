/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from SelectUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SelectUI.
 * @public
 */

goog.module('SelectUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  options: !Array<?>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  multiple: (boolean|null|undefined)
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
  /** @type {!Array<?>} */
  var options = soy.asserts.assertType(goog.isArray(opt_data.options), 'options', opt_data.options, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var multiple = soy.asserts.assertType(opt_data.multiple == null || (goog.isBoolean(opt_data.multiple) || opt_data.multiple === 1 || opt_data.multiple === 0), 'multiple', opt_data.multiple, 'boolean|null|undefined');
  var finalValue__soy1883 = (value != null) ? value : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'form-group');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('label');
          incrementalDom.attr('for', 'select_' + id);
      incrementalDom.elementOpenEnd();
        soyIdom.print(label);
      incrementalDom.elementClose('label');
      if (multiple) {
        incrementalDom.elementOpenStart('select');
            incrementalDom.attr('class', 'form-control');
            incrementalDom.attr('data-path', path);
            incrementalDom.attr('data-language', defaultLanguageId);
            incrementalDom.attr('data-onchange', 'handleChange');
            incrementalDom.attr('multiple', '');
            incrementalDom.attr('id', 'select_' + id);
        incrementalDom.elementOpenEnd();
          var option1905List = options;
          var option1905ListLen = option1905List.length;
          for (var option1905Index = 0; option1905Index < option1905ListLen; option1905Index++) {
              var option1905Data = option1905List[option1905Index];
              incrementalDom.elementOpenStart('option');
                  incrementalDom.attr('value', option1905Data.value);
              incrementalDom.elementOpenEnd();
                soyIdom.print(option1905Data.label[defaultLanguageId]);
              incrementalDom.elementClose('option');
            }
        incrementalDom.elementClose('select');
      } else {
        incrementalDom.elementOpenStart('select');
            incrementalDom.attr('class', 'form-control');
            incrementalDom.attr('data-path', path);
            incrementalDom.attr('data-language', defaultLanguageId);
            incrementalDom.attr('data-onchange', 'handleChange');
            incrementalDom.attr('id', 'select_' + id);
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('disabled', '');
              incrementalDom.attr('selected', '');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Selecciona ');
            soyIdom.print(label);
          incrementalDom.elementClose('option');
          var option1923List = options;
          var option1923ListLen = option1923List.length;
          for (var option1923Index = 0; option1923Index < option1923ListLen; option1923Index++) {
              var option1923Data = option1923List[option1923Index];
              incrementalDom.elementOpenStart('option');
                  incrementalDom.attr('value', option1923Data.value);
              incrementalDom.elementOpenEnd();
                soyIdom.print(option1923Data.label[defaultLanguageId]);
              incrementalDom.elementClose('option');
            }
        incrementalDom.elementClose('select');
      }
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  options: !Array<?>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  multiple: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'SelectUI.render';
}

exports.render.params = ["id","label","value","options","defaultLanguageId","path","multiple"];
exports.render.types = {"id":"any","label":"?","value":"string","options":"list<?>","defaultLanguageId":"string","path":"string","multiple":"bool"};
templates = exports;
return exports;

});

class SelectUI extends Component {}
Soy.register(SelectUI, templates);
export { SelectUI, templates };
export default templates;
/* jshint ignore:end */
