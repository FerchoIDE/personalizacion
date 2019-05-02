import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './SelectUI.soy';
import RadioUI from "./RadioUI.es";
/**
 * TextUI Component
 */
class SelectUI extends Component {
    handleChange(event) {
        let value = event.target.value
        let language = undefined
        if(event.target.attributes["data-language"]!==undefined)
            language=event.target.attributes["data-language"].value
        let path=event.target.attributes["data-path"].value

        this.handleChangeValue( {
            value: value,
            language: language,
            path: path
        });

    }
}
SelectUI.STATE = {
    handleChangeValue: {}
}
// Register component
Soy.register(SelectUI, templates);

export default SelectUI;