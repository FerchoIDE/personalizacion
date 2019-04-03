// This file was automatically generated from DateUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DateUI.
 * @public
 */

if (typeof DateUI == 'undefined') { var DateUI = {}; }


DateUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.label == null || opt_data.label != null, "expected param 'label' of type (?).");
  var label = /** @type {(?)} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  goog.asserts.assert(opt_data.placeholder == null || opt_data.placeholder != null, "expected param 'placeholder' of type *|null|undefined.");
  var placeholder = /** @type {*|null|undefined} */ (opt_data.placeholder);
  goog.asserts.assert(goog.isString(opt_data.defaultLanguageId) || (opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent), "expected param 'defaultLanguageId' of type string|goog.soy.data.SanitizedContent.");
  var defaultLanguageId = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.defaultLanguageId);
  var output = '';
  var finalValue__soy421 = value != null ? value : '';
  var defaultLanguage__soy422 = defaultLanguageId;
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="input-group-item"><label for="date_' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(label) + '</label><input type="text" id="date_' + soy.$$escapeHtmlAttribute(opt_data.id) + '" name="date_' + soy.$$escapeHtmlAttribute(opt_data.id) + '" placeholder="' + soy.$$escapeHtmlAttribute(placeholder) + '" data-input></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  DateUI.render.soyTemplateName = 'DateUI.render';
}
