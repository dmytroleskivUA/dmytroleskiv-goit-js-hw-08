import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(() => {
    const obj = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  }, 500)
);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email;
    form.message.value = message;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const obj = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(obj);
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
