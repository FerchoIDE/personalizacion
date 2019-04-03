import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './TitleLocalizableUI.soy';
/**
 * TextUI Component
 */
class TitleLocalizableUI extends Component {}

// Register component
Soy.register(TitleLocalizableUI, templates);

export default TitleLocalizableUI;