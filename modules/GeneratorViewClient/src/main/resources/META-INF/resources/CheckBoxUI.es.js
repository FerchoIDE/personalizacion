import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './CheckBoxUI.soy';

/**
 * TextUI Component
 */
class CheckBoxUI extends Component {
    /*created() {
        console.log('------------CheckBoxUI---created:'+this.id)
        //this.setState({checked: null})
        this.on('checkedChanged', function(event) {
            console.log('******-----checkedChanged----****')
        });
    }
    rendered(firstRender) {
        console.log('-----CheckBoxUI-rendered----'+this.id+'--'+this.checked);
    }*/


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