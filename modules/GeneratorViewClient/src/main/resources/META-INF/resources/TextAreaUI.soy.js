/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from TextAreaUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace TextAreaUI.
 * @public
 */

goog.module('TextAreaUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  type: (!goog.soy.data.SanitizedContent|string),
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  defaultValues: (!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  placeholder: (*|null|undefined),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  handleShowEdit: (?),
 *  handleCancelEdit: (?),
 *  handleSaveEdit: (?),
 *  isOnLoadETA: (boolean|null|undefined)
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
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var type = soy.asserts.assertType(goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent, 'type', opt_data.type, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var label = opt_data.label;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined} */
  var values = soy.asserts.assertType(opt_data.values == null || goog.isObject(opt_data.values), 'values', opt_data.values, '!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>|null|undefined} */
  var defaultValues = soy.asserts.assertType(opt_data.defaultValues == null || goog.isObject(opt_data.defaultValues), 'defaultValues', opt_data.defaultValues, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>|null|undefined');
  /** @type {*|null|undefined} */
  var placeholder = opt_data.placeholder;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguageId = soy.asserts.assertType(goog.isString(opt_data.defaultLanguageId) || opt_data.defaultLanguageId instanceof goog.soy.data.SanitizedContent, 'defaultLanguageId', opt_data.defaultLanguageId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var handleShowEdit = opt_data.handleShowEdit;
  /** @type {?} */
  var handleCancelEdit = opt_data.handleCancelEdit;
  /** @type {?} */
  var handleSaveEdit = opt_data.handleSaveEdit;
  /** @type {boolean|null|undefined} */
  var isOnLoadETA = soy.asserts.assertType(opt_data.isOnLoadETA == null || (goog.isBoolean(opt_data.isOnLoadETA) || opt_data.isOnLoadETA === 1 || opt_data.isOnLoadETA === 0), 'isOnLoadETA', opt_data.isOnLoadETA, 'boolean|null|undefined');
  var _defaultValues__soy3960 = (defaultValues != null) ? {'es_ES': [defaultValues['es_ES']], 'en_US': [defaultValues['en_US']]} : {'es_ES': [''], 'en_US': ['']};
  var _values__soy3962 = (values != null) ? values : _defaultValues__soy3960;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'form-group-item');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('label');
        incrementalDom.attr('for', 'input_' + id);
    incrementalDom.elementOpenEnd();
      soyIdom.print(label);
      soyIdom.print(required ? '*' : '');
      if (type == 'ddm-text-html') {
        incrementalDom.text('    ');
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', handleShowEdit);
            incrementalDom.attr('value', 'inputarea_' + id + '_' + defaultLanguageId);
            incrementalDom.attr('href', '#');
            incrementalDom.attr('style', 'font-size: 16px');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('svg');
              incrementalDom.attr('class', 'lexicon-icon lexicon-icon-trash');
              incrementalDom.attr('focusable', 'false');
              incrementalDom.attr('role', 'presentation');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('use');
                incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#pencil');
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('use');
          incrementalDom.elementClose('svg');
        incrementalDom.elementClose('a');
      }
    incrementalDom.elementClose('label');
    var language4014List = availableLanguageIds;
    var language4014ListLen = language4014List.length;
    for (var language4014Index = 0; language4014Index < language4014ListLen; language4014Index++) {
        var language4014Data = language4014List[language4014Index];
        if (language4014Data == defaultLanguageId) {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language4014Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language4014Data);
              incrementalDom.attr('placeholder', placeholder);
          incrementalDom.elementOpenEnd();
            soyIdom.print((_values__soy3962[language4014Data] != null) ? _values__soy3962[language4014Data][0] : '');
          incrementalDom.elementClose('textarea');
        } else {
          incrementalDom.elementOpenStart('textarea');
              incrementalDom.attr('class', 'form-control');
              incrementalDom.attr('data-onkeyup', 'handleChange');
              incrementalDom.attr('data-path', path);
              incrementalDom.attr('data-language', language4014Data);
              incrementalDom.attr('id', 'inputarea_' + id + '_' + language4014Data);
              incrementalDom.attr('placeholder', placeholder);
              incrementalDom.attr('style', 'display: none');
          incrementalDom.elementOpenEnd();
            soyIdom.print((_values__soy3962[language4014Data] != null) ? _values__soy3962[language4014Data][0] : '');
          incrementalDom.elementClose('textarea');
        }
      }
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'claySmallModalETADlg');
        incrementalDom.attr('id', 'claySmallModalETA');
        incrementalDom.attr('class', 'modal ' + (isOnLoadETA ? 'show in' : ''));
        incrementalDom.attr('style', isOnLoadETA ? '' : 'display: none');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-info modal-dialog modal-full-screen');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'claySmallModalETADlg');
            incrementalDom.elementOpenEnd();
              incrementalDom.text('Editando ');
              soyIdom.print(label);
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('id', 'editor_TXTAREA_' + id);
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-footer');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-item-last');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'btn-group');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-secondary');
                      incrementalDom.attr('onclick', handleCancelEdit);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Cancelar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'btn-group-item');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('button');
                      incrementalDom.attr('class', 'btn btn-primary');
                      incrementalDom.attr('onclick', handleSaveEdit);
                      incrementalDom.attr('data-dismiss', 'modal');
                      incrementalDom.attr('type', 'button');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Guardar');
                  incrementalDom.elementClose('button');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('div');
            incrementalDom.elementClose('div');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  id: *,
 *  type: (!goog.soy.data.SanitizedContent|string),
 *  label: (?),
 *  values: (!Object<!goog.soy.data.SanitizedContent|string,!Array<?>>|null|undefined),
 *  defaultValues: (!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  placeholder: (*|null|undefined),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguageId: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  required: (boolean|null|undefined),
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  handleShowEdit: (?),
 *  handleCancelEdit: (?),
 *  handleSaveEdit: (?),
 *  isOnLoadETA: (boolean|null|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'TextAreaUI.render';
}

exports.render.params = ["id","type","label","values","defaultValues","placeholder","availableLanguageIds","defaultLanguageId","path","required","contextPath","handleShowEdit","handleCancelEdit","handleSaveEdit","isOnLoadETA"];
exports.render.types = {"id":"any","type":"string","label":"?","values":"map<string,list<?>> ","defaultValues":"map<string,string>","placeholder":"any","availableLanguageIds":"list<string>","defaultLanguageId":"string","path":"string","required":"bool","contextPath":"string","handleShowEdit":"?","handleCancelEdit":"?","handleSaveEdit":"?","isOnLoadETA":"bool"};
templates = exports;
return exports;

});

class TextAreaUI extends Component {}
Soy.register(TextAreaUI, templates);
export { TextAreaUI, templates };
export default templates;
/* jshint ignore:end */
