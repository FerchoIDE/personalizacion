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
        console.log('-----ViewNested event created----')
        this.checkedOption = this.checkedOption.bind(this);

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
    }
}
ViewNested.STATE = {
    checkedConcat:{value:{}},
    checkedSelected:{value:{}},
}
// Register component
Soy.register(ViewNested, templates);

export default ViewNested;