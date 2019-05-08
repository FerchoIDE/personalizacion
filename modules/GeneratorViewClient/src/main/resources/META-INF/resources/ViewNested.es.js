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
import Service from "./service/Service";
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
    checkedOption(event) {
        if(event === undefined)
            return
        console.log('-----receive event checkedOption----'+event.currentTarget.id+'--'+event.currentTarget.title+'--'+event.currentTarget.pattern+'--'+event.currentTarget.checked)
       var _checkedSelected = this.checkedSelected
        if(_checkedSelected[event.currentTarget.pattern]=== undefined)
            _checkedSelected[event.currentTarget.pattern]={}
        if(event.currentTarget.checked){
            _checkedSelected[event.currentTarget.pattern][event.currentTarget.id]=event.currentTarget.title
        }else{
            delete _checkedSelected[event.currentTarget.pattern][event.currentTarget.id]
        }
        // event.preventDefault();
        var _checkedConcat = this.checkedConcat
        _checkedConcat[event.currentTarget.pattern]=Object.values(_checkedSelected[event.currentTarget.pattern]).join('-')
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