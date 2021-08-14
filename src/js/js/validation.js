import { addStep, submitForm, closeForm } from './todo_form';
import { removeChild } from './utilities';

// DOM STRINGS
const domStrings = {
  todoTitle: document.getElementById('todo-form__title'),
  tododescription: document.getElementById('todo-form__description'),
  todoDueDate: document.getElementById('todo-form__due-date'),
  todoNotes: document.getElementById('todo-form__notes'),
  todoChecklist: document.getElementById('todo-form__checklist'),
  todoNewProject: document.getElementById('todo-form__new--text'),
  todoNewProjectInput: document.getElementById('todo-form__new--text'),
  validationWarning: document.getElementById('validation-warning'),
  validationWarningContent: document.getElementById(
    'validation-warning__content',
  ),
};

const validateAlert = (inputWarning) => {
  // style.display sets inline style not style in css file
  if (
    domStrings.validationWarning.style.display === 'none' ||
    domStrings.validationWarning.style.display === ''
  ) {
    domStrings.validationWarning.style.display = 'block';
    domStrings.validationWarningContent.textContent = `Please input a ${inputWarning} for the todo`;
    setTimeout(() => {
      domStrings.validationWarning.style.display = 'none';
    }, 3000);
  }
};

const validateContent = (element, defaultContent) => {
  const el = element;
  el.value = `This ToDo does not have any additional ${defaultContent}`;
};

const clearForm = () => {
  // submitForm(event);
  closeForm();

  Object.entries(domStrings).forEach(([key, value]) => {
    const formValue = value;
    formValue.value = '';
  });

  removeChild('checklist');
};

const validateForm = (event) => {
  // const validateAlert = (inputWarning) => {
  //     alert(`Please input a ${inputWarning} for the todo`)
  // }

  if (domStrings.todoTitle.value === '') {
    validateAlert('title');
  } else if (domStrings.tododescription.value === '') {
    validateAlert('description');
  } else if (domStrings.todoDueDate.value === '') {
    validateAlert('duedate');
  } else if (
    domStrings.todoNotes.value === '' &&
    domStrings.todoChecklist.value === ''
  ) {
    validateContent(domStrings.todoNotes, 'notes');
    addStep(true);
    submitForm();
    clearForm();
  } else if (domStrings.todoNotes.value === '') {
    validateContent(domStrings.todoNotes, 'notes');
    submitForm();
    clearForm();
  } else if (domStrings.todoChecklist.value === '') {
    addStep(true);
    submitForm();
    clearForm();
  } else {
    submitForm(event);
    clearForm();
  }
};

export default validateForm;
