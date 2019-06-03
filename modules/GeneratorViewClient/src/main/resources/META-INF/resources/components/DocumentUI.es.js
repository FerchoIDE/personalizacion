import Component from 'metal-component';
import Soy from 'metal-soy';

import TextLocalizableUI from '../TextLocalizableUI.es';
import CheckBoxUI from '../CheckBoxUI.es';
import TextAreaUI from '../TextAreaUI.es';
import DateUI from '../DateUI.es';
import RadioUI from '../RadioUI.es';
import SelectUI from '../SelectUI.es';

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

    openSelectDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectDocument----')
        event.preventDefault();

        console.log("brandSelected=="+this.brandSelected)
        console.log("hotelSelected=="+this.hotelSelected)
        new Service().getDocuments(this.brandSelected,this.hotelSelected,this.setResultDocument)
       // new Service().getDocuments('FA','GAL',this.setResultDocument)
        new Service().getFoldersForDocument(this.brandSelected,this.hotelSelected,this.setFoldersDocument)
        //new Service().getFoldersForDocument('FA','GAL',this.setFoldersDocument)
    }
    closeOpenTab(event){
        console.log('---closeOpenTab-----')
        let _expanded=event.currentTarget.attributes['aria-expanded'].value;
        let _id=event.currentTarget.id.split('__')[1];
        let _isOpen = this.isOpen
        if(_isOpen===undefined)
            _isOpen = {}
        _isOpen[_id]=_expanded!=='true'
        this.setState({isOpen: _isOpen })
    }
    openNewDocument(event) {
        if(event === undefined)
            return
        console.log('-----receive event openSelectDocument----')
        event.preventDefault();

        $("input#"+this.id+"_FileNew.form-control").val('');
        $("input#"+this.id+"_DescriptionNew.form-control").val('');
        $("input#"+this.id+"_FolderNestedNew.form-control").val('');
        var myselect = $("select#"+this.id+"_FolderNew.form-control");
        myselect[0].selectedIndex = 0;


        this.setState({fileInfo: undefined })
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
        for(let result in this.itemsResultSelected){
            _itemsAsociated[result]=JSON.parse(this.itemsResultSelected[result])
        }

        let _modelDocument = this.modelDocument
        if(_modelDocument===undefined)
            _modelDocument={}
        for(let result in this.itemsResultSelected){
            if(_modelDocument[result]===undefined){
                _modelDocument[result]={}
                _modelDocument[result]['id']=result
                _modelDocument[result]['fullPath']=_itemsAsociated[result]['fullPath']
            }
            this.handleChangeValue( {
                value: _modelDocument[result],
                path: this.path
            });
        }
        this.setState({modelDocument: _modelDocument })
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
        let newFolder = $("input#"+this.id+"_FolderNestedNew.form-control").val();
        //this.brandSelected,this.hotelSelected
        new Service().saveDocument(this.brandSelected,this.hotelSelected,folderId,description,newFolder,
            this.fileInfo,this.resultSaveDocument)

    }
    resultSaveDocument(status,response){
        var _this =this
        window.setTimeout(handler =>{
            if(status==='OK'){
                var _itemsAsociated = _this.itemsAsociated
                _itemsAsociated[response['idFile']]=response

                let _modelDocument = _this.modelDocument
                if(_modelDocument===undefined)
                    _modelDocument={}
                if(_modelDocument[response['idFile']]===undefined) {
                    _modelDocument[response['idFile']] = {}
                }
                _modelDocument[response['idFile']]['id']=response['idFile']
                _modelDocument[response['idFile']]['fullPath']=_itemsAsociated[response['idFile']]['fullPath']

                _this.handleChangeValue( {
                    value: _modelDocument[response['idFile']],
                    path: _this.path
                });

                _this.setState({modelDocument: _modelDocument })
                _this.setState({itemsAsociated: _itemsAsociated })
                _this.setState({isOpenNew: false })

            }else{
                $("div#"+this.id+"_AlertErrorNew").css('display','block');
                $("div#"+this.id+"_MsgErrorNew").text(response)
            }
        },1000)

    }
    handleChangeValueDocument(data){
        let _modelDocument = this.modelDocument
        console.log('start------------handleChangeValueDocument----------------'+JSON.stringify(_modelDocument))
        if(data.language===undefined)
            data.language='es_ES'
        if(_modelDocument===undefined)
            _modelDocument={}
        const names = data.path.split('/');
        if(_modelDocument[names[0]]===undefined){
            _modelDocument[names[0]]={}
            _modelDocument[names[0]]['id']=names[0]
        }
        if(_modelDocument[names[0]][data.language]===undefined){
            _modelDocument[names[0]][data.language]={}
            _modelDocument[names[0]][data.language]['id']=_modelDocument[names[0]]['id']
            _modelDocument[names[0]][data.language]['fullPath']=_modelDocument[names[0]]['fullPath']
        }

        _modelDocument[names[0]][data.language][names[1]]=data.value

        console.log('end------------handleChangeValueDocument----------------'+JSON.stringify(_modelDocument))
        this.setState({modelDocument: _modelDocument })
        this.handleChangeValue( {
            value: _modelDocument[names[0]][data.language],
            language: data.language,
            path: this.path
        });

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
    brandSelected:{},
    hotelSelected:{},
    handleChangeValue: {},
    path:{},
    modelDocument:{value:{}}
}
// Register component
Soy.register(DocumentUI, templates);

export default DocumentUI;