import './index.scss';
import 'normalize.css';
import createMenu from '../../components/menu/menu'
var menu = createMenu(['Главная', 'Блог', 'Контакты'], 'menu__index')
document.body.appendChild(menu)