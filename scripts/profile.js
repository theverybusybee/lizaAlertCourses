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
const personalDataForm = document.querySelector(".profile-form_content_personal-data");
const accountForm = document.querySelector(".profile-form_content_account");

// функция, которая сохраняет введенное имя в профиль
function editUsername (inputValue, profileValue) {
  profileValue.textContent = inputValue.value;
}

// функция, которая сохраняет введенные значения в инпутах
function saveProfileData(input) {
  input.value = input.value;
}

personalDataForm.addEventListener('submit', (evt) =>
{
  evt.preventDefault();
  editUsername(inputUsername, profileName);
  saveProfileData(inputUserLocation);
  saveProfileData(inputUserNickname);
  saveProfileData(inputUserDateOfBirth);
  personalDataSubmitButton.style.color = '#9397a3';
  personalDataSubmitButton.style.background = '#e6e7eb';
});

accountSubmitButton.addEventListener('submit', (evt) =>
{
  evt.preventDefault();
  saveProfileData(inputUserNumber);
  saveProfileData(inputUserEmail);
  saveProfileData(inputUserPassword);
});


inputUsername.value = profileName.textContent;

function changeSubmitButton(input, submit) {
input.oninput = function testFunction() {
  if (input.value != input.oninput) {
    submit.style.background = '#FF6600';
    submit.style.color = '#fff';
    submit.disabled = false;
  }
}
}

changeSubmitButton(inputUsername, personalDataSubmitButton);
changeSubmitButton(inputUserLocation, personalDataSubmitButton);
changeSubmitButton(inputUserNickname, personalDataSubmitButton);
changeSubmitButton(inputUserDateOfBirth, personalDataSubmitButton);
changeSubmitButton(inputUserNumber, accountSubmitButton);
changeSubmitButton(inputUserEmail, accountSubmitButton);
changeSubmitButton(inputUserPassword, accountSubmitButton);

// делаем маску для ввода номера мобильного телефона
inputUserNumber.onclick = function() {
    inputUserNumber.value = "+7";
}

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
}