import Component from 'metal-component';
import Soy from 'metal-soy';
import template from './TextUI.soy';
/**
 * TextUI Component
 */
class TextUI extends Component {
    handleChange(event) {

        let value = event.target.value;
        let language = undefined
        if(event.target.attributes["data-language"]!==undefined)
             language=event.target.attributes["data-language"].value
        let path=event.target.attributes["data-path"].value

        this.onChangeValue( {
                value: value,
                language: language,
                path: path
            });
    }
}
TextUI.STATE = {
    onChangeValue: {
    }
}
// Register component
Soy.register(TextUI, template);

export default TextUI;