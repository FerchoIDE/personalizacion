import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './TextLocalizableUI.soy';
import TextUI from './TextUI.es'
/**
 * TextUI Component
 */
class TextLocalizableUI extends Component {
}

// Register component
Soy.register(TextLocalizableUI, templates);

export default TextLocalizableUI;