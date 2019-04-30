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

goog.require('goog.soy.data.SanitizedContent');
goog.require('goog.string');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  releaseInfo: (!goog.soy.data.SanitizedContent|string)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var releaseInfo = soy.asserts.assertType(goog.isString(opt_data.releaseInfo) || opt_data.releaseInfo instanceof goog.soy.data.SanitizedContent, 'releaseInfo', opt_data.releaseInfo, '!goog.soy.data.SanitizedContent|string');
  incrementalDom.elementOpenStart('blockquote');
      incrementalDom.attr('class', 'blockquote-primary');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('p');
      /** @desc  */
      var MSG_EXTERNAL_4961493287620807008 = goog.getMsg('welcome-to-{$releaseInfo}', {'releaseInfo': '\u00010\u0001'});
      var lastIndex_309 = 0, partRe_309 = /\x01\d+\x01/g, match_309;
      do {
        match_309 = partRe_309.exec(MSG_EXTERNAL_4961493287620807008) || undefined;
        incrementalDom.text(goog.string.unescapeEntities(MSG_EXTERNAL_4961493287620807008.substring(lastIndex_309, match_309 && match_309.index)));
        lastIndex_309 = partRe_309.lastIndex;
        switch (match_309 && match_309[0]) {
          case '\u00010\u0001':
            soyIdom.print(releaseInfo);
            break;
        }
      } while (match_309);
    incrementalDom.elementClose('p');
  incrementalDom.elementClose('blockquote');
}
exports.render = $render;
/**
 * @typedef {{
 *  releaseInfo: (!goog.soy.data.SanitizedContent|string)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Header.render';
}

exports.render.params = ["releaseInfo"];
exports.render.types = {"releaseInfo":"string"};
templates = exports;
return exports;

});

class Header extends Component {}
Soy.register(Header, templates);
export { Header, templates };
export default templates;
/* jshint ignore:end */
