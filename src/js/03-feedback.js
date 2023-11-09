/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.*/

import throttle from 'lodash.throttle';

const STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {
  email: '',
  message: '',
};
populateTextarea();
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(STORAGE);
  e.currentTarget.reset();
  console.log(formData);
});
function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE, stringifiedData);
}
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE));
  if (savedMessage === null) {
    return;
  }

  refs.textarea.value = savedMessage.message || '';
  refs.input.value = savedMessage.email || '';
  formData.email = savedMessage.email || '';
  formData.message = savedMessage.message || '';
}
