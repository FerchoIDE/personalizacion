/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ViewNested.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ViewNested.
 * @public
 */

goog.module('ViewNested.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias2 = Soy.getTemplate('CheckBoxUI.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('DateUI.incrementaldom', 'render');

var $templateAlias6 = Soy.getTemplate('DocumentUI.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('JournalUI.incrementaldom', 'render');

var $templateAlias7 = Soy.getTemplate('RadioUI.incrementaldom', 'render');

var $templateAlias8 = Soy.getTemplate('SelectUI.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('TextAreaUI.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('TextLocalizableUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  structureId: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  repeatable: boolean,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  data: !Array<?>,
 *  title: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  countSection: (!Array<?>|null|undefined),
 *  closeOpenTab: (?),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>,
 *  checkedOption: (?),
 *  checkedConcat: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  brandIdSelected: (?),
 *  hotelIdSelected: (?),
 *  handleChangeValue: (?),
 *  handleRemoveValue: (?),
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
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var id = soy.asserts.assertType(goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent, 'id', opt_data.id, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var structureId = soy.asserts.assertType(goog.isString(opt_data.structureId) || opt_data.structureId instanceof goog.soy.data.SanitizedContent, 'structureId', opt_data.structureId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
  /** @type {boolean} */
  var repeatable = soy.asserts.assertType(goog.isBoolean(opt_data.repeatable) || opt_data.repeatable === 1 || opt_data.repeatable === 0, 'repeatable', opt_data.repeatable, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var data = soy.asserts.assertType(goog.isArray(opt_data.data), 'data', opt_data.data, '!Array<?>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var title = soy.asserts.assertType(goog.isObject(opt_data.title), 'title', opt_data.title, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguage = soy.asserts.assertType(goog.isString(opt_data.defaultLanguage) || opt_data.defaultLanguage instanceof goog.soy.data.SanitizedContent, 'defaultLanguage', opt_data.defaultLanguage, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<?>|null|undefined} */
  var countSection = soy.asserts.assertType(opt_data.countSection == null || goog.isArray(opt_data.countSection), 'countSection', opt_data.countSection, '!Array<?>|null|undefined');
  /** @type {?} */
  var closeOpenTab = opt_data.closeOpenTab;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>} */
  var collapseInfo = soy.asserts.assertType(goog.isObject(opt_data.collapseInfo), 'collapseInfo', opt_data.collapseInfo, '!Object<!goog.soy.data.SanitizedContent|string,boolean>');
  /** @type {?} */
  var checkedOption = opt_data.checkedOption;
  /** @type {?} */
  var checkedConcat = opt_data.checkedConcat;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var brandSelected = soy.asserts.assertType(opt_data.brandSelected == null || (goog.isString(opt_data.brandSelected) || opt_data.brandSelected instanceof goog.soy.data.SanitizedContent), 'brandSelected', opt_data.brandSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var hotelSelected = soy.asserts.assertType(opt_data.hotelSelected == null || (goog.isString(opt_data.hotelSelected) || opt_data.hotelSelected instanceof goog.soy.data.SanitizedContent), 'hotelSelected', opt_data.hotelSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var brandIdSelected = opt_data.brandIdSelected;
  /** @type {?} */
  var hotelIdSelected = opt_data.hotelIdSelected;
  /** @type {?} */
  var handleChangeValue = opt_data.handleChangeValue;
  /** @type {?} */
  var handleRemoveValue = opt_data.handleRemoveValue;
  /** @type {?} */
  var handleAddSection = opt_data.handleAddSection;
  /** @type {?} */
  var handleRemoveSection = opt_data.handleRemoveSection;
  var structureIdRate__soy6443 = '35796';
  var show__soy6445 = ((collapseInfo == null ? null : collapseInfo['accordion' + id + 'Heading']) != null) ? ((collapseInfo == null ? null : collapseInfo['accordion' + id + 'Heading']) ? '' : 'show') : '';
  var _countSections__soy6447 = (countSection != null) ? countSection : [0];
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-orientation', 'vertical');
        incrementalDom.attr('class', 'panel-group panel-group-flush');
        incrementalDom.attr('role', 'tablist');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'panel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', closeOpenTab);
            incrementalDom.attr('aria-controls', 'accordion' + id + 'Collapse');
            incrementalDom.attr('aria-expanded', 'false');
            incrementalDom.attr('class', 'collapse-icon sheet-subtitle collapsed');
            incrementalDom.attr('data-toggle', 'collapse');
            incrementalDom.attr('href', '#accordion' + id + 'Collapse');
            incrementalDom.attr('id', 'accordion' + id + 'Heading');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpen('span');
            soyIdom.print(title[defaultLanguage]);
          incrementalDom.elementClose('span');
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'collapse-icon-closed');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('svg');
                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-angle-right');
                incrementalDom.attr('focusable', 'false');
                incrementalDom.attr('role', 'presentation');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('use');
                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#angle-right');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('use');
            incrementalDom.elementClose('svg');
          incrementalDom.elementClose('span');
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'collapse-icon-open');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('svg');
                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-angle-down');
                incrementalDom.attr('focusable', 'false');
                incrementalDom.attr('role', 'presentation');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('use');
                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#angle-down');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('use');
            incrementalDom.elementClose('svg');
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('a');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('aria-labelledby', 'accordion' + id + 'Heading');
            incrementalDom.attr('class', 'panel-collapse collapse ' + show__soy6445);
            incrementalDom.attr('id', 'accordion' + id + 'Collapse');
            incrementalDom.attr('role', 'tabpanel');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'panel-body');
          incrementalDom.elementOpenEnd();
            if (repeatable) {
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
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                var _countSection6610List = _countSections__soy6447;
                var _countSection6610ListLen = _countSection6610List.length;
                for (var _countSection6610Index = 0; _countSection6610Index < _countSection6610ListLen; _countSection6610Index++) {
                    var _countSection6610Data = _countSection6610List[_countSection6610Index];
                    incrementalDom.elementOpenStart('div');
                        incrementalDom.attr('class', 'input-group');
                    incrementalDom.elementOpenEnd();
                      var field6597List = data;
                      var field6597ListLen = field6597List.length;
                      for (var field6597Index = 0; field6597Index < field6597ListLen; field6597Index++) {
                          var field6597Data = field6597List[field6597Index];
                          if (field6597Data['type'] == 'ddm-separator') {
                            incrementalDom.text('anidado');
                            incrementalDom.elementOpen('br');
                            incrementalDom.elementClose('br');
                          } else if (field6597Data['type'] == 'text') {
                            $templateAlias1({id: field6597Data['name'] + '___' + _countSection6610Index, path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], type: field6597Data['type'], labels: field6597Data['label'], placeholder: field6597Data['tip'], localizable: field6597Data['localizable'], values: field6597Data['values'], repeatable: field6597Data['repeatable'], contextPath: contextPath, _index: _countSection6610Index, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'checkbox') {
                            $templateAlias2({id: field6597Data['name'] + '___' + _countSection6610Index, nameParent: name, label: field6597Data['label'], checkedOption: checkedOption, path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'ddm-date') {
                            $templateAlias3({id: field6597Data['name'] + '___' + _countSection6610Index, values: field6597Data['values'], label: field6597Data['label'][defaultLanguage], placeholder: field6597Data['tip'][defaultLanguage], defaultLanguageId: defaultLanguage, path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'ddm-text-html' || field6597Data['type'] == 'textarea') {
                            $templateAlias4({id: field6597Data['name'] + '___' + _countSection6610Index, type: field6597Data['type'], label: field6597Data['label'][defaultLanguage], placeholder: field6597Data['tip'][defaultLanguage], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], handleChangeValue: handleChangeValue, contextPath: contextPath}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'ddm-journal-article') {
                            $templateAlias5({id: field6597Data['name'] + '___' + _countSection6610Index, label: field6597Data['label'][defaultLanguage], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, hotelIdSelected: hotelIdSelected, path: path + '___' + _countSection6610Index + '/' + field6597Data['name']}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'ddm-documentlibrary') {
                            $templateAlias6({id: field6597Data['name'] + '___' + _countSection6610Index, values: field6597Data['values'], label: field6597Data['label'][defaultLanguage], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, nestedFields: field6597Data['nestedFields'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, path: path + '___' + _countSection6610Index + '/' + field6597Data['name']}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'radio') {
                            $templateAlias7({id: field6597Data['name'] + '___' + _countSection6610Index, values: field6597Data['values'], label: field6597Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field6597Data['options'], path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                          } else if (field6597Data['type'] == 'select') {
                            $templateAlias8({id: field6597Data['name'] + '___' + _countSection6610Index, values: field6597Data['values'], label: field6597Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field6597Data['options'], path: path + '___' + _countSection6610Index + '/' + field6597Data['name'], multiple: field6597Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                          } else {
                            soyIdom.print(field6597Data['type']);
                            incrementalDom.text(' -- Ninguno');
                            incrementalDom.elementOpen('br');
                            incrementalDom.elementClose('br');
                          }
                          incrementalDom.elementOpen('div');
                            incrementalDom.text('\u00A0\u00A0');
                          incrementalDom.elementClose('div');
                        }
                      if ((checkedConcat != null)) {
                        if (structureId == structureIdRate__soy6443 && (checkedConcat[name] != null) && (name == 'Restrictions' || name == 'Benefits1' || name == 'occupationRate')) {
                          incrementalDom.elementClose('div');
                        incrementalDom.elementOpenStart('div');
                            incrementalDom.attr('class', 'input-group');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('span');
                              incrementalDom.attr('class', 'label label-info');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.elementOpenStart('span');
                                incrementalDom.attr('class', 'label-item label-item-expand');
                                incrementalDom.attr('style', 'text-transform:none');
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(checkedConcat[name][defaultLanguage]);
                            incrementalDom.elementClose('span');
                          incrementalDom.elementClose('span');
                        }
                      }
                    incrementalDom.elementClose('div');
                  }
              incrementalDom.elementClose('div');
            } else {
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'input-group');
                incrementalDom.elementOpenEnd();
                  var field6731List = data;
                  var field6731ListLen = field6731List.length;
                  for (var field6731Index = 0; field6731Index < field6731ListLen; field6731Index++) {
                      var field6731Data = field6731List[field6731Index];
                      if (field6731Data['type'] == 'ddm-separator') {
                        incrementalDom.text('anidado');
                        incrementalDom.elementOpen('br');
                        incrementalDom.elementClose('br');
                      } else if (field6731Data['type'] == 'text') {
                        $templateAlias1({id: field6731Data['name'], path: path + '/' + field6731Data['name'], type: field6731Data['type'], labels: field6731Data['label'], placeholder: field6731Data['tip'], localizable: field6731Data['localizable'], values: field6731Data['values'], repeatable: field6731Data['repeatable'], contextPath: contextPath, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'checkbox') {
                        $templateAlias2({id: field6731Data['name'], nameParent: name, label: field6731Data['label'], checkedOption: checkedOption, path: path + '/' + field6731Data['name'], values: field6731Data['values'], defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'ddm-date') {
                        $templateAlias3({id: field6731Data['name'], values: field6731Data['values'], label: field6731Data['label'][defaultLanguage], placeholder: field6731Data['tip'][defaultLanguage], defaultLanguageId: defaultLanguage, path: path + '/' + field6731Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'ddm-text-html' || field6731Data['type'] == 'textarea') {
                        $templateAlias4({id: field6731Data['name'], type: field6731Data['type'], label: field6731Data['label'][defaultLanguage], placeholder: field6731Data['tip'][defaultLanguage], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, path: path + '/' + field6731Data['name'], values: field6731Data['values'], handleChangeValue: handleChangeValue, contextPath: contextPath}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'ddm-journal-article') {
                        $templateAlias5({id: field6731Data['name'], label: field6731Data['label'][defaultLanguage], values: field6731Data['values'], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, hotelIdSelected: hotelIdSelected, path: path + '/' + field6731Data['name']}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'ddm-documentlibrary') {
                        $templateAlias6({id: field6731Data['name'], values: field6731Data['values'], label: field6731Data['label'][defaultLanguage], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, nestedFields: field6731Data['nestedFields'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, path: path + '/' + field6731Data['name']}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'radio') {
                        $templateAlias7({id: field6731Data['name'], values: field6731Data['values'], label: field6731Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field6731Data['options'], path: path + '/' + field6731Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                      } else if (field6731Data['type'] == 'select') {
                        $templateAlias8({id: field6731Data['name'], values: field6731Data['values'], label: field6731Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field6731Data['options'], path: path + '/' + field6731Data['name'], multiple: field6731Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                      } else {
                        soyIdom.print(field6731Data['type']);
                        incrementalDom.text(' -- Ninguno');
                        incrementalDom.elementOpen('br');
                        incrementalDom.elementClose('br');
                      }
                      incrementalDom.elementOpen('div');
                        incrementalDom.text('\u00A0\u00A0');
                      incrementalDom.elementClose('div');
                    }
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            }
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  structureId: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  repeatable: boolean,
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  data: !Array<?>,
 *  title: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  countSection: (!Array<?>|null|undefined),
 *  closeOpenTab: (?),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>,
 *  checkedOption: (?),
 *  checkedConcat: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  brandIdSelected: (?),
 *  hotelIdSelected: (?),
 *  handleChangeValue: (?),
 *  handleRemoveValue: (?),
 *  handleAddSection: (?),
 *  handleRemoveSection: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ViewNested.render';
}

exports.render.params = ["id","structureId","name","repeatable","path","data","title","defaultLanguage","availableLanguageIds","contextPath","countSection","closeOpenTab","collapseInfo","checkedOption","checkedConcat","brandSelected","hotelSelected","brandIdSelected","hotelIdSelected","handleChangeValue","handleRemoveValue","handleAddSection","handleRemoveSection"];
exports.render.types = {"id":"string","structureId":"string","name":"string","repeatable":"bool","path":"string","data":"list<?>","title":"map<string, string>","defaultLanguage":"string","availableLanguageIds":"list<string>","contextPath":"string","countSection":"list<?>","closeOpenTab":"?","collapseInfo":"map<string,bool>","checkedOption":"?","checkedConcat":"?","brandSelected":"string","hotelSelected":"string","brandIdSelected":"?","hotelIdSelected":"?","handleChangeValue":"?","handleRemoveValue":"?","handleAddSection":"?","handleRemoveSection":"?"};
templates = exports;
return exports;

});

class ViewNested extends Component {}
Soy.register(ViewNested, templates);
export { ViewNested, templates };
export default templates;
/* jshint ignore:end */
