import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './TextUI.soy';
/**
 * TextUI Component
 */
class TextUI extends Component {}

// Register component
Soy.register(TextUI, templates);

export default TextUI;