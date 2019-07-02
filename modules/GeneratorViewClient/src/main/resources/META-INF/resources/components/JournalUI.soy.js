/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from JournalUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JournalUI.
 * @public
 */

goog.module('JournalUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  isOpenJournalSelect: (boolean|null|undefined),
 *  openSelectJournal: (?),
 *  isOpenJournalNew: (boolean|null|undefined),
 *  openNewJournal: (?),
 *  closeSelectJournal: (?),
 *  saveSelectJournal: (?),
 *  deleteJournal: (?),
 *  changeFolder: (?),
 *  searchJournalByName: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  foldersJournals: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  itemsJournalAsociated: (?),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpenJournalType: (boolean|null|undefined),
 *  closeSelectJournalType: (?),
 *  saveSelectJournalType: (?)
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
  var isOpenJournalSelect = soy.asserts.assertType(opt_data.isOpenJournalSelect == null || (goog.isBoolean(opt_data.isOpenJournalSelect) || opt_data.isOpenJournalSelect === 1 || opt_data.isOpenJournalSelect === 0), 'isOpenJournalSelect', opt_data.isOpenJournalSelect, 'boolean|null|undefined');
  /** @type {?} */
  var openSelectJournal = opt_data.openSelectJournal;
  /** @type {boolean|null|undefined} */
  var isOpenJournalNew = soy.asserts.assertType(opt_data.isOpenJournalNew == null || (goog.isBoolean(opt_data.isOpenJournalNew) || opt_data.isOpenJournalNew === 1 || opt_data.isOpenJournalNew === 0), 'isOpenJournalNew', opt_data.isOpenJournalNew, 'boolean|null|undefined');
  /** @type {?} */
  var openNewJournal = opt_data.openNewJournal;
  /** @type {?} */
  var closeSelectJournal = opt_data.closeSelectJournal;
  /** @type {?} */
  var saveSelectJournal = opt_data.saveSelectJournal;
  /** @type {?} */
  var deleteJournal = opt_data.deleteJournal;
  /** @type {?} */
  var changeFolder = opt_data.changeFolder;
  /** @type {?} */
  var searchJournalByName = opt_data.searchJournalByName;
  /** @type {?} */
  var setSelectedResult = opt_data.setSelectedResult;
  /** @type {!Array<?>|null|undefined} */
  var itemsResult = soy.asserts.assertType(opt_data.itemsResult == null || goog.isArray(opt_data.itemsResult), 'itemsResult', opt_data.itemsResult, '!Array<?>|null|undefined');
  /** @type {!Array<?>|null|undefined} */
  var foldersJournals = soy.asserts.assertType(opt_data.foldersJournals == null || goog.isArray(opt_data.foldersJournals), 'foldersJournals', opt_data.foldersJournals, '!Array<?>|null|undefined');
  /** @type {?} */
  var itemsResultSelected = opt_data.itemsResultSelected;
  /** @type {?} */
  var itemsJournalAsociated = opt_data.itemsJournalAsociated;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {boolean|null|undefined} */
  var isOpenJournalType = soy.asserts.assertType(opt_data.isOpenJournalType == null || (goog.isBoolean(opt_data.isOpenJournalType) || opt_data.isOpenJournalType === 1 || opt_data.isOpenJournalType === 0), 'isOpenJournalType', opt_data.isOpenJournalType, 'boolean|null|undefined');
  /** @type {?} */
  var closeSelectJournalType = opt_data.closeSelectJournalType;
  /** @type {?} */
  var saveSelectJournalType = opt_data.saveSelectJournalType;
  var _itemsJournalAsociated__soy6286 = (itemsJournalAsociated != null) ? itemsJournalAsociated[id] : itemsJournalAsociated;
  var structureId__soy6288 = {PUB: '35956', RESTAURANT: '35832', SPA: '35829', GYM: '35962', FACILITY: '35820', KIDSCLUB: '35959', MEETING: '35823'};
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
                  if (_itemsJournalAsociated__soy6286 != null) {
                    var field6326List = (soy.$$getMapKeys(_itemsJournalAsociated__soy6286));
                    var field6326ListLen = field6326List.length;
                    for (var field6326Index = 0; field6326Index < field6326ListLen; field6326Index++) {
                        var field6326Data = field6326List[field6326Index];
                        if (field6326Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field6326Index + 4) % 4 == 0 && !(field6326Index == 0)) {
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
                                    incrementalDom.attr('class', 'badge badge-primary');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'badge-item badge-item-expand');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].structureName);
                                  incrementalDom.elementClose('span');
                                incrementalDom.elementClose('span');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('h4');
                                    incrementalDom.attr('class', 'list-group-title text-truncate');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('a');
                                      incrementalDom.attr('href', '#1');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].title);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].path);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].user);
                                  incrementalDom.text('\u00A0 hace  ');
                                  soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].date);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(_itemsJournalAsociated__soy6286[field6326Data].status);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('a');
                                    incrementalDom.attr('onclick', deleteJournal);
                                    incrementalDom.attr('href', '#1');
                                    incrementalDom.attr('id', field6326Data);
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
                          incrementalDom.elementClose('td');
                        if (field6326Index == field6326ListLen - 1) {
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
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', openSelectJournal);
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
            incrementalDom.text('\u00A0');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', openNewJournal);
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
          incrementalDom.elementClose('li');
        incrementalDom.elementClose('ul');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'clayLargeModalLabel');
        incrementalDom.attr('class', ' modal ' + (isOpenJournalSelect ? 'show in' : ''));
        incrementalDom.attr('style', isOpenJournalSelect ? '' : 'display: none');
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
            incrementalDom.elementOpenEnd();
              soyIdom.print(label);
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body inline-scroller');
              incrementalDom.attr('style', 'min-height: 600px;max-height: 600px');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'container-fluid container-fluid-max-xl');
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
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('option');
                          incrementalDom.attr('disabled', '');
                          incrementalDom.attr('selected', '');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Selecciona una opci\u00F3n o');
                      incrementalDom.elementClose('option');
                      if (foldersJournals) {
                        var field6358List = foldersJournals;
                        var field6358ListLen = field6358List.length;
                        for (var field6358Index = 0; field6358Index < field6358ListLen; field6358Index++) {
                            var field6358Data = field6358List[field6358Index];
                            incrementalDom.elementOpenStart('option');
                                incrementalDom.attr('value', field6358Data.key);
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(field6358Data.category);
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
                        incrementalDom.attr('data-onkeyup', 'changeJournalSearchText');
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
                        incrementalDom.attr('onclick', searchJournalByName);
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
                    var field6416List = itemsResult;
                    var field6416ListLen = field6416List.length;
                    for (var field6416Index = 0; field6416Index < field6416ListLen; field6416Index++) {
                        var field6416Data = field6416List[field6416Index];
                        if (field6416Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field6416Index + 3) % 3 == 0 && !(field6416Index == 0)) {
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
                                      if (itemsResultSelected[field6416Data.id]) {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('checked', '');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field6416Data.all);
                                            incrementalDom.attr('id', field6416Data.id);
                                            incrementalDom.attr('class', 'custom-control-input');
                                            incrementalDom.attr('type', 'checkbox');
                                        incrementalDom.elementOpenEnd();
                                        incrementalDom.elementClose('input');
                                      } else {
                                        incrementalDom.elementOpenStart('input');
                                            incrementalDom.attr('onclick', setSelectedResult);
                                            incrementalDom.attr('value', field6416Data.all);
                                            incrementalDom.attr('id', field6416Data.id);
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
                                    incrementalDom.attr('class', 'badge badge-primary');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'badge-item badge-item-expand');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(field6416Data.structureName);
                                  incrementalDom.elementClose('span');
                                incrementalDom.elementClose('span');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col autofit-col-expand');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('h4');
                                    incrementalDom.attr('class', 'list-group-title text-truncate');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('a');
                                      incrementalDom.attr('href', '#1');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(field6416Data.title);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field6416Data.path);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field6416Data.user);
                                  incrementalDom.text('\u00A0 hace  ');
                                  soyIdom.print(field6416Data.date);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field6416Data.status);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                          incrementalDom.elementClose('td');
                        if (field6416Index == field6416ListLen - 1) {
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
                      incrementalDom.attr('onclick', closeSelectJournal);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('onclick', saveSelectJournal);
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
        incrementalDom.attr('aria-labelledby', 'clayFullScreenModalIframeLabel');
        incrementalDom.attr('class', 'modal ' + (isOpenJournalNew ? 'show in' : ''));
        incrementalDom.attr('style', isOpenJournalNew ? '' : 'display: none');
        incrementalDom.attr('id', id + '_ModalIframe');
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
                incrementalDom.attr('id', 'clayFullScreenModalIframeLabel');
            incrementalDom.elementOpenEnd();
              soyIdom.print(label);
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body modal-body-iframe');
              incrementalDom.attr('style', 'position: relative;top: 0px;bottom: 0px;margin:30px');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('iframe');
                incrementalDom.attr('id', id + '_Iframe');
                incrementalDom.attr('src', 'about:blank');
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('iframe');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'clayModalTypeJournalLabel');
        incrementalDom.attr('class', 'modal ' + (isOpenJournalType ? 'show in' : ''));
        incrementalDom.attr('style', isOpenJournalType ? '' : 'display: none');
        incrementalDom.attr('id', id + '_ModalTypeJournal');
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
                incrementalDom.attr('id', 'clayModalTypeJournalLabel');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Seleccione el tipo de Facility');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'sheet');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'form-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_R');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.RESTAURANT);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Restaurant');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_SR');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.MEETING);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Sala de Reuniones');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_G');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.GYM);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Gimnasio');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_B');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.PUB);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Bar');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_S');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.SPA);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Spa');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_FKC');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.KIDSCLUB);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Fiesta Kids Club');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'custom-control custom-radio');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpen('label');
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('class', 'custom-control-input');
                        incrementalDom.attr('id', id + '_typeJournal_I');
                        incrementalDom.attr('name', id + '_typeJournal');
                        incrementalDom.attr('type', 'radio');
                        incrementalDom.attr('value', structureId__soy6288.FACILITY);
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'custom-control-label');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'custom-control-label-text');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Instalaciones');
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  incrementalDom.elementClose('label');
                incrementalDom.elementClose('div');
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
                      incrementalDom.attr('onclick', closeSelectJournalType);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('onclick', saveSelectJournalType);
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
 *  isOpenJournalSelect: (boolean|null|undefined),
 *  openSelectJournal: (?),
 *  isOpenJournalNew: (boolean|null|undefined),
 *  openNewJournal: (?),
 *  closeSelectJournal: (?),
 *  saveSelectJournal: (?),
 *  deleteJournal: (?),
 *  changeFolder: (?),
 *  searchJournalByName: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  foldersJournals: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  itemsJournalAsociated: (?),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  isOpenJournalType: (boolean|null|undefined),
 *  closeSelectJournalType: (?),
 *  saveSelectJournalType: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'JournalUI.render';
}

exports.render.params = ["id","label","isOpenJournalSelect","openSelectJournal","isOpenJournalNew","openNewJournal","closeSelectJournal","saveSelectJournal","deleteJournal","changeFolder","searchJournalByName","setSelectedResult","itemsResult","foldersJournals","itemsResultSelected","itemsJournalAsociated","contextPath","isOpenJournalType","closeSelectJournalType","saveSelectJournalType"];
exports.render.types = {"id":"any","label":"?","isOpenJournalSelect":"bool","openSelectJournal":"?","isOpenJournalNew":"bool","openNewJournal":"?","closeSelectJournal":"?","saveSelectJournal":"?","deleteJournal":"?","changeFolder":"?","searchJournalByName":"?","setSelectedResult":"?","itemsResult":"list<?>","foldersJournals":"list<?>","itemsResultSelected":"?","itemsJournalAsociated":"?","contextPath":"string","isOpenJournalType":"bool","closeSelectJournalType":"?","saveSelectJournalType":"?"};
templates = exports;
return exports;

});

class JournalUI extends Component {}
Soy.register(JournalUI, templates);
export { JournalUI, templates };
export default templates;
/* jshint ignore:end */
