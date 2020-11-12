import compareAsc  from 'date-fns/compareAsc'
import format from 'date-fns/format'
import newDate from './date'
import { sortArray } from './utilities.js'

const todoObjectArr = [
    {id: 1111, title: 'first Todo', description: 'this is the first todo', dueDate: newDate(2020, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt'},
    {id: 1112, title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!'},
    {id: 1113, title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!'},

 ];

const generateTodoCardHtml = (value, index) => {

    const todoHTML = `<div class="todo-card" id="todo-card-$${todoObjectArr[index].id}">
                        <h3 class="heading-tertiary todo-card__heading">${todoObjectArr[index].title}</h3>
                        <h4 class="todo-card__description heading-description">${todoObjectArr[index].description}</h4>
                        <p class="todo-card__due-date">Due: <span class="todo-card__date-content">${todoObjectArr[index].dueDate}</span></p>
                        <button type="button" class="btn btn__collapse" id="btn__collapse-$${todoObjectArr[index].id}">tO.dO</button>
                        <p class="todo-card__notes" id="notes-$${todoObjectArr[index].id}">${todoObjectArr[index].notes}</p>
                        <ul class="todo-card__checklist" id="checklist-$${todoObjectArr[index].id}">
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>`

    const overdueHtml = `<div class="overdue"><h5 class="heading-overdue">ToDo Overdue</h5></div>`

    document.getElementById('section-todo').insertAdjacentHTML("beforeend", todoHTML);
    console.log(value)
}



const renderTodoCard = () => {
    // change to for loop not foreach
    sortArray(todoObjectArr);
    todoObjectArr.forEach(generateTodoCardHtml)
}

export default renderTodoCard;