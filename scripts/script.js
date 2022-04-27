const info = [
  {
    imageLink: './images/cards/german-shepherd.png',
    title: 'Кинологическое направление',
    text: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    level: 'Бывалый',
    status: 'Продолжить'
  },
  {
    imageLink: './images/cards/radio-set.png',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...',
    level: 'Профессионал',
    status: 'Записаться'
  },
  {
    imageLink: './images/cards/quadrocopter.png',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    level: 'Бывалый',
    status: 'Записаться'
  },
  {
    imageLink: './images/cards/first-aid-kid.png',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    level: 'Бывалый',
    status: 'Записаться'
  },
  {
    imageLink: './images/cards/laptop.png',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    level: 'Новичок',
    status: 'Пройден'
  },
  {
    imageLink: './images/cards/woman-in-a-striped-blouse.png',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    level: 'Новичок',
    status: 'Записаться'
  },
  {
    imageLink: './images/cards/woman-in-a-blazer.png',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    level: 'Новичок',
    status: 'Записаться'
  },
  {
    imageLink: './images/cards/orange-jacket.png',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…',
    level: 'Новичок',
    status: 'Пройден'
  }
];

const infoCardTemplate = document.querySelector('#tamplate-card').content;
const cardContainer = document.querySelector('.cards__container');

info.forEach((element) => {
  cardAdd(element.imageLink, element.title, element.text, element.level, element.status);
});//Добавляет на страницу карточки с кнопкой ,,продолжить,, используя метод forEach

function cardAdd(elementLink, elementTitle, elementText, elementLevel, elementStatus) {
  const element = infoCardTemplate.querySelector('.cards__item').cloneNode(true);
  element.querySelector('#image-card').src = elementLink;
  element.querySelector('#image-card').alt = elementTitle;
  element.querySelector('.cards__title').textContent = elementTitle;
  element.querySelector('.cards__description').textContent = elementText;
  element.querySelector('.cards__user-level').textContent = elementLevel;
  element.querySelector('.cards__button').textContent = elementStatus;
  
  switch(elementStatus) {
    case 'Пройден': element.querySelector('.cards__button').classList.add('cards__button_disabled');
    break;
    case 'Продолжить': element.querySelector('.cards__button').classList.add('cards__button_active');
    break;
  }
  switch(elementLevel) {
    case 'Новичок': element.classList.add('cards__user-level_beginner');
    break;
    case 'Бывалый': element.classList.add('cards__user-level_middle');
    break;
    case 'Профессионал': element.classList.add('cards__user-level_advansed');
    break;
  }
  cardContainer.append(element);
};//Данная функция добавляет карточки с кнопкой ,,продолжить,,

/*--------------------------------------------------------------------------------------------------*/
/*--------------------------- добавление дефолтных карточек на страницу ----------------------------*/

/**
 * 
 * @param {*} elementLink 
 * @param {*} elementTitle 
 * @param {*} elementText 
 * @param {*} elementLevel 
 * @param {*} elementButton 
 */

/* Добавление тегов под блоком фильтр */
const userLeverCheckboxPro = document.querySelector('#tag-pro');
const userLeverCheckboxMedium = document.querySelector('#tag-medium');
const userLeverCheckboxNewbie = document.querySelector('#tag-newbie');
const tagContainer = document.querySelector('.filter__tags-container');
const tagTemplate = document.querySelector('#tag-template').content;

function addTag(item) {
  const tagElement = tagTemplate.querySelector('#tag-content').cloneNode(true);
  const tagDeleteBtn = tagElement.querySelector('#delete_button');
  const tagTitle = tagElement.querySelector('#tag-title');

  tagTitle.textContent = item;

  tagDeleteBtn.addEventListener('click', function() {
    tagElement.remove()
  });

return tagElement
}

/* Очистить чекбоксы */
function uncheck() {
 tagContainer.querySelectorAll('#tag-content').forEach((tag) => {
   tag.remove();
 })
 const uncheck = document.getElementsByTagName('input');
 for(let i = 0; i < uncheck.length; i++)
 {
  if(uncheck[i].type == 'checkbox')
  {
   uncheck[i].checked = false;
  }
 }
}

// Добавляем тег
const filterCheckboxButtons = document.querySelectorAll('.filters__box_level');
const filterCard = document.querySelectorAll('.cards__item');


  
 
    filterCard.forEach((items) => {
      items.classList.add('cards__item_hidden');
    });
  

 
 
  


filterCheckboxButtons.forEach((target) => {
  target.addEventListener('change', (evt) => {
    const categoryFilter = target.dataset.filter;
    if(target.checked) {
      filter(categoryFilter, filterCard);
      tagContainer.append(addTag(target.dataset.name))
    } else {
      filterCard.forEach((item) => {
      if (item.classList.contains(categoryFilter)){
        item.classList.add('cards__item_hidden')
      }
      })
      tagContainer.querySelector('#tag-content').remove();
    }
  })
})



function filter (category, item) {
  item.forEach(el => {
    const filterItem = el.classList.contains(category);
    if (filterItem) {
      el.classList.remove('cards__item_hidden');
    } 
  })
}

