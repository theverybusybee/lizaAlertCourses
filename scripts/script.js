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

const infoCardTemplate = document.querySelector('#tamplate-card').content;
const cardContainer = document.querySelector('.cards__container');

let levels = [];
let statuses = [];

info.forEach(element => {
  cardAdd(element.imageLink, element.title, element.text, element.level, element.status)
});

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
};

/**
 * 
 * @param {*} elementLink 
 * @param {*} elementTitle 
 * @param {*} elementText 
 * @param {*} elementLevel 
 * @param {*} elementButton 
 */

/*--------------------- Добавление и удаление тегов под блоком фильтр ----------------------*/

const tagContainer = document.querySelector('.filter-tags');
const tagTemplate = document.querySelector('#tag-template').content;
const uncheckButton  = document.querySelector('.filters__delete-button');

function addTag(arrayFirst, arraySecond) {
  const newArray = [...arrayFirst, ...arraySecond];
  tagContainer.innerHTML = '';
  newArray.forEach((el) => {
    const tagElement = tagTemplate.querySelector('#tag-content').cloneNode(true);
    const tagDeleteBtn = tagElement.querySelector('#delete_button');
    const tagTitle = tagElement.querySelector('#tag-title');
    if(el.toString() === 'Продолжить') {
      tagTitle.textContent = 'Вы записаны';
    } 
    else if(el.toString() === 'Записаться') {
      tagTitle.textContent = 'Активный';
    }
    else {
      tagTitle.textContent = el.toString();
    }
    tagContainer.append(tagElement);
    });
  return tagContainer;
};

/*----------------- удаление контейнера с тегами по клику на 'очистить' ------------------ */

function uncheck() {
  tagContainer.querySelectorAll('#tag-content').forEach((tag) => {
    tag.remove();
  });
  uncheckButton.classList.remove('filters__delete-button_visible');
  makeCheckboxActiveAgain(checkboxActive);
  makeCheckboxActiveAgain(checkboxNotActive);
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
    console.log(tagContainer)
    test();
  });
});

function test() {
  const tagElement = tagContainer.querySelector('.cards__user-level-bg');
  console.log(tagElement)
  const tagDeleteBtn = tagElement.querySelector('.filter-tags__delete-button');
  console.log(tagDeleteBtn)
  const inputs = document.getElementsByTagName('input');
  console.log(inputs)

  tagDeleteBtn.addEventListener('click', (evt) => {

    Array.from(inputs).forEach((el) => {
      if((el.type === 'checkbox')&&(el.checked === true)&&(el.dataset.title === evt.target.previousElementSibling.textContent)) {
        el.checked = false;
        console.log('*********************')
        console.log(el.type)
        console.log(el.checked)
        console.log(el.dataset.title)
        console.log(evt.target.previousElementSibling.textContent)
      }
      else {
        console.log('----------------------')
        console.log(el.type)
        console.log(el.checked)
        console.log(el.dataset.title)
        console.log(evt.target.previousElementSibling.textContent)
      }
    });
    tagElement.remove();
  });
}

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
      test();
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
      test();
    };
  });
});

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
};

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