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
  var output = '<div id="' + soy.$$escapeHtmlAttribute(id) + '"><div class="panel panel-secondary"><div class="panel-header"><div class="panel-title">' + soy.$$escapeHtml(title[defaultLanguage]) + '</div></div><div class="panel-body"><div class="form-group"><div class="input-group">';
  var fieldList88 = data;
  var fieldListLen88 = fieldList88.length;
  for (var fieldIndex88 = 0; fieldIndex88 < fieldListLen88; fieldIndex88++) {
    var fieldData88 = fieldList88[fieldIndex88];
    output += (fieldData88['type'] == 'ddm-separator') ? 'anidado<br/>' : (fieldData88['type'] == 'text') ? TextLocalizableUI.render({id: fieldData88['name'], type: fieldData88['type'], labels: fieldData88['label'], placeholder: fieldData88['tip'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage}) : (fieldData88['type'] == 'checkbox') ? CheckBoxUI.render({id: fieldData88['name'], label: fieldData88['label'][defaultLanguage]}) : (fieldData88['type'] == 'ddm-date') ? 'Date' : (fieldData88['type'] == 'ddm-text-html') ? TextAreaUI.render({id: fieldData88['name'], label: fieldData88['label'][defaultLanguage], placeholder: fieldData88['tip'][defaultLanguage]}) : soy.$$escapeHtml(fieldData88['type']) + ' -- Ninguno<br/>';
  }
  output += '</div></div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  ViewNested.render.soyTemplateName = 'ViewNested.render';
}
