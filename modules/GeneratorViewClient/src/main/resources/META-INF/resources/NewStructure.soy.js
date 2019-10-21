/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from NewStructure.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace NewStructure.
 * @public
 */

goog.module('NewStructure.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias4 = Soy.getTemplate('CheckBoxUI.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('DateUI.incrementaldom', 'render');

var $templateAlias7 = Soy.getTemplate('RadioUI.incrementaldom', 'render');

var $templateAlias8 = Soy.getTemplate('SelectUI.incrementaldom', 'render');

var $templateAlias6 = Soy.getTemplate('TextAreaUI.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('TextLocalizableUI.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('TitleLocalizableUI.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ViewNested.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  structureId: (!goog.soy.data.SanitizedContent|string),
 *  isOnLoad: boolean,
 *  data: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  name: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  categoryBrands: !Array<?>,
 *  hotelsXBrands: !Array<?>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  selectTempl: !Array<?>,
 *  closeOpenTab: (?),
 *  changeLanguage: (?),
 *  changeBrand: (?),
 *  changeHotels: (?),
 *  saveSelectPath: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  brandIdSelected: (?),
 *  hotelIdSelected: (?),
 *  handleChangeValue: (?),
 *  handleRemoveValue: (?),
 *  handleRemoveItem: (?),
 *  saveStructure: (?),
 *  cancelStructure: (?),
 *  handleChangeValueTempl: (?),
 *  msgErrorPath: (?),
 *  msgInfo: (?),
 *  closeOpenTabCategory: (?),
 *  itemsCategories: (!Array<?>|null|undefined),
 *  itemsCategoriesKeys: (!Array<?>|null|undefined),
 *  itemsMarcasKeys: (!Array<?>|null|undefined),
 *  setSelectedCategories: (?),
 *  itemsCategoriesKeysRender: (?),
 *  itemsCategoriesSelected: (?),
 *  removeSelectedCategory: (?),
 *  handlerShowCategory: (?),
 *  handlerCloseCategory: (?),
 *  showCategory: (boolean|null|undefined),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>
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
  /** @type {boolean} */
  var isOnLoad = soy.asserts.assertType(goog.isBoolean(opt_data.isOnLoad) || opt_data.isOnLoad === 1 || opt_data.isOnLoad === 0, 'isOnLoad', opt_data.isOnLoad, 'boolean');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,?>} */
  var data = soy.asserts.assertType(goog.isObject(opt_data.data), 'data', opt_data.data, '!Object<!goog.soy.data.SanitizedContent|string,?>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,?>} */
  var name = soy.asserts.assertType(goog.isObject(opt_data.name), 'name', opt_data.name, '!Object<!goog.soy.data.SanitizedContent|string,?>');
  /** @type {!Array<?>} */
  var categoryBrands = soy.asserts.assertType(goog.isArray(opt_data.categoryBrands), 'categoryBrands', opt_data.categoryBrands, '!Array<?>');
  /** @type {!Array<?>} */
  var hotelsXBrands = soy.asserts.assertType(goog.isArray(opt_data.hotelsXBrands), 'hotelsXBrands', opt_data.hotelsXBrands, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<?>} */
  var selectTempl = soy.asserts.assertType(goog.isArray(opt_data.selectTempl), 'selectTempl', opt_data.selectTempl, '!Array<?>');
  /** @type {?} */
  var closeOpenTab = opt_data.closeOpenTab;
  /** @type {?} */
  var changeLanguage = opt_data.changeLanguage;
  /** @type {?} */
  var changeBrand = opt_data.changeBrand;
  /** @type {?} */
  var changeHotels = opt_data.changeHotels;
  /** @type {?} */
  var saveSelectPath = opt_data.saveSelectPath;
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
  var handleRemoveItem = opt_data.handleRemoveItem;
  /** @type {?} */
  var saveStructure = opt_data.saveStructure;
  /** @type {?} */
  var cancelStructure = opt_data.cancelStructure;
  /** @type {?} */
  var handleChangeValueTempl = opt_data.handleChangeValueTempl;
  /** @type {?} */
  var msgErrorPath = opt_data.msgErrorPath;
  /** @type {?} */
  var msgInfo = opt_data.msgInfo;
  /** @type {?} */
  var closeOpenTabCategory = opt_data.closeOpenTabCategory;
  /** @type {!Array<?>|null|undefined} */
  var itemsCategories = soy.asserts.assertType(opt_data.itemsCategories == null || goog.isArray(opt_data.itemsCategories), 'itemsCategories', opt_data.itemsCategories, '!Array<?>|null|undefined');
  /** @type {!Array<?>|null|undefined} */
  var itemsCategoriesKeys = soy.asserts.assertType(opt_data.itemsCategoriesKeys == null || goog.isArray(opt_data.itemsCategoriesKeys), 'itemsCategoriesKeys', opt_data.itemsCategoriesKeys, '!Array<?>|null|undefined');
  /** @type {!Array<?>|null|undefined} */
  var itemsMarcasKeys = soy.asserts.assertType(opt_data.itemsMarcasKeys == null || goog.isArray(opt_data.itemsMarcasKeys), 'itemsMarcasKeys', opt_data.itemsMarcasKeys, '!Array<?>|null|undefined');
  /** @type {?} */
  var setSelectedCategories = opt_data.setSelectedCategories;
  /** @type {?} */
  var itemsCategoriesKeysRender = opt_data.itemsCategoriesKeysRender;
  /** @type {?} */
  var itemsCategoriesSelected = opt_data.itemsCategoriesSelected;
  /** @type {?} */
  var removeSelectedCategory = opt_data.removeSelectedCategory;
  /** @type {?} */
  var handlerShowCategory = opt_data.handlerShowCategory;
  /** @type {?} */
  var handlerCloseCategory = opt_data.handlerCloseCategory;
  /** @type {boolean|null|undefined} */
  var showCategory = soy.asserts.assertType(opt_data.showCategory == null || (goog.isBoolean(opt_data.showCategory) || opt_data.showCategory === 1 || opt_data.showCategory === 0), 'showCategory', opt_data.showCategory, 'boolean|null|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>} */
  var collapseInfo = soy.asserts.assertType(goog.isObject(opt_data.collapseInfo), 'collapseInfo', opt_data.collapseInfo, '!Object<!goog.soy.data.SanitizedContent|string,boolean>');
  var isShowCategory__soy555 = (showCategory != null) ? showCategory : false;
  var selectedLanguage__soy557 = data['selectedLanguage'];
  var defaultLanguage__soy559 = data['defaultLanguage'];
  var availableLanguageIds__soy561 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy563 = data['availableLanguageId-style'];
  var structureIdHotel__soy565 = '35835';
  var structureIdBrand__soy567 = '35912';
  var structureIdRate__soy569 = '35796';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    if (msgInfo) {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'alert alert-info');
          incrementalDom.attr('role', 'alert');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'alert-indicator');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('svg');
              incrementalDom.attr('class', 'lexicon-icon lexicon-icon-info-circle');
              incrementalDom.attr('focusable', 'false');
              incrementalDom.attr('role', 'presentation');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('use');
                incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#info-circle');
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('use');
          incrementalDom.elementClose('svg');
        incrementalDom.elementClose('span');
        incrementalDom.elementOpenStart('strong');
            incrementalDom.attr('class', 'lead');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Aviso:');
        incrementalDom.elementClose('strong');
        soyIdom.print(msgInfo);
      incrementalDom.elementClose('div');
    }
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'claySmallModalDlg');
        incrementalDom.attr('id', 'claySmallModal1');
        incrementalDom.attr('class', 'modal ' + (isOnLoad ? 'show in' : ''));
        incrementalDom.attr('style', isOnLoad ? '' : 'display: none');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog modal-sm');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'claySmallModalDlg');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Seleccione');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'container-fluid');
            incrementalDom.elementOpenEnd();
              if (structureId == structureIdBrand__soy567) {
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('input');
                      incrementalDom.attr('id', 'txtCodeBrand');
                      incrementalDom.attr('class', 'form-control');
                      incrementalDom.attr('data-onkeyup', 'handleChangeBrand');
                      incrementalDom.attr('style', 'text-transform: uppercase');
                      incrementalDom.attr('placeholder', 'Ingrese el codigo de la marca');
                      incrementalDom.attr('type', 'text');
                  incrementalDom.elementOpenEnd();
                  incrementalDom.elementClose('input');
                incrementalDom.elementClose('div');
              } else if (structureId == structureIdRate__soy569) {
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('select');
                      incrementalDom.attr('multiple', '');
                      incrementalDom.attr('onchange', changeBrand);
                      incrementalDom.attr('class', 'form-control');
                      incrementalDom.attr('id', 'brandSelect');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('option');
                        incrementalDom.attr('disabled', '');
                        incrementalDom.attr('selected', '');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.text('Selecciona una Marca');
                    incrementalDom.elementClose('option');
                    var field597List = categoryBrands;
                    var field597ListLen = field597List.length;
                    for (var field597Index = 0; field597Index < field597ListLen; field597Index++) {
                        var field597Data = field597List[field597Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field597Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field597Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('div');
              } else {
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('select');
                      incrementalDom.attr('onchange', changeBrand);
                      incrementalDom.attr('class', 'form-control');
                      incrementalDom.attr('id', 'brandSelect');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('option');
                        incrementalDom.attr('disabled', '');
                        incrementalDom.attr('selected', '');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.text('Selecciona una Marca');
                    incrementalDom.elementClose('option');
                    var field609List = categoryBrands;
                    var field609ListLen = field609List.length;
                    for (var field609Index = 0; field609Index < field609ListLen; field609Index++) {
                        var field609Data = field609List[field609Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field609Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field609Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  if (structureId == structureIdHotel__soy565) {
                    incrementalDom.elementOpenStart('input');
                        incrementalDom.attr('id', 'txtCodeHotel');
                        incrementalDom.attr('disabled', '');
                        incrementalDom.attr('class', 'form-control');
                        incrementalDom.attr('data-onkeyup', 'handleChangeCode');
                        incrementalDom.attr('style', 'text-transform: uppercase');
                        incrementalDom.attr('placeholder', 'Ingrese el codigo de hotel');
                        incrementalDom.attr('type', 'text');
                    incrementalDom.elementOpenEnd();
                    incrementalDom.elementClose('input');
                  } else {
                    incrementalDom.elementOpenStart('select');
                        incrementalDom.attr('onchange', changeHotels);
                        incrementalDom.attr('class', 'form-control');
                        incrementalDom.attr('id', 'hotelSelect');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('option');
                          incrementalDom.attr('disabled', '');
                          incrementalDom.attr('selected', '');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.text('Selecciona un Hotel');
                      incrementalDom.elementClose('option');
                      var field624List = hotelsXBrands;
                      var field624ListLen = field624List.length;
                      for (var field624Index = 0; field624Index < field624ListLen; field624Index++) {
                          var field624Data = field624List[field624Index];
                          incrementalDom.elementOpenStart('option');
                              incrementalDom.attr('value', field624Data.key);
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field624Data.category);
                          incrementalDom.elementClose('option');
                        }
                    incrementalDom.elementClose('select');
                  }
                incrementalDom.elementClose('div');
              }
              if ((msgErrorPath != null)) {
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'alert alert-danger');
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
                  soyIdom.print(msgErrorPath);
                incrementalDom.elementClose('div');
              }
              incrementalDom.elementOpenStart('span');
                  incrementalDom.attr('id', 'loadingSelectPath');
                  incrementalDom.attr('aria-hidden', 'true');
                  incrementalDom.attr('class', '');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('span');
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
                    incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('id', 'btnSelectPath');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('disabled', '');
                      incrementalDom.attr('onclick', saveSelectPath);
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Seleccionar');
                  incrementalDom.elementClose('button');
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-secondary');
                      incrementalDom.attr('onclick', 'window.history.go(-1); return false;');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
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
            incrementalDom.attr('onclick', closeOpenTab);
            incrementalDom.attr('aria-controls', 'accordionPrincipalCollapse');
            incrementalDom.attr('aria-expanded', 'true');
            incrementalDom.attr('class', 'collapse-icon sheet-subtitle');
            incrementalDom.attr('data-toggle', 'collapse');
            incrementalDom.attr('href', '#accordionPrincipalCollapse');
            incrementalDom.attr('id', 'accordionPrincipalHeading');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpen('span');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'sheet-header');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('h2');
                  incrementalDom.attr('class', 'sheet-title');
              incrementalDom.elementOpenEnd();
                soyIdom.print(name[defaultLanguage__soy559]);
              incrementalDom.elementClose('h2');
            incrementalDom.elementClose('div');
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
            incrementalDom.attr('aria-labelledby', 'accordionPrincipalHeading');
            incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['accordionPrincipalHeading']) ? '' : 'show'));
            incrementalDom.attr('id', 'accordionPrincipalCollapse');
            incrementalDom.attr('role', 'tabpanel');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'panel-body');
          incrementalDom.elementOpenEnd();
            $templateAlias1({id: 'title_principal', label: 'Titulo*', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy561, defaultLanguage: defaultLanguage__soy559, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy563, selectedLanguage: selectedLanguage__soy557}, null, opt_ijData);
            $templateAlias1({id: 'description_prinipal', label: 'Resumen', placeholder: 'Resumen', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy561, defaultLanguage: defaultLanguage__soy559, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy563, selectedLanguage: selectedLanguage__soy557}, null, opt_ijData);
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpen('div');
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
                incrementalDom.attr('onclick', saveStructure);
                incrementalDom.attr('class', 'btn btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Guardar');
            incrementalDom.elementClose('button');
            incrementalDom.text('\u00A0\u00A0');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', cancelStructure);
                incrementalDom.attr('class', 'btn btn-secondary');
                incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Cancelar');
            incrementalDom.elementClose('button');
            incrementalDom.text('\u00A0\u00A0');
          incrementalDom.elementClose('div');
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
              incrementalDom.attr('onclick', closeOpenTab);
              incrementalDom.attr('aria-controls', 'accordionGeneralCollapse');
              incrementalDom.attr('aria-expanded', 'false');
              incrementalDom.attr('class', 'collapse-icon sheet-subtitle collapsed');
              incrementalDom.attr('data-toggle', 'collapse');
              incrementalDom.attr('href', '#accordionGeneralCollapse');
              incrementalDom.attr('id', 'accordionGeneralHeading');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('span');
              incrementalDom.text('Generales');
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
              incrementalDom.attr('aria-labelledby', 'accordionGeneralHeading');
              incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['accordionGeneralHeading']) ? '' : 'show'));
              incrementalDom.attr('id', 'accordionGeneralCollapse');
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
                  var field800List = data['nestedFields'];
                  var field800ListLen = field800List.length;
    for (var field800Index = 0; field800Index < field800ListLen; field800Index++) {
        var field800Data = field800List[field800Index];
        if (field800Data['type'] == 'ddm-separator') {
          if (field800Index > 0 && data['nestedFields'][field800Index - 1]['type'] != 'ddm-separator') {
            incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          }
          $templateAlias2({id: 'id_' + field800Index, structureId: structureId, name: field800Data['name'], path: field800Data['name'], data: field800Data['nestedFields'], title: field800Data['label'], repeatable: field800Data['repeatable'], availableLanguageIds: availableLanguageIds__soy561, defaultLanguage: selectedLanguage__soy557, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, hotelIdSelected: hotelIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field800Data['type'] == 'text') {
          $templateAlias3({id: field800Data['name'], type: field800Data['type'], path: field800Data['name'], localizable: field800Data['localizable'], labels: field800Data['label'], placeholder: field800Data['tip'], values: field800Data['values'], repeatable: field800Data['repeatable'], required: field800Data['required'], contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy561, defaultLanguageId: selectedLanguage__soy557, handleChangeValue: handleChangeValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field800Data['type'] == 'checkbox') {
          $templateAlias4({id: field800Data['name'], label: field800Data['label'], path: field800Data['name'], values: field800Data['values'], required: field800Data['required'], defaultLanguageId: selectedLanguage__soy557, handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field800Data['type'] == 'ddm-date') {
          $templateAlias5({id: field800Data['name'], values: field800Data['values'], required: field800Data['required'], label: field800Data['label'][defaultLanguage__soy559], placeholder: field800Data['tip'][defaultLanguage__soy559], defaultLanguageId: selectedLanguage__soy557, path: field800Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field800Data['type'] == 'ddm-text-html' || field800Data['type'] == 'textarea') {
          $templateAlias6({id: field800Data['name'], type: field800Data['type'], required: field800Data['required'], label: field800Data['label'][selectedLanguage__soy557], placeholder: field800Data['tip'][selectedLanguage__soy557], availableLanguageIds: availableLanguageIds__soy561, defaultLanguageId: selectedLanguage__soy557, path: field800Data['name'], values: field800Data['values'], handleChangeValue: handleChangeValue, contextPath: contextPath}, null, opt_ijData);
        } else if (field800Data['type'] == 'radio') {
          $templateAlias7({id: field800Data['name'], values: field800Data['values'], required: field800Data['required'], label: field800Data['label'][selectedLanguage__soy557], defaultLanguageId: selectedLanguage__soy557, options: field800Data['options'], path: field800Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field800Data['type'] == 'select') {
          $templateAlias8({id: field800Data['name'], values: field800Data['values'], required: field800Data['required'], label: field800Data['label'][selectedLanguage__soy557], defaultLanguageId: selectedLanguage__soy557, options: field800Data['options'], path: field800Data['name'], multiple: field800Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else {
          soyIdom.print(field800Data['type']);
          incrementalDom.text('--');
          soyIdom.print(field800Data['name']);
          incrementalDom.text('--Ninguno');
          incrementalDom.elementOpen('br');
          incrementalDom.elementClose('br');
        }
        incrementalDom.elementOpen('div');
          incrementalDom.text('\u00A0\u00A0');
        incrementalDom.elementClose('div');
      }
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
            incrementalDom.attr('aria-controls', 'accordionAditionalCollapse');
            incrementalDom.attr('aria-expanded', 'true');
            incrementalDom.attr('class', 'collapse-icon sheet-subtitle');
            incrementalDom.attr('data-toggle', 'collapse');
            incrementalDom.attr('href', '#accordionAditionalCollapse');
            incrementalDom.attr('id', 'accordionAditionalHeading');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpen('span');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'sheet-header');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('h3');
                  incrementalDom.attr('class', 'sheet-title');
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Metadatos');
              incrementalDom.elementClose('h3');
            incrementalDom.elementClose('div');
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
            incrementalDom.attr('aria-labelledby', 'accordionAditionalHeading');
            incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['accordionAditionalHeading']) ? '' : 'show'));
            incrementalDom.attr('id', 'accordionAditionalCollapse');
            incrementalDom.attr('role', 'tabpanel');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'panel-body');
          incrementalDom.elementOpenEnd();
            $templateAlias8({id: 'selectTemplate', label: 'Selecciona un template', defaultLanguageId: selectedLanguage__soy557, options: selectTempl, path: 'selectTemplate', handleChangeValue: handleChangeValueTempl}, null, opt_ijData);
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
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
            incrementalDom.attr('onclick', closeOpenTab);
            incrementalDom.attr('aria-controls', 'accordionCatCollapse');
            incrementalDom.attr('aria-expanded', 'false');
            incrementalDom.attr('class', 'collapse-icon sheet-subtitle');
            incrementalDom.attr('data-toggle', 'collapse');
            incrementalDom.attr('href', '#accordionCatCollapse');
            incrementalDom.attr('id', 'accordionCatHeading');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpen('span');
            incrementalDom.text('Categorias');
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
            incrementalDom.attr('aria-labelledby', 'accordionCatHeading');
            incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['accordionCatHeading']) ? '' : 'show'));
            incrementalDom.attr('id', 'accordionCatCollapse');
            incrementalDom.attr('role', 'tabpanel');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'panel-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpen('div');
              if (itemsCategoriesKeysRender) {
                if (itemsCategoriesSelected) {
                  var key844List = itemsCategoriesKeysRender;
                  var key844ListLen = key844List.length;
                  for (var key844Index = 0; key844Index < key844ListLen; key844Index++) {
                      var key844Data = key844List[key844Index];
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('id', key844Data + ',S');
                          incrementalDom.attr('style', 'font-size: 1.75rem;');
                          incrementalDom.attr('class', 'label label-dismissible label-secondary');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-expand');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(itemsCategoriesSelected[key844Data]);
                        incrementalDom.elementClose('span');
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-after');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('button');
                              incrementalDom.attr('id', key844Data + ',B');
                              incrementalDom.attr('aria-label', 'Close');
                              incrementalDom.attr('class', 'close');
                              incrementalDom.attr('type', 'button');
                              incrementalDom.attr('onclick', removeSelectedCategory);
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
                        incrementalDom.elementClose('span');
                      incrementalDom.elementClose('span');
                    }
                }
              }
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('style', 'padding-bottom: 15px;padding-top: 15px');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('button');
                  incrementalDom.attr('type', 'button');
                  incrementalDom.attr('onclick', handlerShowCategory);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Agregar Categoria');
              incrementalDom.elementClose('button');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('aria-labelledby', 'claySmallModalDlgCategory');
                incrementalDom.attr('id', 'claySmallModalCategory');
                incrementalDom.attr('class', 'modal ' + (isShowCategory__soy555 ? 'show in' : ''));
                incrementalDom.attr('style', isShowCategory__soy555 ? '' : 'display: none');
                incrementalDom.attr('role', 'dialog');
                incrementalDom.attr('tabindex', '-1');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'modal-info modal-dialog modal-lg');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'modal-content');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'modal-header');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('div');
                        incrementalDom.attr('class', 'modal-title');
                        incrementalDom.attr('id', 'claySmallModalDlgCategory');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.text('Categorias');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'modal-body inline-scroller');
                      incrementalDom.attr('style', 'min-height: 600px;max-height: 600px');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('div');
                        incrementalDom.attr('class', 'container-fluid');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpen('div');
                        if (itemsCategoriesKeysRender) {
                          if (itemsCategoriesSelected) {
                            var key872List = itemsCategoriesKeysRender;
                            var key872ListLen = key872List.length;
                            for (var key872Index = 0; key872Index < key872ListLen; key872Index++) {
                                var key872Data = key872List[key872Index];
                                incrementalDom.elementOpenStart('span');
                                    incrementalDom.attr('id', key872Data + ',S');
                                    incrementalDom.attr('style', 'font-size: 1.75rem;');
                                    incrementalDom.attr('class', 'label label-dismissible label-secondary');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'label-item label-item-expand');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(itemsCategoriesSelected[key872Data]);
                                  incrementalDom.elementClose('span');
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'label-item label-item-after');
                                  incrementalDom.elementOpenEnd();
                                    incrementalDom.elementOpenStart('button');
                                        incrementalDom.attr('id', key872Data + ',B');
                                        incrementalDom.attr('aria-label', 'Close');
                                        incrementalDom.attr('class', 'close');
                                        incrementalDom.attr('type', 'button');
                                        incrementalDom.attr('onclick', removeSelectedCategory);
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
                                  incrementalDom.elementClose('span');
                                incrementalDom.elementClose('span');
                              }
                          }
                        }
                      incrementalDom.elementClose('div');
                      incrementalDom.elementOpenStart('div');
                          incrementalDom.attr('class', 'table-responsive');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('table');
                            incrementalDom.attr('class', 'table table-autofit table-list');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpen('tbody');
                            if (itemsCategories) {
                              if (itemsCategoriesKeys) {
                                var key1044List = itemsCategoriesKeys;
                                var key1044ListLen = key1044List.length;
                                for (var key1044Index = 0; key1044Index < key1044ListLen; key1044Index++) {
                                    var key1044Data = key1044List[key1044Index];
                                    if (key1044Index == 0) {
                                        incrementalDom.elementOpenStart('tr');
                                          incrementalDom.attr('valign', 'top');
                                      incrementalDom.elementOpenEnd();
                                      }
                                      if ((key1044Index + 3) % 3 == 0 && !(key1044Index == 0)) {
                                        incrementalDom.elementClose('tr');
                                      incrementalDom.elementOpenStart('tr');
                                          incrementalDom.attr('valign', 'top');
                                      incrementalDom.elementOpenEnd();
                                      }
                                      incrementalDom.elementOpenStart('td');
                                          incrementalDom.attr('class', 'table-cell-expand');
                                      incrementalDom.elementOpenEnd();
                                        if (key1044Data.name != 'Marcas') {
                                          incrementalDom.elementOpenStart('nav');
                                              incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                              incrementalDom.attr('style', 'max-width: 70%');
                                          incrementalDom.elementOpenEnd();
                                            incrementalDom.elementOpenStart('div');
                                                incrementalDom.attr('class', 'collapse menubar-collapse');
                                                incrementalDom.attr('id', 'menubarVertical' + key1044Data.nameFormat + 'Collapse01');
                                            incrementalDom.elementOpenEnd();
                                              incrementalDom.elementOpenStart('ul');
                                                  incrementalDom.attr('class', 'nav nav-nested');
                                              incrementalDom.elementOpenEnd();
                                                incrementalDom.elementOpenStart('div');
                                                    incrementalDom.attr('class', 'panel');
                                                incrementalDom.elementOpenEnd();
                                                  incrementalDom.elementOpenStart('li');
                                                      incrementalDom.attr('class', 'nav-item');
                                                  incrementalDom.elementOpenEnd();
                                                    incrementalDom.elementOpenStart('a');
                                                        incrementalDom.attr('onclick', closeOpenTabCategory);
                                                        incrementalDom.attr('id', key1044Data.nameFormat + ',OC');
                                                        incrementalDom.attr('aria-controls', 'menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('aria-expanded', 'false');
                                                        incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                        incrementalDom.attr('data-toggle', 'collapse');
                                                        incrementalDom.attr('href', '#menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('role', 'button');
                                                    incrementalDom.elementOpenEnd();
                                                      soyIdom.print(key1044Data.name);
                                                      incrementalDom.elementOpenStart('span');
                                                          incrementalDom.attr('class', 'collapse-icon-closed');
                                                      incrementalDom.elementOpenEnd();
                                                        incrementalDom.elementOpenStart('svg');
                                                            incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-right');
                                                            incrementalDom.attr('focusable', 'false');
                                                            incrementalDom.attr('role', 'presentation');
                                                        incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementOpenStart('use');
                                                              incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-right');
                                                          incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementClose('use');
                                                        incrementalDom.elementClose('svg');
                                                      incrementalDom.elementClose('span');
                                                      incrementalDom.elementOpenStart('span');
                                                          incrementalDom.attr('class', 'collapse-icon-open');
                                                      incrementalDom.elementOpenEnd();
                                                        incrementalDom.elementOpenStart('svg');
                                                            incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-bottom');
                                                            incrementalDom.attr('focusable', 'false');
                                                            incrementalDom.attr('role', 'presentation');
                                                        incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementOpenStart('use');
                                                              incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-bottom');
                                                          incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementClose('use');
                                                        incrementalDom.elementClose('svg');
                                                      incrementalDom.elementClose('span');
                                                    incrementalDom.elementClose('a');
                                                    incrementalDom.elementOpenStart('div');
                                                        incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1044Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                        incrementalDom.attr('id', 'menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('style', 'max-height: 300px;overflow-x: scroll;padding-right: 15px;');
                                                    incrementalDom.elementOpenEnd();
                                                      var field952List = itemsCategories;
                                                      var field952ListLen = field952List.length;
                                                      for (var field952Index = 0; field952Index < field952ListLen; field952Index++) {
                                                          var field952Data = field952List[field952Index];
                                                          if (field952Data[key1044Data.name]) {
                                                            incrementalDom.elementOpenStart('ul');
                                                                incrementalDom.attr('id', key1044Data.nameFormat + 'UL');
                                                                incrementalDom.attr('style', 'display:none;');
                                                                incrementalDom.attr('class', 'nav nav-stacked');
                                                            incrementalDom.elementOpenEnd();
                                                              var value948List = field952Data[key1044Data.name];
                                                              var value948ListLen = value948List.length;
                                                              for (var value948Index = 0; value948Index < value948ListLen; value948Index++) {
                                                                  var value948Data = value948List[value948Index];
                                                                  if (value948Data.isMultiValue) {
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('a');
                                                                          incrementalDom.attr('id', value948Data.categoryId + ',' + value948Data.parentCategoryId + ',' + value948Data.parentName + ',T');
                                                                          incrementalDom.attr('class', 'nav-link');
                                                                          incrementalDom.attr('style', 'text-decoration: none;');
                                                                          incrementalDom.attr('onclick', setSelectedCategories);
                                                                          incrementalDom.attr('href', '#1');
                                                                      incrementalDom.elementOpenEnd();
                                                                        soyIdom.print(value948Data.name);
                                                                      incrementalDom.elementClose('a');
                                                                    incrementalDom.elementClose('li');
                                                                  } else {
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('a');
                                                                          incrementalDom.attr('id', value948Data.categoryId + ',' + value948Data.parentCategoryId + ',' + value948Data.parentName + ',F');
                                                                          incrementalDom.attr('onclick', setSelectedCategories);
                                                                          incrementalDom.attr('style', 'text-decoration: none;');
                                                                          incrementalDom.attr('class', 'nav-link');
                                                                          incrementalDom.attr('href', '#1');
                                                                      incrementalDom.elementOpenEnd();
                                                                        soyIdom.print(value948Data.name);
                                                                      incrementalDom.elementClose('a');
                                                                    incrementalDom.elementClose('li');
                                                                  }
                                                                }
                                                            incrementalDom.elementClose('ul');
                                                          }
                                                        }
                                                    incrementalDom.elementClose('div');
                                                  incrementalDom.elementClose('li');
                                                incrementalDom.elementClose('div');
                                              incrementalDom.elementClose('ul');
                                            incrementalDom.elementClose('div');
                                          incrementalDom.elementClose('nav');
                                        } else {
                                          var field1036List = itemsCategories;
                                          var field1036ListLen = field1036List.length;
                                          for (var field1036Index = 0; field1036Index < field1036ListLen; field1036Index++) {
                                              var field1036Data = field1036List[field1036Index];
                                              if (field1036Data[key1044Data.name]) {
                                                if (itemsMarcasKeys) {
                                                  incrementalDom.elementOpenStart('nav');
                                                      incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                                      incrementalDom.attr('style', 'max-width: 70%');
                                                  incrementalDom.elementOpenEnd();
                                                    incrementalDom.elementOpenStart('div');
                                                        incrementalDom.attr('class', 'collapse menubar-collapse');
                                                        incrementalDom.attr('id', 'menubarVertical' + key1044Data.nameFormat + 'Collapse01');
                                                    incrementalDom.elementOpenEnd();
                                                      incrementalDom.elementOpenStart('ul');
                                                          incrementalDom.attr('class', 'nav nav-nested');
                                                      incrementalDom.elementOpenEnd();
                                                        incrementalDom.elementOpenStart('div');
                                                            incrementalDom.attr('class', 'panel');
                                                        incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('onclick', closeOpenTabCategory);
                                                                incrementalDom.attr('id', key1044Data.nameFormat + ',OC');
                                                                incrementalDom.attr('aria-controls', 'menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('aria-expanded', 'false');
                                                                incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                                incrementalDom.attr('data-toggle', 'collapse');
                                                                incrementalDom.attr('href', '#menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('role', 'button');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(key1044Data.name);
                                                              incrementalDom.elementOpenStart('span');
                                                                  incrementalDom.attr('class', 'collapse-icon-closed');
                                                              incrementalDom.elementOpenEnd();
                                                                incrementalDom.elementOpenStart('svg');
                                                                    incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-right');
                                                                    incrementalDom.attr('focusable', 'false');
                                                                    incrementalDom.attr('role', 'presentation');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('use');
                                                                      incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-right');
                                                                  incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementClose('use');
                                                                incrementalDom.elementClose('svg');
                                                              incrementalDom.elementClose('span');
                                                              incrementalDom.elementOpenStart('span');
                                                                  incrementalDom.attr('class', 'collapse-icon-open');
                                                              incrementalDom.elementOpenEnd();
                                                                incrementalDom.elementOpenStart('svg');
                                                                    incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-bottom');
                                                                    incrementalDom.attr('focusable', 'false');
                                                                    incrementalDom.attr('role', 'presentation');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('use');
                                                                      incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-bottom');
                                                                  incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementClose('use');
                                                                incrementalDom.elementClose('svg');
                                                              incrementalDom.elementClose('span');
                                                            incrementalDom.elementClose('a');
                                                            incrementalDom.elementOpenStart('div');
                                                                incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1044Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                                incrementalDom.attr('id', 'menubarVertical' + key1044Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('style', 'max-height: 300px;overflow-x: scroll;padding-right: 15px;');
                                                            incrementalDom.elementOpenEnd();
                                                              incrementalDom.elementOpenStart('ul');
                                                                  incrementalDom.attr('id', key1044Data.nameFormat + 'UL');
                                                                  incrementalDom.attr('style', 'display:none;');
                                                                  incrementalDom.attr('class', 'nav nav-stacked');
                                                              incrementalDom.elementOpenEnd();
                                                                var key11031List = itemsMarcasKeys;
                                                                var key11031ListLen = key11031List.length;
                                                                for (var key11031Index = 0; key11031Index < key11031ListLen; key11031Index++) {
                                                                    var key11031Data = key11031List[key11031Index];
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('div');
                                                                          incrementalDom.attr('class', 'input-group');
                                                                      incrementalDom.elementOpenEnd();
                                                                        incrementalDom.elementOpenStart('div');
                                                                            incrementalDom.attr('class', 'input-group-inset-item custom-control custom-checkbox');
                                                                        incrementalDom.elementOpenEnd();
                                                                          incrementalDom.elementOpen('label');
                                                                            incrementalDom.elementOpenStart('input');
                                                                                incrementalDom.attr('onclick', setSelectedCategories);
                                                                                incrementalDom.attr('id', key11031Data.categoryId + ',' + key11031Data.parentCategoryId + ',' + key11031Data.parentName + ',T');
                                                                                incrementalDom.attr('class', 'custom-control-input');
                                                                                incrementalDom.attr('type', 'checkbox');
                                                                                incrementalDom.attr('title', key11031Data.name);
                                                                            incrementalDom.elementOpenEnd();
                                                                            incrementalDom.elementClose('input');
                                                                            incrementalDom.elementOpenStart('span');
                                                                                incrementalDom.attr('class', 'custom-control-label');
                                                                            incrementalDom.elementOpenEnd();
                                                                              incrementalDom.elementOpenStart('span');
                                                                                  incrementalDom.attr('class', 'custom-control-label-text sr-only');
                                                                              incrementalDom.elementOpenEnd();
                                                                                incrementalDom.text('select-items');
                                                                              incrementalDom.elementClose('span');
                                                                            incrementalDom.elementClose('span');
                                                                          incrementalDom.elementClose('label');
                                                                        incrementalDom.elementClose('div');
                                                                        incrementalDom.elementOpenStart('a');
                                                                            incrementalDom.attr('onclick', closeOpenTabCategory);
                                                                            incrementalDom.attr('id', key11031Data.nameFormat + ',OC');
                                                                            incrementalDom.attr('aria-controls', 'menubarVertical' + key11031Data.nameFormat + 'NestedCollapse02');
                                                                            incrementalDom.attr('aria-expanded', 'false');
                                                                            incrementalDom.attr('class', 'input-group-item collapsed collapse-icon nav-link');
                                                                            incrementalDom.attr('data-toggle', 'collapse');
                                                                            incrementalDom.attr('href', '#menubarVertical' + key11031Data.nameFormat + 'NestedCollapse02');
                                                                            incrementalDom.attr('role', 'button');
                                                                        incrementalDom.elementOpenEnd();
                                                                          soyIdom.print(key11031Data.name);
                                                                          incrementalDom.elementOpenStart('span');
                                                                              incrementalDom.attr('class', 'collapse-icon-closed');
                                                                          incrementalDom.elementOpenEnd();
                                                                            incrementalDom.elementOpenStart('svg');
                                                                                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-right');
                                                                                incrementalDom.attr('focusable', 'false');
                                                                                incrementalDom.attr('role', 'presentation');
                                                                            incrementalDom.elementOpenEnd();
                                                                              incrementalDom.elementOpenStart('use');
                                                                                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-right');
                                                                              incrementalDom.elementOpenEnd();
                                                                              incrementalDom.elementClose('use');
                                                                            incrementalDom.elementClose('svg');
                                                                          incrementalDom.elementClose('span');
                                                                          incrementalDom.elementOpenStart('span');
                                                                              incrementalDom.attr('class', 'collapse-icon-open');
                                                                          incrementalDom.elementOpenEnd();
                                                                            incrementalDom.elementOpenStart('svg');
                                                                                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-caret-bottom');
                                                                                incrementalDom.attr('focusable', 'false');
                                                                                incrementalDom.attr('role', 'presentation');
                                                                            incrementalDom.elementOpenEnd();
                                                                              incrementalDom.elementOpenStart('use');
                                                                                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#caret-bottom');
                                                                              incrementalDom.elementOpenEnd();
                                                                              incrementalDom.elementClose('use');
                                                                            incrementalDom.elementClose('svg');
                                                                          incrementalDom.elementClose('span');
                                                                        incrementalDom.elementClose('a');
                                                                      incrementalDom.elementClose('div');
                                                                      incrementalDom.elementOpenStart('div');
                                                                          incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key11031Data.nameFormat + 'Collapse02']) ? '' : 'show'));
                                                                          incrementalDom.attr('id', 'menubarVertical' + key11031Data.nameFormat + 'NestedCollapse02');
                                                                      incrementalDom.elementOpenEnd();
                                                                        incrementalDom.elementOpenStart('ul');
                                                                            incrementalDom.attr('id', key11031Data.nameFormat + 'UL');
                                                                            incrementalDom.attr('style', 'display:none;');
                                                                            incrementalDom.attr('class', 'nav nav-stacked');
                                                                        incrementalDom.elementOpenEnd();
                                                                          var key21028List = key11031Data.children;
                                                                          var key21028ListLen = key21028List.length;
                                                                          for (var key21028Index = 0; key21028Index < key21028ListLen; key21028Index++) {
                                                                              var key21028Data = key21028List[key21028Index];
                                                                              incrementalDom.elementOpenStart('li');
                                                                                  incrementalDom.attr('class', 'nav-item');
                                                                              incrementalDom.elementOpenEnd();
                                                                                incrementalDom.elementOpenStart('a');
                                                                                    incrementalDom.attr('id', key21028Data.categoryId + ',' + key21028Data.parentCategoryId + ',' + key21028Data.parentName + ',T');
                                                                                    incrementalDom.attr('class', 'nav-link');
                                                                                    incrementalDom.attr('style', 'text-decoration: none;');
                                                                                    incrementalDom.attr('onclick', setSelectedCategories);
                                                                                    incrementalDom.attr('href', '#1');
                                                                                incrementalDom.elementOpenEnd();
                                                                                  soyIdom.print(key21028Data.name);
                                                                                incrementalDom.elementClose('a');
                                                                              incrementalDom.elementClose('li');
                                                                            }
                                                                        incrementalDom.elementClose('ul');
                                                                      incrementalDom.elementClose('div');
                                                                    incrementalDom.elementClose('li');
                                                                  }
                                                              incrementalDom.elementClose('ul');
                                                            incrementalDom.elementClose('div');
                                                          incrementalDom.elementClose('li');
                                                        incrementalDom.elementClose('div');
                                                      incrementalDom.elementClose('ul');
                                                    incrementalDom.elementClose('div');
                                                  incrementalDom.elementClose('nav');
                                                }
                                              }
                                            }
                                        }
                                      incrementalDom.elementClose('td');
                                    if (key1044Index == key1044ListLen - 1) {
                                      incrementalDom.elementClose('tr');
                                    }
                                  }
                              }
                            }
                          incrementalDom.elementClose('tbody');
                        incrementalDom.elementClose('table');
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
                            incrementalDom.attr('data-dismiss', 'modal');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('button');
                              incrementalDom.attr('id', 'btnSelectPath');
                              incrementalDom.attr('class', 'btn btn-primary');
                              incrementalDom.attr('onclick', handlerCloseCategory);
                              incrementalDom.attr('type', 'button');
                          incrementalDom.elementOpenEnd();
                            incrementalDom.text('Terminar');
                          incrementalDom.elementClose('button');
                        incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpen('div');
              incrementalDom.elementOpen('h2');
                incrementalDom.text('Etiquetas');
              incrementalDom.elementClose('h2');
              incrementalDom.elementOpen('form');
                incrementalDom.elementOpenStart('input');
                    incrementalDom.attr('class', 'form-control');
                    incrementalDom.attr('id', 'input_Etiqueta');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('input');
              incrementalDom.elementClose('form');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
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
              incrementalDom.attr('onclick', saveStructure);
              incrementalDom.attr('class', 'btn btn-primary');
              incrementalDom.attr('type', 'button');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Guardar');
          incrementalDom.elementClose('button');
          incrementalDom.text('\u00A0\u00A0');
          incrementalDom.elementOpenStart('button');
              incrementalDom.attr('onclick', cancelStructure);
              incrementalDom.attr('class', 'btn btn-secondary');
              incrementalDom.attr('data-dismiss', 'modal');
              incrementalDom.attr('type', 'button');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Cancelar');
          incrementalDom.elementClose('button');
          incrementalDom.text('\u00A0\u00A0');
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
 *  isOnLoad: boolean,
 *  data: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  name: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  categoryBrands: !Array<?>,
 *  hotelsXBrands: !Array<?>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  selectTempl: !Array<?>,
 *  closeOpenTab: (?),
 *  changeLanguage: (?),
 *  changeBrand: (?),
 *  changeHotels: (?),
 *  saveSelectPath: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  brandIdSelected: (?),
 *  hotelIdSelected: (?),
 *  handleChangeValue: (?),
 *  handleRemoveValue: (?),
 *  handleRemoveItem: (?),
 *  saveStructure: (?),
 *  cancelStructure: (?),
 *  handleChangeValueTempl: (?),
 *  msgErrorPath: (?),
 *  msgInfo: (?),
 *  closeOpenTabCategory: (?),
 *  itemsCategories: (!Array<?>|null|undefined),
 *  itemsCategoriesKeys: (!Array<?>|null|undefined),
 *  itemsMarcasKeys: (!Array<?>|null|undefined),
 *  setSelectedCategories: (?),
 *  itemsCategoriesKeysRender: (?),
 *  itemsCategoriesSelected: (?),
 *  removeSelectedCategory: (?),
 *  handlerShowCategory: (?),
 *  handlerCloseCategory: (?),
 *  showCategory: (boolean|null|undefined),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'NewStructure.render';
}

exports.render.params = ["id","structureId","isOnLoad","data","name","categoryBrands","hotelsXBrands","contextPath","selectTempl","closeOpenTab","changeLanguage","changeBrand","changeHotels","saveSelectPath","brandSelected","hotelSelected","brandIdSelected","hotelIdSelected","handleChangeValue","handleRemoveValue","handleRemoveItem","saveStructure","cancelStructure","handleChangeValueTempl","msgErrorPath","msgInfo","closeOpenTabCategory","itemsCategories","itemsCategoriesKeys","itemsMarcasKeys","setSelectedCategories","itemsCategoriesKeysRender","itemsCategoriesSelected","removeSelectedCategory","handlerShowCategory","handlerCloseCategory","showCategory","collapseInfo"];
exports.render.types = {"id":"string","structureId":"string","isOnLoad":"bool","data":"map<string, ?>","name":"map<string, ?>","categoryBrands":"list<?>","hotelsXBrands":"list<?>","contextPath":"string","selectTempl":"list<?>","closeOpenTab":"?","changeLanguage":"?","changeBrand":"?","changeHotels":"?","saveSelectPath":"?","brandSelected":"string","hotelSelected":"string","brandIdSelected":"?","hotelIdSelected":"?","handleChangeValue":"?","handleRemoveValue":"?","handleRemoveItem":"?","saveStructure":"?","cancelStructure":"?","handleChangeValueTempl":"?","msgErrorPath":"?","msgInfo":"?","closeOpenTabCategory":"?","itemsCategories":"list<?>","itemsCategoriesKeys":"list<?>","itemsMarcasKeys":"list<?>","setSelectedCategories":"?","itemsCategoriesKeysRender":"?","itemsCategoriesSelected":"?","removeSelectedCategory":"?","handlerShowCategory":"?","handlerCloseCategory":"?","showCategory":"bool","collapseInfo":"map<string,bool>"};
templates = exports;
return exports;

});

class NewStructure extends Component {}
Soy.register(NewStructure, templates);
export { NewStructure, templates };
export default templates;
/* jshint ignore:end */
