import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TableUI.soy';
import Service from "../service/Service.es";
/**
 * TableUI Component
 */
class TableUI extends Component {
constructor(config,obj){
    super(config,obj );
    console.log('+++-----TableUI event constructor----' + config)

}
    created() {
        console.log('+++-----TableUI event created----' + this.id)
    }
    changePage(event) {
        event.preventDefault();
        console.log('-----changePage----'+event.currentTarget.attributes['itemid'].value);
        var itemid=event.currentTarget.attributes['itemid'].value
        var items = itemid.split('___')
        var _selectPage = this.selectPage
        if(_selectPage===undefined)
            _selectPage = {}
        _selectPage[this.id] = parseInt(items[1])
        var _parent=this
        new Service().getPage({structureId:items[0],page:parseInt(items[1])},function(response,error){
console.log(response)
            _parent.data =response
        })
        this.setState({selectPage: _selectPage })
    }
    rendered(firstRender) {
        console.log('+++-----TableUI event rendered----' + this.id+"----"+this.selectPage)
    }
}
TableUI.STATE = {
    selectPage: {
        value: {}
    }
}
// Register component
Soy.register(TableUI, templates);

export default TableUI;