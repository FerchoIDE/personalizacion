import Component from 'metal-component';
import Service from "./service/Service.es.js"
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import ViewNested from './ViewNested.es';
import DateUI from './DateUI.es';
import RadioUI from './RadioUI.es';
import SelectUI from './SelectUI.es';
import JournalUI from './components/JournalUI.es';
import DocumentUI from './components/DocumentUI.es';

import Soy from 'metal-soy';
import templates from './NewStructure.soy';
import NewStructureStateEs from "./state/NewStructureState.es.js"
import Tokenfield from 'tokenfield'


const structureIdHotel= '35835'
const structureIdBrand= '35912'
const structureIdRate= '35796'
const _PATHBASE_ = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');

/**
 * View Component
 */
class NewStructure extends Component {
    disposed() {
        console.log('-----receive event disposed----'+this.id)

        delete  this.model
    }
    created() {
        this.setResultCategories = this.setResultCategories.bind(this);
        this.setResultSaveTag = this.setResultSaveTag.bind(this);

        console.log('---------NewStructure ----created----' + this.id)
        this.model = new NewStructureStateEs()
        this.model.idStructure = this.structureId
        this.model.fields = this.data
        this.model.localeDefault = this.data['defaultLanguage']
        this.rootFields = this.initialConfig_.rootFields
        this.on('modelChanged', function (event) {
            console.log('--------change model --- ')
        })

        new Service().getCategories(this.setResultCategories);

        if(this.initialConfig_.tagsCurrent!==undefined){
            for(var tagItem of this.initialConfig_.tagsCurrent ){
                this.itemsTags.push({id:tagItem.tagId,name:tagItem.name})
            }
        }

        if(this.initialConfig_.titleMap!==undefined && this.initialConfig_.titleMap!=={}){
            $("#input_title_principal").val(this.initialConfig_.titleMap[this.initialConfig_.data.defaultLanguage])
        }
        if(this.initialConfig_.descriptionMap!==undefined && this.initialConfig_.descriptionMap!=={}){
            $("#input_description_prinipal").val(this.initialConfig_.descriptionMap[this.initialConfig_.data.defaultLanguage])
        }






        //this.setState({isOnLoad: false})
    }
    attached() {
        console.log('---------NewStructure ----willAttach----' + this.id)


        var myselect = $("select#select_selectTemplate");
        myselect[0].selectedIndex = 1;
    }

    rendered(firstRender) {
        var _parent=this
        window.setTimeout(handler => {
            if($('#input_Etiqueta').css('display')==="none"){
                return;
            }
            let _PATH_="/web/guest/home/"
            //let _PATH_="/web/posadas-completo-nuevo/personalizacion/"
            let _url = _PATHBASE_+_PATH_+"-/generator/resource/getTags"
            var tf = new Tokenfield({
                el: document.querySelector('#input_Etiqueta'),
                placeholder:"Ingrese las etiquetas asociadas a este contenido",
                addItemOnBlur: true,
                addItemsOnPaste: true,
                delimiters: [',', ' '],
                remote: {
                    url: _url,
                    queryParam: '_generatorviewclient_nameTag'
                },
                setItems:_parent.itemsTags
            });
            tf.on('addToken', function(arg1,arg2) {
            console.log("taggggg addToken")
                if(arg2.isNew){
                    new Service().saveTag({name:arg2.name},_parent.setResultSaveTag);

                }else{
                    _parent.itemsTags.push({id:arg2.id,name:arg2.name})
                }
            });
            tf.on('removeToken', function(arg1,arg2) {
                console.log("taggggg removeToken")
                for(var _i=0;_i<_parent.itemsTags.length;_i++){
                    if(_parent.itemsTags[_i].id===arg2.id){
                        delete _parent.itemsTags[_i]
                        break;
                    }
                }
            });
        },1000)
    }
    setResultSaveTag(newTag,error) {
        if (newTag !== undefined)
            this.itemsTags.push({id: newTag.id, name: newTag.name})
        else
            console.error(error);
    }


    setResultCategories(resultCategories){

        var _itemsCategoriesKeys= [];
        var _itemsCategoriesKeys1= [];

        var _itemsMarcasKeys= [];

        var subMarcas;

        for(var i = 0; i< resultCategories.length; i++)
        {	_itemsCategoriesKeys.push(Object.keys(resultCategories[i]));
            var c = Object.keys(resultCategories[i]);
            if(c[0]=='Marcas')
                subMarcas = resultCategories[i];
        }

        subMarcas = subMarcas['Marcas'];
        for(var j = 0; j < _itemsCategoriesKeys.length;j++){
            var temp = new Object();
            var te =  _itemsCategoriesKeys[j];
            temp["name"] = te[0];
            temp["nameFormat"] = te[0].replace(" ","").replace(" ","");

            _itemsCategoriesKeys1.push(temp);
        }



        for(var i = 0; i< subMarcas.length; i++)
        {

            var tempMarca = subMarcas[i];
            tempMarca.nameFormat=tempMarca.name.replace(" ","").replace(" ","");
            if(tempMarca.parentCategoryId===undefined || tempMarca.parentCategoryId=='0')
                _itemsMarcasKeys.push(tempMarca);
        }

        this.setState({itemsMarcasKeys: _itemsMarcasKeys });
        this.setState({itemsCategories: resultCategories });
        this.setState({itemsCategoriesKeys: _itemsCategoriesKeys1 });



        if(this.initialConfig_.categoriesCurrent!==undefined){
            var _itemsCategoriesSelected = {};
            for(var itemCat of this.initialConfig_.categoriesCurrent ){
                var itemCatComplete=undefined
                var checked=false
                for(var itemResult of resultCategories){
                    for(var itemProp in itemResult){
                        if(itemProp==='Marcas')
                            continue
                        for(var itemCatRes of itemResult[itemProp]){
                            if(itemCat.categoryId===itemCatRes.categoryId){
                                itemCatComplete= itemCatRes
                                break;
                            }
                        }
                        if(itemCatComplete!==undefined)
                            break;
                    }
                    if(itemCatComplete!==undefined)
                        break;
                }
                if(itemCatComplete===undefined){
                    for(var itemResult of _itemsMarcasKeys){
                        if(itemCat.categoryId===itemResult.categoryId){
                            itemCatComplete= itemResult
                            checked=true
                            break;
                        }
                        for(var itemCatRes of itemResult.children){
                            if(itemCat.categoryId===itemCatRes.categoryId){
                                itemCatComplete= itemCatRes
                                break;
                            }
                        }
                        if(itemCatComplete!==undefined)
                            break;
                    }
                }

                if(itemCatComplete===undefined)
                    continue;


                var idCat = itemCatComplete.categoryId+","+itemCatComplete.parentCategoryId+","+itemCatComplete.parentName+(itemCatComplete.isMultiValue?",T":",F");
                var element = document.getElementById(idCat);

                _itemsCategoriesSelected[idCat]=itemCat.name;
                if(element){
                    if(checked){
                        element.setAttribute("checked", "checked");
                    }else{
                        element.setAttribute("style","text-decoration: underline;");
                    }
                }

            }

            var _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
            this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
            this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
        }


    }

    setSelectedCategories(event){
        if(event === undefined)
            return;
        var isCheked=false
        if(event.currentTarget.type=="checkbox")
            isCheked=true
        if(!isCheked)
            event.preventDefault();
        console.log(event.target.id);
        var _itemsCategoriesKeysRender= [];
        var _itemsCategoriesSelected = this.itemsCategoriesSelected;
        var currentArray = event.target.id.split(",");
        console.log(event.target.id);
        if(currentArray[3] == "T"){


            if(_itemsCategoriesSelected[event.target.id]){
                delete  _itemsCategoriesSelected[event.target.id];
                var element = document.getElementById(event.target.id);
                if(isCheked){
                    element.removeAttribute("checked");
                }else{
                    element.setAttribute("style","text-decoration: none;");
                }

                _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
            }else{

                var element = document.getElementById(event.target.id);
                if(isCheked) {
                    _itemsCategoriesSelected[event.target.id]=event.currentTarget.title;
                    element.setAttribute("checked", "checked");
                }else{
                    _itemsCategoriesSelected[event.target.id]=event.target.innerText;
                    element.setAttribute("style","text-decoration: underline;");
                }


                _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

            }
        }

        else{

            var isAdded = false;
            var auxKeys =  Object.keys(_itemsCategoriesSelected);

            if(auxKeys.length!= null && auxKeys.length!= 0){
                var currentCategoryArray = event.target.id.split(",");
                var actualKeys = [];

                for(var i=0; i < auxKeys.length;i++){
                    var auxA = auxKeys[i].split(",");
                    if(auxA[1]==currentCategoryArray[1] &&
                        auxA[2]==currentCategoryArray[2] &&
                        auxA[3]==currentCategoryArray[3])
                        actualKeys.push(auxKeys[i]);
                }

                if(actualKeys.length==0){
                    _itemsCategoriesSelected[event.target.id]=event.target.innerText;
                    _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
                    var element = document.getElementById(event.target.id);
                    element.setAttribute("style","text-decoration: underline;");

                }else if(actualKeys.length==1){
                    if(actualKeys[0] == event.target.id){
                        delete  _itemsCategoriesSelected[event.target.id];
                        var element = document.getElementById(event.target.id);
                        element.setAttribute("style","text-decoration: none;");
                        _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

                    }else{
                        delete  _itemsCategoriesSelected[actualKeys[0]];
                        _itemsCategoriesSelected[event.target.id]=event.target.innerText;
                        var element = document.getElementById(actualKeys[0]);
                        element.setAttribute("style","text-decoration: none;");
                        var element1 = document.getElementById(event.target.id);
                        element1.setAttribute("style","text-decoration: underline;");
                        _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
                    }
                }

                _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

            }else{

                _itemsCategoriesSelected[event.target.id]=event.target.innerText;
                _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
                var element = document.getElementById(event.target.id);
                element.setAttribute("style","text-decoration: underline;");
            }

        }




        this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
        this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
    }

    removeSelectedCategory(event){
        console.log(event.target.id);
        var ar = event.currentTarget.id.split(",");
        var _itemsCategoriesKeysRender= [];

        var _itemsCategoriesSelected = this.itemsCategoriesSelected;
        console.log(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]);
        delete  _itemsCategoriesSelected[ar[0]+","+ar[1]+","+ar[2]+","+ar[3]];
        var element = document.getElementById(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]);
        if(element){
            if(element.type==="checkbox"){
                element.removeAttribute("checked");
            }else{
                element.setAttribute("style","text-decoration: none;");
            }
        }

        var element1 = document.getElementById(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]+",S");
        console.log(element1);
        console.log(element1.parentNode);
        element1.parentNode.removeChild(element1);

        _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

        this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
        this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })

    }
    handlerShowCategory(event){
        this.setState({showCategory: true })
    }
    handlerCloseCategory(event){
        this.setState({showCategory: false })
    }

    closeOpenTab(event) {
        if (event === undefined)
            return
        console.log('-----receive event closeOpenTab----')
        //event.preventDefault();
        console.log('-----closeOpenTab----' + event.currentTarget.attributes['aria-expanded'].value);
        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id] = event.currentTarget.attributes['aria-expanded'].value == 'true'
        this.setState({collapseInfo: collapseInfo1})
    }
    closeOpenTabCategory(event) {

        if(event === undefined)
            return
        console.log('-----receive event closeOpenTabC----')

        event.preventDefault();
        console.log('-----closeOpenTabC----'+event.currentTarget.attributes['aria-expanded'].value);
        if(event.currentTarget.attributes['aria-expanded'].value == "true")
        {
            //console.log(event.target);
            var ar = event.currentTarget.id.split(",");
            console.log(event.currentTarget);
            console.log(ar);
            //  if(document.getElementById(ar[0]+"UL").id!=null)
            //console.log(document.getElementById(ar[0]+"UL").id);
            var element = document.getElementById(document.getElementById(ar[0]+"UL").id);
            element.setAttribute("style","display: none;");

        } else{
            console.log("false");
            var ar = event.currentTarget.id.split(",");
            console.log(ar);
            console.log(document.getElementById(ar[0]+"UL").style.display);
            if(document.getElementById(ar[0]+"UL").style.display=="none")
                document.getElementById(ar[0]+"UL").style.display="block";
        }

        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id]=event.currentTarget.attributes['aria-expanded'].value=='true'
        this.setState({collapseInfo: collapseInfo1 })
    }

    changeLanguage(event) {
        event.preventDefault();
        console.log('-----changeLanguage----' + event.currentTarget.id);
        //this.data['selectedLanguage']=event.currentTarget.id
        var data1 = this.data;
        data1['selectedLanguage'] = event.currentTarget.id
        this.setState({data: data1})
        //cerrado: false, collapsed, ''
        //abierto: true, '', 'show'
    }

    changeBrand(event) {
        console.log('-----changeBrand----')
        // event.preventDefault();
        var _brandIdSelect =Number( event.currentTarget.value)
        let _brandSelect = event.currentTarget.selectedOptions["0"].label
        if (this.structureId === structureIdRate) {
            var result = [];
            for ( var i = 0; i < event.target.selectedOptions.length; i++) {
                result.push( event.target.selectedOptions[i].value);
            }
            _brandIdSelect = result
        }

        this.setState({msgErrorPath: null})
        this.setState({brandIdSelected: _brandIdSelect})
        this.setState({brandSelected: _brandSelect})
        this.model.setBrand(_brandSelect)
        $("#btnSelectPath").attr('disabled', 'disabled');

        if (this.structureId === structureIdHotel) {
            $("#txtCodeHotel").removeAttr('disabled');
            return;
        }

        if (this.structureId === structureIdRate) {
            $("#btnSelectPath").removeAttr('disabled');
            return;
        }

        var myselect = $("select#hotelSelect.form-control");
        myselect[0].selectedIndex = 0;


        for (var brand of this.categoryBrands) {
            if (brand['key'] === _brandIdSelect.toString()) {

                let _hotelsXBrands = brand['nested']

                this.setState({hotelsXBrands: _hotelsXBrands})
                this.setState({hotelSelected: undefined})


                break;
            }
        }
    }

    changeHotels(event) {
        console.log('-----changeHotels----')
        //  event.preventDefault();
        let _hotelIdSelected = event.currentTarget.value
        let _hotelSelected = event.currentTarget.selectedOptions["0"].label
        if (_hotelSelected !== undefined && this.brandSelected !== undefined)
            $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({hotelSelected: _hotelSelected})
        this.setState({hotelIdSelected: _hotelIdSelected})
        this.model.setHotel(_hotelSelected)
    }

    handleChangeValueTempl(event) {
        let _templIdSelected = event.value
        console.log('-----handleChangeValueTempl----' + _templIdSelected)
    }

    handleChangeCode(event) {
        let _hotelSelected = event.target.value.toUpperCase();
        $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({hotelSelected: _hotelSelected})
        this.model.setHotel(_hotelSelected)
    }

    handleChangeBrand(event) {
        let _brandSelect = event.target.value.toUpperCase();
        $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null})
        this.setState({brandSelected: _brandSelect})
        this.model.setBrand(_brandSelect)
    }

    completeCategory(categoryIdSelect,resultCategories,_itemsMarcasKeys){
        //itemsCategories
        //itemsMarcasKeys

        for(var itemResult of resultCategories){
            for(var itemProp in itemResult){
                if(itemProp==='Marcas')
                    continue
                for(var itemCatRes of itemResult[itemProp]){
                    if(categoryIdSelect===itemCatRes.categoryId){
                        return itemCatRes
                    }
                }
            }
        }

        for(var itemResult of _itemsMarcasKeys){
            if(categoryIdSelect===itemResult.categoryId){
                return itemResult
            }
            for(var itemCatRes of itemResult.children){
                if(categoryIdSelect===itemCatRes.categoryId){
                    return  itemCatRes
                }
            }
        }
        return undefined
    }
    setCategorySelected(itemCatSelected,_itemsCategoriesSelected){
        //itemsCategoriesSelected
        var idCat = itemCatSelected.categoryId+","+itemCatSelected.parentCategoryId+","+itemCatSelected.parentName+(itemCatSelected.isMultiValue?",T":",F");
        var element = document.getElementById(idCat);

        _itemsCategoriesSelected[idCat]=itemCatSelected.name;
        if(element){
            if(element.type==="checkbox"){
                element.setAttribute("checked", "checked");
            }else{
                element.setAttribute("style","text-decoration: underline;");
            }
        }
        return _itemsCategoriesSelected;
    }
    saveSelectPath(event) {
        console.log('-----saveSelectPath----')
        $("#loadingSelectPath").toggleClass("loading-animation");
        event.preventDefault();
        if (this.structureId === structureIdHotel) {
            var _parent = this
            new Service().validateCodeHotel(this.brandSelected, this.hotelSelected, this.brandIdSelected, result => {
                console.log("-------------" + JSON.stringify(result))
                $("#loadingSelectPath").toggleClass("loading-animation");
                if (result['status'] === 'OK') {
                    //input_codeHotel_es_ES
                    $("#input_codeHotel_es_ES").val(_parent.hotelSelected);
                    $("#input_codeHotel_en_US").val(_parent.hotelSelected);

                    var eventES = {
                        path: 'codeHotel',
                        value: _parent.hotelSelected,
                        language: 'es_ES'
                    }
                    var eventUS = {
                        path: 'codeHotel',
                        value: _parent.hotelSelected,
                        language: 'en_US'
                    }
                    _parent.handleChangeValue(eventES)
                    _parent.handleChangeValue(eventUS)
                    $("#input_codeHotel_es_ES").attr('disabled', 'disabled');
                    $("#input_codeHotel_en_US").attr('disabled', 'disabled');

                    _parent.setState({hotelIdSelected: result["categoryId"]})
                    _parent.setState({isOnLoad: false})
                    new Service().getCategories(_parent.setResultCategories);
                    window.setTimeout(handler => {
                        var catCompleted=_parent.completeCategory(_parent.hotelIdSelected.toString(),_parent.itemsCategories,_parent.itemsMarcasKeys);
                        if(catCompleted!==undefined){
                            var _itemsCategoriesSelected =_parent.setCategorySelected(catCompleted,_parent.itemsCategoriesSelected);
                            var _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

                            _parent.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
                            _parent.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
                        }

                        var catCompletedBrand=_parent.completeCategory(_parent.brandIdSelected.toString(),_parent.itemsCategories,_parent.itemsMarcasKeys);
                        if(catCompletedBrand!==undefined){
                            var _itemsCategoriesSelected =_parent.setCategorySelected(catCompletedBrand,_parent.itemsCategoriesSelected);
                            var _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

                            _parent.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
                            _parent.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
                        }
                    },2000)


                } else {
                    $("#btnSelectPath").attr('disabled', 'disabled');
                    this.setState({msgErrorPath: "Codigo asignado a: " + result["message"]})
                }

            })
            return;
        }

        if (this.structureId === structureIdBrand) {
            var _parent = this
            new Service().validateCodeBrand(this.brandSelected, result => {
                console.log("-------------" + JSON.stringify(result))
                $("#loadingSelectPath").toggleClass("loading-animation");
                if (result['status'] === 'OK') {

                    $("#input_codeBrand_es_ES").val(_parent.brandSelected);
                    $("#input_codeBrand_en_US").val(_parent.brandSelected);

                    var eventES = {
                        path: 'codeBrand',
                        value: _parent.brandSelected,
                        language: 'es_ES'
                    }
                    var eventUS = {
                        path: 'codeBrand',
                        value: _parent.brandSelected,
                        language: 'en_US'
                    }
                    _parent.handleChangeValue(eventES)
                    _parent.handleChangeValue(eventUS)
                    $("#input_codeBrand_es_ES").attr('disabled', 'disabled');
                    $("#input_codeBrand_en_US").attr('disabled', 'disabled');

                    _parent.setState({brandIdSelected: result["categoryId"]})
                    _parent.setState({isOnLoad: false})
                    new Service().getCategories(_parent.setResultCategories);
                    window.setTimeout(handler => {
                        var catCompleted=_parent.completeCategory(_parent.brandIdSelected.toString(),_parent.itemsCategories,_parent.itemsMarcasKeys);
                        if(catCompleted!==undefined){
                            var _itemsCategoriesSelected =_parent.setCategorySelected(catCompleted,_parent.itemsCategoriesSelected);
                            var _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

                            _parent.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
                            _parent.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
                        }
                    },2000);
                } else {
                    $("#btnSelectPath").attr('disabled', 'disabled');
                    this.setState({msgErrorPath: "Codigo asignado a: " + result["message"]})
                }

            })
            return;
        }

        if(Array.isArray(this.brandIdSelected)){

            var _parent =this;
            this.brandIdSelected.forEach(function(element) {
                console.log(element);
                var catCompleted=_parent.completeCategory(element.toString(),_parent.itemsCategories,_parent.itemsMarcasKeys);
                if(catCompleted!==undefined){
                    var _itemsCategoriesSelected =_parent.setCategorySelected(catCompleted,_parent.itemsCategoriesSelected);
                    var _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);

                    _parent.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
                    _parent.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
                }
            });
        }

        $("#loadingSelectPath").toggleClass("loading-animation");
        this.setState({isOnLoad: false})
    }

    handleChangeValue(event) {
        console.log('-------NewStructure-handleChangeValue-- v6********path=' + event.path + "--value=" + event.value)
        var result = this.model.setValue(event.path, event.value, event.language)
        console.log('-------NewStructure-handleChangeValue-- resut==' + result)
    }

    handleRemoveValue(event) {
        console.log('-------NewStructure-handleRemoveValue-- v6********path=' + event.path + "--value=" + event.value)
        var result = this.model.removeValue(event.path, event.value, event.language)
        console.log('-------NewStructure-handleRemoveValue-- resut==' + result)
    }

    handleRemoveItem(event) {
        console.log('-------NewStructure-handleRemoveItem-- v6********path=' + event.path )
        var result = this.model.removeItem(event.path)
        console.log('-------NewStructure-handleRemoveItem-- resut==' + result)
    }

    saveStructure(event) {
        if(this.initialConfig_.articleId === undefined){
            console.log("--------saveStructure----------")
        }else{
            console.log("--------Update Structure----------")
        }




        let _structureKey = this.initialConfig_.structureKey;
        let _fields = []
        var errorRequired=false
        var _count=0;
        for (var field of this.model.getState()['fields']) {
            _count=_count+1;
            if(field===undefined)
                continue;
            if(field.nested!==undefined){
                for(var fieldN of field.nested){
                    if(fieldN.required===true){
                        var pathNArray = fieldN.path.split('/')
                        var pathN = pathNArray[pathNArray.length-1]
                        if(fieldN.values===undefined
                            || ( Object.keys(fieldN.values).length<1 )){
                            //$('#'+pathN).addClass('has-error');
                            document.getElementById(pathN).style.border='solid'
                            document.getElementById(pathN).style.color='red'
                            console.log("Required Field not found==="+fieldN.path)
                            errorRequired=true
                        }else{
                            if(fieldN.values!==undefined && Object.keys(fieldN.values).length>0 ){
                                var valN = fieldN.values[this.initialConfig_.data.defaultLanguage]

                                if(valN===undefined || valN ==='' ){
                                    console.log("Required Field not found==="+fieldN.path)
                                    errorRequired=true
                                    //$('#'+pathN).addClass('has-error');
                                    document.getElementById(pathN).style.border='solid'
                                    document.getElementById(pathN).style.color='red'
                                }
                                else
                                    //$('#'+pathN).removeClass('has-error');
                                    document.getElementById(pathN).style.border=''
                            }else
                                //$('#'+pathN).removeClass('has-error');
                                document.getElementById(pathN).style.border=''
                        }
                    }
                }
            }else{
                if(field.required===true){
                    if(field.values===undefined
                        || ( Object.keys(field.values).length<1 )){
                        //$('#'+field.path).addClass('has-error');
                        document.getElementById(field.path).style.border='solid'
                        document.getElementById(field.path).style.color='red'
                        console.log("Required Field not found==="+field.path)
                        errorRequired=true
                    }else{
                        if(field.values!==undefined && Object.keys(field.values).length>0 ){
                            var valN = field.values[this.initialConfig_.data.defaultLanguage]

                            if(valN===undefined || valN ==='' ){
                                console.log("Required Field not found==="+field.path)
                                errorRequired=true
                                //$('#'+field.path).addClass('has-error');
                                document.getElementById(field.path).style.border='solid'
                                document.getElementById(field.path).style.color='red'
                            }
                            else
                               // $('#'+field.path).removeClass('has-error');
                                document.getElementById(field.path).style.border=''
                        }else
                           // $('#'+field.path).removeClass('has-error');
                            document.getElementById(field.path).style.border=''
                    }
                }
            }


            if(field.values===undefined
            || (field.multiple && Object.keys(field.values).length<1 ))
                continue;
            console.log(field.toJson())
            _fields.push(field.toJson())
        }
        if(errorRequired){
            alert('Algunos campos requeridos no han sido capturados, Revise')
            return
        }
        var _fieldsRoot = {}
        let _fieldParent = {
            indexType: 'keyword',
            type: 'ddm-separator',
            name: '__ROOT__',
            values: [{"en_US": "","es_ES": ""}],
            nestedFields: []
        }

        for (var field of _fields) {
            var _isRoot = false
            for (var fieldR of this.rootFields) {
                if (fieldR === field.name && field.type === 'ddm-separator') {
                    _fieldsRoot[field.name] = field;
                    _isRoot = true;
                    break;
                }
            }
            if (!_isRoot) {
                _fieldParent.nestedFields.push(field)
            }
        }
        let _nestedFields = []
        for (var _i = 0; _i < this.rootFields.length; _i++) {
            if (_fieldsRoot[this.rootFields[_i]] != undefined) {
                _nestedFields[_i] = _fieldsRoot[this.rootFields[_i]];
            } else {
                _nestedFields[_i] = _fieldParent
                _nestedFields[_i]['name'] = this.rootFields[_i];
            }
        }

        var categories =[];
        for(var item in this.itemsCategoriesSelected){
            console.log(item);
            categories.push(item.split(',')[0])
        }

        var _tags = []
        for(var item of this.itemsTags){
            console.log(item);
            _tags.push(item.name)
        }

        let _data = {
            brandId: this.brandIdSelected,
            hotelId: this.hotelIdSelected,
            brand: this.brandSelected,
            hotel: this.hotelSelected,
            localeDefault: this.data['defaultLanguage'],
            title: $("#input_title_principal").val(),
            ddmTemplate: $("#select_selectTemplate").val(),
            ddmStructure: _structureKey,
            description: $("#input_description_prinipal").val(),
            aviableLocales: 'es_ES,en_US',
            fields: _nestedFields,
            categories: categories,
            tags: _tags
        }
        if(this.initialConfig_.articleId !== undefined)
            _data.articleId=this.initialConfig_.articleId
        console.log(JSON.stringify(_data))
        const _parent =this
        new Service().savejournal(_data, result => {
            console.log("----------" + result)
            if(result['id']==undefined){
                alert("ocurrio un error"+ JSON.stringify( result));
                return;
            }
        if(_parent.nested){
            window.setTimeout(handler =>{
                var data = {idParent: 'bar'}
                var event = new CustomEvent(_parent.structureId+'_saveEvent', {detail: result})
                window.parent.document.dispatchEvent(event)
            },100);
        }else{
            alert("Se guardo correctamente la información")
            window.location=_PATHBASE_+"/web/guest/home"
            //window.location=_PATHBASE_+"/web/posadas-completo-nuevo/personalizacion/"
        }


        })
        console.log("********saveStructure**********")
    }

    cancelStructure(event) {
        if(this.nested) {
            var data = {idParent: 'cancel'}
            var event = new CustomEvent('cancelEvent', {detail: data})
            window.parent.document.dispatchEvent(event)
        }else{
            window.location=_PATHBASE_+"/web/guest/home"
            //window.location=_PATHBASE_+"/web/posadas-completo-nuevo/personalizacion/"
        }
    }

}

NewStructure.STATE = {
    brandSelected: {value: undefined},
    brandIdSelected: {value: undefined},
    hotelSelected: {value: undefined},
    hotelIdSelected: {value: undefined},
    structureId:{value:{}},
    nested: {value: undefined},
    model: {value: new NewStructureStateEs()},
    itemsCategories:{value:[]},
    itemsMarcasKeys:{value:[]},
    itemsCategoriesKeys:{value:[]},
    itemsCategoriesKeysRender:{value:[]},
    itemsCategoriesSelected:{value:{}},
    itemsTags:{value:[]},
}
Soy.register(NewStructure, templates);

export default NewStructure;