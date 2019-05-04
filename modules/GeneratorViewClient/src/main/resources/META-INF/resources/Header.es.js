import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Header.soy';

/**
 * Header Component
 */
class Header extends Component {}

// Register component
Soy.register(Header, templates);

export default Header;