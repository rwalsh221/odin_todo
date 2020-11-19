import "./scss/main.scss";

import collapseTodo from './js/todo_card';
import renderTodoCard from './js/render';
import {submitForm} from './js/todo_form'
console.log('hello there')

renderTodoCard();

document.getElementById('section-todo').addEventListener('click', collapseTodo)
document.getElementById('todo-form').addEventListener('click', function() {
    if (event.target.id === 'form-submit') {

    submitForm(event);
    renderTodoCard();
    }
    
})
// document.getElementById('todo-form').addEventListener('click', function() {
//     console.log(new Event(Event))
// })