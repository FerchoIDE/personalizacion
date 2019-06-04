/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Navigation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Navigation.
 * @public
 */

goog.module('Navigation.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias2 = Soy.getTemplate('Footer.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Header.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  navigationURL: (!goog.soy.data.SanitizedContent|string)
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
  var navigationURL = soy.asserts.assertType(goog.isString(opt_data.navigationURL) || opt_data.navigationURL instanceof goog.soy.data.SanitizedContent, 'navigationURL', opt_data.navigationURL, '!goog.soy.data.SanitizedContent|string');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    $templateAlias1(opt_data, null, opt_ijData);
    incrementalDom.elementOpen('p');
      /** @desc  */
      var MSG_EXTERNAL_8532436723280155945 = goog.getMsg('this-is-another-view');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8532436723280155945));
    incrementalDom.elementClose('p');
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('href', navigationURL);
    incrementalDom.elementOpenEnd();
      /** @desc  */
      var MSG_EXTERNAL_4596791579122762316 = goog.getMsg('click-here-to-navigate-back');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_4596791579122762316));
    incrementalDom.elementClose('a');
    $templateAlias2(opt_data, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  navigationURL: (!goog.soy.data.SanitizedContent|string)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Navigation.render';
}

exports.render.params = ["id","navigationURL"];
exports.render.types = {"id":"string","navigationURL":"string"};
templates = exports;
return exports;

});

class Navigation extends Component {}
Soy.register(Navigation, templates);
export { Navigation, templates };
export default templates;
/* jshint ignore:end */
