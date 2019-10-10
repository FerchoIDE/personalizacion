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
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
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
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {!Array<?>} */
  var options = soy.asserts.assertType(goog.isArray(opt_data.options), 'options', opt_data.options, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var multiple = soy.asserts.assertType(opt_data.multiple == null || (goog.isBoolean(opt_data.multiple) || opt_data.multiple === 1 || opt_data.multiple === 0), 'multiple', opt_data.multiple, 'boolean|null|undefined');
  var _values__soy3733 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  var _val__soy3735 = (_values__soy3733[defaultLanguageId] != null) ? _values__soy3733[defaultLanguageId] : '';
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
          var option3767List = options;
          var option3767ListLen = option3767List.length;
          for (var option3767Index = 0; option3767Index < option3767ListLen; option3767Index++) {
              var option3767Data = option3767List[option3767Index];
              if ((_val__soy3735[0] != null) && (option3767Data.value != null) && (('' + _val__soy3735[0]).indexOf('' + option3767Data.value) != -1)) {
                incrementalDom.elementOpenStart('option');
                    incrementalDom.attr('selected', '');
                    incrementalDom.attr('value', option3767Data.value);
                incrementalDom.elementOpenEnd();
                  soyIdom.print(option3767Data.label[defaultLanguageId]);
                incrementalDom.elementClose('option');
              } else {
                incrementalDom.elementOpenStart('option');
                    incrementalDom.attr('value', option3767Data.value);
                incrementalDom.elementOpenEnd();
                  soyIdom.print(option3767Data.label[defaultLanguageId]);
                incrementalDom.elementClose('option');
              }
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
          if (_val__soy3735 == '') {
            incrementalDom.elementOpenStart('option');
                incrementalDom.attr('disabled', '');
                incrementalDom.attr('selected', '');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Selecciona ');
              soyIdom.print(label);
            incrementalDom.elementClose('option');
          }
          var option3799List = options;
          var option3799ListLen = option3799List.length;
          for (var option3799Index = 0; option3799Index < option3799ListLen; option3799Index++) {
              var option3799Data = option3799List[option3799Index];
              if (_val__soy3735 == '["' + option3799Data.value + '"]') {
                incrementalDom.elementOpenStart('option');
                    incrementalDom.attr('selected', '');
                    incrementalDom.attr('value', option3799Data.value);
                incrementalDom.elementOpenEnd();
                  soyIdom.print(option3799Data.label[defaultLanguageId]);
                incrementalDom.elementClose('option');
              } else {
                incrementalDom.elementOpenStart('option');
                    incrementalDom.attr('value', option3799Data.value);
                incrementalDom.elementOpenEnd();
                  soyIdom.print(option3799Data.label[defaultLanguageId]);
                incrementalDom.elementClose('option');
              }
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
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
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

exports.render.params = ["id","label","values","options","defaultLanguageId","path","multiple"];
exports.render.types = {"id":"any","label":"?","values":"map<string,list<?>>","options":"list<?>","defaultLanguageId":"string","path":"string","multiple":"bool"};
templates = exports;
return exports;

});

class SelectUI extends Component {}
Soy.register(SelectUI, templates);
export { SelectUI, templates };
export default templates;
/* jshint ignore:end */
