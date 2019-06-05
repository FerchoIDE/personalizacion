import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './JournalUI.soy';
import Service from "../service/Service"
/**
 * TextUI Component
 */

const structureIdRoom= '35826'
const structureIdDestination= '35812'
const mapTypeContent={
    'roomLinkHotel':structureIdRoom,
    'facilityLinkHotel':'facility',
    'destinationLinkHotel':structureIdDestination
}



class JournalUI extends Component {
    created() {
        console.log('-----receive event created----'+this.id)
        this.setResultJournal = this.setResultJournal.bind(this);
        this.setFoldersJournal = this.setFoldersJournal.bind(this);
       // this.resultSaveJournal = this.resultSaveJournal.bind(this);
       // var _itemsJournalAsociated ={}
       // _itemsJournalAsociated[this.id]={}
       // this.itemsJournalAsociated={}
        //this.setState({itemsJournalAsociated:undefined  })

        this.setState({searchJournalText: undefined })
        /*
        this.on('itemsJournalAsociatedChanged',function(event){
            console.log('--------change itemsJournalAsociated --- ')
        })
        try{
            this.getDataManager().getStateInstance(this).stateConfigs_.itemsJournalAsociated={}
        }catch (e) {
            console.error(e)
        }*/
       try {
            this.getDataManager().getStateInstance(this).stateConfigs_.itemsJournalAsociated = {}
        }catch (e) {
            console.error(e)
        }

    }
    rendered(firstRender) {
        console.log('----JournalUI ----rendered----'+JSON.stringify(this.itemsJournalAsociated))
    }
    openSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectJournal----'+this.id)
        event.preventDefault();

        new Service().getJournals(this.brandIdSelected,this.hotelIdSelected,this.id,this.setResultJournal)
       // new Service().getFoldersForJournal(this.brandSelected,this.hotelSelected,this.id,this.setFoldersJournal)
    }

    openNewJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event openNewJournal----'+this.id)
        event.preventDefault();
        if(mapTypeContent[this.id]==='facility'){
            this.setState({isOpenJournalType: true })
            return
        }
        this.showNewJournal(mapTypeContent[this.id])
    }
    closeSelectJournalType(event){
        if(event === undefined)
            return
        console.log('-----receive event closeSelectJournalType----'+this.id)
        event.preventDefault();
        this.setState({isOpenJournalType: false })
    }
    saveSelectJournalType(event){
        if(event === undefined)
            return
        console.log('-----receive event saveSelectJournalType----'+this.id)
        event.preventDefault();
        var typeJournal=$("input[name="+this.id+"_typeJournal]:checked").val();
        if(typeJournal!== undefined){
            this.setState({isOpenJournalType: false })
            this.showNewJournal(typeJournal)
        }
    }
    showNewJournal(typeJournal){
        let _url="http://localhost:8080/web/guest/home?p_p_id=generatorviewclient&p_p_lifecycle=0&p_p_state=pop_up&p_p_mode=view&_generatorviewclient_mvcRenderCommandName=NewStructure&_generatorviewclient_structureId="+typeJournal+"&_generatorviewclient_mode=nested";
        $("#"+this.id+"_Iframe").attr('src',_url);
        this.setState({isOpenJournalNew: true })
        var _parent = this;
        window.document.addEventListener('cancelEvent', handleEvent, false)
        function handleEvent(e) {
            console.log(e.detail) // outputs: {foo: 'bar'}
            _parent.setState({isOpenJournalNew: false })
            $("#"+_parent.id+"_Iframe").attr('src','about:blank');
            //$(".modal-backdrop").attr('src','about:blank');
        }
    }
    changeJournalSearchText(event){
        let _searchText=event.target.value;
        this.setState({searchJournalText: _searchText })

    }
    searchJournalByName(event){
        console.log('-----searchByName----')
        event.preventDefault();
        if(this.searchJournalText!==undefined && this.searchJournalText!==''){
            new Service().getJournalsForName(this.brandSelected,this.hotelSelected,this.searchJournalText,this.id,this.setResultJournal)
        }
    }
    changeFolder(event){

        console.log('-----changeFolder----')
        event.preventDefault();
        let _folderSelected = event.currentTarget.value

        new Service().getJournalsForFolder(this.brandSelected,this.hotelSelected,_folderSelected,this.id,this.setResultJournal)
    }
    setResultJournal(resultJournal){
        var _itemsResult= []
        for(var result of resultJournal){
            _itemsResult.push(result)
        }
        console.log(_itemsResult)
        this.setState({itemsResult: _itemsResult })
        this.setState({isOpenJournalSelect: true })
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
        this.setState({isOpenJournalSelect: false })
        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }

    deleteJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event deleteDocument----')
        event.preventDefault();
        var _itemsAsociated = this.itemsJournalAsociated
        delete  _itemsAsociated[this.id][event.currentTarget.id]
        this.setState({itemsJournalAsociated: _itemsAsociated })
    }

    saveSelectJournal(event) {
        if(event === undefined)
            return
        console.log('-----receive event saveSelectDocument----')
        event.preventDefault();



        let _itemsAsociated = this.itemsJournalAsociated
        if(_itemsAsociated===undefined)
            _itemsAsociated={}
        if(_itemsAsociated[this.id]===undefined)
            _itemsAsociated[this.id]={}
        for(var result in this.itemsResultSelected){
            _itemsAsociated[this.id][result]=JSON.parse(this.itemsResultSelected[result])
        }

        let _modelJournal = this.modelJournal
        if(_modelJournal===undefined)
            _modelJournal={}
        for(let result in this.itemsResultSelected){
            if(_modelJournal[result]===undefined){
                _modelJournal[result]={}
                _modelJournal[result]['id']=result
            }
            this.handleChangeValue( {
                value: _modelJournal[result],
                path: this.path
            });
        }
        this.setState({modelJournal: _modelJournal })
        this.setState({itemsJournalAsociated: _itemsAsociated })
        this.setState({isOpenJournalSelect: false })

        this.setState({itemsResult: [] })
        this.setState({itemsResultSelected: {} })
    }

}
JournalUI.STATE = {
    isOpenJournalSelect:{value:false},
    isOpenJournalNew:{value:false},
    selectedFolder:{value:undefined},
    searchJournalText:{value:undefined},
    itemsJournalAsociated:{value:{}},
    itemsResult:{value:[]},
    foldersJournals:{value:[]},
    itemsResultSelected:{value:{}},
    brandSelected:{},
    hotelSelected:{},
    brandIdSelected:{},
    hotelIdSelected:{},
    handleChangeValue: {},
    path:{},
    modelJournal:{value:{}}
}
// Register component
Soy.register(JournalUI, templates);

export default JournalUI;