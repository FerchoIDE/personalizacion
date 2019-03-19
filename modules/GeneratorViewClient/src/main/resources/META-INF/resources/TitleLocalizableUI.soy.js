// This file was automatically generated from TitleLocalizableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TitleLocalizableUI.
 * @public
 */

if (typeof TitleLocalizableUI == 'undefined') { var TitleLocalizableUI = {}; }


TitleLocalizableUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.id) || (opt_data.id instanceof goog.soy.data.SanitizedContent), "expected param 'id' of type string|goog.soy.data.SanitizedContent.");
  var id = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.id);
  goog.asserts.assert(opt_data.label == null || (opt_data.label instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.label), "expected param 'label' of type null|string|undefined.");
  var label = /** @type {null|string|undefined} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  goog.asserts.assert(opt_data.placeholder == null || (opt_data.placeholder instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.placeholder), "expected param 'placeholder' of type null|string|undefined.");
  var placeholder = /** @type {null|string|undefined} */ (opt_data.placeholder);
  goog.asserts.assert(goog.isString(opt_data.contextPath) || (opt_data.contextPath instanceof goog.soy.data.SanitizedContent), "expected param 'contextPath' of type string|goog.soy.data.SanitizedContent.");
  var contextPath = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.contextPath);
  var availableLanguageIds = goog.asserts.assertArray(opt_data.availableLanguageIds, "expected parameter 'availableLanguageIds' of type list<string>.");
  goog.asserts.assert(goog.isString(opt_data.defaultLanguage) || (opt_data.defaultLanguage instanceof goog.soy.data.SanitizedContent), "expected param 'defaultLanguage' of type string|goog.soy.data.SanitizedContent.");
  var defaultLanguage = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.defaultLanguage);
  var availableLanguageIdsStyle = goog.asserts.assertObject(opt_data.availableLanguageIdsStyle, "expected parameter 'availableLanguageIdsStyle' of type map<string,string>.");
  goog.asserts.assert(goog.isString(opt_data.selectedLanguage) || (opt_data.selectedLanguage instanceof goog.soy.data.SanitizedContent), "expected param 'selectedLanguage' of type string|goog.soy.data.SanitizedContent.");
  var selectedLanguage = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.selectedLanguage);
  goog.asserts.assert(opt_data.changeLanguage == null || opt_data.changeLanguage != null, "expected param 'changeLanguage' of type (?).");
  var changeLanguage = /** @type {(?)} */ (opt_data.changeLanguage);
  var output = '';
  var finalValue__soy223 = value != null ? value : '';
  output += '<div id="' + soy.$$escapeHtmlAttribute(id) + '"><div class="form-group"><label for="localizableInput1">' + soy.$$escapeHtml(label) + '</label><div class="input-group"><div class="input-group-append input-group-item"><input class="form-control" id="input_' + soy.$$escapeHtmlAttribute(id) + '" placeholder="' + soy.$$escapeHtmlAttribute(placeholder) + '" type="text" value="' + soy.$$escapeHtmlAttribute(finalValue__soy223) + '"/></div><div class="input-group-item input-group-item-shrink"><button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="inline-item"><svg class="lexicon-icon lexicon-icon-' + soy.$$escapeHtmlAttribute(availableLanguageIdsStyle[selectedLanguage]) + '" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#' + soy.$$escapeHtmlAttribute(availableLanguageIdsStyle[selectedLanguage]) + '"></use></svg></span><span class="btn-section">' + soy.$$escapeHtml(selectedLanguage) + '</span></button><ul class="dropdown-menu dropdown-menu-right">';
  var languageIdList262 = availableLanguageIds;
  var languageIdListLen262 = languageIdList262.length;
  for (var languageIdIndex262 = 0; languageIdIndex262 < languageIdListLen262; languageIdIndex262++) {
    var languageIdData262 = languageIdList262[languageIdIndex262];
    output += '<li><a id="' + soy.$$escapeHtmlAttribute(languageIdData262) + '" onclick="' + soy.$$escapeHtmlAttribute(soy.$$escapeJsValue(changeLanguage)) + '" class="active autofit-row dropdown-item" href="#' + soy.$$escapeHtmlAttribute(languageIdIndex262 + 1) + '"><span class="autofit-col autofit-col-expand"><span class="autofit-section"><span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-' + soy.$$escapeHtmlAttribute(availableLanguageIdsStyle[languageIdData262]) + '" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#' + soy.$$escapeHtmlAttribute(availableLanguageIdsStyle[languageIdData262]) + '"></use></svg></span>' + soy.$$escapeHtml(languageIdData262) + '</span></span>' + ((languageIdData262 == defaultLanguage) ? '<span class="autofit-col"><span class="label label-info"><span class="label-item label-item-expand">Default</span></span></span>' : '') + '</a></li>';
  }
  output += '</ul></div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  TitleLocalizableUI.render.soyTemplateName = 'TitleLocalizableUI.render';
}
