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
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - Получаем значение поля сообщения
// - Сохраняем его в хранилище
// - Добавляем throttle

function onTextAreaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(`${STORAGE_KEY}-message`, message);
}

// - Получаем значение поля email
// - Сохраняем его в хранилище
// - Добавляем throttle

function onEmailInput(evt) {
  const email = evt.target.value;
  localStorage.setItem(`${STORAGE_KEY}-email`, email);
}

// - Получаем значение из хранилища
// - Если там что-то было, обновляем DOM

function populateInputs() {
  const savedMessage = localStorage.getItem(`${STORAGE_KEY}-message`);
  const savedEmail = localStorage.getItem(`${STORAGE_KEY}-email`);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }

  if (savedEmail) {
    refs.email.value = savedEmail;
  }
}
