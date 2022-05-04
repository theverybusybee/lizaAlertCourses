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

/*--------------------------------------------------------------------------------------------------*/
/*--------------------------- добавление дефолтных карточек на страницу ----------------------------*/

const infoCardTemplate = document.querySelector('#tamplate-card').content;//выбор tamplate элемента для карточки
const cardContainer = document.querySelector('.cards__container');//выбор контейнера карточки

let levels = [];//массив, который заполняется по мере нажатия на checkbox категории levels
let statuses = [];//массив, который заполняется по мере нажатия на checkbox категории status

info.forEach(element => {
  cardAdd(element.imageLink, element.title, element.text, element.level, element.status)
});//добавление дефолный карточек на страницу

function cardAdd(elementLink, elementTitle, elementText, elementLevel, elementStatus) {
  const element = infoCardTemplate.querySelector('.cards__item').cloneNode(true);
  element.querySelector('#image-card').src = elementLink;
  element.querySelector('#image-card').alt = elementTitle;
  element.querySelector('.cards__title').textContent = elementTitle;
  element.querySelector('.cards__description').textContent = elementText;
  element.querySelector('.cards__user-level').textContent = elementLevel;
  element.querySelector('.cards__button').textContent = elementStatus;

  switch (elementStatus) {
    case 'Пройден': element.querySelector('.cards__button').classList.add('cards__button_disabled');
      break;
    case 'Продолжить': element.querySelector('.cards__button').classList.add('cards__button_active');
      break;
  }// в зависимости от статуса карточки, кнопка меняет свое состояние и значение
  switch(elementLevel) {
    case 'Новичок': element.classList.add('cards__user-level_beginner');
      break;
    case 'Бывалый': element.classList.add('cards__user-level_middle');
      break;
    case 'Профессионал': element.classList.add('cards__user-level_advansed');
      break;
  }//в зависимости от ,,уровня,, карточки, ей добавляется дополнительный класс для навигации
  cardContainer.append(element);
};//данная функция добавляет карточки на страницу, считывая значения с массива объектов JSON, берет на вход ссылку на картинку, название карточки, текст карточки, категорию 'уровень' карточки и статус карточки


/*--------------------- Добавление и удаление тегов под блоком фильтр ----------------------*/

const tagContainer = document.querySelector('.filter-tags');
const tagTemplate = document.querySelector('#tag-template').content;
const uncheckButton  = document.querySelector('.filters__delete-button');

function addTag(array1, array2) {
  const newArray = [...array1, ...array2];
  tagContainer.innerHTML = '';
  newArray.forEach((el) => {
    const tagElement = tagTemplate.querySelector('#tag-content').cloneNode(true);
    const tagDeleteBtn = tagElement.querySelector('#delete_button');
    const tagTitle = tagElement.querySelector('#tag-title');
    tagTitle.textContent = el.toString();
    tagContainer.append(tagElement);

    tagDeleteBtn.addEventListener('click', function() {
      tagElement.remove();
    });
  });
  return tagContainer;
};
/*----------------- удаление контейнера с тегами по клику на 'очистить' ------------------ */


function uncheck() {
  tagContainer.querySelectorAll('#tag-content').forEach((tag) => {
    tag.remove();
  });
  uncheckButton.classList.remove('filters__delete-button_visible');
};

/* ---------------------------------- очистка чек-боксов ---------------------------------- */

function uncheckCheckboxes() {
  const input = document.getElementsByTagName('input');
  Array.from(input).forEach((el) => {
    if(el.type === 'checkbox')
     el.checked = false;
  });
};

/*----------------------------------- очистка массива -----------------------------------*/

uncheckButton.addEventListener('click', () => {
    uncheckCheckboxes();
    uncheck();
    levels.clear();
    statuses.clear();
    cardContainer.innerHTML = '';
    info.forEach(element => {
      cardAdd(element.imageLink, element.title, element.text, element.level, element.status)
    });
  });

/*----------------------------------- добавляем теги -----------------------------------*/

const checkboxButtonsLevel = document.querySelectorAll('.filters__box_level');
const checkboxButtonsStatus = document.querySelectorAll('.filters__box_status')
const filterCard = document.querySelectorAll('.cards__item');
const checkboxActive = document.querySelector('#checkbox-active');
const checkboxNotActive = document.querySelector('#checkbox-not-active');
const filtersCheckboxName = document.querySelector('.filters__checkbox-name')

checkboxButtonsLevel.forEach((target) => {
  target.addEventListener('change', (evt) => {
    if(target.checked) {
      levels = Array.from(levels);
      filter(target, levels, info);
      levels = new Set(levels);
      addTag(levels, statuses);
      uncheckButton.classList.add('filters__delete-button_visible');
    } 
    else {
      levels = new Set(levels);
      filter(target, levels, info);
      addTag(levels, statuses);
    }; 
  });
});//обработчик события для checkbox категории ,,levels,, считывает состояние чекбоксов и в зависимости от этого добавляет тег и фильтрует контент на странице

/*----------------------------- создаем неактивный чек-бокс -----------------------------*/
function makeCheckboxDisabled(checkbox) {
  checkbox.disabled = true;
  checkbox.nextElementSibling.classList.add('filters__checkbox-image_color_gray');
  checkbox.nextElementSibling.nextElementSibling.classList.add('filters__checkbox-name_color_gray');
}

/*----------------------------- возвращаем активный чек-бокс -----------------------------*/
function makeCheckboxActiveAgain(checkbox) {
  checkbox.disabled = false;
  checkbox.nextElementSibling.classList.remove('filters__checkbox-image_color_gray');
  checkbox.nextElementSibling.nextElementSibling.classList.remove('filters__checkbox-name_color_gray');
}

checkboxButtonsStatus.forEach((target) => {
  target.addEventListener('change', (evt) => {
    if(target.checked) {
      if (target.dataset.name === 'Не активный') {
        makeCheckboxDisabled(checkboxActive);
      }
      if (target.dataset.name === 'Записаться') {
        makeCheckboxDisabled(checkboxNotActive);
      }
      statuses = Array.from(statuses);
      filter(target, statuses, info);
      statuses = new Set(statuses);
      uncheckButton.classList.add('filters__delete-button_visible'); 
      addTag(levels, statuses);
    } 
    else {
      if (target.dataset.name === 'Не активный') {
        makeCheckboxActiveAgain(checkboxActive);
      }
      if (target.dataset.name === 'Записаться') {
        makeCheckboxActiveAgain(checkboxNotActive);
      }
      statuses = new Set(statuses);
      filter(target, statuses, info);
      tagContainer.querySelector('#tag-content').remove(target.dataset.filter);
      addTag(levels, statuses);
    };
  });
});//обработчик события для checkbox категории ,,status,, считывает состояние чекбоксов и в зависимости от этого добавляет тег и фильтрует контент на странице

function filter (checkbox, array, inp) {
  cardContainer.innerHTML = '';
  if (checkbox.checked) {
    array.push(checkbox.dataset.name);
    inp.filter(item => (array.length === 0) || (array.includes(item.level) && !array.includes(item.status)) || (!array.includes(item.level) && array.includes(item.status)) || (array.includes(item.level) && array.includes(item.status))).forEach((element) => {
      cardAdd(element.imageLink, element.title, element.text, element.level, element.status); 
    });   
  };
  if(!checkbox.checked) {
    array.delete(checkbox.dataset.name);
    array = Array.from(array);
    inp.filter(item => (array.length === 0) || (array.includes(item.level) && !array.includes(item.status)) || (!array.includes(item.level) && array.includes(item.status)) || (array.includes(item.level) && array.includes(item.status))).forEach((element) => {
      cardAdd(element.imageLink, element.title, element.text, element.level, element.status); 
    }); 
  }; 
};//данная функция при каждом вызове очищает элементы на странице и добавляет новые карточки в зависимости от состояния чекбоксов

/*--------------------------------------- аккордеон ---------------------------------------*/
  
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.filters__block');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.filters__open-button');
      const content = self.querySelector('.filters__options');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});