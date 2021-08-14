import { todoFactory } from './factory';
import { removeChild } from './utilities';
import { todoArr, setLocalStorage } from './data';
import { render } from './render';

// let todoArr = [{id: '1111', title: 'test', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
// {id: '1112', title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
//     {id: '1113', title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},]
// let todoArr = []

const submitForm = () => {
  const radioChild = document.getElementById('form__radio');
  const newProject = document.getElementById('todo-form__new');

  const title = document.getElementById('todo-form__title').value;
  const description = document.getElementById('todo-form__description').value;
  const dueDate = document.getElementById('todo-form__due-date').value;
  const priority = 4;
  const notes = document.getElementById('todo-form__notes').value;
  const checkList = document.getElementById('checklist');
  let project;

  if (newProject.checked === true) {
    project = document
      .getElementById('todo-form__new--text')
      .value.toUpperCase();
  } else if (radioChild.hasChildNodes()) {
    radioChild.childNodes.forEach(function (element) {
      if (element.type === 'radio' && element.checked === true) {
        project = document.getElementById(element.id).value.toUpperCase();
      }
    });
  }

  todoArr.push(
    todoFactory(
      title,
      description,
      dueDate,
      priority,
      notes,
      checkList,
      project,
    ),
  );
  removeChild('section-todo');

  setLocalStorage();
  render();
};

const addStep = (validate) => {
  let newStep = document.getElementById('todo-form__checklist').value;
  const element = document.getElementById('checklist');

  const newP = document.createElement('p');

  if (validate === true) {
    newStep = 'This ToDo does not contain any additional steps';
  }

  const newContent = document.createTextNode(newStep);

  newP.appendChild(newContent);

  element.insertAdjacentElement('beforeend', newP);
};

const closeForm = () => {
  const formOpen = document.getElementById('form-toggle');

  if ((formOpen.checked = true)) {
    formOpen.checked = false;
  }
};

export { todoArr, submitForm, addStep, closeForm };
