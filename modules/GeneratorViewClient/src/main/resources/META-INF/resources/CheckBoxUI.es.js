import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './CheckBoxUI.soy';
/**
 * TextUI Component
 */
class CheckBoxUI extends Component {}

// Register component
Soy.register(CheckBoxUI, templates);

export default CheckBoxUI;