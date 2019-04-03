import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './DateUI.soy';
import flatpickr from "./flatpickr";
import { Spanish } from "./flatpickr/dist/l10n/es.js"
/**
 * TextUI Component
 */
class DateUI extends Component {
    rendered(firstRender) {
        console.log('-----ViewNested-rendered----'+JSON.stringify(firstRender)+'---'+this.initialConfig_.defaultLanguageId);
        if(firstRender){
            if(this.initialConfig_.defaultLanguageId==='en_US')
                flatpickr("#date_"+this.initialConfig_.id, {});
            else
                flatpickr("#date_"+this.initialConfig_.id, {"locale": Spanish});
        }

    }
    willReceiveState(changes) {
        console.log('-----willReceiveState-rendered----');
    }
    willReceiveProps(propsChanges) {
        console.log('-----willReceiveProps-rendered----');
    }
    willUpdate(changes, propsChanges) {
        console.log('-----willUpdate-rendered----');
    }
}

// Register component
Soy.register(DateUI, templates);

export default DateUI;