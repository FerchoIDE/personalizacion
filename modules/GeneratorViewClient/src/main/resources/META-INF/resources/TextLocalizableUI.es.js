import Component from 'metal-component';
import Soy from 'metal-soy';
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