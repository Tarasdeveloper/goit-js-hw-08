import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input[type="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

populateInputs();

// - Останавливаем поведение по умолчанию
// - Убираем сообщение из хранилища
// - Очищаем форму

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(evt) {
  formData.message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onEmailInput(evt) {
  formData.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// - Получаем значение из хранилища
// - Если там что-то было, обновляем DOM

function populateInputs() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (savedFormData.message) {
    refs.textarea.value = savedFormData.message;
    formData.message = savedFormData.message;
  }

  if (savedFormData.email) {
    refs.email.value = savedFormData.email;
    formData.email = savedFormData.email;
  }
}
