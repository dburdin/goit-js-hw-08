import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('input', throttle(onFormInputs, 500));
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(localData);
  evt.currentTarget.reset();
}

function onFormInputs(evt) {
  let localData = localStorage.getItem(STORAGE_KEY);

  try {
    localData = localData ? JSON.parse(localData) : {};
    localData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
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
      });
    }
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}
