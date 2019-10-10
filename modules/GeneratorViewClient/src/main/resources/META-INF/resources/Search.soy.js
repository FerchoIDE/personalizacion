/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Search.
 * @public
 */

goog.module('Search.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('TableUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationSearchURL: (!goog.soy.data.SanitizedContent|string),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  querySearch: (!goog.soy.data.SanitizedContent|string),
 *  searchQuery: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  dataCount: number,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  showDeleteWC: (?),
 *  changePage: (?)
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
  var navigationEditURL = soy.asserts.assertType(goog.isString(opt_data.navigationEditURL) || opt_data.navigationEditURL instanceof goog.soy.data.SanitizedContent, 'navigationEditURL', opt_data.navigationEditURL, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var navigationSearchURL = soy.asserts.assertType(goog.isString(opt_data.navigationSearchURL) || opt_data.navigationSearchURL instanceof goog.soy.data.SanitizedContent, 'navigationSearchURL', opt_data.navigationSearchURL, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var querySearch = soy.asserts.assertType(goog.isString(opt_data.querySearch) || opt_data.querySearch instanceof goog.soy.data.SanitizedContent, 'querySearch', opt_data.querySearch, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var searchQuery = soy.asserts.assertType(opt_data.searchQuery == null || (goog.isString(opt_data.searchQuery) || opt_data.searchQuery instanceof goog.soy.data.SanitizedContent), 'searchQuery', opt_data.searchQuery, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var header = soy.asserts.assertType(goog.isObject(opt_data.header), 'header', opt_data.header, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>} */
  var data = soy.asserts.assertType(goog.isArray(opt_data.data), 'data', opt_data.data, '!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>');
  /** @type {number} */
  var dataCount = soy.asserts.assertType(goog.isNumber(opt_data.dataCount), 'dataCount', opt_data.dataCount, 'number');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var keys = soy.asserts.assertType(goog.isArray(opt_data.keys), 'keys', opt_data.keys, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {?} */
  var showDeleteWC = opt_data.showDeleteWC;
  /** @type {?} */
  var changePage = opt_data.changePage;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
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
          incrementalDom.elementOpen('h1');
            incrementalDom.text(' Se busco: ');
            incrementalDom.elementOpen('b');
              soyIdom.print(querySearch);
            incrementalDom.elementClose('b');
          incrementalDom.elementClose('h1');
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
                  incrementalDom.attr('placeholder', querySearch);
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
    $templateAlias1({id: id + '_table', header: header, contextPath: contextPath, keys: keys, navigationEditURL: navigationEditURL, data: data, dataCount: dataCount, changePageParent: changePage, showDeleteWC: showDeleteWC}, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  navigationSearchURL: (!goog.soy.data.SanitizedContent|string),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  querySearch: (!goog.soy.data.SanitizedContent|string),
 *  searchQuery: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  dataCount: number,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  showDeleteWC: (?),
 *  changePage: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Search.render';
}

exports.render.params = ["id","navigationEditURL","navigationSearchURL","contextPath","querySearch","searchQuery","header","data","dataCount","keys","showDeleteWC","changePage"];
exports.render.types = {"id":"string","navigationEditURL":"string","navigationSearchURL":"string","contextPath":"string","querySearch":"string","searchQuery":"string","header":"map<string,string>","data":"list<map<string,string>>","dataCount":"number","keys":"list<string>","showDeleteWC":"?","changePage":"?"};
templates = exports;
return exports;

});

class Search extends Component {}
Soy.register(Search, templates);
export { Search, templates };
export default templates;
/* jshint ignore:end */
