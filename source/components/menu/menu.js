
export default function (array, className) {
  var menu = document.createElement('ul');
  menu.className = className;
  var listItem = '';
  array.forEach(function (item) {
    listItem += '<li><a href="#">'+item+'</a></li>'
  });
  menu.innerHTML = listItem;
  return menu
}