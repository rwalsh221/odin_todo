import "./scss/main.scss";

import collapseTodo from './js/todo_card';
import renderTodoCard from './js/render';
import { submitForm } from './js/todo_form';
import { removeChild } from './js/utilities';
import {removeTodo} from './js/delete';
console.log('hello there');

renderTodoCard();

const sectionTodo = document.getElementById('section-todo')

sectionTodo.addEventListener('click', collapseTodo);
sectionTodo.addEventListener('click', removeTodo)

document.getElementById('todo-form').addEventListener('click', function(e) {
    if (e.target.id === 'form-submit') {
        console.log(e)
    submitForm(e);
    removeChild('section-todo')
    renderTodoCard();
    }
    
})
// document.getElementById('todo-form').addEventListener('click', function() {
//     console.log(new Event(Event))
// })