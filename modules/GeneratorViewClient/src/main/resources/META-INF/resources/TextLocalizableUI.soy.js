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
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('TextUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: *,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  localizable: boolean,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  repeatable: (boolean|null|undefined),
 *  _index: (null|number|undefined),
 *  labels: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  type: (*|null|undefined),
 *  placeholder: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValue: (?),
 *  countSection: (!Array<?>|null|undefined),
 *  handleAddSection: (?),
 *  handleRemoveSection: (?)
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
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {boolean|null|undefined} */
  var repeatable = soy.asserts.assertType(opt_data.repeatable == null || (goog.isBoolean(opt_data.repeatable) || opt_data.repeatable === 1 || opt_data.repeatable === 0), 'repeatable', opt_data.repeatable, 'boolean|null|undefined');
  /** @type {null|number|undefined} */
  var _index = soy.asserts.assertType(opt_data._index == null || goog.isNumber(opt_data._index), '_index', opt_data._index, 'null|number|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var labels = soy.asserts.assertType(goog.isObject(opt_data.labels), 'labels', opt_data.labels, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
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
  /** @type {!Array<?>|null|undefined} */
  var countSection = soy.asserts.assertType(opt_data.countSection == null || goog.isArray(opt_data.countSection), 'countSection', opt_data.countSection, '!Array<?>|null|undefined');
  /** @type {?} */
  var handleAddSection = opt_data.handleAddSection;
  /** @type {?} */
  var handleRemoveSection = opt_data.handleRemoveSection;
  var _countSections__soy3816 = (countSection != null) ? countSection : [1];
  var ___index__soy3818 = (_index != null) ? _index : 0;
  if (repeatable) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'form-group-item');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'autofit-row');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'autofit-col autofit-col-expand');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('\u00A0');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'autofit-col');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'btn-group');
              incrementalDom.attr('role', 'group');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', handleAddSection);
                incrementalDom.attr('class', 'btn btn-monospaced btn-sm btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-plus');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#plus');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', handleRemoveSection);
                incrementalDom.attr('class', 'btn btn-monospaced btn-sm btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-plus');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#hr');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'autofit-row');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'autofit-col autofit-col-expand');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'form-group');
          incrementalDom.elementOpenEnd();
            var _countSection3846List = _countSections__soy3816;
            var _countSection3846ListLen = _countSection3846List.length;
            for (var _countSection3846Index = 0; _countSection3846Index < _countSection3846ListLen; _countSection3846Index++) {
                var _countSection3846Data = _countSection3846List[_countSection3846Index];
                $templateAlias1({id: id, type: type, localizable: localizable, label: labels[defaultLanguageId], placeholder: placeholder[defaultLanguageId], values: values, _index: _countSection3846Index, repeatable: repeatable, path: path, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, onChangeValue: handleChangeValue}, null, opt_ijData);
              }
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'autofit-col');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  } else {
    $templateAlias1({id: id, type: type, localizable: localizable, label: labels[defaultLanguageId], placeholder: placeholder[defaultLanguageId], values: values, _index: ___index__soy3818, repeatable: repeatable, path: path, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, onChangeValue: handleChangeValue}, null, opt_ijData);
  }
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  localizable: boolean,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  repeatable: (boolean|null|undefined),
 *  _index: (null|number|undefined),
 *  labels: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  type: (*|null|undefined),
 *  placeholder: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValue: (?),
 *  countSection: (!Array<?>|null|undefined),
 *  handleAddSection: (?),
 *  handleRemoveSection: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TextLocalizableUI.render';
}

exports.render.params = ["id","path","localizable","contextPath","repeatable","_index","labels","values","type","placeholder","availableLanguageIds","defaultLanguageId","handleChangeValue","countSection","handleAddSection","handleRemoveSection"];
exports.render.types = {"id":"any","path":"string","localizable":"bool","contextPath":"string","repeatable":"bool","_index":"number","labels":"map<string,string>","values":"map<string,list<?>>","type":"any","placeholder":"?","availableLanguageIds":"list<string>","defaultLanguageId":"string","handleChangeValue":"?","countSection":"list<?>","handleAddSection":"?","handleRemoveSection":"?"};
templates = exports;
return exports;

});

class TextLocalizableUI extends Component {}
Soy.register(TextLocalizableUI, templates);
export { TextLocalizableUI, templates };
export default templates;
/* jshint ignore:end */
