/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TextAreaUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextAreaUI.
 * @public
 */

goog.module('TextAreaUI.incrementaldom');

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
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
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
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var _values__soy3198 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'input_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
    incrementalDom.elementClose('label');
    var language3237List = availableLanguageIds;
    var language3237ListLen = language3237List.length;
    for (var language3237Index = 0; language3237Index < language3237ListLen; language3237Index++) {
        var language3237Data = language3237List[language3237Index];
        if (language3237Data == defaultLanguageId) {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language3237Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language3237Data);
              incrementalDom.attr('placeholder', placeholder);
          incrementalDom.elementOpenEnd();
            soyIdom.print((_values__soy3198[language3237Data] != null) ? _values__soy3198[language3237Data] : '');
          incrementalDom.elementClose('textarea');
        } else {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language3237Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language3237Data);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('style', 'display: none');
          incrementalDom.elementOpenEnd();
            soyIdom.print((_values__soy3198[language3237Data] != null) ? _values__soy3198[language3237Data] : '');
          incrementalDom.elementClose('textarea');
        }
      }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  placeholder: (*|null|undefined),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TextAreaUI.render';
}

exports.render.params = ["id","label","values","placeholder","availableLanguageIds","defaultLanguageId","path"];
exports.render.types = {"id":"any","label":"?","values":"map<string,list<?>>","placeholder":"any","availableLanguageIds":"list<string>","defaultLanguageId":"string","path":"string"};
templates = exports;
return exports;

});

class TextAreaUI extends Component {}
Soy.register(TextAreaUI, templates);
export { TextAreaUI, templates };
export default templates;
/* jshint ignore:end */
