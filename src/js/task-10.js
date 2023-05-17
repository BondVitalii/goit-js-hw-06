function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
});
// ----------

/** Задание 10
Задание 10 (выполнять не обязательно)
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

// ----------

/** Варианты решение задачи
// 
// Вариант решения 1 -------------------------------------------------------

const inputNum = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
});

// 
// Вариант решения 2 -------------------------------------------------------

document.body.style.backgroundColor = '#abbbc4';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');
divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';
divBoxesEl.style.marginTop = '30px';

// inputNumberEl.addEventListener('input', toogleValue);
// createBtnEl.addEventListener('click', () => {
//   createBoxes(Number(inputNumberEl.value));
// });
// destroyBtnEl.addEventListener('click', destroyBoxesMarkup);

// let inputValue = 0;
// function toogleValue(event) {
//   inputValue = event.currentTarget.value;
//   console.log(inputValue);
// }

// function createBoxes(amount) {
//   let divArray = [];
//   let sizeDefault = 30;
//   for (let i = 0; i < amount; i += 1) {
//     sizeDefault += 10;
//     const divElement = document.createElement('div');
//     divElement.classList = 'item';
//     divElement.style.height = `${sizeDefault}px`;
//     divElement.style.width = `${sizeDefault}px`;
//     divElement.style.marginRight = '30px';
//     divElement.style.marginBottom = '30px';
//     divElement.style.backgroundColor = getRandomHexColor();
//     divArray.push(divElement);
//     // divBoxesEl.appendChild(divElement);
//   }
//   return divBoxesEl.append(...divArray);
// }

// function destroyBoxesMarkup() {
//   inputNumberEl.value = '';
//   return (divBoxesEl.innerHTML = '');
// }

// --- next variant -------------------------------------------

createBtnEl.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}

// function createBoxes(amount) {
//   let defaultSize = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     defaultSize += 10 * i;
//     const div = document.createElement('div');
//     div.classList = 'item';
//     div.style.width = `${defaultSize}px`;
//     div.style.height = `${defaultSize}px`;
//     div.style.marginRight = '30px';
//     div.style.marginBottom = '30px';
//     div.style.backgroundColor = getRandomHexColor();
//     boxesArr.push(div);
//     console.log('arr length', boxesArr.length);
//   }
//   return divBoxesEl.append(...boxesArr);
// }

// --- next variant function createBoxes ()--------------------
function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
}
*/
