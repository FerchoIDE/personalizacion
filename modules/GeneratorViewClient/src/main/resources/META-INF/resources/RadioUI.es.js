import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './RadioUI.soy';
/**
 * TextUI Component
 */
class RadioUI extends Component {
    created() {
        console.log('------------RadioUI---created:'+this.id)
        if(this.initialConfig_.values!==undefined){
            for(var lang in this.initialConfig_.values ){
                if(this.initialConfig_.values[lang].length>0
                    && this.initialConfig_.values[lang][0]!=''){
                    let valueFinal = JSON.parse(this.initialConfig_.values[lang][0])
                    this.handleChangeValue( {
                        value: valueFinal[0],
                        language: lang,
                        path: this.initialConfig_.path
                    });
                }
            }
        }
    }
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