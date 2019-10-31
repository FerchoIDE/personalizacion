/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RadioUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RadioUI.
 * @public
 */

goog.module('RadioUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  options: !Array<?>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*} */
  var id = opt_data.id;
  /** @type {?} */
  var label = opt_data.label;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {!Array<?>} */
  var options = soy.asserts.assertType(goog.isArray(opt_data.options), 'options', opt_data.options, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  var _values__soy3410 = (values != null) ? values : {'es_ES': [''], 'en_US': ['']};
  var _val__soy3412 = (_values__soy3410[defaultLanguageId] != null) ? _values__soy3410[defaultLanguageId] : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('h4');
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'custom-control-label-text');
      incrementalDom.elementOpenEnd();
        soyIdom.print(label);
      incrementalDom.elementClose('span');
    incrementalDom.elementClose('h4');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'sheet');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'form-group');
      incrementalDom.elementOpenEnd();
        var option3448List = options;
        var option3448ListLen = option3448List.length;
        for (var option3448Index = 0; option3448Index < option3448ListLen; option3448Index++) {
            var option3448Data = option3448List[option3448Index];
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'custom-control custom-radio custom-control-inline');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpen('label');
                if (_val__soy3412 == '["' + option3448Data.value + '"]') {
                  incrementalDom.elementOpenStart('input');
                      incrementalDom.attr('value', option3448Data.value);
                      incrementalDom.attr('class', 'custom-control-input');
                      incrementalDom.attr('data-language', defaultLanguageId);
                      incrementalDom.attr('data-path', path);
                      incrementalDom.attr('data-onclick', 'handleChange');
                      incrementalDom.attr('checked', '');
                      incrementalDom.attr('id', 'radio_' + id + '_1');
                      incrementalDom.attr('name', 'radio_' + id);
                      incrementalDom.attr('type', 'radio');
                  incrementalDom.elementOpenEnd();
                  incrementalDom.elementClose('input');
                } else {
                  incrementalDom.elementOpenStart('input');
                      incrementalDom.attr('value', option3448Data.value);
                      incrementalDom.attr('class', 'custom-control-input');
                      incrementalDom.attr('data-language', defaultLanguageId);
                      incrementalDom.attr('data-path', path);
                      incrementalDom.attr('data-onclick', 'handleChange');
                      incrementalDom.attr('id', 'radio_' + id + '_1');
                      incrementalDom.attr('name', 'radio_' + id);
                      incrementalDom.attr('type', 'radio');
                  incrementalDom.elementOpenEnd();
                  incrementalDom.elementClose('input');
                }
                incrementalDom.elementOpenStart('span');
                    incrementalDom.attr('class', 'custom-control-label');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('span');
                      incrementalDom.attr('class', 'custom-control-label-text');
                  incrementalDom.elementOpenEnd();
                    soyIdom.print(option3448Data.label[defaultLanguageId]);
                    soyIdom.print(required ? '*' : '');
                  incrementalDom.elementClose('span');
                incrementalDom.elementClose('span');
              incrementalDom.elementClose('label');
            incrementalDom.elementClose('div');
          }
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  options: !Array<?>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RadioUI.render';
}

exports.render.params = ["id","label","values","options","defaultLanguageId","path","required"];
exports.render.types = {"id":"any","label":"?","values":"map<string,list<?>>","options":"list<?>","defaultLanguageId":"string","path":"string","required":"bool"};
templates = exports;
return exports;

});

class RadioUI extends Component {}
Soy.register(RadioUI, templates);
export { RadioUI, templates };
export default templates;
/* jshint ignore:end */
