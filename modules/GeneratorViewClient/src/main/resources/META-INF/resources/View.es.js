import Component from 'metal-component';
//var Component = require('metal-component')
//import Router from 'metal-router';
//var Router = require('metal-router')

import Soy from 'metal-soy';
//var Soy = require('metal-soy')

import templates from './View.soy';
//var templates = require('View.soy')

import TableUI from './components/TableUI.soy';
//import ClayBadge from 'clay-badge';
//import   'clay-css';
//var TableUI = require('components/TableUI.soy')

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
    attached() {
        // Dispatch router to the current browser url ----------------------------------
      //  Router.router().dispatch();
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

/*Component.render(Router, {
    component: View,
    data: {
        title: 'Home Page'
    },
    element: '#main > div',
    path: '/view'
});*/

Soy.register(View, templates);

export default View;