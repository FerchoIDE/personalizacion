/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TableUI.
 * @public
 */

goog.module('TableUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  dataCount: number,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  showDeleteWC: (?),
 *  changePage: (?),
 *  changePageParent: (?),
 *  selectPage: (?)
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
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var navigationEditURL = soy.asserts.assertType(goog.isString(opt_data.navigationEditURL) || opt_data.navigationEditURL instanceof goog.soy.data.SanitizedContent, 'navigationEditURL', opt_data.navigationEditURL, '!goog.soy.data.SanitizedContent|string');
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
  /** @type {?} */
  var changePageParent = opt_data.changePageParent;
  /** @type {?} */
  var selectPage = opt_data.selectPage;
  var selectPageCurrent__soy10819 = (selectPage != null) ? ((selectPage[id] != null) ? selectPage[id] : 0) : 0;
  var changePageCurrent__soy10821 = (changePageParent != null) ? changePageParent : changePage;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'table-responsive');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('table');
        incrementalDom.attr('class', 'show-quick-actions-on-hover table table-autofit table-hover table-list table-nowrap');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('thead');
        incrementalDom.elementOpen('tr');
          var field10830List = keys;
          var field10830ListLen = field10830List.length;
          for (var field10830Index = 0; field10830Index < field10830ListLen; field10830Index++) {
              var field10830Data = field10830List[field10830Index];
              incrementalDom.elementOpenStart('th');
                  incrementalDom.attr('class', 'table-head-title');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('a');
                    incrementalDom.attr('class', 'inline-item text-truncate-inline');
                    incrementalDom.attr('href', '#1');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('span');
                      incrementalDom.attr('style', 'font-size: 18px');
                      incrementalDom.attr('title', header[field10830Data]);
                  incrementalDom.elementOpenEnd();
                    soyIdom.print(header[field10830Data]);
                  incrementalDom.elementClose('span');
                incrementalDom.elementClose('a');
              incrementalDom.elementClose('th');
            }
          incrementalDom.elementOpen('th');
          incrementalDom.elementClose('th');
        incrementalDom.elementClose('tr');
      incrementalDom.elementClose('thead');
      incrementalDom.elementOpen('tbody');
        var fieldData10852List = data;
        var fieldData10852ListLen = fieldData10852List.length;
        for (var fieldData10852Index = 0; fieldData10852Index < fieldData10852ListLen; fieldData10852Index++) {
            var fieldData10852Data = fieldData10852List[fieldData10852Index];
            incrementalDom.elementOpen('tr');
              var field10837List = keys;
              var field10837ListLen = field10837List.length;
              for (var field10837Index = 0; field10837Index < field10837ListLen; field10837Index++) {
                  var field10837Data = field10837List[field10837Index];
                  incrementalDom.elementOpen('td');
                    soyIdom.print(fieldData10852Data[field10837Data]);
                  incrementalDom.elementClose('td');
                }
              incrementalDom.elementOpen('td');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'quick-action-menu');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('class', 'component-action quick-action-item');
                      incrementalDom.attr('onclick', showDeleteWC);
                      incrementalDom.attr('itemid', fieldData10852Data['articleId']);
                      incrementalDom.attr('style', 'font-size: 14px');
                      incrementalDom.attr('href', '#1');
                      incrementalDom.attr('role', 'button');
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
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('class', 'component-action quick-action-item');
                      incrementalDom.attr('style', 'font-size: 14px');
                      incrementalDom.attr('href', navigationEditURL + '&_generatorviewclient_articleId=' + fieldData10852Data['id']);
                      incrementalDom.attr('role', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('svg');
                        incrementalDom.attr('class', 'lexicon-icon lexicon-icon-text-editor');
                        incrementalDom.attr('focusable', 'false');
                        incrementalDom.attr('role', 'presentation');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('use');
                          incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#text-editor');
                      incrementalDom.elementOpenEnd();
                      incrementalDom.elementClose('use');
                    incrementalDom.elementClose('svg');
                  incrementalDom.elementClose('a');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('td');
            incrementalDom.elementClose('tr');
          }
      incrementalDom.elementClose('tbody');
      incrementalDom.elementOpen('tfoot');
        incrementalDom.elementOpen('tr');
          incrementalDom.elementOpen('th');
          incrementalDom.elementClose('th');
          incrementalDom.elementOpenStart('th');
              incrementalDom.attr('style', 'text-align: center');
              incrementalDom.attr('colspan', '4');
              incrementalDom.attr('class', 'table-head-title');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('ul');
                incrementalDom.attr('class', 'pagination');
            incrementalDom.elementOpenEnd();
              var i10855Limit = dataCount;
              for (var i10855 = 0; i10855 < i10855Limit; i10855++) {
                if (i10855 == selectPageCurrent__soy10819) {
                  incrementalDom.elementOpenStart('li');
                      incrementalDom.attr('class', 'page-item active');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('a');
                        incrementalDom.attr('class', 'page-link');
                        incrementalDom.attr('onclick', changePageCurrent__soy10821);
                        incrementalDom.attr('itemid', id + '___' + i10855);
                        incrementalDom.attr('href', '#1');
                    incrementalDom.elementOpenEnd();
                      soyIdom.print(i10855 + 1);
                    incrementalDom.elementClose('a');
                  incrementalDom.elementClose('li');
                } else {
                  incrementalDom.elementOpenStart('li');
                      incrementalDom.attr('class', 'page-item');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('a');
                        incrementalDom.attr('class', 'page-link');
                        incrementalDom.attr('onclick', changePageCurrent__soy10821);
                        incrementalDom.attr('itemid', id + '___' + i10855);
                        incrementalDom.attr('href', '#3');
                    incrementalDom.elementOpenEnd();
                      soyIdom.print(i10855 + 1);
                    incrementalDom.elementClose('a');
                  incrementalDom.elementClose('li');
                }
              }
            incrementalDom.elementClose('ul');
          incrementalDom.elementClose('th');
          incrementalDom.elementOpen('th');
          incrementalDom.elementClose('th');
        incrementalDom.elementClose('tr');
      incrementalDom.elementClose('tfoot');
    incrementalDom.elementClose('table');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  navigationEditURL: (!goog.soy.data.SanitizedContent|string),
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  dataCount: number,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>,
 *  showDeleteWC: (?),
 *  changePage: (?),
 *  changePageParent: (?),
 *  selectPage: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TableUI.render';
}

exports.render.params = ["id","contextPath","navigationEditURL","header","data","dataCount","keys","showDeleteWC","changePage","changePageParent","selectPage"];
exports.render.types = {"id":"any","contextPath":"string","navigationEditURL":"string","header":"map<string,string>","data":"list<map<string,string>>","dataCount":"number","keys":"list<string>","showDeleteWC":"?","changePage":"?","changePageParent":"?","selectPage":"?"};
templates = exports;
return exports;

});

class TableUI extends Component {}
Soy.register(TableUI, templates);
export { TableUI, templates };
export default templates;
/* jshint ignore:end */
