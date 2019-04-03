// This file was automatically generated from NewStructure.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace NewStructure.
 * @public
 */

if (typeof NewStructure == 'undefined') { var NewStructure = {}; }


NewStructure.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.id) || (opt_data.id instanceof goog.soy.data.SanitizedContent), "expected param 'id' of type string|goog.soy.data.SanitizedContent.");
  var id = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.id);
  var data = goog.asserts.assertObject(opt_data.data, "expected parameter 'data' of type map<string,unknown>.");
  goog.asserts.assert(goog.isString(opt_data.contextPath) || (opt_data.contextPath instanceof goog.soy.data.SanitizedContent), "expected param 'contextPath' of type string|goog.soy.data.SanitizedContent.");
  var contextPath = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.contextPath);
  goog.asserts.assert(opt_data.closeOpenTab == null || opt_data.closeOpenTab != null, "expected param 'closeOpenTab' of type (?).");
  var closeOpenTab = /** @type {(?)} */ (opt_data.closeOpenTab);
  goog.asserts.assert(opt_data.changeLanguage == null || opt_data.changeLanguage != null, "expected param 'changeLanguage' of type (?).");
  var changeLanguage = /** @type {(?)} */ (opt_data.changeLanguage);
  var collapseInfo = goog.asserts.assertObject(opt_data.collapseInfo, "expected parameter 'collapseInfo' of type map<string,bool>.");
  var output = '';
  var selectedLanguage__soy466 = data['selectedLanguage'];
  var defaultLanguage__soy467 = data['defaultLanguage'];
  var availableLanguageIds__soy468 = data['availableLanguageId'];
  var availableLanguageIdsStyle__soy469 = data['availableLanguageId-style'];
  output += '<div id="' + soy.$$escapeHtmlAttribute(id) + '"><div>funcion ' + soy.$$escapeHtml(closeOpenTab) + '</div><div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist"><div class="panel"><a onclick="' + soy.$$escapeHtmlAttribute(soy.$$escapeJsValue(closeOpenTab)) + '" aria-controls="accordionPrincipalCollapse" aria-expanded="true" class="collapse-icon sheet-subtitle" data-toggle="collapse" href="#accordionPrincipalCollapse" id="accordionPrincipalHeading" role="tab"><span ><div class="sheet-header"><h2 class="sheet-title">' + soy.$$escapeHtml(data['titleEstructure'][defaultLanguage__soy467]) + '</h2></div></span><span class="collapse-icon-closed"><svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-right" /></svg></span><span class="collapse-icon-open"><svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-down" /></svg></span></a><div aria-labelledby="accordionPrincipalHeading" class="panel-collapse collapse  ' + soy.$$escapeHtmlAttribute(((collapseInfo == null) ? null : collapseInfo['accordionPrincipalHeading']) ? '' : 'show') + '" id="accordionPrincipalCollapse" role="tabpanel"><div class="panel-body">' + TitleLocalizableUI.render({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy468, defaultLanguage: defaultLanguage__soy467, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy469, selectedLanguage: selectedLanguage__soy466}) + TitleLocalizableUI.render({id: 'description_prinipal', label: 'Descripcion', placeholder: 'Descripcion principal', contextPath: contextPath, availableLanguageIds: availableLanguageIds__soy468, defaultLanguage: defaultLanguage__soy467, changeLanguage: changeLanguage, availableLanguageIdsStyle: availableLanguageIdsStyle__soy469, selectedLanguage: selectedLanguage__soy466}) + '</div></div></div></div><div><div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist"><div class="panel"><a onclick="' + soy.$$escapeHtmlAttribute(soy.$$escapeJsValue(closeOpenTab)) + '" aria-controls="accordionGeneralCollapse" aria-expanded="false" class="collapse-icon sheet-subtitle collapsed" data-toggle="collapse" href="#accordionGeneralCollapse" id="accordionGeneralHeading" role="tab"><span >Generales</span><span class="collapse-icon-closed"><svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-right" /></svg></span><span class="collapse-icon-open"><svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#angle-down" /></svg></span></a><div aria-labelledby="accordionGeneralHeading" class="panel-collapse collapse  ' + soy.$$escapeHtmlAttribute(((collapseInfo == null) ? null : collapseInfo['accordionGeneralHeading']) ? '' : 'show') + '" id="accordionGeneralCollapse" role="tabpanel"><div class="panel-body"><div class="form-group"><div class="input-group">';
  var fieldList555 = data['nestedFields'];
  var fieldListLen555 = fieldList555.length;
  for (var fieldIndex555 = 0; fieldIndex555 < fieldListLen555; fieldIndex555++) {
    var fieldData555 = fieldList555[fieldIndex555];
    output += (fieldData555['type'] == 'ddm-separator') ? ((fieldIndex555 > 0 && data['nestedFields'][fieldIndex555 - 1]['type'] != 'ddm-separator') ? '</div></div></div></div></div></div></div>' : '') + ViewNested.render({id: 'id_' + fieldIndex555, data: fieldData555['nestedFields'], title: fieldData555['label'], availableLanguageIds: availableLanguageIds__soy468, defaultLanguage: selectedLanguage__soy466, closeOpenTab: closeOpenTab, contextPath: contextPath, collapseInfo: collapseInfo}) : (fieldData555['type'] == 'text') ? TextLocalizableUI.render({id: fieldData555['name'], type: fieldData555['type'], labels: fieldData555['label'], placeholder: fieldData555['tip'], availableLanguageIds: availableLanguageIds__soy468, defaultLanguageId: selectedLanguage__soy466}) : (fieldData555['type'] == 'checkbox') ? CheckBoxUI.render({id: fieldData555['name'], label: fieldData555['label'][selectedLanguage__soy466]}) : (fieldData555['type'] == 'ddm-date') ? DateUI.render({id: fieldData555['name'], label: fieldData555['label'][defaultLanguage__soy467], placeholder: fieldData555['tip'][defaultLanguage__soy467], defaultLanguageId: selectedLanguage__soy466}) : (fieldData555['type'] == 'ddm-text-html') ? TextAreaUI.render({id: fieldData555['name'], label: fieldData555['label'][selectedLanguage__soy466], placeholder: fieldData555['tip'][selectedLanguage__soy466], availableLanguageIds: availableLanguageIds__soy468, defaultLanguageId: selectedLanguage__soy466}) : 'Ninguno<br/>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  NewStructure.render.soyTemplateName = 'NewStructure.render';
}
