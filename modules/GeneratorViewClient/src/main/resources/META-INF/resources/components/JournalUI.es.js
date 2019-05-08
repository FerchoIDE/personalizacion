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
        this.setFoldersJournal = this.setFoldersJournal.bind(this);
       // this.resultSaveJournal = this.resultSaveJournal.bind(this);

        this.setState({itemsJournalAsociated: {} })
        this.setState({searchJournalText: undefined })
    }

    openSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectJournal----'+this.id)
        event.preventDefault();

        new Service().getJournals(this.brandSelected,this.hotelSelected,this.setResultJournal)
        new Service().getFoldersForJournal(this.brandSelected,this.hotelSelected,this.setFoldersJournal)
    }
    changeJournalSearchText(event){
        let _searchText=event.target.value;
        this.setState({searchJournalText: _searchText })

    }
    searchJournalByName(event){
        console.log('-----searchByName----')
        event.preventDefault();
        if(this.searchJournalText!==undefined && this.searchJournalText!==''){
            new Service().getJournalsForName(this.brandSelected,this.hotelSelected,this.searchJournalText,this.setResultJournal)
        }
    }
    changeFolder(event){

        console.log('-----changeFolder----')
        event.preventDefault();
        let _folderSelected = event.currentTarget.value

        new Service().getJournalsForFolder(this.brandSelected,this.hotelSelected,_folderSelected,this.setResultJournal)
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
    setFoldersJournal(resultFolders){
        var _foldersJournals= []
        for(var result of resultFolders){
            _foldersJournals.push(result)
        }
        this.setState({foldersJournals: _foldersJournals })
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

    deleteJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event deleteDocument----')
        event.preventDefault();
        var _itemsAsociated = this.itemsJournalAsociated
        delete  _itemsAsociated[event.currentTarget.id]
        this.setState({itemsJournalAsociated: _itemsAsociated })
    }

    saveSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event saveSelectDocument----')
        event.preventDefault();



        var _itemsAsociated = this.itemsJournalAsociated
        for(var result in this.itemsResultSelected){
            _itemsAsociated[result]=JSON.parse(this.itemsResultSelected[result])
        }
        this.setState({itemsJournalAsociated: _itemsAsociated })
        this.setState({isOpenSelect: false })

        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }
}
JournalUI.STATE = {
    isOpenSelect:{value:false},
    selectedFolder:{value:undefined},
    searchJournalText:{value:undefined},
    itemsJournalAsociated:{value:[]},
    itemsResult:{value:[]},
    foldersJournals:{value:[]},
    itemsResultSelected:{value:{}},
    brandSelected:{},
    hotelSelected:{}
}
// Register component
Soy.register(JournalUI, templates);

export default JournalUI;