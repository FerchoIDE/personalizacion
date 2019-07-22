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
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>} */
  var collapseInfo = soy.asserts.assertType(goog.isObject(opt_data.collapseInfo), 'collapseInfo', opt_data.collapseInfo, '!Object<!goog.soy.data.SanitizedContent|string,boolean>');
  var selectedLanguage__soy548 = data['selectedLanguage'];
  var defaultLanguage__soy550 = data['defaultLanguage'];
  var availableLanguageIds__soy552 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy554 = data['availableLanguageId-style'];
  var structureIdHotel__soy556 = '35835';
  var structureIdBrand__soy558 = '35912';
  var structureIdRate__soy560 = '35796';
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
              if (structureId == structureIdBrand__soy558) {
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
              } else if (structureId == structureIdRate__soy560) {
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
                    var field588List = categoryBrands;
                    var field588ListLen = field588List.length;
                    for (var field588Index = 0; field588Index < field588ListLen; field588Index++) {
                        var field588Data = field588List[field588Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field588Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field588Data.category);
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
                    var field600List = categoryBrands;
                    var field600ListLen = field600List.length;
                    for (var field600Index = 0; field600Index < field600ListLen; field600Index++) {
                        var field600Data = field600List[field600Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field600Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field600Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  if (structureId == structureIdHotel__soy556) {
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
                      var field615List = hotelsXBrands;
                      var field615ListLen = field615List.length;
                      for (var field615Index = 0; field615Index < field615ListLen; field615Index++) {
                          var field615Data = field615List[field615Index];
                          incrementalDom.elementOpenStart('option');
                              incrementalDom.attr('value', field615Data.key);
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field615Data.category);
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
                soyIdom.print(name[defaultLanguage__soy550]);
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
            $templateAlias1({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy552, defaultLanguage: defaultLanguage__soy550, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy554, selectedLanguage: selectedLanguage__soy548}, null, opt_ijData);
            $templateAlias1({id: 'description_prinipal', label: 'Resumen', placeholder: 'Resumen', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy552, defaultLanguage: defaultLanguage__soy550, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy554, selectedLanguage: selectedLanguage__soy548}, null, opt_ijData);
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
                  var field785List = data['nestedFields'];
                  var field785ListLen = field785List.length;
    for (var field785Index = 0; field785Index < field785ListLen; field785Index++) {
        var field785Data = field785List[field785Index];
        if (field785Data['type'] == 'ddm-separator') {
          if (field785Index > 0 && data['nestedFields'][field785Index - 1]['type'] != 'ddm-separator') {
            incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          }
          $templateAlias2({id: 'id_' + field785Index, structureId: structureId, name: field785Data['name'], path: field785Data['name'], data: field785Data['nestedFields'], title: field785Data['label'], repeatable: field785Data['repeatable'], availableLanguageIds: availableLanguageIds__soy552, defaultLanguage: selectedLanguage__soy548, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, hotelIdSelected: hotelIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field785Data['type'] == 'text') {
          $templateAlias3({id: field785Data['name'], type: field785Data['type'], path: field785Data['name'], localizable: field785Data['localizable'], labels: field785Data['label'], placeholder: field785Data['tip'], values: field785Data['values'], repeatable: field785Data['repeatable'], contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy552, defaultLanguageId: selectedLanguage__soy548, handleChangeValue: handleChangeValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field785Data['type'] == 'checkbox') {
          $templateAlias4({id: field785Data['name'], label: field785Data['label'], path: field785Data['name'], values: field785Data['values'], defaultLanguageId: selectedLanguage__soy548, handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field785Data['type'] == 'ddm-date') {
          $templateAlias5({id: field785Data['name'], values: field785Data['values'], label: field785Data['label'][defaultLanguage__soy550], placeholder: field785Data['tip'][defaultLanguage__soy550], defaultLanguageId: selectedLanguage__soy548, path: field785Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field785Data['type'] == 'ddm-text-html' || field785Data['type'] == 'textarea') {
          $templateAlias6({id: field785Data['name'], type: field785Data['type'], label: field785Data['label'][selectedLanguage__soy548], placeholder: field785Data['tip'][selectedLanguage__soy548], availableLanguageIds: availableLanguageIds__soy552, defaultLanguageId: selectedLanguage__soy548, path: field785Data['name'], values: field785Data['values'], handleChangeValue: handleChangeValue, contextPath: contextPath}, null, opt_ijData);
        } else if (field785Data['type'] == 'radio') {
          $templateAlias7({id: field785Data['name'], values: field785Data['values'], label: field785Data['label'][selectedLanguage__soy548], defaultLanguageId: selectedLanguage__soy548, options: field785Data['options'], path: field785Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field785Data['type'] == 'select') {
          $templateAlias8({id: field785Data['name'], values: field785Data['values'], label: field785Data['label'][selectedLanguage__soy548], defaultLanguageId: selectedLanguage__soy548, options: field785Data['options'], path: field785Data['name'], multiple: field785Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else {
          soyIdom.print(field785Data['type']);
          incrementalDom.text('--');
          soyIdom.print(field785Data['name']);
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
            $templateAlias8({id: 'selectTemplate', label: 'Selecciona un template', defaultLanguageId: selectedLanguage__soy548, options: selectTempl, path: 'selectTemplate', handleChangeValue: handleChangeValueTempl}, null, opt_ijData);
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
                  var key829List = itemsCategoriesKeysRender;
                  var key829ListLen = key829List.length;
                  for (var key829Index = 0; key829Index < key829ListLen; key829Index++) {
                      var key829Data = key829List[key829Index];
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('id', key829Data + ',S');
                          incrementalDom.attr('style', 'font-size: 1.375rem;');
                          incrementalDom.attr('class', 'label label-dismissible label-secondary');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-expand');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(itemsCategoriesSelected[key829Data]);
                        incrementalDom.elementClose('span');
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-after');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('button');
                              incrementalDom.attr('id', key829Data + ',B');
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
                      var key1001List = itemsCategoriesKeys;
                      var key1001ListLen = key1001List.length;
                      for (var key1001Index = 0; key1001Index < key1001ListLen; key1001Index++) {
                          var key1001Data = key1001List[key1001Index];
                          if (key1001Index == 0) {
                              incrementalDom.elementOpenStart('tr');
                                incrementalDom.attr('valign', 'top');
                            incrementalDom.elementOpenEnd();
                            }
                            if ((key1001Index + 3) % 3 == 0 && !(key1001Index == 0)) {
                              incrementalDom.elementClose('tr');
                            incrementalDom.elementOpenStart('tr');
                                incrementalDom.attr('valign', 'top');
                            incrementalDom.elementOpenEnd();
                            }
                            incrementalDom.elementOpenStart('td');
                                incrementalDom.attr('class', 'table-cell-expand');
                            incrementalDom.elementOpenEnd();
                              if (key1001Data.name != 'Marcas') {
                                incrementalDom.elementOpenStart('nav');
                                    incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('div');
                                      incrementalDom.attr('class', 'collapse menubar-collapse');
                                      incrementalDom.attr('id', 'menubarVertical' + key1001Data.nameFormat + 'Collapse01');
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
                                              incrementalDom.attr('id', key1001Data.nameFormat + ',OC');
                                              incrementalDom.attr('aria-controls', 'menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                              incrementalDom.attr('aria-expanded', 'false');
                                              incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                              incrementalDom.attr('data-toggle', 'collapse');
                                              incrementalDom.attr('href', '#menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                              incrementalDom.attr('role', 'button');
                                          incrementalDom.elementOpenEnd();
                                            soyIdom.print(key1001Data.name);
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
                                              incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1001Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                              incrementalDom.attr('id', 'menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                          incrementalDom.elementOpenEnd();
                                            var field909List = itemsCategories;
                                            var field909ListLen = field909List.length;
                                            for (var field909Index = 0; field909Index < field909ListLen; field909Index++) {
                                                var field909Data = field909List[field909Index];
                                                if (field909Data[key1001Data.name]) {
                                                  incrementalDom.elementOpenStart('ul');
                                                      incrementalDom.attr('id', key1001Data.nameFormat + 'UL');
                                                      incrementalDom.attr('style', 'display:none;');
                                                      incrementalDom.attr('class', 'nav nav-stacked');
                                                  incrementalDom.elementOpenEnd();
                                                    var value905List = field909Data[key1001Data.name];
                                                    var value905ListLen = value905List.length;
                                                    for (var value905Index = 0; value905Index < value905ListLen; value905Index++) {
                                                        var value905Data = value905List[value905Index];
                                                        if (value905Data.isMultiValue) {
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('id', value905Data.categoryId + ',' + value905Data.parentCategoryId + ',' + value905Data.parentName + ',T');
                                                                incrementalDom.attr('class', 'nav-link');
                                                                incrementalDom.attr('style', 'text-decoration: none;');
                                                                incrementalDom.attr('onclick', setSelectedCategories);
                                                                incrementalDom.attr('href', '#1');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(value905Data.name);
                                                            incrementalDom.elementClose('a');
                                                          incrementalDom.elementClose('li');
                                                        } else {
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('id', value905Data.categoryId + ',' + value905Data.parentCategoryId + ',' + value905Data.parentName + ',F');
                                                                incrementalDom.attr('onclick', setSelectedCategories);
                                                                incrementalDom.attr('style', 'text-decoration: none;');
                                                                incrementalDom.attr('class', 'nav-link');
                                                                incrementalDom.attr('href', '#1');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(value905Data.name);
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
                                var field993List = itemsCategories;
                                var field993ListLen = field993List.length;
                                for (var field993Index = 0; field993Index < field993ListLen; field993Index++) {
                                    var field993Data = field993List[field993Index];
                                    if (field993Data[key1001Data.name]) {
                                      if (itemsMarcasKeys) {
                                        incrementalDom.elementOpenStart('nav');
                                            incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                        incrementalDom.elementOpenEnd();
                                          incrementalDom.elementOpenStart('div');
                                              incrementalDom.attr('class', 'collapse menubar-collapse');
                                              incrementalDom.attr('id', 'menubarVertical' + key1001Data.nameFormat + 'Collapse01');
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
                                                      incrementalDom.attr('id', key1001Data.nameFormat + ',OC');
                                                      incrementalDom.attr('aria-controls', 'menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                                      incrementalDom.attr('aria-expanded', 'false');
                                                      incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                      incrementalDom.attr('data-toggle', 'collapse');
                                                      incrementalDom.attr('href', '#menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                                      incrementalDom.attr('role', 'button');
                                                  incrementalDom.elementOpenEnd();
                                                    soyIdom.print(key1001Data.name);
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
                                                      incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1001Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                      incrementalDom.attr('id', 'menubarVertical' + key1001Data.nameFormat + 'NestedCollapse01');
                                                  incrementalDom.elementOpenEnd();
                                                    incrementalDom.elementOpenStart('ul');
                                                        incrementalDom.attr('id', key1001Data.nameFormat + 'UL');
                                                        incrementalDom.attr('style', 'display:none;');
                                                        incrementalDom.attr('class', 'nav nav-stacked');
                                                    incrementalDom.elementOpenEnd();
                                                      var key1988List = itemsMarcasKeys;
                                                      var key1988ListLen = key1988List.length;
                                                      for (var key1988Index = 0; key1988Index < key1988ListLen; key1988Index++) {
                                                          var key1988Data = key1988List[key1988Index];
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
                                                                      incrementalDom.attr('id', key1988Data.categoryId + ',' + key1988Data.parentCategoryId + ',' + key1988Data.parentName + ',T');
                                                                      incrementalDom.attr('class', 'custom-control-input');
                                                                      incrementalDom.attr('type', 'checkbox');
                                                                      incrementalDom.attr('title', key1988Data.name);
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
                                                                  incrementalDom.attr('id', key1988Data.nameFormat + ',OC');
                                                                  incrementalDom.attr('aria-controls', 'menubarVertical' + key1988Data.nameFormat + 'NestedCollapse02');
                                                                  incrementalDom.attr('aria-expanded', 'false');
                                                                  incrementalDom.attr('class', 'input-group-item collapsed collapse-icon nav-link');
                                                                  incrementalDom.attr('data-toggle', 'collapse');
                                                                  incrementalDom.attr('href', '#menubarVertical' + key1988Data.nameFormat + 'NestedCollapse02');
                                                                  incrementalDom.attr('role', 'button');
                                                              incrementalDom.elementOpenEnd();
                                                                soyIdom.print(key1988Data.name);
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
                                                                incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key1988Data.nameFormat + 'Collapse02']) ? '' : 'show'));
                                                                incrementalDom.attr('id', 'menubarVertical' + key1988Data.nameFormat + 'NestedCollapse02');
                                                            incrementalDom.elementOpenEnd();
                                                              incrementalDom.elementOpenStart('ul');
                                                                  incrementalDom.attr('id', key1988Data.nameFormat + 'UL');
                                                                  incrementalDom.attr('style', 'display:none;');
                                                                  incrementalDom.attr('class', 'nav nav-stacked');
                                                              incrementalDom.elementOpenEnd();
                                                                var key2985List = key1988Data.children;
                                                                var key2985ListLen = key2985List.length;
                                                                for (var key2985Index = 0; key2985Index < key2985ListLen; key2985Index++) {
                                                                    var key2985Data = key2985List[key2985Index];
                                                                    incrementalDom.elementOpenStart('li');
                                                                        incrementalDom.attr('class', 'nav-item');
                                                                    incrementalDom.elementOpenEnd();
                                                                      incrementalDom.elementOpenStart('a');
                                                                          incrementalDom.attr('id', key2985Data.categoryId + ',' + key2985Data.parentCategoryId + ',' + key2985Data.parentName + ',T');
                                                                          incrementalDom.attr('class', 'nav-link');
                                                                          incrementalDom.attr('style', 'text-decoration: none;');
                                                                          incrementalDom.attr('onclick', setSelectedCategories);
                                                                          incrementalDom.attr('href', '#1');
                                                                      incrementalDom.elementOpenEnd();
                                                                        soyIdom.print(key2985Data.name);
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
                          if (key1001Index == key1001ListLen - 1) {
                            incrementalDom.elementClose('tr');
                          }
                        }
                    }
                  }
                incrementalDom.elementClose('tbody');
              incrementalDom.elementClose('table');
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
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'NewStructure.render';
}

exports.render.params = ["id","structureId","isOnLoad","data","name","categoryBrands","hotelsXBrands","contextPath","selectTempl","closeOpenTab","changeLanguage","changeBrand","changeHotels","saveSelectPath","brandSelected","hotelSelected","brandIdSelected","hotelIdSelected","handleChangeValue","handleRemoveValue","handleRemoveItem","saveStructure","cancelStructure","handleChangeValueTempl","msgErrorPath","msgInfo","closeOpenTabCategory","itemsCategories","itemsCategoriesKeys","itemsMarcasKeys","setSelectedCategories","itemsCategoriesKeysRender","itemsCategoriesSelected","removeSelectedCategory","collapseInfo"];
exports.render.types = {"id":"string","structureId":"string","isOnLoad":"bool","data":"map<string, ?>","name":"map<string, ?>","categoryBrands":"list<?>","hotelsXBrands":"list<?>","contextPath":"string","selectTempl":"list<?>","closeOpenTab":"?","changeLanguage":"?","changeBrand":"?","changeHotels":"?","saveSelectPath":"?","brandSelected":"string","hotelSelected":"string","brandIdSelected":"?","hotelIdSelected":"?","handleChangeValue":"?","handleRemoveValue":"?","handleRemoveItem":"?","saveStructure":"?","cancelStructure":"?","handleChangeValueTempl":"?","msgErrorPath":"?","msgInfo":"?","closeOpenTabCategory":"?","itemsCategories":"list<?>","itemsCategoriesKeys":"list<?>","itemsMarcasKeys":"list<?>","setSelectedCategories":"?","itemsCategoriesKeysRender":"?","itemsCategoriesSelected":"?","removeSelectedCategory":"?","collapseInfo":"map<string,bool>"};
templates = exports;
return exports;

});

class NewStructure extends Component {}
Soy.register(NewStructure, templates);
export { NewStructure, templates };
export default templates;
/* jshint ignore:end */
