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
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>
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
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var header = soy.asserts.assertType(goog.isObject(opt_data.header), 'header', opt_data.header, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>} */
  var data = soy.asserts.assertType(goog.isArray(opt_data.data), 'data', opt_data.data, '!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var keys = soy.asserts.assertType(goog.isArray(opt_data.keys), 'keys', opt_data.keys, '!Array<!goog.soy.data.SanitizedContent|string>');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'table-responsive');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('table');
        incrementalDom.attr('class', 'show-quick-actions-on-hover table table-autofit table-hover table-list table-nowrap');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('thead');
        incrementalDom.elementOpen('tr');
          var field6733List = keys;
          var field6733ListLen = field6733List.length;
          for (var field6733Index = 0; field6733Index < field6733ListLen; field6733Index++) {
              var field6733Data = field6733List[field6733Index];
              incrementalDom.elementOpenStart('th');
                  incrementalDom.attr('class', 'table-head-title');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('a');
                    incrementalDom.attr('class', 'inline-item text-truncate-inline');
                    incrementalDom.attr('href', '#1');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('span');
                      incrementalDom.attr('style', 'font-size: 10px');
                      incrementalDom.attr('title', header[field6733Data]);
                  incrementalDom.elementOpenEnd();
                    soyIdom.print(header[field6733Data]);
                  incrementalDom.elementClose('span');
                incrementalDom.elementClose('a');
              incrementalDom.elementClose('th');
            }
          incrementalDom.elementOpen('th');
          incrementalDom.elementClose('th');
        incrementalDom.elementClose('tr');
      incrementalDom.elementClose('thead');
      incrementalDom.elementOpen('tbody');
        var fieldData6747List = data;
        var fieldData6747ListLen = fieldData6747List.length;
        for (var fieldData6747Index = 0; fieldData6747Index < fieldData6747ListLen; fieldData6747Index++) {
            var fieldData6747Data = fieldData6747List[fieldData6747Index];
            incrementalDom.elementOpen('tr');
              var field6740List = keys;
              var field6740ListLen = field6740List.length;
              for (var field6740Index = 0; field6740Index < field6740ListLen; field6740Index++) {
                  var field6740Data = field6740List[field6740Index];
                  incrementalDom.elementOpen('td');
                    soyIdom.print(fieldData6747Data[field6740Data]);
                  incrementalDom.elementClose('td');
                }
              incrementalDom.elementOpen('td');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'quick-action-menu');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('class', 'component-action quick-action-item');
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
                      incrementalDom.attr('href', '#1');
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
    incrementalDom.elementClose('table');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  header: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  data: !Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>,
 *  keys: !Array<!goog.soy.data.SanitizedContent|string>
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TableUI.render';
}

exports.render.params = ["id","contextPath","header","data","keys"];
exports.render.types = {"id":"any","contextPath":"string","header":"map<string,string>","data":"list<map<string,string>>","keys":"list<string>"};
templates = exports;
return exports;

});

class TableUI extends Component {}
Soy.register(TableUI, templates);
export { TableUI, templates };
export default templates;
/* jshint ignore:end */
