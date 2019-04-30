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
 *  itemsResultSelected: (?),
 *  itemsAsociated: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
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
  /** @type {?} */
  var itemsResultSelected = opt_data.itemsResultSelected;
  /** @type {?} */
  var itemsAsociated = opt_data.itemsAsociated;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var brandSelected = soy.asserts.assertType(opt_data.brandSelected == null || (goog.isString(opt_data.brandSelected) || opt_data.brandSelected instanceof goog.soy.data.SanitizedContent), 'brandSelected', opt_data.brandSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var hotelSelected = soy.asserts.assertType(opt_data.hotelSelected == null || (goog.isString(opt_data.hotelSelected) || opt_data.hotelSelected instanceof goog.soy.data.SanitizedContent), 'hotelSelected', opt_data.hotelSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('style', 'display: none');
    incrementalDom.elementOpenEnd();
      soyIdom.print(hotelSelected);
      incrementalDom.text('/');
      soyIdom.print(brandSelected);
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'row');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-10');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'container');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('ul');
                incrementalDom.attr('class', 'list-group show-quick-actions-on-hover');
            incrementalDom.elementOpenEnd();
              var field3794List = (soy.$$getMapKeys(itemsAsociated));
              var field3794ListLen = field3794List.length;
              for (var field3794Index = 0; field3794Index < field3794ListLen; field3794Index++) {
                  var field3794Data = field3794List[field3794Index];
                  if (field3794Data != '_XX_') {
                    incrementalDom.elementOpenStart('li');
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
                              incrementalDom.attr('src', 'http://localhost:8080' + itemsAsociated[field3794Data].imageThumbnail);
                          incrementalDom.elementOpenEnd();
                          incrementalDom.elementClose('img');
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
                            soyIdom.print(itemsAsociated[field3794Data].filename);
                          incrementalDom.elementClose('a');
                        incrementalDom.elementClose('h4');
                        incrementalDom.elementOpenStart('p');
                            incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(itemsAsociated[field3794Data].path);
                        incrementalDom.elementClose('p');
                      incrementalDom.elementClose('div');
                      incrementalDom.elementOpenStart('div');
                          incrementalDom.attr('class', 'autofit-col');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('a');
                            incrementalDom.attr('onclick', deleteDocument);
                            incrementalDom.attr('href', '#1');
                            incrementalDom.attr('id', field3794Data);
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
                    incrementalDom.elementClose('li');
                  }
                }
            incrementalDom.elementClose('ul');
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
        incrementalDom.attr('aria-labelledby', 'clayLargeModalLabel');
        incrementalDom.attr('class', 'fade modal ' + (isOpenSelect ? 'show' : ''));
        incrementalDom.attr('style', isOpenSelect ? '' : 'display: none');
        incrementalDom.attr('id', id + '_Modal');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog modal-full-screen-sm-down');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'claySmallModalLabel');
            incrementalDom.elementOpenEnd();
              soyIdom.print(label);
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('aria-labelledby', 'Close');
                incrementalDom.attr('onclick', closeSelectDocument);
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
              incrementalDom.attr('style', 'min-height: 700px;max-height: 700px;!important;');
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
                        incrementalDom.attr('id', 'regularSelectElement');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('option');
                          incrementalDom.attr('disabled', '');
                          incrementalDom.attr('selected', '');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Selecciona una opci\u00F3n o');
                      incrementalDom.elementClose('option');
                      if (foldersDocuments) {
                        var field3829List = foldersDocuments;
                        var field3829ListLen = field3829List.length;
                        for (var field3829Index = 0; field3829Index < field3829ListLen; field3829Index++) {
                            var field3829Data = field3829List[field3829Index];
                            incrementalDom.elementOpenStart('option');
                                incrementalDom.attr('value', field3829Data.folderId);
                            incrementalDom.elementOpenEnd();
                              soyIdom.print(field3829Data.nameFolder);
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
            incrementalDom.elementOpenStart('ul');
                incrementalDom.attr('class', 'list-group show-quick-actions-on-hover');
            incrementalDom.elementOpenEnd();
              if (itemsResult) {
                var field3865List = itemsResult;
                var field3865ListLen = field3865List.length;
                for (var field3865Index = 0; field3865Index < field3865ListLen; field3865Index++) {
                    var field3865Data = field3865List[field3865Index];
                    incrementalDom.elementOpenStart('li');
                        incrementalDom.attr('class', 'list-group-item list-group-item-flex');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('div');
                          incrementalDom.attr('class', 'autofit-col');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('div');
                            incrementalDom.attr('class', 'custom-control custom-checkbox');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpen('label');
                            if (itemsResultSelected[field3865Data.idFile]) {
                              incrementalDom.elementOpenStart('input');
                                  incrementalDom.attr('checked', '');
                                  incrementalDom.attr('onclick', setSelectedResult);
                                  incrementalDom.attr('value', field3865Data.all);
                                  incrementalDom.attr('id', field3865Data.idFile);
                                  incrementalDom.attr('class', 'custom-control-input');
                                  incrementalDom.attr('type', 'checkbox');
                              incrementalDom.elementOpenEnd();
                              incrementalDom.elementClose('input');
                            } else {
                              incrementalDom.elementOpenStart('input');
                                  incrementalDom.attr('onclick', setSelectedResult);
                                  incrementalDom.attr('value', field3865Data.all);
                                  incrementalDom.attr('id', field3865Data.idFile);
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
                            incrementalDom.attr('class', 'inline-item');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('img');
                              incrementalDom.attr('width', '128');
                              incrementalDom.attr('style', 'max-height: 256px;max-width: 100%');
                              incrementalDom.attr('alt', 'Not Image');
                              incrementalDom.attr('src', 'http://localhost:8080' + field3865Data.imageThumbnail);
                          incrementalDom.elementOpenEnd();
                          incrementalDom.elementClose('img');
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
                            soyIdom.print(field3865Data.filename);
                          incrementalDom.elementClose('a');
                        incrementalDom.elementClose('h4');
                        incrementalDom.elementOpenStart('p');
                            incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field3865Data.path);
                        incrementalDom.elementClose('p');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('li');
                  }
              }
            incrementalDom.elementClose('ul');
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
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('aria-labelledby', 'Close');
                incrementalDom.attr('onclick', closeNewDocument);
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
                    var field3901List = foldersDocuments;
                    var field3901ListLen = field3901List.length;
                    for (var field3901Index = 0; field3901Index < field3901ListLen; field3901Index++) {
                        var field3901Data = field3901List[field3901Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field3901Data.folderId);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field3901Data.nameFolder);
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
 *  itemsResultSelected: (?),
 *  itemsAsociated: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DocumentUI.render';
}

exports.render.params = ["id","label","isOpenSelect","openSelectDocument","closeSelectDocument","saveSelectDocument","deleteDocument","changeFolder","searchByName","isOpenNew","openNewDocument","closeNewDocument","saveNewDocument","fileNew","setSelectedResult","itemsResult","foldersDocuments","itemsResultSelected","itemsAsociated","brandSelected","hotelSelected","contextPath"];
exports.render.types = {"id":"any","label":"?","isOpenSelect":"bool","openSelectDocument":"?","closeSelectDocument":"?","saveSelectDocument":"?","deleteDocument":"?","changeFolder":"?","searchByName":"?","isOpenNew":"bool","openNewDocument":"?","closeNewDocument":"?","saveNewDocument":"?","fileNew":"?","setSelectedResult":"?","itemsResult":"list<?>","foldersDocuments":"list<?>","itemsResultSelected":"?","itemsAsociated":"?","brandSelected":"string","hotelSelected":"string","contextPath":"string"};
templates = exports;
return exports;

});

class DocumentUI extends Component {}
Soy.register(DocumentUI, templates);
export { DocumentUI, templates };
export default templates;
/* jshint ignore:end */
