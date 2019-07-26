import Component from 'metal-component';
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import DateUI from './DateUI.es';
import RadioUI from './RadioUI.es';
import SelectUI from './SelectUI.es';
import JournalUI from './components/JournalUI.es';
import DocumentUI from './components/DocumentUI.es';


import Soy from 'metal-soy';
import templates from './ViewNested.soy';
/**
 * View Component
 */
class ViewNested extends Component {
    created() {
        console.log('+++-----ViewNested event created----'+this.id)
        this.checkedOption = this.checkedOption.bind(this);

        this.resizeTA = this.resizeTA.bind(this);
        if(this.initialConfig_.repeatable
            && this.initialConfig_.data[0]!==undefined
            &&  this.initialConfig_.data[0].values!==undefined
            &&  this.initialConfig_.data[0].values['es_ES']!==undefined
            && this.initialConfig_.data[0].values['es_ES'].length>1){
            var _countSection=[]
            for(var _i=0;_i<this.initialConfig_.data[0].values['es_ES'].length;_i++){
                _countSection.push(_i+1)
            }

            this.setState({countSection: _countSection })
        }

        this.on('countSectionChanged',function(event){
            console.log('--------change countSection --- ')
        })


        this.setState({checkedConcat: {} })
        this.setState({checkedSelected: {} })
    }
    handleAddSection(event) {
        console.log('-----add section----')
        var _countSection = this.countSection
        if( _countSection===undefined)
           _countSection = [1]
        _countSection.push(_countSection.length+1)
        this.setState({countSection: _countSection })

    }
    handleRemoveSection(event) {
        console.log('-----remove section----')
        var _countSection = this.countSection
        if(_countSection!==undefined && _countSection.length>1){
            let pathT = this.path+'___'+(_countSection.length-1)
            this.initialConfig_.handleRemoveItem( {
                path: pathT
            })
            _countSection.pop()
            this.setState({countSection: _countSection })
        }


    }
    checkedOption(event) {
        if(event === undefined)
            return
        console.log('-----receive event checkedOption----'+event.currentTarget.id+'--'+event.currentTarget.title+'--'+event.currentTarget.pattern+'--'+event.currentTarget.checked)
       var _checkedSelected = this.checkedSelected
        var _defaultLanguage = this.initialConfig_.defaultLanguage
        if(_checkedSelected[event.currentTarget.pattern]=== undefined)
            _checkedSelected[event.currentTarget.pattern]={}


        if(event.currentTarget.checked){
            _checkedSelected[event.currentTarget.pattern][event.currentTarget.id]=
                JSON.parse("{"+event.currentTarget.title.slice(0,event.currentTarget.title.length - 1)+"}")
        }else{
            delete _checkedSelected[event.currentTarget.pattern][event.currentTarget.id]
        }
        // event.preventDefault();
        var _checkedConcat = this.checkedConcat
        for(var _cC of this.initialConfig_.availableLanguageIds){
            if(_checkedConcat[event.currentTarget.pattern] === undefined)
                _checkedConcat[event.currentTarget.pattern]={}
            var _lst =[]
            for(var _cT in _checkedSelected[event.currentTarget.pattern]){
                _lst.push(_checkedSelected[event.currentTarget.pattern][_cT][_cC])
            }
            _checkedConcat[event.currentTarget.pattern][_cC]=_lst.join(' ')//Object.values(_checkedSelected[event.currentTarget.pattern]).join(' ')

        }
        // console.log(JSON.stringify())
        this.setState({checkedConcat: _checkedConcat })
        this.setState({checkedSelected: _checkedSelected })
        console.log('finishh event checkedOption')
        if(this.checkedConcat['occupationRate']){
            $('#inputarea_DescriptionOcupation_es_ES').val(this.checkedConcat['occupationRate']['es_ES']);
            this.resizeTA($('#inputarea_DescriptionOcupation_es_ES'))
            $('#inputarea_DescriptionOcupation_en_US').val(this.checkedConcat['occupationRate']['en_US']);
            this.resizeTA($('#inputarea_DescriptionOcupation_en_US'))
        }

        if(this.checkedConcat['Benefits1']) {
            $('#inputarea_DescriptionBenefits_es_ES').val(this.checkedConcat['Benefits1']['es_ES']);
            this.resizeTA($('#inputarea_DescriptionBenefits_es_ES'))
            $('#inputarea_DescriptionBenefits_en_US').val(this.checkedConcat['Benefits1']['en_US']);
            this.resizeTA($('#inputarea_DescriptionBenefits_en_US'))
        }

        if(this.checkedConcat['Restrictions']) {
            $('#inputarea_DescriptionsRestrictions_es_ES').val(this.checkedConcat['Restrictions']['es_ES']);
            this.resizeTA($('#inputarea_DescriptionsRestrictions_es_ES'))
            $('#inputarea_DescriptionsRestrictions_en_US').val(this.checkedConcat['Restrictions']['en_US']);
            this.resizeTA($('#inputarea_DescriptionsRestrictions_en_US'))
        }

    }
    resizeTA(element){
        let value = element.val();
        let language = undefined
        if(element[0].attributes["data-language"]!==undefined)
            language=element[0].attributes["data-language"].value
        let path=element[0].attributes["data-path"].value

        this.handleChangeValue( {
            value: value,
            language: language,
            path: path
        });

        let top = element[0].scrollHeight;
        let height = element.height();
        element.css("overflow","hidden")
        if(top > 0){
            element.css("height",top )
        }
    }
}
ViewNested.STATE = {
    checkedConcat:{value:{}},
    checkedSelected:{value:{}},
    countSection:{value:[0],
        internal: true}
}
// Register component
Soy.register(ViewNested, templates);

export default ViewNested;