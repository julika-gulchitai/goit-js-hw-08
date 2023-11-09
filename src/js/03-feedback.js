/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.*/

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// form.email.value = 2; form.message.value = 3
console.log(form, form.email.value, form.message.value);
const STORAGE = "feedback-form-state";
let contactForm = {
    email: '',
message: ''};

function fillContactForm(event ={ email, message }) {
console.dir('event', event.email);
//  contactForm.email.value = event.email.value;
    // contactForm.message.value = event.message.value;   
console.log (event.email, event.message)    
}

form.addEventListener('input', () => throttle( fillContactForm, 500));
form.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.removeItem(STORAGE);
    e.currentTargettarget.reset();
    console.log(contactForm);
    //     for (const key in contactForm) {
    //     if (contactForm.hasOwnProperty(key)) {
    //         contactForm.elements[key].value = e[key].value;
    //     }
    //         console.log('info', contactForm.elements[key].value = e[key].value);
    // }
})

console.log(contactForm);
  // contactFormElements.user_name.value = userDataFromLS.user_name;
  // contactFormElements.user_email.value = userDataFromLS.user_email;
  // contactFormElements.user_message.value = userDataFromLS.user_message;
// const onContactFormFieldChange = ({ target: contactFormField }) => {
//   const contactFormFieldValue = contactFormField.value;
//   const contactFormFieldName = contactFormField.name;

//   userData[contactFormFieldName] = contactFormFieldValue;

//   localStorageAPI.save('contactFormInfo', userData);
// };

// const onContactFormSubmit = event => {
//   event.preventDefault();

//   contactFormEl.reset();
//   localStorageAPI.remove('contactFormInfo');
// };

// contactFormEl.addEventListener('change', onContactFormFieldChange);
// contactFormEl.addEventListener('submit', onContactFormSubmit);


// localStorage.removeItem()
// event.currentTargettarget.reset();
