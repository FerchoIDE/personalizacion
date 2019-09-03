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
  var isShowCategory__soy551 = (showCategory != null) ? showCategory : false;
  var selectedLanguage__soy553 = data['selectedLanguage'];
  var defaultLanguage__soy555 = data['defaultLanguage'];
  var availableLanguageIds__soy557 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy559 = data['availableLanguageId-style'];
  var structureIdHotel__soy561 = '35835';
  var structureIdBrand__soy563 = '35912';
  var structureIdRate__soy565 = '35796';
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
              if (structureId == structureIdBrand__soy563) {
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
              } else if (structureId == structureIdRate__soy565) {
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
                    var field593List = categoryBrands;
                    var field593ListLen = field593List.length;
                    for (var field593Index = 0; field593Index < field593ListLen; field593Index++) {
                        var field593Data = field593List[field593Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field593Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field593Data.category);
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
                    var field605List = categoryBrands;
                    var field605ListLen = field605List.length;
                    for (var field605Index = 0; field605Index < field605ListLen; field605Index++) {
                        var field605Data = field605List[field605Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field605Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field605Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  if (structureId == structureIdHotel__soy561) {
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
                      var field620List = hotelsXBrands;
                      var field620ListLen = field620List.length;
                      for (var field620Index = 0; field620Index < field620ListLen; field620Index++) {
                          var field620Data = field620List[field620Index];
                          incrementalDom.elementOpenStart('option');
                              incrementalDom.attr('value', field620Data.key);
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field620Data.category);
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
                soyIdom.print(name[defaultLanguage__soy555]);
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
            $templateAlias1({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy557, defaultLanguage: defaultLanguage__soy555, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy559, selectedLanguage: selectedLanguage__soy553}, null, opt_ijData);
            $templateAlias1({id: 'description_prinipal', label: 'Resumen', placeholder: 'Resumen', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy557, defaultLanguage: defaultLanguage__soy555, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy559, selectedLanguage: selectedLanguage__soy553}, null, opt_ijData);
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
                  var field790List = data['nestedFields'];
                  var field790ListLen = field790List.length;
    for (var field790Index = 0; field790Index < field790ListLen; field790Index++) {
        var field790Data = field790List[field790Index];
        if (field790Data['type'] == 'ddm-separator') {
          if (field790Index > 0 && data['nestedFields'][field790Index - 1]['type'] != 'ddm-separator') {
            incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          }
          $templateAlias2({id: 'id_' + field790Index, structureId: structureId, name: field790Data['name'], path: field790Data['name'], data: field790Data['nestedFields'], title: field790Data['label'], repeatable: field790Data['repeatable'], availableLanguageIds: availableLanguageIds__soy557, defaultLanguage: selectedLanguage__soy553, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, hotelIdSelected: hotelIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field790Data['type'] == 'text') {
          $templateAlias3({id: field790Data['name'], type: field790Data['type'], path: field790Data['name'], localizable: field790Data['localizable'], labels: field790Data['label'], placeholder: field790Data['tip'], values: field790Data['values'], repeatable: field790Data['repeatable'], contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy557, defaultLanguageId: selectedLanguage__soy553, handleChangeValue: handleChangeValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field790Data['type'] == 'checkbox') {
          $templateAlias4({id: field790Data['name'], label: field790Data['label'], path: field790Data['name'], values: field790Data['values'], defaultLanguageId: selectedLanguage__soy553, handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field790Data['type'] == 'ddm-date') {
          $templateAlias5({id: field790Data['name'], values: field790Data['values'], label: field790Data['label'][defaultLanguage__soy555], placeholder: field790Data['tip'][defaultLanguage__soy555], defaultLanguageId: selectedLanguage__soy553, path: field790Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field790Data['type'] == 'ddm-text-html' || field790Data['type'] == 'textarea') {
          $templateAlias6({id: field790Data['name'], type: field790Data['type'], label: field790Data['label'][selectedLanguage__soy553], placeholder: field790Data['tip'][selectedLanguage__soy553], availableLanguageIds: availableLanguageIds__soy557, defaultLanguageId: selectedLanguage__soy553, path: field790Data['name'], values: field790Data['values'], handleChangeValue: handleChangeValue, contextPath: contextPath}, null, opt_ijData);
        } else if (field790Data['type'] == 'radio') {
          $templateAlias7({id: field790Data['name'], values: field790Data['values'], label: field790Data['label'][selectedLanguage__soy553], defaultLanguageId: selectedLanguage__soy553, options: field790Data['options'], path: field790Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field790Data['type'] == 'select') {
          $templateAlias8({id: field790Data['name'], values: field790Data['values'], label: field790Data['label'][selectedLanguage__soy553], defaultLanguageId: selectedLanguage__soy553, options: field790Data['options'], path: field790Data['name'], multiple: field790Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else {
          soyIdom.print(field790Data['type']);
          incrementalDom.text('--');
          soyIdom.print(field790Data['name']);
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
            $templateAlias8({id: 'selectTemplate', label: 'Selecciona un template', defaultLanguageId: selectedLanguage__soy553, options: selectTempl, path: 'selectTemplate', handleChangeValue: handleChangeValueTempl}, null, opt_ijData);
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
                  var key834List = itemsCategoriesKeysRender;
                  var key834ListLen = key834List.length;
                  for (var key834Index = 0; key834Index < key834ListLen; key834Index++) {
                      var key834Data = key834List[key834Index];
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('id', key834Data + ',S');
                          incrementalDom.attr('style', 'font-size: 1.75rem;');
                          incrementalDom.attr('class', 'label label-dismissible label-secondary');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-expand');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(itemsCategoriesSelected[key834Data]);
                        incrementalDom.elementClose('span');
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-after');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('button');
                              incrementalDom.attr('id', key834Data + ',B');
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
                incrementalDom.attr('class', 'modal ' + (isShowCategory__soy551 ? 'show in' : ''));
                incrementalDom.attr('style', isShowCategory__soy551 ? '' : 'display: none');
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
                            var key862List = itemsCategoriesKeysRender;
                            var key862ListLen = key862List.length;
                            for (var key862Index = 0; key862Index < key862ListLen; key862Index++) {
                                var key862Data = key862List[key862Index];
                                incrementalDom.elementOpenStart('span');
                                    incrementalDom.attr('id', key862Data + ',S');
                                    incrementalDom.attr('style', 'font-size: 1.75rem;');
                                    incrementalDom.attr('class', 'label label-dismissible label-secondary');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'label-item label-item-expand');
                                  incrementalDom.elementOpenEnd();
                                    soyIdom.print(itemsCategoriesSelected[key862Data]);
                                  incrementalDom.elementClose('span');
                                  incrementalDom.elementOpenStart('span');
                                      incrementalDom.attr('class', 'label-item label-item-after');
                                  incrementalDom.elementOpenEnd();
                                    incrementalDom.elementOpenStart('button');
                                        incrementalDom.attr('id', key862Data + ',B');
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
                                var key1034List = itemsCategoriesKeys;
                                var key1034ListLen = key1034List.length;
                                for (var key1034Index = 0; key1034Index < key1034ListLen; key1034Index++) {
                                    var key1034Data = key1034List[key1034Index];
                                    if (key1034Index == 0) {
                                        incrementalDom.elementOpenStart('tr');
                                          incrementalDom.attr('valign', 'top');
                                      incrementalDom.elementOpenEnd();
                                      }
                                      if ((key1034Index + 3) % 3 == 0 && !(key1034Index == 0)) {
                                        incrementalDom.elementClose('tr');
                                      incrementalDom.elementOpenStart('tr');
                                          incrementalDom.attr('valign', 'top');
                                      incrementalDom.elementOpenEnd();
                                      }
                                      incrementalDom.elementOpenStart('td');
                                          incrementalDom.attr('class', 'table-cell-expand');
                                      incrementalDom.elementOpenEnd();
                                        if (key1034Data.name != 'Marcas') {
                                          incrementalDom.elementOpenStart('nav');
                                              incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                              incrementalDom.attr('style', 'max-width: 70%');
                                          incrementalDom.elementOpenEnd();
                                            incrementalDom.elementOpenStart('div');
                                                incrementalDom.attr('class', 'collapse menubar-collapse');
                                                incrementalDom.attr('id', 'menubarVertical' + key1034Data.nameFormat + 'Collapse01');
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
                                                        incrementalDom.attr('id', key1034Data.nameFormat + ',OC');
                                                        incrementalDom.attr('aria-controls', 'menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('aria-expanded', 'false');
                                                        incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                        incrementalDom.attr('data-toggle', 'collapse');
                                                        incrementalDom.attr('href', '#menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('role', 'button');
                                                    incrementalDom.elementOpenEnd();
                                                      soyIdom.print(key1034Data.name);
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
                                                        incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1034Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                        incrementalDom.attr('id', 'menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                        incrementalDom.attr('style', 'max-height: 300px;overflow-x: scroll;padding-right: 15px;');
                                                    incrementalDom.elementOpenEnd();
                                                      var field942List = itemsCategories;
                                                      var field942ListLen = field942List.length;
                                                      for (var field942Index = 0; field942Index < field942ListLen; field942Index++) {
                                                          var field942Data = field942List[field942Index];
                                                          if (field942Data[key1034Data.name]) {
                                                            incrementalDom.elementOpenStart('ul');
                                                                incrementalDom.attr('id', key1034Data.nameFormat + 'UL');
                                                                incrementalDom.attr('style', 'display:none;');
                                                                incrementalDom.attr('class', 'nav nav-stacked');
                                                            incrementalDom.elementOpenEnd();
                                                              var value938List = field942Data[key1034Data.name];
                                                              var value938ListLen = value938List.length;
                                                              for (var value938Index = 0; value938Index < value938ListLen; value938Index++) {
                                                                  var value938Data = value938List[value938Index];
                                                                  if (value938Data.isMultiValue) {
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('a');
                                                                          incrementalDom.attr('id', value938Data.categoryId + ',' + value938Data.parentCategoryId + ',' + value938Data.parentName + ',T');
                                                                          incrementalDom.attr('class', 'nav-link');
                                                                          incrementalDom.attr('style', 'text-decoration: none;');
                                                                          incrementalDom.attr('onclick', setSelectedCategories);
                                                                          incrementalDom.attr('href', '#1');
                                                                      incrementalDom.elementOpenEnd();
                                                                        soyIdom.print(value938Data.name);
                                                                      incrementalDom.elementClose('a');
                                                                    incrementalDom.elementClose('li');
                                                                  } else {
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('a');
                                                                          incrementalDom.attr('id', value938Data.categoryId + ',' + value938Data.parentCategoryId + ',' + value938Data.parentName + ',F');
                                                                          incrementalDom.attr('onclick', setSelectedCategories);
                                                                          incrementalDom.attr('style', 'text-decoration: none;');
                                                                          incrementalDom.attr('class', 'nav-link');
                                                                          incrementalDom.attr('href', '#1');
                                                                      incrementalDom.elementOpenEnd();
                                                                        soyIdom.print(value938Data.name);
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
                                          var field1026List = itemsCategories;
                                          var field1026ListLen = field1026List.length;
                                          for (var field1026Index = 0; field1026Index < field1026ListLen; field1026Index++) {
                                              var field1026Data = field1026List[field1026Index];
                                              if (field1026Data[key1034Data.name]) {
                                                if (itemsMarcasKeys) {
                                                  incrementalDom.elementOpenStart('nav');
                                                      incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                                      incrementalDom.attr('style', 'max-width: 70%');
                                                  incrementalDom.elementOpenEnd();
                                                    incrementalDom.elementOpenStart('div');
                                                        incrementalDom.attr('class', 'collapse menubar-collapse');
                                                        incrementalDom.attr('id', 'menubarVertical' + key1034Data.nameFormat + 'Collapse01');
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
                                                                incrementalDom.attr('id', key1034Data.nameFormat + ',OC');
                                                                incrementalDom.attr('aria-controls', 'menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('aria-expanded', 'false');
                                                                incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                                incrementalDom.attr('data-toggle', 'collapse');
                                                                incrementalDom.attr('href', '#menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('role', 'button');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(key1034Data.name);
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
                                                                incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1034Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                                incrementalDom.attr('id', 'menubarVertical' + key1034Data.nameFormat + 'NestedCollapse01');
                                                                incrementalDom.attr('style', 'max-height: 300px;overflow-x: scroll;padding-right: 15px;');
                                                            incrementalDom.elementOpenEnd();
                                                              incrementalDom.elementOpenStart('ul');
                                                                  incrementalDom.attr('id', key1034Data.nameFormat + 'UL');
                                                                  incrementalDom.attr('style', 'display:none;');
                                                                  incrementalDom.attr('class', 'nav nav-stacked');
                                                              incrementalDom.elementOpenEnd();
                                                                var key11021List = itemsMarcasKeys;
                                                                var key11021ListLen = key11021List.length;
                                                                for (var key11021Index = 0; key11021Index < key11021ListLen; key11021Index++) {
                                                                    var key11021Data = key11021List[key11021Index];
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
                                                                                incrementalDom.attr('id', key11021Data.categoryId + ',' + key11021Data.parentCategoryId + ',' + key11021Data.parentName + ',T');
                                                                                incrementalDom.attr('class', 'custom-control-input');
                                                                                incrementalDom.attr('type', 'checkbox');
                                                                                incrementalDom.attr('title', key11021Data.name);
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
                                                                            incrementalDom.attr('id', key11021Data.nameFormat + ',OC');
                                                                            incrementalDom.attr('aria-controls', 'menubarVertical' + key11021Data.nameFormat + 'NestedCollapse02');
                                                                            incrementalDom.attr('aria-expanded', 'false');
                                                                            incrementalDom.attr('class', 'input-group-item collapsed collapse-icon nav-link');
                                                                            incrementalDom.attr('data-toggle', 'collapse');
                                                                            incrementalDom.attr('href', '#menubarVertical' + key11021Data.nameFormat + 'NestedCollapse02');
                                                                            incrementalDom.attr('role', 'button');
                                                                        incrementalDom.elementOpenEnd();
                                                                          soyIdom.print(key11021Data.name);
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
                                                                          incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key11021Data.nameFormat + 'Collapse02']) ? '' : 'show'));
                                                                          incrementalDom.attr('id', 'menubarVertical' + key11021Data.nameFormat + 'NestedCollapse02');
                                                                      incrementalDom.elementOpenEnd();
                                                                        incrementalDom.elementOpenStart('ul');
                                                                            incrementalDom.attr('id', key11021Data.nameFormat + 'UL');
                                                                            incrementalDom.attr('style', 'display:none;');
                                                                            incrementalDom.attr('class', 'nav nav-stacked');
                                                                        incrementalDom.elementOpenEnd();
                                                                          var key21018List = key11021Data.children;
                                                                          var key21018ListLen = key21018List.length;
                                                                          for (var key21018Index = 0; key21018Index < key21018ListLen; key21018Index++) {
                                                                              var key21018Data = key21018List[key21018Index];
                                                                              incrementalDom.elementOpenStart('li');
                                                                                  incrementalDom.attr('class', 'nav-item');
                                                                              incrementalDom.elementOpenEnd();
                                                                                incrementalDom.elementOpenStart('a');
                                                                                    incrementalDom.attr('id', key21018Data.categoryId + ',' + key21018Data.parentCategoryId + ',' + key21018Data.parentName + ',T');
                                                                                    incrementalDom.attr('class', 'nav-link');
                                                                                    incrementalDom.attr('style', 'text-decoration: none;');
                                                                                    incrementalDom.attr('onclick', setSelectedCategories);
                                                                                    incrementalDom.attr('href', '#1');
                                                                                incrementalDom.elementOpenEnd();
                                                                                  soyIdom.print(key21018Data.name);
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
                                    if (key1034Index == key1034ListLen - 1) {
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
