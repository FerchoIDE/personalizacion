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
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  nameParent: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  checkedOption: (?),
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
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
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var nameParent = soy.asserts.assertType(opt_data.nameParent == null || (goog.isString(opt_data.nameParent) || opt_data.nameParent instanceof goog.soy.data.SanitizedContent), 'nameParent', opt_data.nameParent, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var checkedOption = opt_data.checkedOption;
  /** @type {?} */
  var label = opt_data.label;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  var _values__soy12 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  var _val__soy14 = (_values__soy12[defaultLanguageId] != null) ? _values__soy12[defaultLanguageId] : false;
  var nameV__soy16 = '';
  var lab23List = (soy.$$getMapKeys(label));
  var lab23ListLen = lab23List.length;
  for (var lab23Index = 0; lab23Index < lab23ListLen; lab23Index++) {
      var lab23Data = lab23List[lab23Index];
      nameV__soy16 += '"';
      nameV__soy16 += lab23Data;
      nameV__soy16 += '":"';
      nameV__soy16 += label[lab23Data];
      nameV__soy16 += '",';
    }
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'custom-control custom-checkbox custom-control-inline');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('label');
      if (checkedOption != null) {
        if (_val__soy14 == 'true') {
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('checked', '');
              incrementalDom.attr('data-onclick', 'handleChange');
              incrementalDom.attr('onclick', checkedOption);
              incrementalDom.attr('pattern', nameParent);
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('title', nameV__soy16);
              incrementalDom.attr('id', 'checkbox_' + id);
              incrementalDom.attr('class', 'custom-control-input');
              incrementalDom.attr('type', 'checkbox');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        } else {
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('data-onclick', 'handleChange');
              incrementalDom.attr('onclick', checkedOption);
              incrementalDom.attr('pattern', nameParent);
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('title', nameV__soy16);
              incrementalDom.attr('id', 'checkbox_' + id);
              incrementalDom.attr('class', 'custom-control-input');
              incrementalDom.attr('type', 'checkbox');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        }
      } else {
        if (_val__soy14 == 'true') {
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('checked', '');
              incrementalDom.attr('data-onclick', 'handleChange');
              incrementalDom.attr('pattern', nameParent);
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('title', nameV__soy16);
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
              incrementalDom.attr('title', nameV__soy16);
              incrementalDom.attr('id', 'checkbox_' + id);
              incrementalDom.attr('class', 'custom-control-input');
              incrementalDom.attr('type', 'checkbox');
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        }
      }
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'custom-control-label');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'custom-control-label-text');
        incrementalDom.elementOpenEnd();
          soyIdom.print(label[defaultLanguageId]);
          soyIdom.print(required ? '*' : '');
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
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'CheckBoxUI.render';
}

exports.render.params = ["id","nameParent","checkedOption","label","values","defaultLanguageId","path","required"];
exports.render.types = {"id":"any","nameParent":"string","checkedOption":"?","label":"?","values":"map<string,list<?>>","defaultLanguageId":"string","path":"string","required":"bool"};
templates = exports;
return exports;

});

class CheckBoxUI extends Component {}
Soy.register(CheckBoxUI, templates);
export { CheckBoxUI, templates };
export default templates;
/* jshint ignore:end */
