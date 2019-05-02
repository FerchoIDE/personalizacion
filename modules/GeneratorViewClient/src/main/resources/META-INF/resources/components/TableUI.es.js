import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TableUI.soy';
/**
 * TextUI Component
 */
class TableUI extends Component {}

// Register component
Soy.register(TableUI, templates);

export default TableUI;