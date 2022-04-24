const infoDone = [
  {
    imageLink: './images/cards/laptop.png',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска'
  },
  {
    imageLink: './images/cards/orange-jacket.png',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…'
  }
]; //Массив объектов для пройденных карточек

const infoContinue = [
  {
    imageLink: './images/cards/german-shepherd.png',
    title: 'Кинологическое направление',
    text: ' Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак'
  }
];//Массив объектов для карточек с ,,продолжить,,

const infoEnroll = [
  {
    imageLink: './images/cards/radio-set.png',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...'
  },

  {
    imageLink: './images/cards/quadrocopter.png',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам'
  },

  {
    imageLink: './images/cards/first-aid-kid.png',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске'
  },
  {
    imageLink: './images/cards/woman-in-a-striped-blouse.png',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам'
  },
  {
    imageLink: './images/cards/woman-in-a-blazer.png',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей'
  }
];//Массив объектов для карточек с ,,записаться,,

const enrollTemplate = document.querySelector('#card-enroll').content;
const continueTemplate = document.querySelector('#card-continue').content;
const doneTemplate = document.querySelector('#card-done').content;
const cardContainer = document.querySelector('.cards__container');

infoContinue.forEach((element) => {
  continueAddCard(element.imageLink, element.title, element.text)
});//Добавляет на страницу карточки с кнопкой ,,продолжить,, используя метод forEach

infoEnroll.forEach((el) => {
  enrollAddCard(el.imageLink, el.title, el.text)
});//Добавляет на страницу карточки с кнопкой ,,записаться,, используя метод forEach

infoDone.forEach((elements) => {
  doneAddCard(elements.imageLink, elements.title, elements.text);
});//Добавляет на страницу карточки с кнопкой ,,пройдено,, используя метод forEach

function continueAddCard(elementLink, elementTitle, elementText) {
  const continueElement = continueTemplate.querySelector('#card-continueContent').cloneNode(true);
  continueElement.querySelector('#image-continue').src = elementLink;
  continueElement.querySelector('#image-continue').alt = elementTitle;
  continueElement.querySelector('#title-continue').textContent = elementTitle;
  continueElement.querySelector('#text-continue').textContent = elementText;
  cardContainer.append(continueElement);
};//Данная функция добавляет карточки с кнопкой ,,продолжить,,

function enrollAddCard (elementLink, elementTitle, elementText) {
  const enrollElement = enrollTemplate.querySelector('#card-enrollContent').cloneNode(true);
  enrollElement.querySelector('#image-enroll').src = elementLink;
  enrollElement.querySelector('#image-enroll').alt = elementTitle;
  enrollElement.querySelector('#title-enroll').textContent = elementTitle;
  enrollElement.querySelector('#text-enroll').textContent = elementText;
  cardContainer.append(enrollElement);
};//Данная функция добавляет карточки с кнопкой ,,записаться,,

function doneAddCard (elementLink, elementTitle, elementText) {
  const doneElement = doneTemplate.querySelector('#card-doneContent').cloneNode(true);
  doneElement.querySelector('#image-done').src = elementLink;
  doneElement.querySelector('#image-done').alt = elementTitle;
  doneElement.querySelector('#title-done').textContent = elementTitle;
  doneElement.querySelector('#text-done').textContent = elementText;
  cardContainer.append(doneElement);
};//Данная функция добавляет карточки с кнопкой ,,пройдено,,

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------добавление дефолтных карточек на страницу-------------------------------------------------------------------*/


const userLeverCheckboxPro = document.querySelector('#tag-pro');
const userLeverCheckboxMedium = document.querySelector('#tag-medium');
const userLeverCheckboxNewbie = document.querySelector('#tag-newbie');
const tagContainer = document.querySelector('.filter__tags-container');


function addTag(item) {
  const tagTemplate = document.querySelector('#tag-template').content;
  const tagElement = tagTemplate.querySelector('#tag-content').cloneNode(true);
  const tagDeleteBtn = tagElement.querySelector('#delete_button');
  const tagTitle = tagElement.querySelector('#tag-title');

  tagTitle.textContent = item

  tagDeleteBtn.addEventListener('click', function() {
    tagElement.remove()
  });

return tagElement
}

userLeverCheckboxPro.addEventListener('change', function(){
  if(userLeverCheckboxPro.checked) {
    console.log('You are pro!')
    tagContainer.append(addTag('Профессионал'))
  } else {
    console.log('Unchecked')
  }
})

userLeverCheckboxMedium.addEventListener('change', function(){
  if(userLeverCheckboxMedium.checked) {
    console.log('You are medium')
    tagContainer.append(addTag('Бывалый'))
  } else {
    console.log('Unchecked')
  }
})
 
userLeverCheckboxNewbie.addEventListener('change', function(){
  if(userLeverCheckboxNewbie.checked) {
    console.log('Noob')
    tagContainer.append(addTag('Новичок'))
  } else {
    console.log('Unchecked')
  }
})
 
