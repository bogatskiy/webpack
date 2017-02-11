import './index.scss';
import createMenu from '../../components/menu/menu'
var menu = createMenu(['Главная', 'Блог', 'Контакты'], 'menu__index')
document.body.appendChild(menu)