// function no.1: add a todo
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
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
