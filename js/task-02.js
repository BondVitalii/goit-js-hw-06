const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrayLi = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;
  return itemEl;
});

list.append(...arrayLi);

// ----------

/** Решения до проверки ----------

const list = document.querySelector('#ingredients');
const arrayLi = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  // console.log(item);
  item.className = 'item';
  // console.log(item);
  item.textContent = ingredient;
  // console.log(item);
  arrayLi.push(item);
  // console.log(arrayLi);
});

list.append(...arrayLi);

console.log(arrayLi);

*/

// ----------

/**Задание 2
Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.
*/
