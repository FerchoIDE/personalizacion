// This file was automatically generated from Header.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Header.
 * @public
 */

if (typeof Header == 'undefined') { var Header = {}; }


Header.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.releaseInfo) || (opt_data.releaseInfo instanceof goog.soy.data.SanitizedContent), "expected param 'releaseInfo' of type string|goog.soy.data.SanitizedContent.");
  var releaseInfo = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.releaseInfo);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<blockquote class="blockquote-primary"><p>welcome-to-' + soy.$$escapeHtml(releaseInfo) + '</p></blockquote>');
};
if (goog.DEBUG) {
  Header.render.soyTemplateName = 'Header.render';
}
