/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Footer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Footer.
 * @public
 */

goog.module('Footer.incrementaldom');

goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpenStart('blockquote');
      incrementalDom.attr('class', 'blockquote-xs');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('small');
      /** @desc  */
      var MSG_EXTERNAL_2986127772961742460 = goog.getMsg('this-portlet-was-written-using-soy-templates');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_2986127772961742460));
    incrementalDom.elementClose('small');
  incrementalDom.elementClose('blockquote');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Footer.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class Footer extends Component {}
Soy.register(Footer, templates);
export { Footer, templates };
export default templates;
/* jshint ignore:end */
