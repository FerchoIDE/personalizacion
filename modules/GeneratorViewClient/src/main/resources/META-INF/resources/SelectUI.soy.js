// This file was automatically generated from SelectUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SelectUI.
 * @public
 */

if (typeof SelectUI == 'undefined') { var SelectUI = {}; }


SelectUI.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.label == null || opt_data.label != null, "expected param 'label' of type (?).");
  var label = /** @type {(?)} */ (opt_data.label);
  goog.asserts.assert(opt_data.value == null || (opt_data.value instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.value), "expected param 'value' of type null|string|undefined.");
  var value = /** @type {null|string|undefined} */ (opt_data.value);
  var options = goog.asserts.assertArray(opt_data.options, "expected parameter 'options' of type list<string>.");
  var output = '';
  var finalValue__soy3 = value != null ? value : '';
  output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><div class="form-group"><label for="select_' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(label) + '</label><select class="form-control"   id="select_' + soy.$$escapeHtmlAttribute(opt_data.id) + '">';
  var optionList14 = options;
  var optionListLen14 = optionList14.length;
  for (var optionIndex14 = 0; optionIndex14 < optionListLen14; optionIndex14++) {
    var optionData14 = optionList14[optionIndex14];
    output += '<option>$option</option>';
  }
  output += '</select></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  SelectUI.render.soyTemplateName = 'SelectUI.render';
}
