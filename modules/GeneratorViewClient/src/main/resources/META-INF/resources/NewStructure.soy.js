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
  var selectedLanguage__soy507 = data['selectedLanguage'];
  var defaultLanguage__soy509 = data['defaultLanguage'];
  var availableLanguageIds__soy511 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy513 = data['availableLanguageId-style'];
  var structureIdHotel__soy515 = '35835';
  var structureIdBrand__soy517 = '35912';
  var structureIdRate__soy519 = '35796';
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
              if (structureId == structureIdBrand__soy517) {
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
              } else if (structureId == structureIdRate__soy519) {
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
                    var field547List = categoryBrands;
                    var field547ListLen = field547List.length;
                    for (var field547Index = 0; field547Index < field547ListLen; field547Index++) {
                        var field547Data = field547List[field547Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field547Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field547Data.category);
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
                    var field559List = categoryBrands;
                    var field559ListLen = field559List.length;
                    for (var field559Index = 0; field559Index < field559ListLen; field559Index++) {
                        var field559Data = field559List[field559Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field559Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field559Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  if (structureId == structureIdHotel__soy515) {
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
                      var field574List = hotelsXBrands;
                      var field574ListLen = field574List.length;
                      for (var field574Index = 0; field574Index < field574ListLen; field574Index++) {
                          var field574Data = field574List[field574Index];
                          incrementalDom.elementOpenStart('option');
                              incrementalDom.attr('value', field574Data.key);
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field574Data.category);
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
                soyIdom.print(name[defaultLanguage__soy509]);
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
            $templateAlias1({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy511, defaultLanguage: defaultLanguage__soy509, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy513, selectedLanguage: selectedLanguage__soy507}, null, opt_ijData);
            $templateAlias1({id: 'description_prinipal', label: 'Resumen', placeholder: 'Resumen', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy511, defaultLanguage: defaultLanguage__soy509, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy513, selectedLanguage: selectedLanguage__soy507}, null, opt_ijData);
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
                  var field739List = data['nestedFields'];
                  var field739ListLen = field739List.length;
    for (var field739Index = 0; field739Index < field739ListLen; field739Index++) {
        var field739Data = field739List[field739Index];
        if (field739Data['type'] == 'ddm-separator') {
          if (field739Index > 0 && data['nestedFields'][field739Index - 1]['type'] != 'ddm-separator') {
            incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          }
          $templateAlias2({id: 'id_' + field739Index, structureId: structureId, name: field739Data['name'], path: field739Data['name'], data: field739Data['nestedFields'], title: field739Data['label'], repeatable: field739Data['repeatable'], availableLanguageIds: availableLanguageIds__soy511, defaultLanguage: selectedLanguage__soy507, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, hotelIdSelected: hotelIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field739Data['type'] == 'text') {
          $templateAlias3({id: field739Data['name'], type: field739Data['type'], path: field739Data['name'], localizable: field739Data['localizable'], labels: field739Data['label'], placeholder: field739Data['tip'], values: field739Data['values'], repeatable: field739Data['repeatable'], contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy511, defaultLanguageId: selectedLanguage__soy507, handleChangeValue: handleChangeValue, handleRemoveItem: handleRemoveItem}, null, opt_ijData);
        } else if (field739Data['type'] == 'checkbox') {
          $templateAlias4({id: field739Data['name'], label: field739Data['label'], path: field739Data['name'], values: field739Data['values'], defaultLanguageId: selectedLanguage__soy507, handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field739Data['type'] == 'ddm-date') {
          $templateAlias5({id: field739Data['name'], label: field739Data['label'][defaultLanguage__soy509], placeholder: field739Data['tip'][defaultLanguage__soy509], defaultLanguageId: selectedLanguage__soy507, path: field739Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field739Data['type'] == 'ddm-text-html' || field739Data['type'] == 'textarea') {
          $templateAlias6({id: field739Data['name'], label: field739Data['label'][selectedLanguage__soy507], placeholder: field739Data['tip'][selectedLanguage__soy507], availableLanguageIds: availableLanguageIds__soy511, defaultLanguageId: selectedLanguage__soy507, path: field739Data['name'], values: field739Data['values'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field739Data['type'] == 'radio') {
          $templateAlias7({id: field739Data['name'], label: field739Data['label'][selectedLanguage__soy507], defaultLanguageId: selectedLanguage__soy507, options: field739Data['options'], path: field739Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field739Data['type'] == 'select') {
          $templateAlias8({id: field739Data['name'], label: field739Data['label'][selectedLanguage__soy507], defaultLanguageId: selectedLanguage__soy507, options: field739Data['options'], path: field739Data['name'], multiple: field739Data['multiple'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else {
          soyIdom.print(field739Data['type']);
          incrementalDom.text('--');
          soyIdom.print(field739Data['name']);
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
                incrementalDom.text('Informaci\u00F3n adicional');
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
            $templateAlias8({id: 'selectTemplate', label: 'Selecciona un template', defaultLanguageId: selectedLanguage__soy507, options: selectTempl, path: 'selectTemplate', handleChangeValue: handleChangeValueTempl}, null, opt_ijData);
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
                  var key783List = itemsCategoriesKeysRender;
                  var key783ListLen = key783List.length;
                  for (var key783Index = 0; key783Index < key783ListLen; key783Index++) {
                      var key783Data = key783List[key783Index];
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('id', key783Data + ',S');
                          incrementalDom.attr('style', 'font-size: 1.110rem;');
                          incrementalDom.attr('class', 'label label-dismissible label-secondary');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-expand');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(itemsCategoriesSelected[key783Data]);
                        incrementalDom.elementClose('span');
                        incrementalDom.elementOpenStart('span');
                            incrementalDom.attr('class', 'label-item label-item-after');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('button');
                              incrementalDom.attr('id', key783Data + ',B');
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
                      var key915List = itemsCategoriesKeys;
                      var key915ListLen = key915List.length;
                      for (var key915Index = 0; key915Index < key915ListLen; key915Index++) {
                          var key915Data = key915List[key915Index];
                          if (key915Index == 0) {
                              incrementalDom.elementOpen('tr');
                            }
                            if ((key915Index + 3) % 3 == 0 && !(key915Index == 0)) {
                              incrementalDom.elementClose('tr');
                            incrementalDom.elementOpen('tr');
                            }
                            incrementalDom.elementOpenStart('td');
                                incrementalDom.attr('class', 'table-cell-expand');
                            incrementalDom.elementOpenEnd();
                              if (key915Data.name != 'Marcas') {
                                incrementalDom.elementOpenStart('nav');
                                    incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                incrementalDom.elementOpenEnd();
                                  incrementalDom.elementOpenStart('div');
                                      incrementalDom.attr('class', 'collapse menubar-collapse');
                                      incrementalDom.attr('id', 'menubarVertical' + key915Data.nameFormat + 'Collapse01');
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
                                              incrementalDom.attr('id', key915Data.nameFormat + ',OC');
                                              incrementalDom.attr('aria-controls', 'menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                              incrementalDom.attr('aria-expanded', 'false');
                                              incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                              incrementalDom.attr('data-toggle', 'collapse');
                                              incrementalDom.attr('href', '#menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                              incrementalDom.attr('role', 'button');
                                          incrementalDom.elementOpenEnd();
                                            soyIdom.print(key915Data.name);
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
                                              incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key915Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                              incrementalDom.attr('id', 'menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                          incrementalDom.elementOpenEnd();
                                            var field863List = itemsCategories;
                                            var field863ListLen = field863List.length;
                                            for (var field863Index = 0; field863Index < field863ListLen; field863Index++) {
                                                var field863Data = field863List[field863Index];
                                                if (field863Data[key915Data.name]) {
                                                  incrementalDom.elementOpenStart('ul');
                                                      incrementalDom.attr('id', key915Data.nameFormat + 'UL');
                                                      incrementalDom.attr('style', 'display:none;');
                                                      incrementalDom.attr('class', 'nav nav-stacked');
                                                  incrementalDom.elementOpenEnd();
                                                    var value859List = field863Data[key915Data.name];
                                                    var value859ListLen = value859List.length;
                                                    for (var value859Index = 0; value859Index < value859ListLen; value859Index++) {
                                                        var value859Data = value859List[value859Index];
                                                        if (value859Data.isMultiValue) {
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('id', value859Data.categoryId + ',' + value859Data.parentCategoryId + ',' + value859Data.parentName + ',T');
                                                                incrementalDom.attr('class', 'nav-link');
                                                                incrementalDom.attr('style', 'text-decoration: none;');
                                                                incrementalDom.attr('onclick', setSelectedCategories);
                                                                incrementalDom.attr('href', '#1');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(value859Data.name);
                                                            incrementalDom.elementClose('a');
                                                          incrementalDom.elementClose('li');
                                                        } else {
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('id', value859Data.categoryId + ',' + value859Data.parentCategoryId + ',' + value859Data.parentName + ',F');
                                                                incrementalDom.attr('onclick', setSelectedCategories);
                                                                incrementalDom.attr('style', 'text-decoration: none;');
                                                                incrementalDom.attr('class', 'nav-link');
                                                                incrementalDom.attr('href', '#1');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(value859Data.name);
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
                                var field907List = itemsCategories;
                                var field907ListLen = field907List.length;
                                for (var field907Index = 0; field907Index < field907ListLen; field907Index++) {
                                    var field907Data = field907List[field907Index];
                                    if (field907Data[key915Data.name]) {
                                      if (itemsMarcasKeys) {
                                        incrementalDom.elementOpenStart('nav');
                                            incrementalDom.attr('class', 'menubar menubar-transparent menubar-vertical-expand-md');
                                        incrementalDom.elementOpenEnd();
                                          incrementalDom.elementOpenStart('div');
                                              incrementalDom.attr('class', 'collapse menubar-collapse');
                                              incrementalDom.attr('id', 'menubarVertical' + key915Data.nameFormat + 'Collapse01');
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
                                                      incrementalDom.attr('id', key915Data.nameFormat + ',OC');
                                                      incrementalDom.attr('aria-controls', 'menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                                      incrementalDom.attr('aria-expanded', 'false');
                                                      incrementalDom.attr('class', 'collapse-icon nav-link collapsed');
                                                      incrementalDom.attr('data-toggle', 'collapse');
                                                      incrementalDom.attr('href', '#menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                                      incrementalDom.attr('role', 'button');
                                                  incrementalDom.elementOpenEnd();
                                                    soyIdom.print(key915Data.name);
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
                                                      incrementalDom.attr('class', 'panel-collapse collapse  ' + ((collapseInfo == null ? null : collapseInfo['menubarVertical' + key915Data.nameFormat + 'Collapse01']) ? '' : 'show'));
                                                      incrementalDom.attr('id', 'menubarVertical' + key915Data.nameFormat + 'NestedCollapse01');
                                                  incrementalDom.elementOpenEnd();
                                                    var key1902List = itemsMarcasKeys;
                                                    var key1902ListLen = key1902List.length;
                                                    for (var key1902Index = 0; key1902Index < key1902ListLen; key1902Index++) {
                                                        var key1902Data = key1902List[key1902Index];
                                                        incrementalDom.elementOpenStart('ul');
                                                            incrementalDom.attr('class', 'nav nav-stacked');
                                                        incrementalDom.elementOpenEnd();
                                                          incrementalDom.elementOpenStart('li');
                                                              incrementalDom.attr('class', 'nav-item');
                                                          incrementalDom.elementOpenEnd();
                                                            incrementalDom.elementOpenStart('a');
                                                                incrementalDom.attr('aria-controls', 'menubarVerticalNestedCollapse02');
                                                                incrementalDom.attr('aria-expanded', 'false');
                                                                incrementalDom.attr('class', 'collapsed collapse-icon nav-link');
                                                                incrementalDom.attr('data-toggle', 'collapse1');
                                                                incrementalDom.attr('href', '#menubarVerticalNestedCollapse02');
                                                                incrementalDom.attr('role', 'button');
                                                            incrementalDom.elementOpenEnd();
                                                              soyIdom.print(key1902Data);
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
                                                                incrementalDom.attr('class', 'collapse');
                                                                incrementalDom.attr('id', 'menubarVerticalNestedCollapse02');
                                                            incrementalDom.elementOpenEnd();
                                                              incrementalDom.elementOpenStart('ul');
                                                                  incrementalDom.attr('class', 'nav nav-stacked');
                                                              incrementalDom.elementOpenEnd();
                                                                incrementalDom.elementOpenStart('li');
                                                                    incrementalDom.attr('class', 'nav-item');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('a');
                                                                      incrementalDom.attr('class', 'nav-link');
                                                                      incrementalDom.attr('href', '#1');
                                                                  incrementalDom.elementOpenEnd();
                                                                    incrementalDom.text('Details');
                                                                  incrementalDom.elementClose('a');
                                                                incrementalDom.elementClose('li');
                                                                incrementalDom.elementOpenStart('li');
                                                                    incrementalDom.attr('class', 'nav-item');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('a');
                                                                      incrementalDom.attr('class', 'nav-link');
                                                                      incrementalDom.attr('href', '#1');
                                                                  incrementalDom.elementOpenEnd();
                                                                    incrementalDom.text('Catagorization');
                                                                  incrementalDom.elementClose('a');
                                                                incrementalDom.elementClose('li');
                                                                incrementalDom.elementOpenStart('li');
                                                                    incrementalDom.attr('class', 'nav-item');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('a');
                                                                      incrementalDom.attr('class', 'nav-link');
                                                                      incrementalDom.attr('href', '#1');
                                                                  incrementalDom.elementOpenEnd();
                                                                    incrementalDom.text('Documents and Media');
                                                                  incrementalDom.elementClose('a');
                                                                incrementalDom.elementClose('li');
                                                                incrementalDom.elementOpenStart('li');
                                                                    incrementalDom.attr('class', 'nav-item');
                                                                incrementalDom.elementOpenEnd();
                                                                  incrementalDom.elementOpenStart('a');
                                                                      incrementalDom.attr('class', 'nav-link');
                                                                      incrementalDom.attr('href', '#1');
                                                                  incrementalDom.elementOpenEnd();
                                                                    incrementalDom.text('Site Template');
                                                                  incrementalDom.elementClose('a');
                                                                incrementalDom.elementClose('li');
                                                              incrementalDom.elementClose('ul');
                                                            incrementalDom.elementClose('div');
                                                          incrementalDom.elementClose('li');
                                                        incrementalDom.elementClose('ul');
                                                      }
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
                          if (key915Index == key915ListLen - 1) {
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
