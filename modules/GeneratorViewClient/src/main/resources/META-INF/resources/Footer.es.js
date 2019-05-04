import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Footer.soy';

/**
 * Footer Component
 */
class Footer extends Component {}

// Register component
Soy.register(Footer, templates);

export default Footer;