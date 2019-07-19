/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TextUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextUI.
 * @public
 */

goog.module('TextUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  localizable: boolean,
 *  _index: number,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  repeatable: (boolean|null|undefined),
 *  placeholder: (*|null|undefined),
 *  type: *,
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string)
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
  /** @type {boolean} */
  var localizable = soy.asserts.assertType(goog.isBoolean(opt_data.localizable) || opt_data.localizable === 1 || opt_data.localizable === 0, 'localizable', opt_data.localizable, 'boolean');
  /** @type {number} */
  var _index = soy.asserts.assertType(goog.isNumber(opt_data._index), '_index', opt_data._index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {boolean|null|undefined} */
  var repeatable = soy.asserts.assertType(opt_data.repeatable == null || (goog.isBoolean(opt_data.repeatable) || opt_data.repeatable === 1 || opt_data.repeatable === 0), 'repeatable', opt_data.repeatable, 'boolean|null|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {*} */
  var type = opt_data.type;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  var _values__soy3550 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
      incrementalDom.attr('style', repeatable ? 'width:99%' : '');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'input_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
    incrementalDom.elementClose('label');
    if (localizable == true) {
      var language3598List = availableLanguageIds;
      var language3598ListLen = language3598List.length;
      for (var language3598Index = 0; language3598Index < language3598ListLen; language3598Index++) {
          var language3598Data = language3598List[language3598Index];
          if (language3598Data == defaultLanguageId) {
            incrementalDom.elementOpenStart('input');
                incrementalDom.attr('class', 'form-control');
                incrementalDom.attr('data-onkeyup', 'handleChange');
                incrementalDom.attr('id', 'input_' + id + '_' + language3598Data);
                incrementalDom.attr('value', (_values__soy3550[language3598Data] != null) ? _values__soy3550[language3598Data][_index] : '');
                incrementalDom.attr('data-language', language3598Data);
                incrementalDom.attr('data-path', path);
                incrementalDom.attr('placeholder', placeholder);
                incrementalDom.attr('type', type);
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('input');
            incrementalDom.text('\t');
          } else {
            incrementalDom.elementOpenStart('input');
                incrementalDom.attr('class', 'form-control');
                incrementalDom.attr('id', 'input_' + id + '_' + language3598Data);
                incrementalDom.attr('placeholder', placeholder);
                incrementalDom.attr('value', (_values__soy3550[language3598Data] != null) ? _values__soy3550[language3598Data][_index] : '');
                incrementalDom.attr('data-language', language3598Data);
                incrementalDom.attr('data-path', path);
                incrementalDom.attr('style', 'display: none');
                incrementalDom.attr('type', type);
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('input');
            incrementalDom.text('\t');
          }
        }
    } else {
      incrementalDom.elementOpenStart('input');
          incrementalDom.attr('class', 'form-control');
          incrementalDom.attr('data-onkeyup', 'handleChange');
          incrementalDom.attr('id', 'input_' + id);
          incrementalDom.attr('data-path', path);
          incrementalDom.attr('value', _values__soy3550[defaultLanguageId][_index]);
          incrementalDom.attr('placeholder', placeholder);
          incrementalDom.attr('type', type);
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('input');
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  localizable: boolean,
 *  _index: number,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  repeatable: (boolean|null|undefined),
 *  placeholder: (*|null|undefined),
 *  type: *,
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TextUI.render';
}

exports.render.params = ["id","label","localizable","_index","path","values","repeatable","placeholder","type","availableLanguageIds","defaultLanguageId"];
exports.render.types = {"id":"any","label":"?","localizable":"bool","_index":"number","path":"string","values":"map<string,list<?>>","repeatable":"bool","placeholder":"any","type":"any","availableLanguageIds":"list<string>","defaultLanguageId":"string"};
templates = exports;
return exports;

});

class TextUI extends Component {}
Soy.register(TextUI, templates);
export { TextUI, templates };
export default templates;
/* jshint ignore:end */
