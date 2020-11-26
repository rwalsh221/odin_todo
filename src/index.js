import "./scss/main.scss";

import collapseTodo from './js/todo_card';
import renderTodoCard from './js/render';
import { submitForm, addStep } from './js/todo_form';
import {removeTodo} from './js/delete';
import {completeTodo} from './js/complete'
console.log('hello there');

renderTodoCard();

const sectionTodo = document.getElementById('section-todo')
const todoForm = document.getElementById('todo-form')

sectionTodo.addEventListener('click', function(e) {
    if (e.target.className === 'btn btn__collapse') {collapseTodo(e)}
});
sectionTodo.addEventListener('click', function(e) {
    if (e.target.className === 'btn btn__delete') {removeTodo(e)}
})
sectionTodo.addEventListener('click', function(e) {
    if (e.target.className === 'btn btn__complete') {completeTodo(e)}
})

todoForm.addEventListener('click', function(e) {
    if (e.target.id === 'form-submit') {submitForm(e)};
})

todoForm.addEventListener('click', function(e) {
    if (e.target.id === 'checklist-btn') {addStep()};
})
