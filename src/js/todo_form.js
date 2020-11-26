import {todoFactory} from './factory'
import {newDate, removeChild} from './utilities'

import renderTodoCard from './render';


// let todoArr = [{id: '1111', title: 'test', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
// {id: '1112', title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
//     {id: '1113', title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},]
let todoArr = []

const submitForm = (event) => {
    let title, description, dueDate, priority, notes
    const checkList = document.getElementById('checklist')
    
    title = document.getElementById('todo-form__title').value;
    description = document.getElementById('todo-form__description').value;
    dueDate = document.getElementById('todo-form__due-date').value;
    priority = 4;
    notes = document.getElementById('todo-form__notes').value;

    todoArr.push(todoFactory(title, description, dueDate, priority, notes, checkList))
    removeChild('section-todo')
    renderTodoCard();
}

const addStep = () => {
    const newStep = document.getElementById('todo-form__checklist').value;
    const element = document.getElementById('checklist')

    const newP = document.createElement('p');
    const newContent = document.createTextNode(newStep);
    newP.appendChild(newContent);

    element.insertAdjacentElement("beforeend", newP)

    console.log(element.childNodes[0].value)
}

export { todoArr, submitForm, addStep }