/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from View.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace View.
 * @public
 */

goog.module('View.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('TableUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  changeTab: (?),
 *  selectedTab: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  navigationNewURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationSearchURL: (!goog.soy.data.SanitizedContent|string),
 *  data: !Object<!goog.soy.data.SanitizedContent|string,!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>>,
 *  dataCount: !Object<!goog.soy.data.SanitizedContent|string,number>,
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  searchQuery: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  STRUCTURE_ID: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  STRUCTURE_KEY: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  isOnDelete: boolean,
 *  showDeleteWC: (?),
 *  deleteWC: (?),
 *  cancelWC: (?)
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
  /** @type {?} */
  var changeTab = opt_data.changeTab;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var selectedTab = soy.asserts.assertType(opt_data.selectedTab == null || (goog.isString(opt_data.selectedTab) || opt_data.selectedTab instanceof goog.soy.data.SanitizedContent), 'selectedTab', opt_data.selectedTab, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var navigationNewURL = soy.asserts.assertType(goog.isString(opt_data.navigationNewURL) || opt_data.navigationNewURL instanceof goog.soy.data.SanitizedContent, 'navigationNewURL', opt_data.navigationNewURL, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var navigationEditURL = soy.asserts.assertType(goog.isString(opt_data.navigationEditURL) || opt_data.navigationEditURL instanceof goog.soy.data.SanitizedContent, 'navigationEditURL', opt_data.navigationEditURL, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var navigationSearchURL = soy.asserts.assertType(goog.isString(opt_data.navigationSearchURL) || opt_data.navigationSearchURL instanceof goog.soy.data.SanitizedContent, 'navigationSearchURL', opt_data.navigationSearchURL, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>>} */
  var data = soy.asserts.assertType(goog.isObject(opt_data.data), 'data', opt_data.data, '!Object<!goog.soy.data.SanitizedContent|string,!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,number>} */
  var dataCount = soy.asserts.assertType(goog.isObject(opt_data.dataCount), 'dataCount', opt_data.dataCount, '!Object<!goog.soy.data.SanitizedContent|string,number>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var header = soy.asserts.assertType(goog.isObject(opt_data.header), 'header', opt_data.header, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var keys = soy.asserts.assertType(goog.isArray(opt_data.keys), 'keys', opt_data.keys, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var searchQuery = soy.asserts.assertType(opt_data.searchQuery == null || (goog.isString(opt_data.searchQuery) || opt_data.searchQuery instanceof goog.soy.data.SanitizedContent), 'searchQuery', opt_data.searchQuery, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,?>} */
  var STRUCTURE_ID = soy.asserts.assertType(goog.isObject(opt_data.STRUCTURE_ID), 'STRUCTURE_ID', opt_data.STRUCTURE_ID, '!Object<!goog.soy.data.SanitizedContent|string,?>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,?>} */
  var STRUCTURE_KEY = soy.asserts.assertType(goog.isObject(opt_data.STRUCTURE_KEY), 'STRUCTURE_KEY', opt_data.STRUCTURE_KEY, '!Object<!goog.soy.data.SanitizedContent|string,?>');
  /** @type {boolean} */
  var isOnDelete = soy.asserts.assertType(goog.isBoolean(opt_data.isOnDelete) || opt_data.isOnDelete === 1 || opt_data.isOnDelete === 0, 'isOnDelete', opt_data.isOnDelete, 'boolean');
  /** @type {?} */
  var showDeleteWC = opt_data.showDeleteWC;
  /** @type {?} */
  var deleteWC = opt_data.deleteWC;
  /** @type {?} */
  var cancelWC = opt_data.cancelWC;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'claySmallModalDlg');
        incrementalDom.attr('id', 'claySmallModal1');
        incrementalDom.attr('class', 'modal ' + (isOnDelete ? 'show in' : ''));
        incrementalDom.attr('style', isOnDelete ? '' : 'display: none');
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
              incrementalDom.text('Eliminar');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'container-fluid');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Esta seguro que desea eliminar este contenido');
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
                    incrementalDom.attr('class', 'btn-group');
                    incrementalDom.attr('role', 'group');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('onclick', deleteWC);
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Confirmar');
                  incrementalDom.elementClose('button');
                  incrementalDom.text('\u00A0\u00A0');
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('onclick', cancelWC);
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
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'form-group');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'input-group');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'input-group-item input-group-prepend');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'btn-group dropdown');
              incrementalDom.attr('role', 'group');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('class', 'btn btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Agregar nuevo contenido');
            incrementalDom.elementClose('button');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('aria-expanded', 'false');
                incrementalDom.attr('aria-haspopup', 'true');
                incrementalDom.attr('class', 'btn btn-primary btn-monospaced dropdown-toggle');
                incrementalDom.attr('data-toggle', 'dropdown');
                incrementalDom.attr('type', 'button');
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
            incrementalDom.elementClose('button');
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'dropdown-menu dropdown-menu-left');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['HOTEL']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Hoteles');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['ROOM']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Habitaciones');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['RATE']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Promociones');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['PUB']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Bar');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['RESTAURANT']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Restaurante');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['BRAND']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Marcas');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['SPA']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Spa');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'dropdown-divider');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['GYM']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Gimnasio');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['DESTINATION']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Destinos');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['FACILITY']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Instalaciones');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['GENERIC']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Gen\u00E9rico');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['KIDSCLUB']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Club de Fiestas Infantiles');
              incrementalDom.elementClose('a');
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('class', 'dropdown-item');
                  incrementalDom.attr('href', navigationNewURL + '&_generatorviewclient_structureId=' + STRUCTURE_ID['MEETING']);
              incrementalDom.elementOpenEnd();
                incrementalDom.text('Sala de Reuniones');
              incrementalDom.elementClose('a');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'input-group-append input-group-item input-group-item-shrink');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'input-group');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'input-group-item input-group-prepend');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('input');
                  incrementalDom.attr('class', 'form-control input-group-inset input-group-inset-after');
                  incrementalDom.attr('data-onkeyup', 'handleChangeSearch');
                  incrementalDom.attr('placeholder', 'Buscar...');
                  incrementalDom.attr('type', 'text');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('input');
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('class', 'input-group-append input-group-item input-group-item-shrink');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('a');
                  incrementalDom.attr('href', searchQuery ? navigationSearchURL + '&_generatorviewclient_query=' + searchQuery : '#');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('button');
                    incrementalDom.attr('class', 'btn btn-unstyled');
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
              incrementalDom.elementClose('a');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpen('br');
    incrementalDom.elementClose('br');
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'nav nav-underline');
        incrementalDom.attr('role', 'tablist');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-controls', 'navUnderlineHotels');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineHotelsTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineHotelsTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineHotels');
            incrementalDom.attr('id', 'navUnderlineHotelsTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Hoteles');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-controls', 'navUnderlineRooms');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineRoomsTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineRoomsTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineRooms');
            incrementalDom.attr('id', 'navUnderlineRoomsTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Habitaciones');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-controls', 'navUnderlineRates');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineRatesTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineRatesTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineRates');
            incrementalDom.attr('id', 'navUnderlineRatesTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Promociones');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-controls', 'navUnderlinePubs');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlinePubsTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlinePubsTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlinePubs');
            incrementalDom.attr('id', 'navUnderlinePubsTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Bar');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-controls', 'navUnderlineRestaurants');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineRestaurantsTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineRestaurantsTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineRestaurants');
            incrementalDom.attr('id', 'navUnderlineRestaurantsTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Restaurante');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('aria-controls', 'navUnderlineSpa');
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineSpaTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineSpaTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineSpa');
            incrementalDom.attr('id', 'navUnderlineSpaTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Spa');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', changeTab);
            incrementalDom.attr('aria-controls', 'navUnderlineBrands');
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-expanded', selectedTab == 'navUnderlineBrandsTab' ? 'true' : 'false');
            incrementalDom.attr('class', (selectedTab == 'navUnderlineBrandsTab' ? 'active' : '') + ' nav-link');
            incrementalDom.attr('data-toggle', 'tab');
            incrementalDom.attr('href', '#navUnderlineBrands');
            incrementalDom.attr('id', 'navUnderlineBrandsTab');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Marcas');
        incrementalDom.elementClose('a');
      incrementalDom.elementClose('li');
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'dropdown nav-item');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('aria-expanded', 'false');
            incrementalDom.attr('style', 'font-size: 18px');
            incrementalDom.attr('aria-haspopup', 'true');
            incrementalDom.attr('class', 'dropdown-toggle nav-link');
            incrementalDom.attr('data-toggle', 'dropdown');
            incrementalDom.attr('href', '#1');
            incrementalDom.attr('role', 'button');
        incrementalDom.elementOpenEnd();
          incrementalDom.text('Mas');
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
        incrementalDom.elementClose('a');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'dropdown-menu dropdown-menu-indicator-end');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineGyms');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineGyms');
              incrementalDom.attr('id', 'navUnderlineGymsTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Gimnasio');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineDestinations');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineDestinations');
              incrementalDom.attr('id', 'navUnderlineDestinationsTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Destinos');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineGeo');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineGeo');
              incrementalDom.attr('id', 'navUnderlineGeoTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Geo');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineFacilities');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineFacilities');
              incrementalDom.attr('id', 'navUnderlineFacilitiesTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Instalaciones');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineGenerics');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineGenerics');
              incrementalDom.attr('id', 'navUnderlineGenericsTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Gen\u00E9rico');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineChildrensClub');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineChildrensClub');
              incrementalDom.attr('id', 'navUnderlineChildrensClubTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Club de Fiestas Infantiles');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
          incrementalDom.elementOpenStart('a');
              incrementalDom.attr('aria-controls', 'navUnderlineMeetingRooms');
              incrementalDom.attr('style', 'font-size: 18px');
              incrementalDom.attr('class', 'dropdown-item');
              incrementalDom.attr('data-toggle', 'tab');
              incrementalDom.attr('href', '#navUnderlineMeetingRooms');
              incrementalDom.attr('id', 'navUnderlineMeetingRoomsTab');
              incrementalDom.attr('role', 'tab');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Sala de Reuniones');
            incrementalDom.elementOpenStart('span');
                incrementalDom.attr('aria-hidden', 'true');
                incrementalDom.attr('class', 'dropdown-item-indicator');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-check');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#check');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('span');
          incrementalDom.elementClose('a');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('li');
    incrementalDom.elementClose('ul');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'tab-content');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineHotelsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineHotelsTab' ? 'active show' : '') + ' tab-pane');
          incrementalDom.attr('id', 'navUnderlineHotels');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['HOTEL'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['HOTEL']], dataCount: dataCount[STRUCTURE_KEY['HOTEL']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineRoomsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineRoomsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineRoomsTab');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['ROOM'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['ROOM']], dataCount: dataCount[STRUCTURE_KEY['ROOM']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineRatesTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineRatesTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineRates');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['RATE'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['RATE']], dataCount: dataCount[STRUCTURE_KEY['RATE']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlinePubsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlinePubsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlinePubs');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['PUB'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['PUB']], dataCount: dataCount[STRUCTURE_KEY['PUB']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineRestaurantsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineRestaurantsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineRestaurants');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['RESTAURANT'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['RESTAURANT']], dataCount: dataCount[STRUCTURE_KEY['RESTAURANT']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineSpaTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineSpaTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineSpa');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['SPA'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['SPA']], dataCount: dataCount[STRUCTURE_KEY['SPA']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineBrandsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineBrandsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineBrands');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['BRAND'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['BRAND']], dataCount: dataCount[STRUCTURE_KEY['BRAND']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineGymsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineGymsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineGyms');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['GYM'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['GYM']], dataCount: dataCount[STRUCTURE_KEY['GYM']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineDestinationsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineDestinationsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineDestinations');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['DESTINATION'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['DESTINATION']], dataCount: dataCount[STRUCTURE_KEY['DESTINATION']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineFacilitiesTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineFacilitiesTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineFacilities');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['FACILITY'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['FACILITY']], dataCount: dataCount[STRUCTURE_KEY['FACILITY']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineGenericsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineGenericsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineGenerics');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['GENERIC'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['GENERIC']], dataCount: dataCount[STRUCTURE_KEY['GENERIC']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineChildrensClubTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineChildrensClubTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineChildrensClub');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['KIDSCLUB'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['KIDSCLUB']], dataCount: dataCount[STRUCTURE_KEY['KIDSCLUB']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('aria-labelledby', 'navUnderlineMeetingRoomsTab');
          incrementalDom.attr('class', (selectedTab == 'navUnderlineMeetingRoomsTab' ? 'active show' : '') + '  tab-pane');
          incrementalDom.attr('id', 'navUnderlineMeetingRooms');
          incrementalDom.attr('role', 'tabpanel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        $templateAlias1({id: STRUCTURE_KEY['MEETING'], header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data[STRUCTURE_KEY['MEETING']], dataCount: dataCount[STRUCTURE_KEY['MEETING']], showDeleteWC: showDeleteWC}, null, opt_ijData);
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  changeTab: (?),
 *  selectedTab: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  navigationNewURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationSearchURL: (!goog.soy.data.SanitizedContent|string),
 *  data: !Object<!goog.soy.data.SanitizedContent|string,!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>>,
 *  dataCount: !Object<!goog.soy.data.SanitizedContent|string,number>,
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  searchQuery: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  STRUCTURE_ID: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  STRUCTURE_KEY: !Object<!goog.soy.data.SanitizedContent|string,?>,
 *  isOnDelete: boolean,
 *  showDeleteWC: (?),
 *  deleteWC: (?),
 *  cancelWC: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'View.render';
}

exports.render.params = ["id","changeTab","selectedTab","contextPath","navigationNewURL","navigationEditURL","navigationSearchURL","data","dataCount","header","keys","searchQuery","STRUCTURE_ID","STRUCTURE_KEY","isOnDelete","showDeleteWC","deleteWC","cancelWC"];
exports.render.types = {"id":"string","changeTab":"?","selectedTab":"string","contextPath":"string","navigationNewURL":"string","navigationEditURL":"string","navigationSearchURL":"string","data":"map<string,list<map<string,string>>>","dataCount":"map<string,number>","header":"map<string,string>","keys":"list<string>","searchQuery":"string","STRUCTURE_ID":"map<string,?>","STRUCTURE_KEY":"map<string,?>","isOnDelete":"bool","showDeleteWC":"?","deleteWC":"?","cancelWC":"?"};
templates = exports;
return exports;

});

class View extends Component {}
Soy.register(View, templates);
export { View, templates };
export default templates;
/* jshint ignore:end */
