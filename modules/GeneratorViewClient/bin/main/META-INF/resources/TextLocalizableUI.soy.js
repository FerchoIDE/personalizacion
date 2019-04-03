// This file was automatically generated from TextLocalizableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextLocalizableUI.
 * @public
 */

if (typeof TextLocalizableUI == 'undefined') { var TextLocalizableUI = {}; }


TextLocalizableUI.render = function(opt_data, opt_ignored) {
  var labels = goog.asserts.assertObject(opt_data.labels, "expected parameter 'labels' of type map<string,string>.");
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  goog.asserts.assert(opt_data.type == null || opt_data.type != null, "expected param 'type' of type *|null|undefined.");
  var type = /** @type {*|null|undefined} */ (opt_data.type);
  var availableLanguageIds = goog.asserts.assertArray(opt_data.availableLanguageIds, "expected parameter 'availableLanguageIds' of type list<string>.");
  goog.asserts.assert(goog.isString(opt_data.defaultLanguageId) || (opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent), "expected param 'defaultLanguageId' of type string|goog.soy.data.SanitizedContent.");
  var defaultLanguageId = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.defaultLanguageId);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(TextUI.render({id: opt_data.id, type: type, label: labels[defaultLanguageId], placeholder: opt_data.placeholder[defaultLanguageId], value: value, availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguageId}));
};
if (goog.DEBUG) {
  TextLocalizableUI.render.soyTemplateName = 'TextLocalizableUI.render';
}
