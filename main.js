// function no.1: add a todo
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const editBtn = document.querySelector('.item__edit');
const deleteBtn = document.querySelector('.item__delete');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const itemRow = createItem(text);
  items.appendChild(itemRow);
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('class', 'item__checkbox');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'item__edit');
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      name.classList.add('checked');
    } else {
      name.classList.remove('checked');
    }
  });

  editBtn.addEventListener('click', () => {
    const name = itemRow.querySelector('.item__name');
    const edit = document.createElement('input');
    edit.setAttribute('type', 'text');
    edit.setAttribute('value', name.innerText);
    edit.setAttribute('class', 'edit__input');

    itemRow.querySelector('.item').replaceChild(edit, name);

    edit.focus();
    edit.setSelectionRange(edit.value.length, edit.value.length);

    edit.addEventListener('keypress', (event) => {
      if (text === '') {
        input.focus();
        return;
      }
      if (event.key === 'Enter') {
        name.innerText = edit.value;
        itemRow.querySelector('.item').replaceChild(name, edit);
        edit.remove();
      }
    });
  });

  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  item.appendChild(checkBox);
  item.appendChild(name);
  item.appendChild(editBtn);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
