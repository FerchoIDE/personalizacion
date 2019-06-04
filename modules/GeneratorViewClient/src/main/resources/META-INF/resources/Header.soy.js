/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Header.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Header.
 * @public
 */

goog.module('Header.incrementaldom');

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
      incrementalDom.attr('class', 'blockquote-primary');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('p');
      /** @desc  */
      var MSG_EXTERNAL_8868305050292887045 = goog.getMsg('Es necesario iniciar sesion');
      incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_8868305050292887045));
    incrementalDom.elementClose('p');
  incrementalDom.elementClose('blockquote');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Header.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class Header extends Component {}
Soy.register(Header, templates);
export { Header, templates };
export default templates;
/* jshint ignore:end */
