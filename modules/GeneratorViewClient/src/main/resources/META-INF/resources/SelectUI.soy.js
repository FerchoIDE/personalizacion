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
  var finalValue__soy1825 = (value != null) ? value : '';
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
          var option1847List = options;
          var option1847ListLen = option1847List.length;
          for (var option1847Index = 0; option1847Index < option1847ListLen; option1847Index++) {
              var option1847Data = option1847List[option1847Index];
              incrementalDom.elementOpenStart('option');
                  incrementalDom.attr('value', option1847Data.value);
              incrementalDom.elementOpenEnd();
                soyIdom.print(option1847Data.label[defaultLanguageId]);
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
          var option1865List = options;
          var option1865ListLen = option1865List.length;
          for (var option1865Index = 0; option1865Index < option1865ListLen; option1865Index++) {
              var option1865Data = option1865List[option1865Index];
              incrementalDom.elementOpenStart('option');
                  incrementalDom.attr('value', option1865Data.value);
              incrementalDom.elementOpenEnd();
                soyIdom.print(option1865Data.label[defaultLanguageId]);
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
