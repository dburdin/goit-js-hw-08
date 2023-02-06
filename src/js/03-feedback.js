import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const data = {};

initForm();

form.addEventListener('input', throttle(onFormInputs, 500));
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(data);
  evt.currentTarget.reset();
}

function onFormInputs(evt) {
  data[evt.target.name] = evt.target.value;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}

function initForm() {
  try {
    let savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      savedData = JSON.parse(savedData);
      Object.entries(savedData).forEach(([email, message]) => {
        form.elements[email].value = message;
        data[email] = message;
      });
    }
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}
/*
 {
 email: Text
 message: Text
 }

Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


// savedOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   console.log(data);
// }

// function onFormInputs(evt) {
//   data[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }

// function savedOutput() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedData) {
//     input.value = savedData.email;
//     textarea.value = savedData.message;
//   }
// }



HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>


*/
