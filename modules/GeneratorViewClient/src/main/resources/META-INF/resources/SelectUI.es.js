import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './SelectUI.soy';
import RadioUI from "./RadioUI.es";
/**
 * TextUI Component
 */
class SelectUI extends Component {
    created() {
        console.log('------------SelectUI---created:'+this.id)
        if(this.initialConfig_.values!==undefined){
            for(var lang in this.initialConfig_.values ){
                if(this.initialConfig_.values[lang].length>0
                    && this.initialConfig_.values[lang][0]!=''){
                    let valueFinal = JSON.parse(this.initialConfig_.values[lang][0])
                    this.handleChangeValue( {
                        value: valueFinal,
                        language: lang,
                        path: this.initialConfig_.path
                    });
                }
            }
        }
    }
    handleChange(event) {
        var value = event.target.value
        let language = undefined
        if(event.target.attributes["data-language"]!==undefined)
            language=event.target.attributes["data-language"].value
        let path=event.target.attributes["data-path"].value
        if(event.target.multiple){
            var result = [];
            for ( var i = 0; i < event.target.selectedOptions.length; i++) {
                result.push( event.target.selectedOptions[i].value);
            }
            value=result
        }


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