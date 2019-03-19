// This file was automatically generated from ViewNested.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ViewNested.
 * @public
 */

if (typeof ViewNested == 'undefined') { var ViewNested = {}; }


ViewNested.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.id) || (opt_data.id instanceof goog.soy.data.SanitizedContent), "expected param 'id' of type string|goog.soy.data.SanitizedContent.");
  var id = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.id);
  var data = goog.asserts.assertArray(opt_data.data, "expected parameter 'data' of type list<unknown>.");
  var title = goog.asserts.assertObject(opt_data.title, "expected parameter 'title' of type map<string,string>.");
  goog.asserts.assert(goog.isString(opt_data.defaultLanguage) || (opt_data.defaultLanguage instanceof goog.soy.data.SanitizedContent), "expected param 'defaultLanguage' of type string|goog.soy.data.SanitizedContent.");
  var defaultLanguage = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.defaultLanguage);
  var availableLanguageIds = goog.asserts.assertArray(opt_data.availableLanguageIds, "expected parameter 'availableLanguageIds' of type list<string>.");
  goog.asserts.assert(goog.isString(opt_data.contextPath) || (opt_data.contextPath instanceof goog.soy.data.SanitizedContent), "expected param 'contextPath' of type string|goog.soy.data.SanitizedContent.");
  var contextPath = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.contextPath);
  goog.asserts.assert(opt_data.closeOpenTab == null || opt_data.closeOpenTab != null, "expected param 'closeOpenTab' of type (?).");
  var closeOpenTab = /** @type {(?)} */ (opt_data.closeOpenTab);
  var collapseInfo = goog.asserts.assertObject(opt_data.collapseInfo, "expected parameter 'collapseInfo' of type map<string,bool>.");
  var output = '';
  var show__soy53 = ((collapseInfo == null) ? null : collapseInfo['accordion' + id + 'Heading']) != null ? (((collapseInfo == null) ? null : collapseInfo['accordion' + id + 'Heading']) ? '' : 'show') : '';
  output += '<div id="' + soy.$$escapeHtmlAttribute(id) + '"><div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist"><div class="panel"><a onclick="' + soy.$$escapeHtmlAttribute(soy.$$escapeJsValue(closeOpenTab)) + '" aria-controls="accordion' + soy.$$escapeHtmlAttribute(id) + 'Collapse" aria-expanded="false" class="collapse-icon sheet-subtitle collapsed" data-toggle="collapse" href="#accordion' + soy.$$escapeHtmlAttribute(id) + 'Collapse" id="accordion' + soy.$$escapeHtmlAttribute(id) + 'Heading" role="tab"><span>' + soy.$$escapeHtml(title[defaultLanguage]) + '</span><span class="collapse-icon-closed"><svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-right"/></svg></span><span class="collapse-icon-open"><svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-down"/></svg></span></a><div aria-labelledby="accordion' + soy.$$escapeHtmlAttribute(id) + 'Heading" class="panel-collapse collapse ' + soy.$$escapeHtmlAttribute(show__soy53) + '" id="accordion' + soy.$$escapeHtmlAttribute(id) + 'Collapse" role="tabpanel"><div class="panel-body"><div class="form-group"><div class="input-group">';
  var fieldList108 = data;
  var fieldListLen108 = fieldList108.length;
  for (var fieldIndex108 = 0; fieldIndex108 < fieldListLen108; fieldIndex108++) {
    var fieldData108 = fieldList108[fieldIndex108];
    output += (fieldData108['type'] == 'ddm-separator') ? 'anidado<br/>' : (fieldData108['type'] == 'text') ? TextLocalizableUI.render({id: fieldData108['name'], type: fieldData108['type'], labels: fieldData108['label'], placeholder: fieldData108['tip'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage}) : (fieldData108['type'] == 'checkbox') ? CheckBoxUI.render({id: fieldData108['name'], label: fieldData108['label'][defaultLanguage]}) : (fieldData108['type'] == 'ddm-date') ? DateUI.render({id: fieldData108['name'], label: fieldData108['label'][defaultLanguage], placeholder: fieldData108['tip'][defaultLanguage], defaultLanguageId: defaultLanguage}) : (fieldData108['type'] == 'ddm-text-html') ? TextAreaUI.render({id: fieldData108['name'], label: fieldData108['label'][defaultLanguage], placeholder: fieldData108['tip'][defaultLanguage], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage}) : soy.$$escapeHtml(fieldData108['type']) + ' -- Ninguno<br/>';
  }
  output += '</div></div></div></div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  ViewNested.render.soyTemplateName = 'ViewNested.render';
}
