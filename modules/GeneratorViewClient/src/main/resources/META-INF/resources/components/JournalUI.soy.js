/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from JournalUI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JournalUI.
 * @public
 */

goog.module('JournalUI.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  id: *,
 *  label: (?),
 *  isOpenSelect: (boolean|null|undefined),
 *  openSelectJournal: (?),
 *  closeSelectJournal: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  contextPath: (!goog.soy.data.SanitizedContent|string)
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
  /** @type {boolean|null|undefined} */
  var isOpenSelect = soy.asserts.assertType(opt_data.isOpenSelect == null || (goog.isBoolean(opt_data.isOpenSelect) || opt_data.isOpenSelect === 1 || opt_data.isOpenSelect === 0), 'isOpenSelect', opt_data.isOpenSelect, 'boolean|null|undefined');
  /** @type {?} */
  var openSelectJournal = opt_data.openSelectJournal;
  /** @type {?} */
  var closeSelectJournal = opt_data.closeSelectJournal;
  /** @type {?} */
  var setSelectedResult = opt_data.setSelectedResult;
  /** @type {!Array<?>|null|undefined} */
  var itemsResult = soy.asserts.assertType(opt_data.itemsResult == null || goog.isArray(opt_data.itemsResult), 'itemsResult', opt_data.itemsResult, '!Array<?>|null|undefined');
  /** @type {?} */
  var itemsResultSelected = opt_data.itemsResultSelected;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var contextPath = soy.asserts.assertType(goog.isString(opt_data.contextPath) || opt_data.contextPath instanceof goog.soy.data.SanitizedContent, 'contextPath', opt_data.contextPath, '!goog.soy.data.SanitizedContent|string');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', id);
      incrementalDom.attr('class', 'container');
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'row');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-10');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'container');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('ul');
                incrementalDom.attr('class', 'list-group show-quick-actions-on-hover');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('li');
                  incrementalDom.attr('class', 'list-group-item list-group-item-flex');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'autofit-col');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('href', '#1');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('svg');
                        incrementalDom.attr('class', 'lexicon-icon lexicon-icon-trash');
                        incrementalDom.attr('focusable', 'false');
                        incrementalDom.attr('role', 'presentation');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('use');
                          incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#trash');
                      incrementalDom.elementOpenEnd();
                      incrementalDom.elementClose('use');
                    incrementalDom.elementClose('svg');
                  incrementalDom.elementClose('a');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'autofit-col autofit-col-expand');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('h4');
                      incrementalDom.attr('class', 'list-group-title text-truncate');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('a');
                        incrementalDom.attr('href', '#1');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.text('Item 6');
                    incrementalDom.elementClose('a');
                  incrementalDom.elementClose('h4');
                  incrementalDom.elementOpenStart('p');
                      incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Description 6');
                  incrementalDom.elementClose('p');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('li');
              incrementalDom.elementOpenStart('li');
                  incrementalDom.attr('class', 'list-group-item list-group-item-flex');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'autofit-col');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('a');
                      incrementalDom.attr('href', '#1');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('svg');
                        incrementalDom.attr('class', 'lexicon-icon lexicon-icon-trash');
                        incrementalDom.attr('focusable', 'false');
                        incrementalDom.attr('role', 'presentation');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('use');
                          incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#trash');
                      incrementalDom.elementOpenEnd();
                      incrementalDom.elementClose('use');
                    incrementalDom.elementClose('svg');
                  incrementalDom.elementClose('a');
                incrementalDom.elementClose('div');
                incrementalDom.elementOpenStart('div');
                    incrementalDom.attr('class', 'autofit-col autofit-col-expand');
                incrementalDom.elementOpenEnd();
                  incrementalDom.elementOpenStart('h4');
                      incrementalDom.attr('class', 'list-group-title text-truncate');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.elementOpenStart('a');
                        incrementalDom.attr('href', '#1');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.text('Item 20');
                    incrementalDom.elementClose('a');
                  incrementalDom.elementClose('h4');
                  incrementalDom.elementOpenStart('p');
                      incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                  incrementalDom.elementOpenEnd();
                    incrementalDom.text('Description 20');
                  incrementalDom.elementClose('p');
                incrementalDom.elementClose('div');
              incrementalDom.elementClose('li');
            incrementalDom.elementClose('ul');
          incrementalDom.elementClose('div');
        incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-1');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('ul');
            incrementalDom.attr('class', 'navbar-nav');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'nav-item');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('onclick', openSelectJournal);
                incrementalDom.attr('data-target', '#' + id + '_Modal');
                incrementalDom.attr('data-toggle', 'modal');
                incrementalDom.attr('class', 'btn btn-monospaced btn-sm btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-search');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#search');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
            incrementalDom.text('\u00A0');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('class', 'btn btn-monospaced btn-sm btn-primary');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-plus');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#plus');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
          incrementalDom.elementClose('li');
        incrementalDom.elementClose('ul');
      incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('aria-labelledby', 'clayLargeModalLabel');
        incrementalDom.attr('class', 'fade modal ' + (isOpenSelect ? 'show' : ''));
        incrementalDom.attr('style', isOpenSelect ? '' : 'display: none');
        incrementalDom.attr('id', id + '_Modal');
        incrementalDom.attr('role', 'dialog');
        incrementalDom.attr('tabindex', '-1');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'modal-dialog modal-sm');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'modal-content');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-header');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('div');
                incrementalDom.attr('class', 'modal-title');
                incrementalDom.attr('id', 'claySmallModalLabel');
            incrementalDom.elementOpenEnd();
              soyIdom.print(label);
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('button');
                incrementalDom.attr('aria-labelledby', 'Close');
                incrementalDom.attr('onclick', closeSelectJournal);
                incrementalDom.attr('class', 'close');
                incrementalDom.attr('data-dismiss', 'modal');
                incrementalDom.attr('role', 'button');
                incrementalDom.attr('type', 'button');
            incrementalDom.elementOpenEnd();
              incrementalDom.elementOpenStart('svg');
                  incrementalDom.attr('class', 'lexicon-icon lexicon-icon-times');
                  incrementalDom.attr('focusable', 'false');
                  incrementalDom.attr('role', 'presentation');
              incrementalDom.elementOpenEnd();
                incrementalDom.elementOpenStart('use');
                    incrementalDom.attr('href', contextPath + '/images/icons/icons.svg#times');
                incrementalDom.elementOpenEnd();
                incrementalDom.elementClose('use');
              incrementalDom.elementClose('svg');
            incrementalDom.elementClose('button');
          incrementalDom.elementClose('div');
          incrementalDom.elementOpenStart('div');
              incrementalDom.attr('class', 'modal-body');
          incrementalDom.elementOpenEnd();
            incrementalDom.elementOpenStart('ul');
                incrementalDom.attr('class', 'list-group show-quick-actions-on-hover');
            incrementalDom.elementOpenEnd();
              if (itemsResult) {
                var field5171List = itemsResult;
                var field5171ListLen = field5171List.length;
                for (var field5171Index = 0; field5171Index < field5171ListLen; field5171Index++) {
                    var field5171Data = field5171List[field5171Index];
                    incrementalDom.elementOpenStart('li');
                        incrementalDom.attr('class', 'list-group-item list-group-item-flex');
                    incrementalDom.elementOpenEnd();
                      incrementalDom.elementOpenStart('div');
                          incrementalDom.attr('class', 'autofit-col');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('div');
                            incrementalDom.attr('class', 'custom-control custom-checkbox');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpen('label');
                            if (itemsResultSelected[field5171Data.idFile]) {
                              incrementalDom.elementOpenStart('input');
                                  incrementalDom.attr('checked', '');
                                  incrementalDom.attr('onclick', setSelectedResult);
                                  incrementalDom.attr('value', field5171Data);
                                  incrementalDom.attr('id', field5171Data.idFile);
                                  incrementalDom.attr('class', 'custom-control-input');
                                  incrementalDom.attr('type', 'checkbox');
                              incrementalDom.elementOpenEnd();
                              incrementalDom.elementClose('input');
                            } else {
                              incrementalDom.elementOpenStart('input');
                                  incrementalDom.attr('onclick', setSelectedResult);
                                  incrementalDom.attr('value', field5171Data);
                                  incrementalDom.attr('id', field5171Data.idFile);
                                  incrementalDom.attr('class', 'custom-control-input');
                                  incrementalDom.attr('type', 'checkbox');
                              incrementalDom.elementOpenEnd();
                              incrementalDom.elementClose('input');
                            }
                            incrementalDom.elementOpenStart('span');
                                incrementalDom.attr('class', 'custom-control-label');
                            incrementalDom.elementOpenEnd();
                            incrementalDom.elementClose('span');
                          incrementalDom.elementClose('label');
                        incrementalDom.elementClose('div');
                      incrementalDom.elementClose('div');
                      incrementalDom.elementOpenStart('div');
                          incrementalDom.attr('class', 'autofit-col autofit-col-expand');
                      incrementalDom.elementOpenEnd();
                        incrementalDom.elementOpenStart('h4');
                            incrementalDom.attr('class', 'list-group-title text-truncate');
                        incrementalDom.elementOpenEnd();
                          incrementalDom.elementOpenStart('a');
                              incrementalDom.attr('href', '#1');
                          incrementalDom.elementOpenEnd();
                            soyIdom.print(field5171Data.filename);
                          incrementalDom.elementClose('a');
                        incrementalDom.elementClose('h4');
                        incrementalDom.elementOpenStart('p');
                            incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field5171Data.description);
                        incrementalDom.elementClose('p');
                        incrementalDom.elementOpenStart('p');
                            incrementalDom.attr('class', 'list-group-subtitle text-truncate');
                        incrementalDom.elementOpenEnd();
                          soyIdom.print(field5171Data.path);
                        incrementalDom.elementClose('p');
                      incrementalDom.elementClose('div');
                    incrementalDom.elementClose('li');
                  }
              }
            incrementalDom.elementClose('ul');
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
                      incrementalDom.attr('onclick', closeSelectJournal);
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
  }
  exports.render = $render;
  /**
   * @typedef {{
 *  id: *,
 *  label: (?),
 *  isOpenSelect: (boolean|null|undefined),
 *  openSelectJournal: (?),
 *  closeSelectJournal: (?),
 *  setSelectedResult: (?),
 *  itemsResult: (!Array<?>|null|undefined),
 *  itemsResultSelected: (?),
 *  contextPath: (!goog.soy.data.SanitizedContent|string)
 * }}
   */
  $render.Params;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JournalUI.render';
  }

exports.render.params = ["id","label","isOpenSelect","openSelectJournal","closeSelectJournal","setSelectedResult","itemsResult","itemsResultSelected","contextPath"];
exports.render.types = {"id":"any","label":"?","isOpenSelect":"bool","openSelectJournal":"?","closeSelectJournal":"?","setSelectedResult":"?","itemsResult":"list<?>","itemsResultSelected":"?","contextPath":"string"};
templates = exports;
return exports;

});

class JournalUI extends Component {}
Soy.register(JournalUI, templates);
export { JournalUI, templates };
export default templates;
/* jshint ignore:end */
