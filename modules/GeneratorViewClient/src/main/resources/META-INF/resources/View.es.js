import Component from 'metal-component/src/Component';

import Soy from 'metal-soy/src/Soy';
import templates from './View.soy';
import TableUI from './components/TableUI.soy';
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


    rendered(firstRender) {
        console.log('-----ViewNested-rendered----'+JSON.stringify(firstRender));


    }
    willReceiveState(changes) {
        console.log('-----willReceiveState-rendered----');
    }
    willReceiveProps(propsChanges) {
        console.log('-----willReceiveProps-rendered----');
    }
    willUpdate(changes, propsChanges) {
        console.log('-----willUpdate-rendered----');
    }

}

View.STATE = {
    selectedTab: {
        value: 'navUnderlineHotelsTab'
    }
}

Soy.register(View, templates);

export default View;