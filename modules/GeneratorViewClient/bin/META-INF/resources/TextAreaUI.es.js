import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './TextAreaUI.soy';
/**
 * TextUI Component
 */
class TextAreaUI extends Component {}

// Register component
Soy.register(TextAreaUI, templates);

export default TextAreaUI;