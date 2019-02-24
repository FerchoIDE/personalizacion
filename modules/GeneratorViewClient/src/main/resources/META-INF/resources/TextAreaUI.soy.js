// This file was automatically generated from TextAreaUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextAreaUI.
 * @public
 */

if (typeof TextAreaUI == 'undefined') { var TextAreaUI = {}; }


TextAreaUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.label == null || opt_data.label != null, "expected param 'label' of type (?).");
  var label = /** @type {(?)} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  goog.asserts.assert(opt_data.placeholder == null || opt_data.placeholder != null, "expected param 'placeholder' of type *|null|undefined.");
  var placeholder = /** @type {*|null|undefined} */ (opt_data.placeholder);
  var output = '';
  var finalValue__soy195 = value != null ? value : '';
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="input-group-item"><label for="input_' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(label) + '</label><textarea class="form-control" id="inputarea_' + soy.$$escapeHtmlAttribute(opt_data.id) + '" placeholder="' + soy.$$escapeHtmlAttribute(placeholder) + '" value="' + soy.$$escapeHtmlAttribute(finalValue__soy195) + '"></textarea></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  TextAreaUI.render.soyTemplateName = 'TextAreaUI.render';
}
