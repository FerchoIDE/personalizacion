import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './RadioUI.soy';
/**
 * TextUI Component
 */
class RadioUI extends Component {}

// Register component
Soy.register(RadioUI, templates);

export default RadioUI;