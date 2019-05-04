import Component from 'metal-component';
import Footer from './Footer.es';
import Header from './Header.es';
import Soy from 'metal-soy';
import templates from './Navigation.soy';

/**
 * Navigation Component
 */
class Navigation extends Component {}

// Register component
Soy.register(Navigation, templates);

export default Navigation;