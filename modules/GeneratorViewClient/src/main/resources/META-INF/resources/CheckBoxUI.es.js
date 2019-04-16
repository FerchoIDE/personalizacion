import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './CheckBoxUI.soy';
/**
 * TextUI Component
 */
class CheckBoxUI extends Component {
    created() {

        this.setState({checked: null })
    }
    handleChange(event) {
        console.log(this.checked+'----CheckBoxUI----'+event.target.checked)
       this.checked = event.target.checked;
        this.setState({checked: event.target.checked })
    }
}
CheckBoxUI.STATE = {
    checked:{value:null},
}
// Register component
Soy.register(CheckBoxUI, templates);

export default CheckBoxUI;