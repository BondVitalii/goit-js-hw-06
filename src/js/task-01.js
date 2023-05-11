const categories = document.querySelector('#categories');
const list = categories.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const listing = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${listing}`);
});

// -------------------------------------------

// const items = document.querySelectorAll('.item');
// console.log(`Number of categories: ${items.length}`);

// Array.prototype.forEach.call(items, element => {
//   const title = element.querySelector('h2').innerHTML;
//   const itemsLength = element.querySelectorAll('li').length;
//   console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });

/**Решение задачи вариант-1 .forEach и .textContent
|============================
const categories = document.querySelector('#categories');
const list = categories.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const listing = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${listing}`);
});
|============================
*/
//--------------------------------------------------------
//
/**Решение задачи вариант-2 (интернет) .forEach и .innerHTML
|============================
const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

Array.prototype.forEach.call(items, element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});
|============================
*/
//--------------------------------------------------------
//
/**Решение задачи вариант-3 (интернет) .map
|============================
const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);
|============================
*/
//--------------------------------------------------------
//
/**Решение задачи вариант-4 (интернет) for of
|============================
const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}
|============================
*/
//--------------------------------------------------------
//
/**Решение задачи вариант-5 (интернет) for
|============================
const ulEl = document.querySelector('ul#categories');
const countOfChildren = ulEl.children.length;
console.log(`В списке ${countOfChildren} категории.`);

const liEl = ulEl.children;
console.log('liEl: ', liEl); //[li.item, li.item, li.item]

for (let i = 0; i < liEl.length; i++) {
  const childrenOfLi = liEl[i].children;
  console.log(childrenOfLi[0]);
  const textContent = childrenOfLi[0].textContent;
  console.log('Категория: ', textContent);
  const countOfChild = childrenOfLi[1].children.length;
  console.log('Количество элементов: ', countOfChild);
}
|============================
*/
//--------------------------------------------------------
