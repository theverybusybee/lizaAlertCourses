const infoDone = [
  {
    imageLink: './images/cards/laptop.png',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    level: 'Новичок'
  },
  {
    imageLink: './images/cards/orange-jacket.png',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…',
    level: 'Новичок'
  }
];//Массив объектов для пройденных карточек

const infoContinue = [
  {
    imageLink: './images/cards/german-shepherd.png',
    title: 'Кинологическое направление',
    text: ' Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    level: 'Бывалый'
  }
];//Массив объектов для карточек с ,,продолжить,,

const infoEnroll = [
  {
    imageLink: './images/cards/radio-set.png',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...',
    level: 'Профессионал'
  },

  {
    imageLink: './images/cards/quadrocopter.png',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    level: 'Бывалый'
  },

  {
    imageLink: './images/cards/first-aid-kid.png',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    level: 'Бывалый'
  },
  {
    imageLink: './images/cards/woman-in-a-striped-blouse.png',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    level: 'Новичок'
  },
  {
    imageLink: './images/cards/woman-in-a-blazer.png',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    level: 'Новичок'
  }
];//Массив объектов для карточек с ,,записаться,,

const enrollTemplate = document.querySelector('#card-enroll').content;
const continueTemplate = document.querySelector('#card-continue').content;
const doneTemplate = document.querySelector('#card-done').content;
const cardContainer = document.querySelector('.cards__container');

infoContinue.forEach((element) => {
  continueAddCard(element.imageLink, element.title, element.text, element.level)
});//Добавляет на страницу карточки с кнопкой ,,продолжить,, используя метод forEach

infoEnroll.forEach((el) => {
  enrollAddCard(el.imageLink, el.title, el.text, el.level)
});//Добавляет на страницу карточки с кнопкой ,,записаться,, используя метод forEach

infoDone.forEach((elements) => {
  doneAddCard(elements.imageLink, elements.title, elements.text, elements.level);
});//Добавляет на страницу карточки с кнопкой ,,пройдено,, используя метод forEach

function continueAddCard(elementLink, elementTitle, elementText, elementLevel) {
  const continueElement = continueTemplate.querySelector('#card-continueContent').cloneNode(true);
  continueElement.querySelector('#image-continue').src = elementLink;
  continueElement.querySelector('#image-continue').alt = elementTitle;
  continueElement.querySelector('#title-continue').textContent = elementTitle;
  continueElement.querySelector('#text-continue').textContent = elementText;
  continueElement.querySelector('#medium').textContent = elementLevel;
  cardContainer.append(continueElement);
};//Данная функция добавляет карточки с кнопкой ,,продолжить,,

function enrollAddCard (elementLink, elementTitle, elementText, elementLevel) {
  const enrollElement = enrollTemplate.querySelector('#card-enrollContent').cloneNode(true);
  enrollElement.querySelector('#image-enroll').src = elementLink;
  enrollElement.querySelector('#image-enroll').alt = elementTitle;
  enrollElement.querySelector('#title-enroll').textContent = elementTitle;
  enrollElement.querySelector('#text-enroll').textContent = elementText;
  enrollElement.querySelector('#beginner').textContent = elementLevel;
  cardContainer.append(enrollElement);
};//Данная функция добавляет карточки с кнопкой ,,записаться,,

function doneAddCard (elementLink, elementTitle, elementText, elementLevel) {
  const doneElement = doneTemplate.querySelector('#card-doneContent').cloneNode(true);
  doneElement.querySelector('#image-done').src = elementLink;
  doneElement.querySelector('#image-done').alt = elementTitle;
  doneElement.querySelector('#title-done').textContent = elementTitle;
  doneElement.querySelector('#text-done').textContent = elementText;
  doneElement.querySelector('#advanced').textContent = elementLevel;
  cardContainer.append(doneElement);
};//Данная функция добавляет карточки с кнопкой ,,пройдено,,

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------добавление дефолтных карточек на страницу-------------------------------------------------------------------*/

const filterCheckboxButtons = document.querySelectorAll('.filters__box_level');
const filterCard = document.querySelectorAll('.cards__item');

filterCheckboxButtons.forEach((target) => {
  target.addEventListener('change', (evt) => {
    
  })
})
  
  



