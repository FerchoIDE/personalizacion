import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './CheckBoxUI.soy';

/**
 * TextUI Component
 */
class CheckBoxUI extends Component {
    created() {
        console.log('------------CheckBoxUI---created:'+this.id)
        if(this.initialConfig_.values!==undefined){
            for(var lang in this.initialConfig_.values ){
                if(this.initialConfig_.values[lang].length>0){
                    this.handleChangeValue( {
                        value: this.initialConfig_.values[lang][0],
                        language: lang,
                        path: this.initialConfig_.path
                    });
                }
            }
        }else if(this.initialConfig_.defaultValues!==undefined){

            for(var lang in this.initialConfig_.defaultValues ){
                if(this.initialConfig_.defaultValues[lang]!==undefined
                    && this.initialConfig_.defaultValues[lang]!=''){
                    this.handleChangeValue( {
                        value: this.initialConfig_.defaultValues[lang],
                        language: lang,
                        path: this.initialConfig_.path
                    });
                }
            }
        }
    }


    handleChange(event) {
        this.checked = event.target.checked;
        this.setState({checked: event.target.checked})
        let value = event.target.checked
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

CheckBoxUI.STATE = {
    checked: {value: null},
    handleChangeValue: {}
}
// Register component
Soy.register(CheckBoxUI, templates);

export default CheckBoxUI;