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
 *  contextPath: (!goog.soy.data.SanitizedContent|string)
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
                  if (itemsJournalAsociated != null) {
                    var field5231List = (soy.$$getMapKeys(itemsJournalAsociated));
                    var field5231ListLen = field5231List.length;
                    for (var field5231Index = 0; field5231Index < field5231ListLen; field5231Index++) {
                        var field5231Data = field5231List[field5231Index];
                        if (field5231Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field5231Index + 4) % 4 == 0 && !(field5231Index == 0)) {
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
                                    soyIdom.print(itemsJournalAsociated[field5231Data].structureName);
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
                                    soyIdom.print(itemsJournalAsociated[field5231Data].title);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(itemsJournalAsociated[field5231Data].path);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(itemsJournalAsociated[field5231Data].user);
                                  incrementalDom.text('\u00A0 hace  ');
                                  soyIdom.print(itemsJournalAsociated[field5231Data].date);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'text-truncate-inline');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(itemsJournalAsociated[field5231Data].status);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                              incrementalDom.elementOpenStart('div');
                                  incrementalDom.attr('class', 'autofit-col');
                              incrementalDom.elementOpenEnd();
                                incrementalDom.elementOpenStart('a');
                                    incrementalDom.attr('onclick', deleteJournal);
                                    incrementalDom.attr('href', '#1');
                                    incrementalDom.attr('id', field5231Data);
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
                        if (field5231Index == field5231ListLen - 1) {
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
        incrementalDom.attr('class', 'fade modal ' + (isOpenJournalSelect ? 'show' : ''));
        incrementalDom.attr('style', isOpenJournalSelect ? '' : 'display: none');
        incrementalDom.attr('id', id + '_Modal');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog modal-full-screen-sm-down');
          incrementalDom.attr('style', 'min-width: 850px; max-width: 850px;');
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
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('aria-labelledby', 'Close');
                incrementalDom.attr('onclick', closeSelectJournal);
                incrementalDom.attr('class', 'close');
                incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.attr('role', 'button');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-times');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#times');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
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
                        var field5265List = foldersJournals;
                        var field5265ListLen = field5265List.length;
                        for (var field5265Index = 0; field5265Index < field5265ListLen; field5265Index++) {
                            var field5265Data = field5265List[field5265Index];
                            incrementalDom.elementOpenStart('option');
                                incrementalDom.attr('value', field5265Data.folderId);
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(field5265Data.nameFolder);
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
                    var field5319List = itemsResult;
                    var field5319ListLen = field5319List.length;
                    for (var field5319Index = 0; field5319Index < field5319ListLen; field5319Index++) {
                        var field5319Data = field5319List[field5319Index];
                        if (field5319Index == 0) {
                            incrementalDom.elementOpen('tr');
                          }
                          if ((field5319Index + 3) % 3 == 0 && !(field5319Index == 0)) {
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
                                    if (itemsResultSelected[field5319Data.id]) {
                                      incrementalDom.elementOpenStart('input');
                                          incrementalDom.attr('checked', '');
                                          incrementalDom.attr('onclick', setSelectedResult);
                                          incrementalDom.attr('value', field5319Data.all);
                                          incrementalDom.attr('id', field5319Data.id);
                                          incrementalDom.attr('class', 'custom-control-input');
                                          incrementalDom.attr('type', 'checkbox');
                                      incrementalDom.elementOpenEnd();
                                      incrementalDom.elementClose('input');
                                    } else {
                                      incrementalDom.elementOpenStart('input');
                                          incrementalDom.attr('onclick', setSelectedResult);
                                          incrementalDom.attr('value', field5319Data.all);
                                          incrementalDom.attr('id', field5319Data.id);
                                          incrementalDom.attr('class', 'custom-control-input');
                                          incrementalDom.attr('type', 'checkbox');
                                      incrementalDom.elementOpenEnd();
                                      incrementalDom.elementClose('input');
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
                                    soyIdom.print(field5319Data.structureName);
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
                                    soyIdom.print(field5319Data.title);
                                  incrementalDom.elementClose('a');
                                incrementalDom.elementClose('h4');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field5319Data.path);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field5319Data.user);
                                  incrementalDom.text('\u00A0 hace  ');
                                  soyIdom.print(field5319Data.date);
                                incrementalDom.elementClose('p');
                                incrementalDom.elementOpenStart('p');
                                    incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                                incrementalDom.elementOpenEnd();
                                  soyIdom.print(field5319Data.status);
                                incrementalDom.elementClose('p');
                              incrementalDom.elementClose('div');
                            incrementalDom.elementClose('div');
                          incrementalDom.elementClose('td');
                        if (field5319Index == field5319ListLen - 1) {
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
  }
  exports.render = $render;
  /**
   * @typedef {{
 *  id: *,
 *  label: (?),
 *  isOpenJournalSelect: (boolean|null|undefined),
 *  openSelectJournal: (?),
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
 *  contextPath: (!goog.soy.data.SanitizedContent|string)
 * }}
   */
  $render.Params;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JournalUI.render';
  }

exports.render.params = ["id","label","isOpenJournalSelect","openSelectJournal","closeSelectJournal","saveSelectJournal","deleteJournal","changeFolder","searchJournalByName","setSelectedResult","itemsResult","foldersJournals","itemsResultSelected","itemsJournalAsociated","contextPath"];
exports.render.types = {"id":"any","label":"?","isOpenJournalSelect":"bool","openSelectJournal":"?","closeSelectJournal":"?","saveSelectJournal":"?","deleteJournal":"?","changeFolder":"?","searchJournalByName":"?","setSelectedResult":"?","itemsResult":"list<?>","foldersJournals":"list<?>","itemsResultSelected":"?","itemsJournalAsociated":"?","contextPath":"string"};
templates = exports;
return exports;

});

class JournalUI extends Component {}
Soy.register(JournalUI, templates);
export { JournalUI, templates };
export default templates;
/* jshint ignore:end */
