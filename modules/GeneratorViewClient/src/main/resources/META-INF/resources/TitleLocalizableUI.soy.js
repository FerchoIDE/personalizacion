/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TitleLocalizableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TitleLocalizableUI.
 * @public
 */

goog.module('TitleLocalizableUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIdsStyle: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  selectedLanguage: (!goog.soy.data.SanitizedContent|string),
 *  changeLanguage: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var id = soy.asserts.assertType(goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent, 'id', opt_data.id, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguage = soy.asserts.assertType(goog.isString(opt_data.defaultLanguage) || opt_data.defaultLanguage instanceof goog.soy.data.SanitizedContent, 'defaultLanguage', opt_data.defaultLanguage, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIdsStyle = soy.asserts.assertType(goog.isObject(opt_data.availableLanguageIdsStyle), 'availableLanguageIdsStyle', opt_data.availableLanguageIdsStyle, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var selectedLanguage = soy.asserts.assertType(goog.isString(opt_data.selectedLanguage) || opt_data.selectedLanguage instanceof goog.soy.data.SanitizedContent, 'selectedLanguage', opt_data.selectedLanguage, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var changeLanguage = opt_data.changeLanguage;
  var finalValue__soy2298 = (value != null) ? value : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'form-group');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('label');
          incrementalDom.attr('for', 'localizableInput1');
      incrementalDom.elementOpenEnd();
        soyIdom.print(label);
      incrementalDom.elementClose('label');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'input-group-append input-group-item');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('input');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('id', 'input_' + id);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('type', 'text');
              incrementalDom.attr('value', finalValue__soy2298);
          incrementalDom.elementOpenEnd();
          incrementalDom.elementClose('input');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'input-group-item input-group-item-shrink');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('button');
              incrementalDom.attr('aria-expanded', 'false');
              incrementalDom.attr('aria-haspopup', 'true');
              incrementalDom.attr('class', 'btn btn-monospaced btn-secondary dropdown-toggle');
              incrementalDom.attr('data-toggle', 'dropdown');
              incrementalDom.attr('type', 'button');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('class', 'inline-item');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-' + availableLanguageIdsStyle[selectedLanguage]);
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#' + availableLanguageIdsStyle[selectedLanguage]);
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('class', 'btn-section');
            incrementalDom.elementOpenEnd();
              soyIdom.print(selectedLanguage);
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('button');
          incrementalDom.elementOpenStart('ul');
              incrementalDom.attr('class', 'dropdown-menu dropdown-menu-right');
          incrementalDom.elementOpenEnd();
            var languageId2337List = availableLanguageIds;
            var languageId2337ListLen = languageId2337List.length;
            for (var languageId2337Index = 0; languageId2337Index < languageId2337ListLen; languageId2337Index++) {
                var languageId2337Data = languageId2337List[languageId2337Index];
                incrementalDom.elementOpen('li');
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('id', languageId2337Data);
                      incrementalDom.attr('onclick', changeLanguage);
                      incrementalDom.attr('class', 'active autofit-row dropdown-item');
                      incrementalDom.attr('href', '#' + (languageId2337Index + 1));
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'autofit-col autofit-col-expand');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'autofit-section');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'inline-item inline-item-before');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('svg');
                              incrementalDom.attr('class', 'lexicon-icon lexicon-icon-' + availableLanguageIdsStyle[languageId2337Data]);
                              incrementalDom.attr('focusable', 'false');
                              incrementalDom.attr('role', 'presentation');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.elementOpenStart('use');
                                incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#' + availableLanguageIdsStyle[languageId2337Data]);
                            incrementalDom.elementOpenEnd();
                            incrementalDom.elementClose('use');
                          incrementalDom.elementClose('svg');
                        incrementalDom.elementClose('span');
                        soyIdom.print(languageId2337Data);
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                    if (languageId2337Data == defaultLanguage) {
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'autofit-col');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label label-info');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('span');
                              incrementalDom.attr('class', 'label-item label-item-expand');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.text('Default');
                          incrementalDom.elementClose('span');
                        incrementalDom.elementClose('span');
                      incrementalDom.elementClose('span');
                    }
                  incrementalDom.elementClose('a');
                incrementalDom.elementClose('li');
              }
          incrementalDom.elementClose('ul');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIdsStyle: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  selectedLanguage: (!goog.soy.data.SanitizedContent|string),
 *  changeLanguage: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TitleLocalizableUI.render';
}

exports.render.params = ["id","label","value","placeholder","contextPath","availableLanguageIds","defaultLanguage","availableLanguageIdsStyle","selectedLanguage","changeLanguage"];
exports.render.types = {"id":"string","label":"string","value":"string","placeholder":"string","contextPath":"string","availableLanguageIds":"list<string>","defaultLanguage":"string","availableLanguageIdsStyle":"map<string,string>","selectedLanguage":"string","changeLanguage":"?"};
templates = exports;
return exports;

});

class TitleLocalizableUI extends Component {}
Soy.register(TitleLocalizableUI, templates);
export { TitleLocalizableUI, templates };
export default templates;
/* jshint ignore:end */
