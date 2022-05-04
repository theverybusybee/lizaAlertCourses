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
});


    tagDeleteBtn.addEventListener('click', (evt) => {
      const input = document.getElementsByTagName('input');
      Array.from(input).forEach((el) => {
        if((el.type === 'checkbox')&&(el.checked = true)&&(el.dataset.title === evt.target.previouselementsibling.textContent)) {
          el.checked = false;
        };
      });
      tagElement.remove();
    });