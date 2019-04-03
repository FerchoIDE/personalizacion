import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './JournalUI.soy';
/**
 * TextUI Component
 */
class JournalUI extends Component {}

// Register component
Soy.register(JournalUI, templates);

export default JournalUI;