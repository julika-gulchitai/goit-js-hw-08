/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.*/

import throttle from 'lodash.throttle';

const form = document.querySelector('input');

const STORAGE = "feedback-form-state";
let contactForm =  {};


function fillContactForm(event) {
console.log('event', event);
    for (const key in contactForm) {
        if (contactForm.hasOwnProperty(key)) {
            contactForm.elements[key].value = event[key];
        }
    }
}
//   if (userForm === undefined) {
//     return;
//   }

  console.log(contactForm);

  // contactFormElements.user_name.value = userDataFromLS.user_name;
  // contactFormElements.user_email.value = userDataFromLS.user_email;
  // contactFormElements.user_message.value = userDataFromLS.user_message;
form.addEventListener('input', throttle( fillContactForm, 500));
// form.addEventListener('submit', e => {
    
// })

const onContactFormFieldChange = ({ target: contactFormField }) => {
  const contactFormFieldValue = contactFormField.value;
  const contactFormFieldName = contactFormField.name;

  userData[contactFormFieldName] = contactFormFieldValue;

  localStorageAPI.save('contactFormInfo', userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageAPI.remove('contactFormInfo');
};

contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);


localStorage.removeItem()
event.currentTargettarget.reset();
