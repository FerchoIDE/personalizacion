// This file was automatically generated from Navigation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Navigation.
 * @public
 */

if (typeof Navigation == 'undefined') { var Navigation = {}; }


Navigation.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.id) || (opt_data.id instanceof goog.soy.data.SanitizedContent), "expected param 'id' of type string|goog.soy.data.SanitizedContent.");
  var id = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.id);
  goog.asserts.assert(goog.isString(opt_data.navigationURL) || (opt_data.navigationURL instanceof goog.soy.data.SanitizedContent), "expected param 'navigationURL' of type string|goog.soy.data.SanitizedContent.");
  var navigationURL = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.navigationURL);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(id) + '">' + Header.render(opt_data) + '<p>this-is-another-view</p><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(navigationURL)) + '">click-here-to-navigate-back</a>' + Footer.render(opt_data) + '</div>');
};
if (goog.DEBUG) {
  Navigation.render.soyTemplateName = 'Navigation.render';
}
