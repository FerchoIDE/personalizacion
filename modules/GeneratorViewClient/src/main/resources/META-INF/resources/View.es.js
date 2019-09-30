import Component from 'metal-component';

import Soy from 'metal-soy';

import templates from './View.soy';

import TableUI from './components/TableUI.es';
import Service from "./service/Service.es";

/**
 * View Component
 */
class View extends Component {

    changeTab(event) {
        event.preventDefault();
        console.log('-----changeTab----'+event.currentTarget.attributes['id'].value);
        var st=event.currentTarget.attributes['id'].value
        this.setState({selectedTab: st })
    }
    handleChangeSearch(event) {
        event.preventDefault();
        let value = event.target.value;
        console.log('-----ChangeSearch----'+value);
        if(value!==undefined && value!=='')
            this.setState({searchQuery: value })
        else
            this.setState({searchQuery: undefined })
    }
    deleteWC(event) {
        event.preventDefault();
        console.log('-----deleteWC----');
        var _parent =this
        new Service().deletejournal({articleId:this.articleIdSelected},function(response,error){
            if(response!==undefined){
                console.log(JSON.stringify(response))
                location.reload();
            }else{
                alert('no se pudo eliminar el contenido')
                console.log(JSON.stringify(error))
                _parent.setState({isOnDelete: false })
            }
        })


    }
    cancelWC(event) {
        event.preventDefault();
        console.log('-----cancelWC----');
        this.setState({isOnDelete: false })
    }
    showDeleteWC(event) {
        event.preventDefault();
        console.log('-----showDeleteWC----'+event.currentTarget.attributes['itemid'].value);
        var articleIdSelected=event.currentTarget.attributes['itemid'].value
        this.articleIdSelected=articleIdSelected
        this.setState({articleIdSelected: articleIdSelected })
        this.setState({isOnDelete: true })

    }


}

View.STATE = {
    selectedTab: {
        value: 'navUnderlineHotelsTab'
    },
    articleIdSelected:{
        value: undefined
    }
}


Soy.register(View, templates);

export default View;