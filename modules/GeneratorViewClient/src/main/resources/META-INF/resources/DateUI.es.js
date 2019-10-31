import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './DateUI.soy';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js"
/**
 * TextUI Component
 */
class DateUI extends Component {
    created() {
        const _parent = this;
        const _path = this.initialConfig_.path;
        if(this.initialConfig_.defaultLanguageId==='en_US')
            flatpickr("#date_"+this.initialConfig_.id, {
                wrap: true,
                onChange: function(selectedDates, dateStr, instance) {
                    _parent.handleChangeValue( {
                        value: dateStr,
                        language:undefined,
                        path: _path
                    });
                }
            });
        else
            flatpickr("#date_"+this.initialConfig_.id, {"locale": Spanish,
                wrap: true,
                onChange: function(selectedDates, dateStr, instance) {
                    _parent.handleChangeValue( {
                        value: dateStr,
                        path: _path
                    });

                }});

        if(this.initialConfig_.values!==undefined){
            for(var lang in this.initialConfig_.values ){
                if(this.initialConfig_.values[lang].length>0
                    && this.initialConfig_.values[lang][0]!=''){
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
    /*rendered(firstRender) {
        console.log('-----ViewNested-rendered----'+JSON.stringify(firstRender)+'---'+this.initialConfig_.defaultLanguageId);
        if(firstRender){
            if(this.initialConfig_.defaultLanguageId==='en_US')
                flatpickr("#date_"+this.initialConfig_.id, {});
            else
                flatpickr("#date_"+this.initialConfig_.id, {"locale": Spanish});
        }

    }*/

}
DateUI.STATE = {
    handleChangeValue: {}
}
// Register component
Soy.register(DateUI, templates);

export default DateUI;