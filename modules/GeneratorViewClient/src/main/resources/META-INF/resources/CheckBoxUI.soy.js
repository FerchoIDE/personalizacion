// This file was automatically generated from CheckBoxUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CheckBoxUI.
 * @public
 */

if (typeof CheckBoxUI == 'undefined') { var CheckBoxUI = {}; }


CheckBoxUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.label == null || opt_data.label != null, "expected param 'label' of type (?).");
  var label = /** @type {(?)} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  var output = '';
  var finalValue__soy41 = value != null ? value : false;
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="custom-control custom-checkbox custom-control-inline"><label><input checked="' + soy.$$escapeHtmlAttribute(finalValue__soy41) + '" id="checkbox_' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="custom-control-input" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text">' + soy.$$escapeHtml(label) + '</span></span></label></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  CheckBoxUI.render.soyTemplateName = 'CheckBoxUI.render';
}
