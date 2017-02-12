import './blog.scss';
import 'normalize.css';
import createMenu from '../../components/menu/menu';
var menu = createMenu(['123','321','asdas'], 'menu');
document.body.appendChild(menu);