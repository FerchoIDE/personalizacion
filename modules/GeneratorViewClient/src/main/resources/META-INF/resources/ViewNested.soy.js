/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ViewNested.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ViewNested.
 * @public
 */

goog.module('ViewNested.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias2 = Soy.getTemplate('CheckBoxUI.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('DateUI.incrementaldom', 'render');

var $templateAlias6 = Soy.getTemplate('DocumentUI.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('JournalUI.incrementaldom', 'render');

var $templateAlias7 = Soy.getTemplate('RadioUI.incrementaldom', 'render');

var $templateAlias8 = Soy.getTemplate('SelectUI.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('TextAreaUI.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('TextLocalizableUI.incrementaldom', 'render');


/**
 * @param {{
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  structureId: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  data: !Array<?>,
 *  title: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  closeOpenTab: (?),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>,
 *  checkedOption: (?),
 *  checkedConcat: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  handleChangeValue: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var id = soy.asserts.assertType(goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent, 'id', opt_data.id, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var structureId = soy.asserts.assertType(goog.isString(opt_data.structureId) || opt_data.structureId instanceof goog.soy.data.SanitizedContent, 'structureId', opt_data.structureId, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var path = soy.asserts.assertType(opt_data.path == null || (goog.isString(opt_data.path) || opt_data.path instanceof goog.soy.data.SanitizedContent), 'path', opt_data.path, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var data = soy.asserts.assertType(goog.isArray(opt_data.data), 'data', opt_data.data, '!Array<?>');
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>} */
  var title = soy.asserts.assertType(goog.isObject(opt_data.title), 'title', opt_data.title, '!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var defaultLanguage = soy.asserts.assertType(goog.isString(opt_data.defaultLanguage) || opt_data.defaultLanguage instanceof goog.soy.data.SanitizedContent, 'defaultLanguage', opt_data.defaultLanguage, '!goog.soy.data.SanitizedContent|string');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>} */
  var availableLanguageIds = soy.asserts.assertType(goog.isArray(opt_data.availableLanguageIds), 'availableLanguageIds', opt_data.availableLanguageIds, '!Array<!goog.soy.data.SanitizedContent|string>');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var closeOpenTab = opt_data.closeOpenTab;
  /** @type {!Object<!goog.soy.data.SanitizedContent|string,boolean>} */
  var collapseInfo = soy.asserts.assertType(goog.isObject(opt_data.collapseInfo), 'collapseInfo', opt_data.collapseInfo, '!Object<!goog.soy.data.SanitizedContent|string,boolean>');
  /** @type {?} */
  var checkedOption = opt_data.checkedOption;
  /** @type {?} */
  var checkedConcat = opt_data.checkedConcat;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var brandSelected = soy.asserts.assertType(opt_data.brandSelected == null || (goog.isString(opt_data.brandSelected) || opt_data.brandSelected instanceof goog.soy.data.SanitizedContent), 'brandSelected', opt_data.brandSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var hotelSelected = soy.asserts.assertType(opt_data.hotelSelected == null || (goog.isString(opt_data.hotelSelected) || opt_data.hotelSelected instanceof goog.soy.data.SanitizedContent), 'hotelSelected', opt_data.hotelSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var handleChangeValue = opt_data.handleChangeValue;
  var show__soy3514 = ((collapseInfo == null ? null : collapseInfo['accordion' + id + 'Heading']) != null) ? ((collapseInfo == null ? null : collapseInfo['accordion' + id + 'Heading']) ? '' : 'show') : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-orientation', 'vertical');
        incrementalDom.attr('class', 'panel-group panel-group-flush');
        incrementalDom.attr('role', 'tablist');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'panel');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('a');
            incrementalDom.attr('onclick', closeOpenTab);
            incrementalDom.attr('aria-controls', 'accordion' + id + 'Collapse');
            incrementalDom.attr('aria-expanded', 'false');
            incrementalDom.attr('class', 'collapse-icon sheet-subtitle collapsed');
            incrementalDom.attr('data-toggle', 'collapse');
            incrementalDom.attr('href', '#accordion' + id + 'Collapse');
            incrementalDom.attr('id', 'accordion' + id + 'Heading');
            incrementalDom.attr('role', 'tab');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpen('span');
            soyIdom.print(title[defaultLanguage]);
          incrementalDom.elementClose('span');
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'collapse-icon-closed');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('svg');
                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-angle-right');
                incrementalDom.attr('focusable', 'false');
                incrementalDom.attr('role', 'presentation');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('use');
                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#angle-right');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('use');
            incrementalDom.elementClose('svg');
          incrementalDom.elementClose('span');
          incrementalDom.elementOpenStart('span');
              incrementalDom.attr('class', 'collapse-icon-open');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('svg');
                incrementalDom.attr('class', 'lexicon-icon lexicon-icon-angle-down');
                incrementalDom.attr('focusable', 'false');
                incrementalDom.attr('role', 'presentation');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('use');
                  incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#angle-down');
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('use');
            incrementalDom.elementClose('svg');
          incrementalDom.elementClose('span');
        incrementalDom.elementClose('a');
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('aria-labelledby', 'accordion' + id + 'Heading');
            incrementalDom.attr('class', 'panel-collapse collapse ' + show__soy3514);
            incrementalDom.attr('id', 'accordion' + id + 'Collapse');
            incrementalDom.attr('role', 'tabpanel');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'panel-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'form-group');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('div');
                  incrementalDom.attr('class', 'input-group');
              incrementalDom.elementOpenEnd();
                var field3635List = data;
                var field3635ListLen = field3635List.length;
                for (var field3635Index = 0; field3635Index < field3635ListLen; field3635Index++) {
                    var field3635Data = field3635List[field3635Index];
                    if (field3635Data['type'] == 'ddm-separator') {
                      incrementalDom.text('anidado');
                      incrementalDom.elementOpen('br');
                      incrementalDom.elementClose('br');
                    } else if (field3635Data['type'] == 'text') {
                      $templateAlias1({id: field3635Data['name'], path: path + '/' + field3635Data['name'], type: field3635Data['type'], labels: field3635Data['label'], placeholder: field3635Data['tip'], localizable: field3635Data['localizable'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'checkbox') {
                      $templateAlias2({id: field3635Data['name'], nameParent: name, label: field3635Data['label'][defaultLanguage], checkedOption: checkedOption, path: path + '/' + field3635Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'ddm-date') {
                      $templateAlias3({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], placeholder: field3635Data['tip'][defaultLanguage], defaultLanguageId: defaultLanguage, path: path + '/' + field3635Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'ddm-text-html') {
                      $templateAlias4({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], placeholder: field3635Data['tip'][defaultLanguage], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, path: path + '/' + field3635Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'ddm-journal-article') {
                      $templateAlias5({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, path: path + '/' + field3635Data['name']}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'ddm-documentlibrary') {
                      $templateAlias6({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], contextPath: contextPath, brandSelected: brandSelected, hotelSelected: hotelSelected, nestedFields: field3635Data['nestedFields'], availableLanguageIds: availableLanguageIds, defaultLanguageId: defaultLanguage, handleChangeValue: handleChangeValue, path: path + '/' + field3635Data['name']}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'radio') {
                      $templateAlias7({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field3635Data['options'], path: path + '/' + field3635Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else if (field3635Data['type'] == 'select') {
                      $templateAlias8({id: field3635Data['name'], label: field3635Data['label'][defaultLanguage], defaultLanguageId: defaultLanguage, options: field3635Data['options'], path: path + '/' + field3635Data['name'], handleChangeValue: handleChangeValue}, null, opt_ijData);
                    } else {
                      soyIdom.print(field3635Data['type']);
                      incrementalDom.text(' -- Ninguno');
                      incrementalDom.elementOpen('br');
                      incrementalDom.elementClose('br');
                    }
                    incrementalDom.elementOpen('div');
                      incrementalDom.text('\u00A0\u00A0');
                    incrementalDom.elementClose('div');
                  }
                if ((checkedConcat != null)) {
                  if (structureId == '35796' && (checkedConcat[name] != null) && (name == 'Restrictions' || name == 'Benefits1' || name == 'occupationRate')) {
                    incrementalDom.elementClose('div');
                  incrementalDom.elementOpenStart('div');
                      incrementalDom.attr('class', 'input-group');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('span');
                        incrementalDom.attr('class', 'label label-info');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('span');
                          incrementalDom.attr('class', 'label-item label-item-expand');
                      incrementalDom.elementOpenEnd();
                        soyIdom.print(checkedConcat[name]);
                      incrementalDom.elementClose('span');
                    incrementalDom.elementClose('span');
                  }
                }
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
 *  id: (!goog.soy.data.SanitizedContent|string),
 *  structureId: (!goog.soy.data.SanitizedContent|string),
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  path: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  data: !Array<?>,
 *  title: !Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>,
 *  defaultLanguage: (!goog.soy.data.SanitizedContent|string),
 *  availableLanguageIds: !Array<!goog.soy.data.SanitizedContent|string>,
 *  contextPath: (!goog.soy.data.SanitizedContent|string),
 *  closeOpenTab: (?),
 *  collapseInfo: !Object<!goog.soy.data.SanitizedContent|string,boolean>,
 *  checkedOption: (?),
 *  checkedConcat: (?),
 *  brandSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hotelSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  handleChangeValue: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ViewNested.render';
}

exports.render.params = ["id","structureId","name","path","data","title","defaultLanguage","availableLanguageIds","contextPath","closeOpenTab","collapseInfo","checkedOption","checkedConcat","brandSelected","hotelSelected","handleChangeValue"];
exports.render.types = {"id":"string","structureId":"string","name":"string","path":"string","data":"list<?>","title":"map<string, string>","defaultLanguage":"string","availableLanguageIds":"list<string>","contextPath":"string","closeOpenTab":"?","collapseInfo":"map<string,bool>","checkedOption":"?","checkedConcat":"?","brandSelected":"string","hotelSelected":"string","handleChangeValue":"?"};
templates = exports;
return exports;

});

class ViewNested extends Component {}
Soy.register(ViewNested, templates);
export { ViewNested, templates };
export default templates;
/* jshint ignore:end */
