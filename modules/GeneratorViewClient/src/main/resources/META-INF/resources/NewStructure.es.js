import Component from 'metal-component';
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import ViewNested from './ViewNested.es';
import DateUI from './DateUI.es';
import RadioUI from './RadioUI.es';
import SelectUI from './SelectUI.es';

import Service from "./service/Service"


import Soy from 'metal-soy';
import templates from './NewStructure.soy';
import DocumentUI from "./components/DocumentUI.es";
import NewStructureState from "./state/NewStructureState"
/**
 * View Component
 */
class NewStructure extends Component {

    created() {
        console.log('----NewStructure ----created----'+this.id)
        this.model = new NewStructureState()
        this.model.idStructure=this.structureId
        this.model.fields=this.data
        this.model.localeDefault=this.data['defaultLanguage']
        this.on('modelChanged',function(event){
            console.log('--------change model --- ')
        })
    }
    closeOpenTab(event) {
        if(event === undefined)
            return
        console.log('-----receive event closeOpenTab----')
       //event.preventDefault();
        console.log('-----closeOpenTab----'+event.currentTarget.attributes['aria-expanded'].value);
        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id]=event.currentTarget.attributes['aria-expanded'].value=='true'
         this.setState({collapseInfo: collapseInfo1 })
    }

    changeLanguage(event) {
        event.preventDefault();
        console.log('-----changeLanguage----'+event.currentTarget.id);
        //this.data['selectedLanguage']=event.currentTarget.id
        var data1 = this.data;
        data1['selectedLanguage']=event.currentTarget.id
        this.setState({data: data1 })
        //cerrado: false, collapsed, ''
        //abierto: true, '', 'show'
    }

    changeBrand(event){
        console.log('-----changeBrand----')
       // event.preventDefault();
        let _brandIdSelect = event.currentTarget.value
        let _brandSelect =event.currentTarget.selectedOptions["0"].label
        this.setState({msgErrorPath: null })
        this.setState({brandIdSelected: _brandIdSelect })
        this.setState({brandSelected: _brandSelect })
        this.model.setBrand(_brandSelect)
        $("#btnSelectPath").attr('disabled','disabled');

        if(this.structureId==='35835'){
            $("#txtCodeHotel").removeAttr('disabled');
            return;
        }

        if(this.structureId==='35796'){
            $("#btnSelectPath").removeAttr('disabled');
            return;
        }

        var myselect = $("select#hotelSelect.form-control");
        myselect[0].selectedIndex = 0;


        for(var brand of this.categoryBrands){
            if(brand['key']===_brandSelect){

                let _hotelsXBrands = brand['nested']

                this.setState({hotelsXBrands: _hotelsXBrands })
                this.setState({hotelSelected: undefined })


                break;
            }
        }
    }

    changeHotels(event){
        console.log('-----changeHotels----')
      //  event.preventDefault();
        let _hotelIdSelected = event.currentTarget.value
        let _hotelSelected =event.currentTarget.selectedOptions["0"].label
        if(_hotelSelected!==undefined && this.brandSelected !==undefined)
            $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null })
        this.setState({hotelSelected: _hotelSelected })
        this.setState({hotelIdSelected: _hotelIdSelected })
        this.model.setHotel(_hotelSelected)
    }

    handleChangeValueTempl(event){
        let _templIdSelected = event.currentTarget.value
        console.log('-----handleChangeValueTempl----'+_templIdSelected)
    }
    handleChangeCode(event){
        let _hotelSelected = event.target.value;
        $("#btnSelectPath").removeAttr('disabled');
        this.setState({msgErrorPath: null })
        this.setState({hotelSelected: _hotelSelected })
        this.model.setHotel(_hotelSelected)
    }

    saveSelectPath(event){
        console.log('-----saveSelectPath----')
        event.preventDefault();
        if(this.structureId==='35835'){
            var _parent =this
            new Service().validateCodeHotel(this.brandSelected,this.hotelSelected,this.brandIdSelected,result =>{
                console.log("-------------"+JSON.stringify(result))
                if(result['status']==='OK'){
                    _parent.setState({hotelIdSelected: result["categoryId"] })
                    _parent.setState({isOnLoad: false })
                }else{
                    $("#btnSelectPath").attr('disabled','disabled');
                    this.setState({msgErrorPath: "Codigo asignado a: "+result["message"] })
                }

            })
            return;
        }



        this.setState({isOnLoad: false })
    }

    handleChangeValue(event) {
        console.log('-------NewStructure-handleChangeValue-- v6********path='+event.path+"--value="+event.value)
        var result =this.model.setValue(event.path, event.value, event.language)
        console.log('-------NewStructure-handleChangeValue-- resut=='+result)
    }
    saveStructure(event){
        console.log("--------saveStructure----------")
        for(var field of this.model.getState()['fields']){
            console.log(field.toJson())
        }
        console.log("********saveStructure**********")
    }

}

NewStructure.STATE = {
    brandSelected:{value:undefined},
    brandIdSelected:{value:undefined},
    hotelSelected:{value:undefined},
    hotelIdSelected:{value:undefined},
    model:{value : new NewStructureState()}
}
Soy.register(NewStructure, templates);

export default NewStructure;