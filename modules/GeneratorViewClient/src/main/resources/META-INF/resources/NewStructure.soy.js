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
 *  saveStructure: (?),
 *  cancelStructure: (?),
 *  handleChangeValueTempl: (?),
 *  msgErrorPath: (?),
 *  msgInfo: (?),
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
  var saveStructure = opt_data.saveStructure;
  /** @type {?} */
  var cancelStructure = opt_data.cancelStructure;
  /** @type {?} */
  var handleChangeValueTempl = opt_data.handleChangeValueTempl;
  /** @type {?} */
  var msgErrorPath = opt_data.msgErrorPath;
  /** @type {?} */
  var msgInfo = opt_data.msgInfo;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>} */
  var collapseInfo = soy.asserts.assertType(goog.isObject(opt_data.collapseInfo), 'collapseInfo', opt_data.collapseInfo, '!Object<!goog.soy.data.SanitizedContent|string,boolean>');
  var selectedLanguage__soy393 = data['selectedLanguage'];
  var defaultLanguage__soy395 = data['defaultLanguage'];
  var availableLanguageIds__soy397 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy399 = data['availableLanguageId-style'];
  var structureIdHotel__soy401 = '35835';
  var structureIdBrand__soy403 = '35912';
  var structureIdRate__soy405 = '35796';
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
        incrementalDom.attr('class', 'fade modal ' + (isOnLoad ? 'show in' : ''));
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
              if (structureId == structureIdBrand__soy403) {
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
                    var field433List = categoryBrands;
                    var field433ListLen = field433List.length;
                    for (var field433Index = 0; field433Index < field433ListLen; field433Index++) {
                        var field433Data = field433List[field433Index];
                        incrementalDom.elementOpenStart('option');
                            incrementalDom.attr('value', field433Data.key);
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field433Data.category);
                        incrementalDom.elementClose('option');
                      }
                  incrementalDom.elementClose('select');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'form-group');
                incrementalDom.elementOpenEnd();
                  if (structureId == structureIdHotel__soy401) {
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
                  } else if (structureId == structureIdRate__soy405) {
                    incrementalDom.text('\u00A0\u00A0');
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
                      var field450List = hotelsXBrands;
                      var field450ListLen = field450List.length;
                      for (var field450Index = 0; field450Index < field450ListLen; field450Index++) {
                          var field450Data = field450List[field450Index];
                          incrementalDom.elementOpenStart('option');
                              incrementalDom.attr('value', field450Data.key);
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field450Data.category);
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
                soyIdom.print(name[defaultLanguage__soy395]);
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
            $templateAlias1({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy397, defaultLanguage: defaultLanguage__soy395, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy399, selectedLanguage: selectedLanguage__soy393}, null, opt_ijData);
            $templateAlias1({id: 'description_prinipal', label: 'Descripcion', placeholder: 'Descripcion principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy397, defaultLanguage: defaultLanguage__soy395, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy399, selectedLanguage: selectedLanguage__soy393}, null, opt_ijData);
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
          incrementalDom.elementOpenStart('button');
              incrementalDom.attr('onclick', saveStructure);
              incrementalDom.attr('class', 'btn btn-primary');
              incrementalDom.attr('type', 'button');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Guardar');
          incrementalDom.elementClose('button');
          incrementalDom.elementOpenStart('button');
              incrementalDom.attr('onclick', cancelStructure);
              incrementalDom.attr('class', 'btn btn-secondary');
              incrementalDom.attr('data-dismiss', 'modal');
              incrementalDom.attr('type', 'button');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Cancelar');
          incrementalDom.elementClose('button');
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
                  var field605List = data['nestedFields'];
                  var field605ListLen = field605List.length;
    for (var field605Index = 0; field605Index < field605ListLen; field605Index++) {
        var field605Data = field605List[field605Index];
        if (field605Data['type'] == 'ddm-separator') {
          if (field605Index > 0 && data['nestedFields'][field605Index - 1]['type'] != 'ddm-separator') {
            incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('div');
                  incrementalDom.elementClose('div');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          }
          $templateAlias2({id: 'id_' + field605Index, structureId: structureId, name: field605Data['name'], path: field605Data['name'], data: field605Data['nestedFields'], title: field605Data['label'], availableLanguageIds: availableLanguageIds__soy397, defaultLanguage: selectedLanguage__soy393, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo, brandSelected: brandSelected, hotelSelected: hotelSelected, brandIdSelected: brandIdSelected, hotelIdSelected: hotelIdSelected, handleChangeValue: handleChangeValue, handleRemoveValue: handleRemoveValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'text') {
          $templateAlias3({id: field605Data['name'], type: field605Data['type'], path: field605Data['name'], localizable: field605Data['localizable'], labels: field605Data['label'], placeholder: field605Data['tip'], availableLanguageIds: availableLanguageIds__soy397, defaultLanguageId: selectedLanguage__soy393, handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'checkbox') {
          $templateAlias4({id: field605Data['name'], label: field605Data['label'][selectedLanguage__soy393], path: field605Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'ddm-date') {
          $templateAlias5({id: field605Data['name'], label: field605Data['label'][defaultLanguage__soy395], placeholder: field605Data['tip'][defaultLanguage__soy395], defaultLanguageId: selectedLanguage__soy393, path: field605Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'ddm-text-html' || field605Data['type'] == 'textarea') {
          $templateAlias6({id: field605Data['name'], label: field605Data['label'][selectedLanguage__soy393], placeholder: field605Data['tip'][selectedLanguage__soy393], availableLanguageIds: availableLanguageIds__soy397, defaultLanguageId: selectedLanguage__soy393, path: field605Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'radio') {
          $templateAlias7({id: field605Data['name'], label: field605Data['label'][selectedLanguage__soy393], defaultLanguageId: selectedLanguage__soy393, options: field605Data['options'], path: field605Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else if (field605Data['type'] == 'select') {
          $templateAlias8({id: field605Data['name'], label: field605Data['label'][selectedLanguage__soy393], defaultLanguageId: selectedLanguage__soy393, options: field605Data['options'], path: field605Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
        } else {
          soyIdom.print(field605Data['type']);
          incrementalDom.text('--');
          soyIdom.print(field605Data['name']);
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
            $templateAlias8({id: 'selectTemplate', label: 'Selecciona un template', defaultLanguageId: selectedLanguage__soy393, options: selectTempl, path: 'selectTemplate', handleChangeValue: handleChangeValueTempl}, null, opt_ijData);
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
        incrementalDom.elementOpenStart('button');
            incrementalDom.attr('onclick', saveStructure);
            incrementalDom.attr('class', 'btn btn-primary');
            incrementalDom.attr('type', 'button');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Guardar');
        incrementalDom.elementClose('button');
        incrementalDom.elementOpenStart('button');
            incrementalDom.attr('onclick', cancelStructure);
            incrementalDom.attr('class', 'btn btn-secondary');
            incrementalDom.attr('data-dismiss', 'modal');
            incrementalDom.attr('type', 'button');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Cancelar');
        incrementalDom.elementClose('button');
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
 *  saveStructure: (?),
 *  cancelStructure: (?),
 *  handleChangeValueTempl: (?),
 *  msgErrorPath: (?),
 *  msgInfo: (?),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'NewStructure.render';
}

exports.render.params = ["id","structureId","isOnLoad","data","name","categoryBrands","hotelsXBrands","contextPath","selectTempl","closeOpenTab","changeLanguage","changeBrand","changeHotels","saveSelectPath","brandSelected","hotelSelected","brandIdSelected","hotelIdSelected","handleChangeValue","handleRemoveValue","saveStructure","cancelStructure","handleChangeValueTempl","msgErrorPath","msgInfo","collapseInfo"];
exports.render.types = {"id":"string","structureId":"string","isOnLoad":"bool","data":"map<string, ?>","name":"map<string, ?>","categoryBrands":"list<?>","hotelsXBrands":"list<?>","contextPath":"string","selectTempl":"list<?>","closeOpenTab":"?","changeLanguage":"?","changeBrand":"?","changeHotels":"?","saveSelectPath":"?","brandSelected":"string","hotelSelected":"string","brandIdSelected":"?","hotelIdSelected":"?","handleChangeValue":"?","handleRemoveValue":"?","saveStructure":"?","cancelStructure":"?","handleChangeValueTempl":"?","msgErrorPath":"?","msgInfo":"?","collapseInfo":"map<string,bool>"};
templates = exports;
return exports;

});

class NewStructure extends Component {}
Soy.register(NewStructure, templates);
export { NewStructure, templates };
export default templates;
/* jshint ignore:end */
