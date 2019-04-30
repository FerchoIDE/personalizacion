import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './RadioUI.soy';
import CheckBoxUI from "./CheckBoxUI.es";
/**
 * TextUI Component
 */
class RadioUI extends Component {
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
RadioUI.STATE = {
    handleChangeValue: {}
}
// Register component
Soy.register(RadioUI, templates);

export default RadioUI;