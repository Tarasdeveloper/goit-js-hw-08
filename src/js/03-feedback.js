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
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - Получаем значение поля сообщения
// - Сохраняем его в хранилище
// - Добавляем throttle

function onTextAreaInput(evt) {
  formData.message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// - Получаем значение поля email
// - Сохраняем его в хранилище
// - Добавляем throttle

function onEmailInput(evt) {
  formData.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// - Получаем значение из хранилища
// - Если там что-то было, обновляем DOM

function populateInputs() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // const savedEmail = localStorage.getItem(`${STORAGE_KEY}-email`);

  if (savedFormData && savedFormData.message) {
    refs.textarea.value = savedFormData.message;
  }

  if (savedFormData && savedFormData.email) {
    refs.email.value = savedFormData.email;
  }
  console.log(savedFormData);
}
