// This file was automatically generated from View.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace View.
 * @public
 */

if (typeof View == 'undefined') { var View = {}; }


View.render = function(opt_data, opt_ignored) {
  var output = '';
  var defaultLanguage__soy111 = opt_data.data['defaultLanguage'];
  var availableLanguageIds__soy112 = opt_data.data['availableLanguageId'];
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.body) + '<div class="panel panel-primary"><div class="panel-header">' + soy.$$escapeHtml(opt_data.data['titleEstructure'][defaultLanguage__soy111]) + '</div><div class="panel-body">' + TitleLocalizableUI.render({id: 'title_principal', label: 'Titulo', placeholder: 'Titulo principal', contextPath: opt_data.contextPath}) + TitleLocalizableUI.render({id: 'description_prinipal', label: 'Descripcion', placeholder: 'Descripcion principal', contextPath: opt_data.contextPath}) + '</div></div><div class="panel panel-secondary"><div class="panel-header"><div class="panel-title">Generales</div></div><div class="panel-body"><div class="form-group"><div class="input-group">';
  var fieldList163 = opt_data.data['nestedFields'];
  var fieldListLen163 = fieldList163.length;
  for (var fieldIndex163 = 0; fieldIndex163 < fieldListLen163; fieldIndex163++) {
    var fieldData163 = fieldList163[fieldIndex163];
    output += (fieldData163['type'] == 'ddm-separator') ? ((fieldIndex163 > 0 && opt_data.data['nestedFields'][fieldIndex163 - 1]['type'] != 'ddm-separator') ? '</div></div></div></div>' : '') + ViewNested.render({id: 'id_' + fieldIndex163, data: fieldData163['nestedFields'], title: fieldData163['label'], availableLanguageIds: availableLanguageIds__soy112, defaultLanguage: defaultLanguage__soy111}) : (fieldData163['type'] == 'text') ? TextLocalizableUI.render({id: fieldData163['name'], type: fieldData163['type'], labels: fieldData163['label'], placeholder: fieldData163['tip'], availableLanguageIds: availableLanguageIds__soy112, defaultLanguageId: defaultLanguage__soy111}) : (fieldData163['type'] == 'checkbox') ? CheckBoxUI.render({id: fieldData163['name'], label: fieldData163['label'][defaultLanguage__soy111]}) : (fieldData163['type'] == 'ddm-date') ? 'Date' : (fieldData163['type'] == 'ddm-text-html') ? TextAreaUI.render({id: fieldData163['name'], label: fieldData163['label'][defaultLanguage__soy111], placeholder: fieldData163['tip'][defaultLanguage__soy111]}) : 'Ninguno<br/>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  View.render.soyTemplateName = 'View.render';
}
