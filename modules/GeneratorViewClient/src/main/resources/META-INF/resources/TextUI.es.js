import Component from 'metal-component';
import Soy from 'metal-soy';
import template from './TextUI.soy';
/**
 * TextUI Component
 */
class TextUI extends Component {
    created() {
        console.log('------------TextUI---created:'+this.id)
        if(this.initialConfig_.values!==undefined){
            var _indexT=0
            if(this.initialConfig_._index!==undefined)
                _indexT = this.initialConfig_._index
            for(var lang in this.initialConfig_.values ){
                if(this.initialConfig_.values[lang].length>0
                    && this.initialConfig_.values[lang][_indexT]!=''){
                    this.onChangeValue( {
                        value: this.initialConfig_.values[lang][_indexT],
                        language: lang,
                        path: this.initialConfig_.path
                    });
                }
            }
        }
    }
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