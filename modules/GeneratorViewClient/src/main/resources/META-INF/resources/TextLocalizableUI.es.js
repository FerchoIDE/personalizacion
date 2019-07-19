import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TextLocalizableUI.soy';
import TextUI from './TextUI.es'
/**
 * TextUI Component
 */
class TextLocalizableUI extends Component {
    constructor(opt_config) {
        super(opt_config);
        console.log('-----TextLocalizableUI event constructor++++----')

    }
    created() {
        console.log('-----TextLocalizableUI event created----')
        this.countSection=[]
        this.countSection.push(0)
    }
    handleAddSection(event) {
        console.log('-----add section----')
        var _countSection = this.countSection
        if( _countSection===undefined)
            _countSection = [1]
        _countSection.push(_countSection.length+1)
        this.setState({countSection: _countSection })

    }
    handleRemoveSection(event) {
        console.log('-----remove section----')
        var _countSection = this.countSection
        if(_countSection!==undefined && _countSection.length>1){
            let pathT = this.path+'___'+(_countSection.length-1)
            this.initialConfig_.handleRemoveItem( {
                path: pathT
            })
            _countSection.pop()
            this.setState({countSection: _countSection })
        }
    }
}
TextLocalizableUI.STATE = {
    countSection:{value:[0],
        internal: true}
}
// Register component
Soy.register( TextLocalizableUI, templates);

export default TextLocalizableUI;