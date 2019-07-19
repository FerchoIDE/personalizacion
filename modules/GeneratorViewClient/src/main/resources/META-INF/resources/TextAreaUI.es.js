import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TextAreaUI.soy';

//import 'trumbowyg/dist/ui/trumbowyg.min.css';
//import Trumbowyg from 'trumbowyg'
/**
 * TextUI Component
 */
class TextAreaUI extends Component {
    created() {
        console.log('-----TextAreaUI event created----')
       // var editor = wysiwyg(document.querySelector('#inputarea_'+this.id+'_'+this.defaultLanguageId))
        //AlloyEditor.editable('inputarea_'+this.id+'_'+this.defaultLanguageId);
       // $('#dv_'+this.id+'_'+this.defaultLanguageId).trumbowyg()
    }
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