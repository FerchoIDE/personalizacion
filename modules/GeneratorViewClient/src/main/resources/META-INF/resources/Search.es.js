import Component from 'metal-component';

import Soy from 'metal-soy';

import templates from './Search.soy';

import TableUI from './components/TableUI.es';
import Service from "./service/Service.es";

class Search extends Component {

    changePage(event) {
        event.preventDefault();
        console.log('-----changePageParent----'+event.currentTarget.attributes['itemid'].value);
        var itemid=event.currentTarget.attributes['itemid'].value
        var items = itemid.split('___')
       /* var _selectPage = this.selectPage
        if(_selectPage===undefined)
            _selectPage = {}
        _selectPage[this.id] = parseInt(items[1])*/
        var _parent=this
        new Service().searchContent({querySearch:this.querySearch,page:parseInt(items[1])},function(response,error){
            console.log(response)
            _parent.data =response
        })
       // this.setState({selectPage: _selectPage })
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
}
Search.STATE = {
    querySearch: {
        value: undefined
    }
}
Soy.register(Search, templates);

export default Search;