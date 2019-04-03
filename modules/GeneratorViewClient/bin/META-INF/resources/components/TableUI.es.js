import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './TableUI.soy';
/**
 * TextUI Component
 */
class TableUI extends Component {}

// Register component
Soy.register(TableUI, templates);

export default TableUI;