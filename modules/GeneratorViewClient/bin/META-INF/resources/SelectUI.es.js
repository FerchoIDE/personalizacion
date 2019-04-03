import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './SelectUI.soy';
/**
 * TextUI Component
 */
class SelectUI extends Component {}

// Register component
Soy.register(SelectUI, templates);

export default SelectUI;