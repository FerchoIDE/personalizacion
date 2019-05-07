import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './JournalUI.soy';
import Service from "../service/Service"
/**
 * TextUI Component
 */
class JournalUI extends Component {
    created() {
        this.setResultJournal = this.setResultJournal.bind(this);
    }

    openSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectJournal----'+this.id)
        event.preventDefault();

        new Service().getJournals(this.brandSelected,this.hotelSelected,this.setResultJournal)

    }

    setResultJournal(resultJournal){
        var _itemsResult= []
        for(var result of resultJournal){
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
        console.log('-----receive event setSelectedResult----')
        event.preventDefault();
        var _itemsResultSelected = this.itemsResultSelected
        if(event.currentTarget.checked)
            _itemsResultSelected[event.currentTarget.id]=event.currentTarget.value
        else
            delete  _itemsResultSelected[event.currentTarget.id]
        this.setState({itemsResultSelected: _itemsResultSelected })
    }

    closeSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event closeSelectJournal----')
        event.preventDefault();
        this.setState({isOpenSelect: false })
        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }
}
JournalUI.STATE = {
    isOpenSelect:{value:false},
    itemsAsociated:{value:[]},
    itemsResult:{value:[]},
    itemsResultSelected:{value:{}},
    brandSelected:{},
    hotelSelected:{}
}
// Register component
Soy.register(JournalUI, templates);

export default JournalUI;