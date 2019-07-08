import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './DocumentUI.soy';
import Service from "../service/Service"
/**
 * TextUI Component
 */
class DocumentUI extends Component {
    created() {
        this.setResultDocument = this.setResultDocument.bind(this);

        this.setState({itemsAsociated: {} })
    }

    rendered(firstRender) {
        console.log('-----DocumentUI-rendered----');
        if(firstRender){

            this.setState({itemsAsociated: {} })
        }

    }

    openSelectDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectDocument----')
        event.preventDefault();

        new Service().getDocuments('cod-1','rooms',this.setResultDocument)

    }

    setResultDocument(resultDocument){
        var _itemsResult= []
        for(var result of resultDocument){
            _itemsResult.push(result)
        }
        console.log(_itemsResult)
        this.setState({itemsResult: _itemsResult })
        this.setState({isOpenSelect: true })
        this.setState({itemsResultSelected: {} })
    }

    setSelectedResult(event){
        if(event === undefined)
            return;
        console.log('-----receive event setSelectedResult Document----')
        event.preventDefault();
        var _itemsResultSelected = this.itemsResultSelected
        if(event.currentTarget.checked)
            _itemsResultSelected[event.currentTarget.id]=event.currentTarget.value
        else
            delete  _itemsResultSelected[event.currentTarget.id]
        this.setState({itemsResultSelected: _itemsResultSelected })
    }

    closeSelectDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event closeSelectDocument----')
        event.preventDefault();
        this.setState({isOpenSelect: false })
        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }

    deleteDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event deleteDocument----')
        event.preventDefault();
        var _itemsAsociated = this.itemsAsociated
        delete  _itemsAsociated[event.currentTarget.id]
        this.setState({itemsAsociated: _itemsAsociated })
    }

    saveSelectDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event saveSelectDocument----')
        event.preventDefault();



        var _itemsAsociated = this.itemsAsociated
        for(var result in this.itemsResultSelected){
            _itemsAsociated[result]=JSON.parse(this.itemsResultSelected[result])
        }
        this.setState({itemsAsociated: _itemsAsociated })
        this.setState({isOpenSelect: false })

        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }
}
DocumentUI.STATE = {
    isOpenSelect:{value:false},
    itemsAsociated:{value:{}},
    itemsResult:{value:[]},
    itemsResultSelected:{value:{}},
}
// Register component
Soy.register(DocumentUI, templates);

export default DocumentUI;