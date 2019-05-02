import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TitleLocalizableUI.soy';
/**
 * TextUI Component
 */
class TitleLocalizableUI extends Component {}

// Register component
Soy.register(TitleLocalizableUI, templates);

export default TitleLocalizableUI;