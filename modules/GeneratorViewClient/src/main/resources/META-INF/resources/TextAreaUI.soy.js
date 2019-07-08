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
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
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
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var finalValue__soy2029 = (value != null) ? value : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'input_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
    incrementalDom.elementClose('label');
    var language2068List = availableLanguageIds;
    var language2068ListLen = language2068List.length;
    for (var language2068Index = 0; language2068Index < language2068ListLen; language2068Index++) {
        var language2068Data = language2068List[language2068Index];
        if (language2068Data == defaultLanguageId) {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language2068Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language2068Data);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('value', finalValue__soy2029);
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('textarea');
        } else {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language2068Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language2068Data);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('style', 'display: none');
              incrementalDom.attr('value', finalValue__soy2029);
          incrementalDom.elementOpenEnd();
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
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
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

exports.render.params = ["id","label","value","placeholder","availableLanguageIds","defaultLanguageId","path"];
exports.render.types = {"id":"any","label":"?","value":"string","placeholder":"any","availableLanguageIds":"list<string>","defaultLanguageId":"string","path":"string"};
templates = exports;
return exports;

});

class TextAreaUI extends Component {}
Soy.register(TextAreaUI, templates);
export { TextAreaUI, templates };
export default templates;
/* jshint ignore:end */
