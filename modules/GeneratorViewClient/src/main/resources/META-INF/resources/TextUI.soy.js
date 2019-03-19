// This file was automatically generated from TextUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextUI.
 * @public
 */

if (typeof TextUI == 'undefined') { var TextUI = {}; }


TextUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.label == null || opt_data.label != null, "expected param 'label' of type (?).");
  var label = /** @type {(?)} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  goog.asserts.assert(opt_data.placeholder == null || opt_data.placeholder != null, "expected param 'placeholder' of type *|null|undefined.");
  var placeholder = /** @type {*|null|undefined} */ (opt_data.placeholder);
  var availableLanguageIds = goog.asserts.assertArray(opt_data.availableLanguageIds, "expected parameter 'availableLanguageIds' of type list<string>.");
  goog.asserts.assert(goog.isString(opt_data.defaultLanguageId) || (opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent), "expected param 'defaultLanguageId' of type string|goog.soy.data.SanitizedContent.");
  var defaultLanguageId = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.defaultLanguageId);
  var output = '';
  var finalValue__soy113 = value != null ? value : '';
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="form-group-item"><label for="input_' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(label) + '</label>';
  var languageList142 = availableLanguageIds;
  var languageListLen142 = languageList142.length;
  for (var languageIndex142 = 0; languageIndex142 < languageListLen142; languageIndex142++) {
    var languageData142 = languageList142[languageIndex142];
    output += (languageData142 == defaultLanguageId) ? '<input class="form-control"  id="input_' + soy.$$escapeHtmlAttribute(opt_data.id) + '_' + soy.$$escapeHtmlAttribute(languageData142) + '" placeholder="' + soy.$$escapeHtmlAttribute(placeholder) + '"  type="' + soy.$$escapeHtmlAttribute(opt_data.type) + '"/>\t' : '<input class="form-control"   id="input_' + soy.$$escapeHtmlAttribute(opt_data.id) + '_' + soy.$$escapeHtmlAttribute(languageData142) + '" placeholder="' + soy.$$escapeHtmlAttribute(placeholder) + '" style="display: none"  type="' + soy.$$escapeHtmlAttribute(opt_data.type) + '"/>\t';
  }
  output += '</div>&nbsp;';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  TextUI.render.soyTemplateName = 'TextUI.render';
}
