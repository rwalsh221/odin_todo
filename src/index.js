import "./scss/main.scss";

import collapseTodo from './js/todo_card';
import renderTodoCard from './js/render';
console.log('hello there')

renderTodoCard();

document.getElementById('section-todo').addEventListener('click', collapseTodo)