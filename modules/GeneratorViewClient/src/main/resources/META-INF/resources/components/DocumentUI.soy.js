/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from DocumentUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DocumentUI.
 * @public
 */

goog.module('DocumentUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias2 = Soy.getTemplate('CheckBoxUI.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('DateUI.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('RadioUI.incrementaldom', 'render');

var $templateAlias6 = Soy.getTemplate('SelectUI.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('TextAreaUI.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('TextLocalizableUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  isOpenSelect: (boolean|null|undefined),
 *  openSelectDocument: (?),
 *  closeSelectDocument: (?),
 *  saveSelectDocument: (?),
 *  deleteDocument: (?),
 *  changeFolder: (?),
 *  searchByName: (?),
 *  isOpenNew: (boolean|null|undefined),
 *  openNewDocument: (?),
 *  closeNewDocument: (?),
 *  saveNewDocument: (?),
 *  fileNew: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  foldersDocuments: (!Array<?>|null|undefined),
 *  nestedFields: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  itemsAsociated: (?),
 *  pathBase: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpen: (!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined),
 *  closeOpenTab: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValueDocument: (?),
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
  /** @type {?} */
  var label = opt_data.label;
  /** @type {boolean|null|undefined} */
  var isOpenSelect = soy.asserts.assertType(opt_data.isOpenSelect == null || (goog.isBoolean(opt_data.isOpenSelect) || opt_data.isOpenSelect === 1 || opt_data.isOpenSelect === 0), 'isOpenSelect', opt_data.isOpenSelect, 'boolean|null|undefined');
  /** @type {?} */
  var openSelectDocument = opt_data.openSelectDocument;
  /** @type {?} */
  var closeSelectDocument = opt_data.closeSelectDocument;
  /** @type {?} */
  var saveSelectDocument = opt_data.saveSelectDocument;
  /** @type {?} */
  var deleteDocument = opt_data.deleteDocument;
  /** @type {?} */
  var changeFolder = opt_data.changeFolder;
  /** @type {?} */
  var searchByName = opt_data.searchByName;
  /** @type {boolean|null|undefined} */
  var isOpenNew = soy.asserts.assertType(opt_data.isOpenNew == null || (goog.isBoolean(opt_data.isOpenNew) || opt_data.isOpenNew === 1 || opt_data.isOpenNew === 0), 'isOpenNew', opt_data.isOpenNew, 'boolean|null|undefined');
  /** @type {?} */
  var openNewDocument = opt_data.openNewDocument;
  /** @type {?} */
  var closeNewDocument = opt_data.closeNewDocument;
  /** @type {?} */
  var saveNewDocument = opt_data.saveNewDocument;
  /** @type {?} */
  var fileNew = opt_data.fileNew;
  /** @type {?} */
  var setSelectedResult = opt_data.setSelectedResult;
  /** @type {!Array<?>|null|undefined} */
  var itemsResult = soy.asserts.assertType(opt_data.itemsResult == null || goog.isArray(opt_data.itemsResult), 'itemsResult', opt_data.itemsResult, '!Array<?>|null|undefined');
  /** @type {!Array<?>|null|undefined} */
  var foldersDocuments = soy.asserts.assertType(opt_data.foldersDocuments == null || goog.isArray(opt_data.foldersDocuments), 'foldersDocuments', opt_data.foldersDocuments, '!Array<?>|null|undefined');
  /** @type {!Array<?>|null|undefined} */
  var nestedFields = soy.asserts.assertType(opt_data.nestedFields == null || goog.isArray(opt_data.nestedFields), 'nestedFields', opt_data.nestedFields, '!Array<?>|null|undefined');
  /** @type {?} */
  var itemsResultSelected = opt_data.itemsResultSelected;
  /** @type {?} */
  var itemsAsociated = opt_data.itemsAsociated;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var pathBase = soy.asserts.assertType(opt_data.pathBase == null || (goog.isString(opt_data.pathBase) || opt_data.pathBase instanceof goog.soy.data.SanitizedContent), 'pathBase', opt_data.pathBase, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined} */
  var isOpen = soy.asserts.assertType(opt_data.isOpen == null || goog.isObject(opt_data.isOpen), 'isOpen', opt_data.isOpen, '!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined');
  /** @type {?} */
  var closeOpenTab = opt_data.closeOpenTab;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var handleChangeValueDocument = opt_data.handleChangeValueDocument;
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  var _itemsAsociated__soy7526 = (itemsAsociated != null) ? itemsAsociated[id] : itemsAsociated;
  var _isOpen__soy7528 = (isOpen != null) ? isOpen : {'a': false};
  var m__soy7530 = {'a': false};
  var _host___soy7532 = (pathBase != null) ? pathBase : 'localhost:8080';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'row');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-11');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'container');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'table-responsive');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('table');
                  incrementalDom.attr('class', 'table table-autofit table-list');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpen('tbody');
                  if (_itemsAsociated__soy7526 != null) {
                    var field7684List = (soy.$$getMapKeys(_itemsAsociated__soy7526));
                    var field7684ListLen = field7684List.length;
                    for (var field7684Index = 0; field7684Index < field7684ListLen; field7684Index++) {
                        var field7684Data = field7684List[field7684Index];
                        var _isOpenField__soy7540 = _isOpen__soy7528[field7684Data] ? 'true' : 'false';
                          if (field7684Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field7684Index + 2) % 2 == 0 && !(field7684Index == 0)) {
                            incrementalDom.elementClose('tr');
                          incrementalDom.elementOpen('tr');
                          }
                          incrementalDom.elementOpenStart('td');
                              incrementalDom.attr('class', 'table-cell-expand');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.elementOpenStart('div');
                                incrementalDom.attr('class', 'list-group-item list-group-item-flex');
                            incrementalDom.elementOpenEnd();
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('span');
                                    incrementalDom.attr('class', 'inline-item');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('img');
                                      incrementalDom.attr('width', '128');
                                      incrementalDom.attr('style', 'max-height: 256px;max-width: 100%');
                                      incrementalDom.attr('alt', 'Not Image');
                                      incrementalDom.attr('src', 'http://' + _host___soy7532 + _itemsAsociated__soy7526[field7684Data].imageThumbnail);
                                  incrementalDom.elementOpenEnd();
                                  incrementalDom.elementClose('img');
                                incrementalDom.elementClose('span');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('h4');
                                    incrementalDom.attr('class', 'table-list-title');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('a');
                                      incrementalDom.attr('href', '#1');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(_itemsAsociated__soy7526[field7684Data].filename);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(_itemsAsociated__soy7526[field7684Data].path);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('a');
                                    incrementalDom.attr('onclick', deleteDocument);
                                    incrementalDom.attr('href', '#1');
                                    incrementalDom.attr('id', field7684Data);
                                    incrementalDom.attr('style', 'font-size: 18px');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('svg');
                                      incrementalDom.attr('class', 'lexicon-icon lexicon-icon-trash');
                                      incrementalDom.attr('focusable', 'false');
                                      incrementalDom.attr('role', 'presentation');
                                  incrementalDom.elementOpenEnd();
                                    incrementalDom.elementOpenStart('use');
                                        incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#trash');
                                    incrementalDom.elementOpenEnd();
                                    incrementalDom.elementClose('use');
                                  incrementalDom.elementClose('svg');
                                incrementalDom.elementClose('a');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                            incrementalDom.elementOpenStart('div');
                                incrementalDom.attr('aria-orientation', 'vertical');
                                incrementalDom.attr('class', 'panel-group panel-group-flush');
                                incrementalDom.attr('role', 'tablist');
                            incrementalDom.elementOpenEnd();
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'panel');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('a');
                                    incrementalDom.attr('aria-controls', 'accordion03CollapseTwo' + field7684Data);
                                    incrementalDom.attr('aria-expanded', _isOpenField__soy7540);
                                    incrementalDom.attr('class', 'collapse-icon sheet-subtitle collapsed');
                                    incrementalDom.attr('data-toggle', 'collapse');
                                    incrementalDom.attr('onclick', closeOpenTab);
                                    incrementalDom.attr('href', '#accordion03CollapseTwo' + field7684Data);
                                    incrementalDom.attr('id', 'accordion03HeadingTwo__' + field7684Data);
                                    incrementalDom.attr('role', 'tab');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpen('span');
                                    incrementalDom.text('Informacion Adicional');
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
                                    incrementalDom.attr('aria-labelledby', 'accordion03HeadingTwo__' + field7684Data);
                                    incrementalDom.attr('class', 'panel-collapse collapse ' + (_isOpenField__soy7540 == 'true' ? 'show' : ''));
                                    incrementalDom.attr('id', 'accordion03CollapseTwo' + field7684Data);
                                    incrementalDom.attr('role', 'tabpanel');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('div');
                                      incrementalDom.attr('class', 'panel-body');
                                  incrementalDom.elementOpenEnd();
                                    incrementalDom.elementOpenStart('div');
                                        incrementalDom.attr('class', 'form-group');
                                    incrementalDom.elementOpenEnd();
                                      incrementalDom.elementOpenStart('div');
                                          incrementalDom.attr('class', 'input-group');
                                      incrementalDom.elementOpenEnd();
                                        if ((nestedFields != null)) {
                                          var nestedField7676List = nestedFields;
                                          var nestedField7676ListLen = nestedField7676List.length;
                                          for (var nestedField7676Index = 0; nestedField7676Index < nestedField7676ListLen; nestedField7676Index++) {
                                              var nestedField7676Data = nestedField7676List[nestedField7676Index];
                                              incrementalDom.elementOpenStart('div');
                                                  incrementalDom.attr('style', 'width:98%');
                                              incrementalDom.elementOpenEnd();
                                                if (nestedField7676Data['type'] == 'text') {
                                                  $templateAlias1({id: nestedField7676Data['name'] + '_' + field7684Data, type: nestedField7676Data['type'], path: field7684Data + '/' + nestedField7676Data['name'], localizable: nestedField7676Data['localizable'], labels: nestedField7676Data['label'], placeholder: nestedField7676Data['tip'], contextPath: contextPath, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'checkbox') {
                                                  $templateAlias2({id: nestedField7676Data['name'] + '_' + field7684Data, label: nestedField7676Data['label'], defaultLanguageId: defaultLanguageId, path: field7684Data + '/' + nestedField7676Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'ddm-date') {
                                                  $templateAlias3({id: nestedField7676Data['name'] + '_' + field7684Data, label: nestedField7676Data['label'][defaultLanguageId], placeholder: nestedField7676Data['tip'][defaultLanguageId], defaultLanguageId: defaultLanguageId, path: field7684Data + '/' + nestedField7676Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'ddm-text-html' || nestedField7676Data['type'] == 'textarea') {
                                                  $templateAlias4({id: nestedField7676Data['name'] + '_' + field7684Data, type: nestedField7676Data['type'], label: field7684Data['label'][defaultLanguageId], placeholder: nestedField7676Data['tip'][defaultLanguageId], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, path: field7684Data + '/' + nestedField7676Data['name'], handleChangeValue: handleChangeValueDocument, contextPath: contextPath}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'radio') {
                                                  $templateAlias5({id: nestedField7676Data['name'] + '_' + field7684Data, label: nestedField7676Data['label'][defaultLanguageId], defaultLanguageId: defaultLanguageId, options: nestedField7676Data['options'], path: field7684Data + '/' + nestedField7676Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'select') {
                                                  $templateAlias6({id: nestedField7676Data['name'] + '_' + field7684Data, label: nestedField7676Data['label'][defaultLanguageId], defaultLanguageId: defaultLanguageId, options: nestedField7676Data['options'], path: field7684Data + '/' + nestedField7676Data['name'], multiple: field7684Data['multiple'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else if (nestedField7676Data['type'] == 'ddm-integer') {
                                                  $templateAlias1({id: nestedField7676Data['name'] + '_' + field7684Data, type: 'number', path: field7684Data + '/' + nestedField7676Data['name'], localizable: nestedField7676Data['localizable'], labels: nestedField7676Data['label'], placeholder: nestedField7676Data['tip'], contextPath: contextPath, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                                } else {
                                                  soyIdom.print(nestedField7676Data['type']);
                                                  incrementalDom.text('--');
                                                  soyIdom.print(nestedField7676Data['name']);
                                                  incrementalDom.text('--Ninguno');
                                                  incrementalDom.elementOpen('br');
                                                  incrementalDom.elementClose('br');
                                                }
                                              incrementalDom.elementClose('div');
                                            }
                                        }
                                      incrementalDom.elementClose('div');
                                    incrementalDom.elementClose('div');
                                  incrementalDom.elementClose('div');
                                incrementalDom.elementClose('div');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                          incrementalDom.elementClose('td');
                        if (field7684Index == field7684ListLen - 1) {
                          incrementalDom.elementClose('tr');
                        }
                      }
                  }
                incrementalDom.elementClose('tbody');
              incrementalDom.elementClose('table');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-1');
      incrementalDom.elementOpenEnd();
        soyIdom.print(required ? '*' : '');
        incrementalDom.elementOpenStart('ul');
            incrementalDom.attr('class', 'navbar-nav');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'nav-item');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'upload-btn-wrapper-custom');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('button');
                  incrementalDom.attr('onclick', openSelectDocument);
                  incrementalDom.attr('data-target', '#' + id + '_Modal');
                  incrementalDom.attr('data-toggle', 'modal');
                  incrementalDom.attr('class', 'btn btn-monospaced btn-sm btn-primary');
                  incrementalDom.attr('type', 'button');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('svg');
                    incrementalDom.attr('class', 'lexicon-icon lexicon-icon-search');
                    incrementalDom.attr('focusable', 'false');
                    incrementalDom.attr('role', 'presentation');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('use');
                      incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#search');
                  incrementalDom.elementOpenEnd();
                  incrementalDom.elementClose('use');
                incrementalDom.elementClose('svg');
              incrementalDom.elementClose('button');
            incrementalDom.elementClose('div');
            incrementalDom.text('\u00A0');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'upload-btn-wrapper-custom');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('button');
                  incrementalDom.attr('onclick', openNewDocument);
                  incrementalDom.attr('class', 'btn  btn-monospaced btn-sm btn-primary');
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
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('li');
        incrementalDom.elementClose('ul');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'clayLargeModalLabel2');
        incrementalDom.attr('class', ' modal ' + (isOpenSelect ? 'show in' : ''));
        incrementalDom.attr('style', isOpenSelect ? '' : 'display: none');
        incrementalDom.attr('id', id + '_Modal');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog modal-full-screen');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'clayLargeModalLabel2');
            incrementalDom.elementOpenEnd();
              soyIdom.print(label);
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
              incrementalDom.attr('style', 'min-height: 700px;max-height: 700px');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'container-fluid');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'input-group');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'input-group-item input-group-prepend');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('select');
                        incrementalDom.attr('onchange', changeFolder);
                        incrementalDom.attr('class', 'form-control');
                        incrementalDom.attr('id', 'regularSelectElement');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('option');
                          incrementalDom.attr('disabled', '');
                          incrementalDom.attr('selected', '');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Selecciona una opci\u00F3n o');
                      incrementalDom.elementClose('option');
                      if (foldersDocuments) {
                        var field7718List = foldersDocuments;
                        var field7718ListLen = field7718List.length;
                        for (var field7718Index = 0; field7718Index < field7718ListLen; field7718Index++) {
                            var field7718Data = field7718List[field7718Index];
                            incrementalDom.elementOpenStart('option');
                                incrementalDom.attr('value', field7718Data.folderId);
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(field7718Data.nameFolder);
                            incrementalDom.elementClose('option');
                          }
                      }
                    incrementalDom.elementClose('select');
                  incrementalDom.elementClose('div');
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'input-group-item input-group-prepend');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('aria-label', 'Search');
                        incrementalDom.attr('data-onkeyup', 'changeSearchText');
                        incrementalDom.attr('class', 'form-control input-group-inset input-group-inset-after');
                        incrementalDom.attr('name', 'mySearchInputName');
                        incrementalDom.attr('placeholder', 'Ingrese un termino de busqueda');
                        incrementalDom.attr('type', 'text');
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                  incrementalDom.elementClose('div');
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'input-group-append input-group-item input-group-item-shrink');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('button');
                        incrementalDom.attr('onclick', searchByName);
                        incrementalDom.attr('class', 'btn btn-monospaced btn-sm');
                        incrementalDom.attr('type', 'button');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('svg');
                          incrementalDom.attr('class', 'lexicon-icon lexicon-icon-plus');
                          incrementalDom.attr('focusable', 'false');
                          incrementalDom.attr('role', 'presentation');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('use');
                            incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#search');
                        incrementalDom.elementOpenEnd();
                        incrementalDom.elementClose('use');
                      incrementalDom.elementClose('svg');
                    incrementalDom.elementClose('button');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'table-responsive');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('table');
                  incrementalDom.attr('class', 'table table-autofit table-list');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpen('tbody');
                  if (itemsResult) {
                    var field7771List = itemsResult;
                    var field7771ListLen = field7771List.length;
                    for (var field7771Index = 0; field7771Index < field7771ListLen; field7771Index++) {
                        var field7771Data = field7771List[field7771Index];
                        if (field7771Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field7771Index + 2) % 2 == 0 && !(field7771Index == 0)) {
                            incrementalDom.elementClose('tr');
                          incrementalDom.elementOpen('tr');
                          }
                          incrementalDom.elementOpenStart('td');
                              incrementalDom.attr('class', 'table-cell-expand');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.elementOpenStart('div');
                                incrementalDom.attr('class', 'list-group-item list-group-item-flex');
                            incrementalDom.elementOpenEnd();
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('div');
                                    incrementalDom.attr('class', 'custom-control custom-checkbox');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpen('label');
                                    if ((itemsResultSelected != null)) {
                                      if (itemsResultSelected[field7771Data.idFile]) {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('checked', '');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field7771Data.all);
                                            incrementalDom.attr('id', field7771Data.idFile);
                                            incrementalDom.attr('class', 'custom-control-input');
                                            incrementalDom.attr('type', 'checkbox');
                                        incrementalDom.elementOpenEnd();
                                        incrementalDom.elementClose('input');
                                      } else {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field7771Data.all);
                                            incrementalDom.attr('id', field7771Data.idFile);
                                            incrementalDom.attr('class', 'custom-control-input');
                                            incrementalDom.attr('type', 'checkbox');
                                        incrementalDom.elementOpenEnd();
                                        incrementalDom.elementClose('input');
                                      }
                                    }
                                    incrementalDom.elementOpenStart('span');
                                        incrementalDom.attr('class', 'custom-control-label');
                                    incrementalDom.elementOpenEnd();
                                    incrementalDom.elementClose('span');
                                  incrementalDom.elementClose('label');
                                incrementalDom.elementClose('div');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('span');
                                    incrementalDom.attr('class', 'inline-item');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('img');
                                      incrementalDom.attr('width', '128');
                                      incrementalDom.attr('style', 'max-height: 256px;max-width: 100%');
                                      incrementalDom.attr('alt', 'Not Image');
                                      incrementalDom.attr('src', 'http://' + _host___soy7532 + field7771Data.imageThumbnail);
                                  incrementalDom.elementOpenEnd();
                                  incrementalDom.elementClose('img');
                                incrementalDom.elementClose('span');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('h4');
                                    incrementalDom.attr('class', 'table-list-title');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('a');
                                      incrementalDom.attr('href', '#1');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(field7771Data.filename);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field7771Data.path);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                          incrementalDom.elementClose('td');
                        if (field7771Index == field7771ListLen - 1) {
                          incrementalDom.elementClose('tr');
                        }
                      }
                  }
                incrementalDom.elementClose('tbody');
              incrementalDom.elementClose('table');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-footer');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-item-last');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'btn-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-secondary');
                      incrementalDom.attr('onclick', closeSelectDocument);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                    incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('onclick', saveSelectDocument);
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Guardar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'clayLargeModalLabelNew');
        incrementalDom.attr('class', 'fade modal ' + (isOpenNew ? 'show in' : ''));
        incrementalDom.attr('style', isOpenNew ? '' : 'display: none');
        incrementalDom.attr('id', id + '_ModalNew');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
            incrementalDom.attr('style', 'width:600px;height: 330px');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'claySmallModalLabelNew');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Nuevo ');
              soyIdom.print(label);
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'container-fluid');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'alert alert-danger');
                  incrementalDom.attr('id', id + '_AlertErrorNew');
                  incrementalDom.attr('style', 'display:none');
                  incrementalDom.attr('role', 'alert');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('span');
                    incrementalDom.attr('class', 'alert-indicator');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('svg');
                      incrementalDom.attr('class', 'lexicon-icon lexicon-icon-exclamation-full');
                      incrementalDom.attr('focusable', 'false');
                      incrementalDom.attr('role', 'presentation');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('use');
                        incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#exclamation-full');
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('use');
                  incrementalDom.elementClose('svg');
                incrementalDom.elementClose('span');
                incrementalDom.elementOpenStart('strong');
                    incrementalDom.attr('class', 'lead');
                incrementalDom.elementOpenEnd();
                  incrementalDom.text('Error:');
                incrementalDom.elementClose('strong');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('id', id + '_MsgErrorNew');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
                  incrementalDom.attr('style', 'margin-top: 20px');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('select');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('id', id + '_FolderNew');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('option');
                      incrementalDom.attr('disabled', '');
                      incrementalDom.attr('selected', '');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Selecciona la carpeta donde se almacenara el nuevo recurso');
                  incrementalDom.elementClose('option');
                  if (foldersDocuments) {
                    var field7803List = foldersDocuments;
                    var field7803ListLen = field7803List.length;
                    for (var field7803Index = 0; field7803Index < field7803ListLen; field7803Index++) {
                        var field7803Data = field7803List[field7803Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field7803Data.folderId);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field7803Data.nameFolder);
                        incrementalDom.elementClose('option');
                      }
                  }
                incrementalDom.elementClose('select');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
                  incrementalDom.attr('style', 'margin-top: 20px');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('id', id + '_DescriptionNew');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('class', 'form-control input-group-inset input-group-inset-after');
                    incrementalDom.attr('placeholder', 'Ingrese la descripci\u00F3n del nuevo recurso');
                    incrementalDom.attr('type', 'text');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('input');
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('id', id + '_FolderNestedNew');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('style', 'margin-top: 10px');
                    incrementalDom.attr('class', 'form-control input-group-inset input-group-inset-after');
                    incrementalDom.attr('placeholder', 'Nombre de nueva carpeta separado por / para mas de una carpeta');
                    incrementalDom.attr('type', 'text');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('input');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('id', id + '_FileNew');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('style', 'height: 60px;;margin-top:20px');
                    incrementalDom.attr('onchange', fileNew);
                    incrementalDom.attr('type', 'file');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('input');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-footer');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-item-last');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'btn-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-secondary');
                      incrementalDom.attr('onclick', closeNewDocument);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                    incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('id', id + '_BtnNew');
                      incrementalDom.attr('disabled', '');
                      incrementalDom.attr('onclick', saveNewDocument);
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Guardar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  isOpenSelect: (boolean|null|undefined),
 *  openSelectDocument: (?),
 *  closeSelectDocument: (?),
 *  saveSelectDocument: (?),
 *  deleteDocument: (?),
 *  changeFolder: (?),
 *  searchByName: (?),
 *  isOpenNew: (boolean|null|undefined),
 *  openNewDocument: (?),
 *  closeNewDocument: (?),
 *  saveNewDocument: (?),
 *  fileNew: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  foldersDocuments: (!Array<?>|null|undefined),
 *  nestedFields: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  itemsAsociated: (?),
 *  pathBase: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpen: (!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined),
 *  closeOpenTab: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValueDocument: (?),
 *  required: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DocumentUI.render';
}

exports.render.params = ["id","label","isOpenSelect","openSelectDocument","closeSelectDocument","saveSelectDocument","deleteDocument","changeFolder","searchByName","isOpenNew","openNewDocument","closeNewDocument","saveNewDocument","fileNew","setSelectedResult","itemsResult","foldersDocuments","nestedFields","itemsResultSelected","itemsAsociated","pathBase","contextPath","isOpen","closeOpenTab","availableLanguageIds","defaultLanguageId","handleChangeValueDocument","required"];
exports.render.types = {"id":"any","label":"?","isOpenSelect":"bool","openSelectDocument":"?","closeSelectDocument":"?","saveSelectDocument":"?","deleteDocument":"?","changeFolder":"?","searchByName":"?","isOpenNew":"bool","openNewDocument":"?","closeNewDocument":"?","saveNewDocument":"?","fileNew":"?","setSelectedResult":"?","itemsResult":"list<?>","foldersDocuments":"list<?>","nestedFields":"list<?>","itemsResultSelected":"?","itemsAsociated":"?","pathBase":"string","contextPath":"string","isOpen":"map<string,bool>","closeOpenTab":"?","availableLanguageIds":"list<string>","defaultLanguageId":"string","handleChangeValueDocument":"?","required":"bool"};
templates = exports;
return exports;

});

class DocumentUI extends Component {}
Soy.register(DocumentUI, templates);
export { DocumentUI, templates };
export default templates;
/* jshint ignore:end */
