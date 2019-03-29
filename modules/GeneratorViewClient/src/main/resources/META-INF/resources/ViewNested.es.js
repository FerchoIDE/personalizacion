import Component from 'metal-component/src/Component';
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import DateUI from './DateUI.es';
import JournalUI from './components/JournalUI.es';


import Soy from 'metal-soy/src/Soy';
import templates from './ViewNested.soy';
/**
 * View Component
 */
class ViewNested extends Component {

}

// Register component
Soy.register(ViewNested, templates);

export default ViewNested;