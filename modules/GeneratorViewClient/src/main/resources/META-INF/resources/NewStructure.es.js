import Component from 'metal-component';

import Service from "./service/Service"
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import ViewNested from './ViewNested.es';
import DateUI from './DateUI.es';
import RadioUI from './RadioUI.es';
import SelectUI from './SelectUI.es';
import JournalUI from './components/JournalUI.es';
import DocumentUI from './components/DocumentUI.es';

import Soy from 'metal-soy';
import templates from './NewStructure.soy';
import NewStructureState from "./state/NewStructureState"

/**
 * View Component
 */
class NewStructure extends Component {

    created() {
        console.log('----NewStructure ----created----' + this.id)
        this.model = new NewStructureState()
        this.model.idStructure = this.structureId
        this.model.fields = this.data
        this.model.localeDefault = this.data['defaultLanguage']
        this.rootFields = this.initialConfig_.rootFields
        this.on('modelChanged', function (event) {
            console.log('--------change model --- ')
        })
        //this.setState({isOnLoad: false})
    }

    closeOpenTab(event) {
        if (event === undefined)
            return
        console.log('-----receive event closeOpenTab----')
        //event.preventDefault();
        console.log('-----closeOpenTab----' + event.currentTarget.attributes['aria-expanded'].value);
        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id] = event.currentTarget.attributes['aria-expanded'].value == 'true'
        this.setState({collapseInfo: collapseInfo1})
    }

    changeLanguage(event) {
        event.preventDefault();
        console.log('-----changeLanguage----' + event.currentTarget.id);
        //this.data['selectedLanguage']=event.currentTarget.id
        var data1 = this.data;
        data1['selectedLanguage'] = event.currentTarget.id
        this.setState({data: data1})
        //cerrado: false, collapsed, ''
        //abierto: true, '', 'show'
    }

    changeBrand(event) {
        console.log('-----changeBrand----')
        // event.preventDefault();
        let _brandIdSelect =Number( event.currentTarget.value)
        let _brandSelect = event.currentTarget.selectedOptions["0"].label
        this.setState({msgErrorPath: null})
        this.setState({brandIdSelected: _brandIdSelect})
        this.setState({brandSelected: _brandSelect})
        this.model.setBrand(_brandSelect)
        $("#btnSelectPath").attr('disabled', 'disabled');

        if (this.structureId === '35835') {
            $("#txtCodeHotel").removeAttr('disabled');
            return;
        }

        if (this.structureId === '35796') {
            $("#btnSelectPath").removeAttr('disabled');
            return;
        }

        var myselect = $("select#hotelSelect.form-control");
        myselect[0].selectedIndex = 0;


        for (var brand of this.categoryBrands) {
            if (brand['key'] === _brandIdSelect) {

                let _hotelsXBrands = brand['nested']

                this.setState({hotelsXBrands: _hotelsXBrands})
                this.setState({hotelSelected: undefined})


                break;
            }
        }
    }

    changeHotels(event) {
        console.log('-----changeHotels----')
        //  event.preventDefault();
        let _hotelIdSelected = event.currentTarget.value
        let _hotelSelected = event.currentTarget.selectedOptions["0"].label
        if (_hotelSelected !== undefined && this.brandSelected !== undefined)
            $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({hotelSelected: _hotelSelected})
        this.setState({hotelIdSelected: _hotelIdSelected})
        this.model.setHotel(_hotelSelected)
    }

    handleChangeValueTempl(event) {
        let _templIdSelected = event.value
        console.log('-----handleChangeValueTempl----' + _templIdSelected)
    }

    handleChangeCode(event) {
        let _hotelSelected = event.target.value.toUpperCase();
        $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({hotelSelected: _hotelSelected})
        this.model.setHotel(_hotelSelected)
    }

    handleChangeBrand(event) {
        let _brandSelect = event.target.value.toUpperCase();
        $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({brandSelected: _brandSelect})
        this.model.setBrand(_brandSelect)
    }

    saveSelectPath(event) {
        console.log('-----saveSelectPath----')
        $("#loadingSelectPath").toggleClass("loading-animation");
        event.preventDefault();
        if (this.structureId === '35835') {
            var _parent = this
            new Service().validateCodeHotel(this.brandSelected, this.hotelSelected, this.brandIdSelected, result => {
                console.log("-------------" + JSON.stringify(result))
                $("#loadingSelectPath").toggleClass("loading-animation");
                if (result['status'] === 'OK') {
                    //input_codeHotel_es_ES
                    $("#input_codeHotel_es_ES").val(_parent.hotelSelected);
                    $("#input_codeHotel_en_US").val(_parent.hotelSelected);

                    var eventES = {
                        path: 'codeHotel',
                        value: _parent.hotelSelected,
                        language: 'es_ES'
                    }
                    var eventUS = {
                        path: 'codeHotel',
                        value: _parent.hotelSelected,
                        language: 'en_US'
                    }
                    _parent.handleChangeValue(eventES)
                    _parent.handleChangeValue(eventUS)
                    $("#input_codeHotel_es_ES").attr('disabled', 'disabled');
                    $("#input_codeHotel_en_US").attr('disabled', 'disabled');

                    _parent.setState({hotelIdSelected: result["categoryId"]})
                    _parent.setState({isOnLoad: false})
                } else {
                    $("#btnSelectPath").attr('disabled', 'disabled');
                    this.setState({msgErrorPath: "Codigo asignado a: " + result["message"]})
                }

            })
            return;
        }

        if (this.structureId === '35912') {
            var _parent = this
            new Service().validateCodeBrand(this.brandSelected, result => {
                console.log("-------------" + JSON.stringify(result))
                $("#loadingSelectPath").toggleClass("loading-animation");
                if (result['status'] === 'OK') {

                    $("#input_codeBrand_es_ES").val(_parent.brandSelected);
                    $("#input_codeBrand_en_US").val(_parent.brandSelected);

                    var eventES = {
                        path: 'codeBrand',
                        value: _parent.brandSelected,
                        language: 'es_ES'
                    }
                    var eventUS = {
                        path: 'codeBrand',
                        value: _parent.brandSelected,
                        language: 'en_US'
                    }
                    _parent.handleChangeValue(eventES)
                    _parent.handleChangeValue(eventUS)
                    $("#input_codeBrand_es_ES").attr('disabled', 'disabled');
                    $("#input_codeBrand_en_US").attr('disabled', 'disabled');

                    _parent.setState({brandIdSelected: result["categoryId"]})
                    _parent.setState({isOnLoad: false})

                } else {
                    $("#btnSelectPath").attr('disabled', 'disabled');
                    this.setState({msgErrorPath: "Codigo asignado a: " + result["message"]})
                }

            })
            return;
        }

        $("#loadingSelectPath").toggleClass("loading-animation");
        this.setState({isOnLoad: false})
    }

    handleChangeValue(event) {
        console.log('-------NewStructure-handleChangeValue-- v6********path=' + event.path + "--value=" + event.value)
        var result = this.model.setValue(event.path, event.value, event.language)
        console.log('-------NewStructure-handleChangeValue-- resut==' + result)
    }

    saveStructure(event) {
        console.log("--------saveStructure----------")
        let _structureKey = this.initialConfig_.structureKey;
        let _fields = []
        for (var field of this.model.getState()['fields']) {
            console.log(field.toJson())
            _fields.push(field.toJson())
        }
        var _fieldsRoot = {}
        let _fieldParent = {
            indexType: 'keyword',
            type: 'ddm-separator',
            name: '__ROOT__',
            values: [{"en_US": "","es_ES": ""}],
            nestedFields: []
        }

        for (var field of _fields) {
            var _isRoot = false
            for (var fieldR of this.rootFields) {
                if (fieldR === field.name && field.type === 'ddm-separator') {
                    _fieldsRoot[field.name] = field;
                    _isRoot = true;
                    break;
                }
            }
            if (!_isRoot) {
                _fieldParent.nestedFields.push(field)
            }
        }
        let _nestedFields = []
        for (var _i = 0; _i < this.rootFields.length; _i++) {
            if (_fieldsRoot[this.rootFields[_i]] != undefined) {
                _nestedFields[_i] = _fieldsRoot[this.rootFields[_i]];
            } else {
                _nestedFields[_i] = _fieldParent
                _nestedFields[_i]['name'] = this.rootFields[_i];
            }
        }

        let _data = {
            brand: this.brandSelected,
            localeDefault: this.data['defaultLanguage'],
            title: $("#input_title_principal").val(),
            ddmTemplate: $("#select_selectTemplate").val(),
            ddmStructure: _structureKey,
            description: $("#input_description_prinipal").val(),
            aviableLocales: 'es_ES,en_US',
            fields: _nestedFields,
            categories: [],
            tags: []
        }
        console.log(JSON.stringify(_data))
        new Service().savejournal(_data, result => {
            console.log("----------" + result)
        })
        console.log("********saveStructure**********")
    }

    cancelStructure(event) {
        var data = {idParent: 'bar'}
        var event = new CustomEvent('cancelEvent', {detail: data})
        window.parent.document.dispatchEvent(event)
    }

}

NewStructure.STATE = {
    brandSelected: {value: undefined},
    brandIdSelected: {value: undefined},
    hotelSelected: {value: undefined},
    hotelIdSelected: {value: undefined},
    model: {value: new NewStructureState()}
}
Soy.register(NewStructure, templates);

export default NewStructure;