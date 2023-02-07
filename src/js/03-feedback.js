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
