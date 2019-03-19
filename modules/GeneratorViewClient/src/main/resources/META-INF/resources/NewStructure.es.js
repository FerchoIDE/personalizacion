import Component from 'metal-component/src/Component';
import Footer from './Footer.es';
import Header from './Header.es';
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import ViewNested from './ViewNested.es';
import DateUI from './DateUI.es';



import Soy from 'metal-soy/src/Soy';
import templates from './NewStructure.soy';
/**
 * View Component
 */
class NewStructure extends Component {

    closeOpenTab(event) {
        event.preventDefault();
        console.log('-----closeOpenTab----'+event.currentTarget.attributes['aria-expanded'].value);
        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id]=event.currentTarget.attributes['aria-expanded'].value=='true'
         this.setState({collapseInfo: collapseInfo1 })
    }

    changeLanguage(event) {
        event.preventDefault();
        console.log('-----changeLanguage----'+event.currentTarget.id);
        //this.data['selectedLanguage']=event.currentTarget.id
        var data1 = this.data;
        data1['selectedLanguage']=event.currentTarget.id
        this.setState({data: data1 })
        //cerrado: false, collapsed, ''
        //abierto: true, '', 'show'
    }

}

// Register comp

NewStructure.STATE = {
    collapseInfo:{
        value:{'accordionPrincipalHeading':false}
    },
    body: {
        value: 'Default body'
    },
    header: {
        value: 'Default header'
    },
    shown: {
        // The default value will be: `true`.
        value: true
    }
};
Soy.register(NewStructure, templates);

export default NewStructure;