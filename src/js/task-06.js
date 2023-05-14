const input = document.querySelector('#validation-input');
const inputLength = Number(input.getAttribute('data-length'));
input.addEventListener('blur', event => {
  if (event.target.value.length === inputLength) {
    input.classList.add('valid');
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
  } else {
    input.classList.add('invalid');
  }
});

// ----------

/** Задание 6
Задание 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
*/
