import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './DocumentUI.soy';
import Service from "../service/Service"
/**
 * TextUI Component
 */
class DocumentUI extends Component {
    created() {
        this.setResultDocument = this.setResultDocument.bind(this);
        this.setFoldersDocument = this.setFoldersDocument.bind(this);
        this.setFileInfo = this.setFileInfo.bind(this);
        this.resultSaveDocument = this.resultSaveDocument.bind(this);




        this.setState({itemsAsociated: {} })
        this.setState({searchText: undefined })
    }

    rendered(firstRender) {
        if(firstRender){
            this.setState({itemsAsociated: {} })
        }
    }

    openSelectDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectDocument----')
        event.preventDefault();

        new Service().getDocuments(this.brandSelected,this.hotelSelected,this.setResultDocument)
        new Service().getFoldersForDocument(this.brandSelected,this.hotelSelected,this.setFoldersDocument)
    }
    openNewDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectDocument----')
        event.preventDefault();

        this.setState({isOpenNew: true })
        new Service().getFoldersForDocument(this.brandSelected,this.hotelSelected,this.setFoldersDocument)
    }

    changeSearchText(event){
        let _searchText=event.target.value;
        this.setState({searchText: _searchText })

    }
    searchByName(event){

        console.log('-----searchByName----')
        event.preventDefault();
        if(this.searchText!==undefined && this.searchText!==''){

            new Service().getDocumentsForName(this.brandSelected,this.hotelSelected,this.searchText,this.setResultDocument)
        }

    }
    changeFolder(event){

        console.log('-----changeFolder----')
        event.preventDefault();
        let _folderSelected = event.currentTarget.value

        new Service().getDocumentsForFolder(this.brandSelected,this.hotelSelected,_folderSelected,this.setResultDocument)
    }


    fileNew(event){
        console.log('-----fileNew----')
        event.preventDefault();
        var _fileInfo={}
        var file = event.currentTarget.files["0"]
         _fileInfo.fileName = file.name;
         _fileInfo.fileType = file.type;
        var parent = this;
        var oReader = new FileReader();
        oReader.onload = function(e) {
            let _result = e.target.result
            _fileInfo.fileData= _result.split(',')[1]
            parent.setFileInfo(_fileInfo)
        }

        oReader.readAsDataURL(file);
        $("#"+this.id+"_BtnNew").removeAttr('disabled');

            //var fileData = file.getAsBinary();
        console.log('-----endLoad----')
    }

    setFileInfo(_fileInfo){
        this.setState({fileInfo: _fileInfo })
    }
    setResultDocument(resultDocument){
        var _itemsResult= []
        for(var result of resultDocument){
            _itemsResult.push(result)
        }

        this.setState({itemsResult: _itemsResult })
        this.setState({isOpenSelect: true })
        this.setState({itemsResultSelected: {} })
    }

    setFoldersDocument(resultFolders){
        var _foldersDocuments= []
        for(var result of resultFolders){
            _foldersDocuments.push(result)
        }
        this.setState({foldersDocuments: _foldersDocuments })
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

    closeNewDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event closeNewDocument----')
        event.preventDefault();
        this.setState({isOpenNew: false })
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
    saveNewDocument(event){
        if(event === undefined)
            return
        console.log('-----receive event saveNewDocument----')
        event.preventDefault();
        let folderId = $("select#"+this.id+"_FolderNew.form-control").val();
        let description = $("input#"+this.id+"_DescriptionNew.form-control").val();
        this.brandSelected,this.hotelSelected
        new Service().saveDocument(this.brandSelected,this.hotelSelected,folderId,description,
            this.fileInfo,this.resultSaveDocument)

    }
    resultSaveDocument(status,response){
        if(status==='OK'){
            this.setState({isOpenNew: false })
            var _itemsAsociated = this.itemsAsociated
                _itemsAsociated[response['idFile']]=response
            this.setState({itemsAsociated: _itemsAsociated })
        }else{
            $("div#"+this.id+"_AlertErrorNew").css('display','block');
            $("div#"+this.id+"_MsgErrorNew").text(response)
        }
    }
}
DocumentUI.STATE = {
    fileInfo:{value:undefined},
    isOpenNew:{value:false},
    isOpenSelect:{value:false},
    selectedFolder:{value:undefined},
    searchText:{value:undefined},
    itemsAsociated:{value:{}},
    itemsResult:{value:[]},
    foldersDocuments:{value:[]},
    itemsResultSelected:{value:{}},
}
// Register component
Soy.register(DocumentUI, templates);

export default DocumentUI;