// TODO: FIX DUPLICATE BUG WHEN ADD NOTE TEST AGAIN

import '../scss/main.scss';

import { rotateTodo } from './js/todo_card';
import {
  render,
  renderProjectTodoCard,
  renderDueSoonTodocard,
} from './js/render';
import { addStep } from './js/todo_form';
import removeTodo from './js/delete';
import completeTodo from './js/complete';
import { nextPage, prevPage } from './js/pagination';
import { removeChild } from './js/utilities';
import validateForm from './js/validation';
import { retrieveLocalStorage } from './js/data';

retrieveLocalStorage();
render();

const sectionTodo = document.getElementById('section-todo');
const sectionFooter = document.getElementById('footer-content');
const sectionSidebar = document.getElementById('sidebar-bottom');
const todoForm = document.getElementById('todo-form');
const nextPageBtn = document.getElementById('icon-advance');
const prevPageBtn = document.getElementById('icon-return');

sectionTodo.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn__label')) {
    rotateTodo(e);
  }
  if (e.target.className === 'btn todo-card__back--btn') {
    rotateTodo(e);
  }
});
sectionTodo.addEventListener('click', function (e) {
  if (e.target.className === 'btn btn__delete btn--small') {
    removeTodo(e);
  }
});
sectionTodo.addEventListener('click', function (e) {
  if (e.target.className === 'btn btn__complete btn--small') {
    completeTodo(e);
  }
});

sectionFooter.addEventListener('click', function (e) {
  if (
    e.target.className === 'project-container__card' ||
    e.target.className === 'heading-quinary project-container__card--heading'
  ) {
    renderProjectTodoCard(e.target.textContent);
  }
});

sectionSidebar.addEventListener('click', function (e) {
  if (e.target.className === 'sidebar-card') {
    renderDueSoonTodocard(e);
  }
  if (e.target.className === 'sidebar-card') {
    console.log(e);
  }
});

todoForm.addEventListener('click', function (e) {
  if (e.target.id === 'form-submit') {
    validateForm(e);
  }
});

todoForm.addEventListener('click', function (e) {
  if (e.target.id === 'checklist-btn') {
    addStep();
  }
});

nextPageBtn.addEventListener('click', function () {
  removeChild('project-container');
  nextPage();
});
prevPageBtn.addEventListener('click', function () {
  removeChild('project-container');
  prevPage();
});
