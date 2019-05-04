/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TextLocalizableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextLocalizableUI.
 * @public
 */

goog.module('TextLocalizableUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('TextUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: *,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  localizable: boolean,
 *  labels: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (*|null|undefined),
 *  placeholder: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValue: (?)
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
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean} */
  var localizable = soy.asserts.assertType(goog.isBoolean(opt_data.localizable) || opt_data.localizable === 1 || opt_data.localizable === 0, 'localizable', opt_data.localizable, 'boolean');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var labels = soy.asserts.assertType(goog.isObject(opt_data.labels), 'labels', opt_data.labels, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var type = opt_data.type;
  /** @type {?} */
  var placeholder = opt_data.placeholder;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var handleChangeValue = opt_data.handleChangeValue;
  $templateAlias1({id: id, type: type, localizable: localizable, label: labels[defaultLanguageId], placeholder: placeholder[defaultLanguageId], value: value, path: path, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, onChangeValue: handleChangeValue}, null, opt_ijData);
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  localizable: boolean,
 *  labels: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (*|null|undefined),
 *  placeholder: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValue: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TextLocalizableUI.render';
}

exports.render.params = ["id","path","localizable","labels","value","type","placeholder","availableLanguageIds","defaultLanguageId","handleChangeValue"];
exports.render.types = {"id":"any","path":"string","localizable":"bool","labels":"map<string,string>","value":"string","type":"any","placeholder":"?","availableLanguageIds":"list<string>","defaultLanguageId":"string","handleChangeValue":"?"};
templates = exports;
return exports;

});

class TextLocalizableUI extends Component {}
Soy.register(TextLocalizableUI, templates);
export { TextLocalizableUI, templates };
export default templates;
/* jshint ignore:end */
