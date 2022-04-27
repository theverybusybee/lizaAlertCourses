// input-ы для формы personal data
const inputUsername = document.querySelector('#profile-name');
const inputUserLocation = document.querySelector('#profile-location');
const inputUserNickname = document.querySelector('#profile-nickname');
const inputUserDateOfBirth = document.querySelector('#profile-date-of-birth');

// input-ы для формы account
const inputUserNumber = document.querySelector('#profile-number');
const inputUserEmail = document.querySelector('#profile-email');
const inputUserPassword = document.querySelector('#profile-password');

// данные профиля
const profileName = document.querySelector('.profile-info__name');

// submit-кнопки для форм
const personalDataSubmitButton = document.querySelector('#PersonalDataSubmitButton');
const accountSubmitButton = document.querySelector('#AccountSubmitButton');

// формы
const personalDataForm = document.forms.personalDataForm;
const accountForm = document.forms.accountForm;

// все инпуты форм
const personalDataFormInputs = personalDataForm.querySelectorAll('.profile-form__item');
const accountFormInputs = accountForm.querySelectorAll('.profile-form__item');

/*------------------------------ cохраняем данные формы ------------------------------*/

function saveFormData(form) {
  form.elements.onclick = function(event) {
    if (form.elements.tagName == "input") {
      event.target.value =  event.target.value;
    };
  };
};

/*------------------ делаем кнопку неактивной при сохранении данных ------------------*/

function makeDisabledButton(submit) {
  submit.style.color = '#9397a3';
  submit.style.background = '#e6e7eb';
  submit.disabled = true;
  submit.style.cursor = 'not-allowed';
};

/*------------------- делаем кнопку активной при сохранении данных -------------------*/

function makeActiveButton(submit) {
  submit.style.background = '#f60';
  submit.style.color = '#fff';
  submit.disabled = false;
  submit.style.cursor = 'pointer';
};

/*------------------ присваиваем для имени профиля значение инпута ------------------*/

inputUsername.value = profileName.textContent;

/*------------------------ сохраняем введенное имя в профиль ------------------------*/

function editUsername() {
  profileName.textContent = inputUsername.value;
};

/*-------------- сохраняем данные формы в профиль, меняем цвет кнопки --------------*/

personalDataForm.addEventListener('submit', (evt) =>
{
  evt.preventDefault();
  editUsername();
  saveFormData(personalDataForm);
  makeDisabledButton(personalDataSubmitButton)
});

accountForm.addEventListener('submit', (evt) =>
{
  evt.preventDefault();
  saveFormData(accountForm);
  makeDisabledButton(accountSubmitButton)
});

/*----------------------- изменяем кнопки при вводе текста -----------------------*/

Array.from(personalDataFormInputs).forEach((input) => {
  const savedInputValue = input.value;
  input.oninput = function testFunction() {
    if (savedInputValue != input.value) {
      makeActiveButton(personalDataSubmitButton);
    }
    else makeDisabledButton(personalDataSubmitButton);
  };
});

Array.from(accountFormInputs).forEach((input) => {
   const savedInputValue = input.value;
  input.oninput = function testFunction() {
    if (savedInputValue != input.value) {
      makeActiveButton(accountSubmitButton);
    }
    else makeDisabledButton(accountSubmitButton);
  };
});

/*-------------- делаем маску для ввода номера мобильного телефона --------------*/

inputUserNumber.onclick = function() {
    inputUserNumber.value = "+7";
};

inputUserNumber.onkeydown = function() {
  let counter = 0;
  let currentLength = inputUserNumber.value.length;
  if (currentLength < counter) {
    counter--;
    return;
  }

  if (currentLength == 2) 
    inputUserNumber.value = inputUserNumber.value + " "; 
  if (currentLength == 6)
    inputUserNumber.value = inputUserNumber.value + " ";
  if (currentLength == 10)
    inputUserNumber.value = inputUserNumber.value + " ";  
  if (currentLength == 13)
    inputUserNumber.value = inputUserNumber.value + " ";  
  if (currentLength > 15)
    inputUserNumber.value = inputUserNumber.value.substring(0, inputUserNumber.value.length - 1);
  counter++;
};