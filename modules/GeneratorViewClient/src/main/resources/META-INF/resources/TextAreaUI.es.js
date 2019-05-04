import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TextAreaUI.soy';
import TextUI from "./TextUI.es";
/**
 * TextUI Component
 */
class TextAreaUI extends Component {
    handleChange(event) {

        let value = event.target.value;
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

TextAreaUI.STATE = {
    handleChangeValue: {
    }
}
// Register component
Soy.register(TextAreaUI, templates);

export default TextAreaUI;