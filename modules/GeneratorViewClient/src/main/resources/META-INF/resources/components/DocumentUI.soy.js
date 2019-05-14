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
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpen: (!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined),
 *  closeOpenTab: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValueDocument: (?)
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
  var _isOpen__soy4139 = (isOpen != null) ? isOpen : {'a': false};
  var m__soy4141 = {'a': false};
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
                  if (itemsAsociated != null) {
                    var field4286List = (soy.$$getMapKeys(itemsAsociated));
                    var field4286ListLen = field4286List.length;
                    for (var field4286Index = 0; field4286Index < field4286ListLen; field4286Index++) {
                        var field4286Data = field4286List[field4286Index];
                        var _isOpenField__soy4149 = _isOpen__soy4139[field4286Data] ? 'true' : 'false';
                          if (field4286Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field4286Index + 2) % 2 == 0 && !(field4286Index == 0)) {
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
                                      incrementalDom.attr('src', 'http://localhost:8080' + itemsAsociated[field4286Data].imageThumbnail);
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
                                    soyIdom.print(itemsAsociated[field4286Data].filename);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(itemsAsociated[field4286Data].path);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('a');
                                    incrementalDom.attr('onclick', deleteDocument);
                                    incrementalDom.attr('href', '#1');
                                    incrementalDom.attr('id', field4286Data);
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
                                    incrementalDom.attr('aria-controls', 'accordion03CollapseTwo' + field4286Data);
                                    incrementalDom.attr('aria-expanded', _isOpenField__soy4149);
                                    incrementalDom.attr('class', 'collapse-icon sheet-subtitle collapsed');
                                    incrementalDom.attr('data-toggle', 'collapse');
                                    incrementalDom.attr('onclick', closeOpenTab);
                                    incrementalDom.attr('href', '#accordion03CollapseTwo' + field4286Data);
                                    incrementalDom.attr('id', 'accordion03HeadingTwo__' + field4286Data);
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
                                    incrementalDom.attr('aria-labelledby', 'accordion03HeadingTwo__' + field4286Data);
                                    incrementalDom.attr('class', 'panel-collapse collapse ' + (_isOpenField__soy4149 == 'true' ? 'show' : ''));
                                    incrementalDom.attr('id', 'accordion03CollapseTwo' + field4286Data);
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
                                          var nestedField4278List = nestedFields;
                                          var nestedField4278ListLen = nestedField4278List.length;
                                          for (var nestedField4278Index = 0; nestedField4278Index < nestedField4278ListLen; nestedField4278Index++) {
                                              var nestedField4278Data = nestedField4278List[nestedField4278Index];
                                              if (nestedField4278Data['type'] == 'text') {
                                                $templateAlias1({id: nestedField4278Data['name'] + '_' + field4286Data, type: nestedField4278Data['type'], path: field4286Data + '/' + nestedField4278Data['name'], localizable: nestedField4278Data['localizable'], labels: nestedField4278Data['label'], placeholder: nestedField4278Data['tip'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'checkbox') {
                                                $templateAlias2({id: nestedField4278Data['name'] + '_' + field4286Data, label: nestedField4278Data['label'][defaultLanguageId], path: field4286Data + '/' + nestedField4278Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'ddm-date') {
                                                $templateAlias3({id: nestedField4278Data['name'] + '_' + field4286Data, label: nestedField4278Data['label'][defaultLanguageId], placeholder: nestedField4278Data['tip'][defaultLanguageId], defaultLanguageId: defaultLanguageId, path: field4286Data + '/' + nestedField4278Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'ddm-text-html') {
                                                $templateAlias4({id: nestedField4278Data['name'] + '_' + field4286Data, label: field4286Data['label'][defaultLanguageId], placeholder: nestedField4278Data['tip'][defaultLanguageId], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, path: field4286Data + '/' + nestedField4278Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'radio') {
                                                $templateAlias5({id: nestedField4278Data['name'] + '_' + field4286Data, label: nestedField4278Data['label'][defaultLanguageId], defaultLanguageId: defaultLanguageId, options: nestedField4278Data['options'], path: field4286Data + '/' + nestedField4278Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'select') {
                                                $templateAlias6({id: nestedField4278Data['name'] + '_' + field4286Data, label: nestedField4278Data['label'][defaultLanguageId], defaultLanguageId: defaultLanguageId, options: nestedField4278Data['options'], path: field4286Data + '/' + nestedField4278Data['name'], handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else if (nestedField4278Data['type'] == 'ddm-integer') {
                                                $templateAlias1({id: nestedField4278Data['name'] + '_' + field4286Data, type: 'number', path: field4286Data + '/' + nestedField4278Data['name'], localizable: nestedField4278Data['localizable'], labels: nestedField4278Data['label'], placeholder: nestedField4278Data['tip'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId, handleChangeValue: handleChangeValueDocument}, null, opt_ijData);
                                              } else {
                                                soyIdom.print(nestedField4278Data['type']);
                                                incrementalDom.text('--');
                                                soyIdom.print(nestedField4278Data['name']);
                                                incrementalDom.text('--Ninguno');
                                                incrementalDom.elementOpen('br');
                                                incrementalDom.elementClose('br');
                                              }
                                              incrementalDom.elementOpen('div');
                                                incrementalDom.text('\u00A0\u00A0');
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
                        if (field4286Index == field4286ListLen - 1) {
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
                        var field4318List = foldersDocuments;
                        var field4318ListLen = field4318List.length;
                        for (var field4318Index = 0; field4318Index < field4318ListLen; field4318Index++) {
                            var field4318Data = field4318List[field4318Index];
                            incrementalDom.elementOpenStart('option');
                                incrementalDom.attr('value', field4318Data.folderId);
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(field4318Data.nameFolder);
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
                    var field4370List = itemsResult;
                    var field4370ListLen = field4370List.length;
                    for (var field4370Index = 0; field4370Index < field4370ListLen; field4370Index++) {
                        var field4370Data = field4370List[field4370Index];
                        if (field4370Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field4370Index + 2) % 2 == 0 && !(field4370Index == 0)) {
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
                                      if (itemsResultSelected[field4370Data.idFile]) {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('checked', '');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field4370Data.all);
                                            incrementalDom.attr('id', field4370Data.idFile);
                                            incrementalDom.attr('class', 'custom-control-input');
                                            incrementalDom.attr('type', 'checkbox');
                                        incrementalDom.elementOpenEnd();
                                        incrementalDom.elementClose('input');
                                      } else {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field4370Data.all);
                                            incrementalDom.attr('id', field4370Data.idFile);
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
                                      incrementalDom.attr('src', 'http://localhost:8080' + field4370Data.imageThumbnail);
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
                                    soyIdom.print(field4370Data.filename);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field4370Data.path);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                          incrementalDom.elementClose('td');
                        if (field4370Index == field4370ListLen - 1) {
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
                    var field4402List = foldersDocuments;
                    var field4402ListLen = field4402List.length;
                    for (var field4402Index = 0; field4402Index < field4402ListLen; field4402Index++) {
                        var field4402Data = field4402List[field4402Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field4402Data.folderId);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field4402Data.nameFolder);
                        incrementalDom.elementClose('option');
                      }
                  }
                incrementalDom.elementClose('select');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('id', id + '_DescriptionNew');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('class', 'form-control input-group-inset input-group-inset-after');
                    incrementalDom.attr('name', 'mySearchInputName');
                    incrementalDom.attr('placeholder', 'Ingrese la descripci\u00F3n del nuevo recurso');
                    incrementalDom.attr('type', 'text');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('input');
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('onchange', fileNew);
                    incrementalDom.attr('type', 'file');
                    incrementalDom.attr('name', 'myfile');
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
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpen: (!Object<!goog.soy.data.SanitizedContent|string,boolean>|null|undefined),
 *  closeOpenTab: (?),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  handleChangeValueDocument: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DocumentUI.render';
}

exports.render.params = ["id","label","isOpenSelect","openSelectDocument","closeSelectDocument","saveSelectDocument","deleteDocument","changeFolder","searchByName","isOpenNew","openNewDocument","closeNewDocument","saveNewDocument","fileNew","setSelectedResult","itemsResult","foldersDocuments","nestedFields","itemsResultSelected","itemsAsociated","contextPath","isOpen","closeOpenTab","availableLanguageIds","defaultLanguageId","handleChangeValueDocument"];
exports.render.types = {"id":"any","label":"?","isOpenSelect":"bool","openSelectDocument":"?","closeSelectDocument":"?","saveSelectDocument":"?","deleteDocument":"?","changeFolder":"?","searchByName":"?","isOpenNew":"bool","openNewDocument":"?","closeNewDocument":"?","saveNewDocument":"?","fileNew":"?","setSelectedResult":"?","itemsResult":"list<?>","foldersDocuments":"list<?>","nestedFields":"list<?>","itemsResultSelected":"?","itemsAsociated":"?","contextPath":"string","isOpen":"map<string,bool>","closeOpenTab":"?","availableLanguageIds":"list<string>","defaultLanguageId":"string","handleChangeValueDocument":"?"};
templates = exports;
return exports;

});

class DocumentUI extends Component {}
Soy.register(DocumentUI, templates);
export { DocumentUI, templates };
export default templates;
/* jshint ignore:end */
