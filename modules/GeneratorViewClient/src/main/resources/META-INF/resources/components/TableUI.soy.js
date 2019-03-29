// This file was automatically generated from TableUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TableUI.
 * @public
 */

if (typeof TableUI == 'undefined') { var TableUI = {}; }


TableUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isString(opt_data.contextPath) || (opt_data.contextPath instanceof goog.soy.data.SanitizedContent), "expected param 'contextPath' of type string|goog.soy.data.SanitizedContent.");
  var contextPath = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.contextPath);
  var header = goog.asserts.assertObject(opt_data.header, "expected parameter 'header' of type map<string,string>.");
  var data = goog.asserts.assertArray(opt_data.data, "expected parameter 'data' of type list<map<string,string>>.");
  var keys = goog.asserts.assertArray(opt_data.keys, "expected parameter 'keys' of type list<string>.");
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="table-responsive"><table class="show-quick-actions-on-hover table table-autofit table-hover table-list table-nowrap"><thead><tr>';
  var fieldList324 = keys;
  var fieldListLen324 = fieldList324.length;
  for (var fieldIndex324 = 0; fieldIndex324 < fieldListLen324; fieldIndex324++) {
    var fieldData324 = fieldList324[fieldIndex324];
    output += '<th class="table-head-title"><a class="inline-item text-truncate-inline" href="#1"><span style="font-size: 10px"  title="' + soy.$$escapeHtmlAttribute(header[fieldData324]) + '">' + soy.$$escapeHtml(header[fieldData324]) + '</span></a></th>';
  }
  output += '<th ></th></tr></thead><tbody>';
  var fieldDataList338 = data;
  var fieldDataListLen338 = fieldDataList338.length;
  for (var fieldDataIndex338 = 0; fieldDataIndex338 < fieldDataListLen338; fieldDataIndex338++) {
    var fieldDataData338 = fieldDataList338[fieldDataIndex338];
    output += '<tr>';
    var fieldList331 = keys;
    var fieldListLen331 = fieldList331.length;
    for (var fieldIndex331 = 0; fieldIndex331 < fieldListLen331; fieldIndex331++) {
      var fieldData331 = fieldList331[fieldIndex331];
      output += '<td>' + soy.$$escapeHtml(fieldDataData338[fieldData331]) + '</td>';
    }
    output += '<td><div class="quick-action-menu"><a class="component-action quick-action-item" style="font-size: 14px" href="#1" role="button"><svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#trash" /></svg></a><a class="component-action quick-action-item" style="font-size: 14px" href="#1" role="button"><svg class="lexicon-icon lexicon-icon-text-editor" focusable="false" role="presentation"><use href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(contextPath)) + '/images/icons/icons.svg#text-editor" /></svg></a></div></td></tr>';
  }
  output += '</tbody></table></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  TableUI.render.soyTemplateName = 'TableUI.render';
}
