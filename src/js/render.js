import compareAsc  from 'date-fns/compareAsc'
import format from 'date-fns/format'
import { sortArray, parseNumArr, newDate, getProject, removeChild } from './utilities.js'
import isFuture from 'date-fns/isFuture'
import {todoArr} from './todo_form'

// const todoObjectArr = [
//     {id: 1111, title: 'first Todo', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
//     {id: 1112, title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
//     {id: 1113, title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},

//  ];
const generateTodoCardHtml = (value, index) => {

    const todoHTML = `<div class="todo-card" id="todo-card-$${todoArr[index].id}">
                        <h3 class="heading-tertiary todo-card__heading">${todoArr[index].title}</h3>
                        <h4 class="todo-card__description heading-description">${todoArr[index].description}</h4>
                        <p class="todo-card__due-date">Due: <span class="todo-card__date-content">${todoArr[index].dueDate}</span></p>
                        <button type="button" class="btn btn__collapse" id="btn__collapse-$${todoArr[index].id}">tO.dO</button>
                        <button type="button" class="btn btn__delete" id="btn__delete-$${todoArr[index].id}">delete</button>
                        <button type="button" class="btn btn__complete" id="btn__complete-$${todoArr[index].id}">complete</button>
                        <p class="todo-card__notes" id="notes-$${todoArr[index].id}">${todoArr[index].notes}</p>
                        
                    </div>`
    
    const overdueHtml = `<div class="overdue"><h5 class="heading-overdue">ToDo Overdue</h5></div>`

    const completeHtml = `<div class="complete"><h5 class="heading-complete">ToDo Complete</h5></div>`

    const dateArr = todoArr[index].dueDate.split('/')

    const overdue = parseNumArr(dateArr);

    if(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])) === false && todoArr[index].complete === false) {
        document.getElementById(`todo-card-$${todoArr[index].id}`).insertAdjacentHTML('afterbegin', overdueHtml);
    }

    if(todoArr[index].complete === true) {
        document.getElementById(`todo-card-$${todoArr[index].id}`).insertAdjacentHTML('afterbegin', completeHtml);
    }
    
    // creates li elements for checklist
    let checklistHtml
    if(todoArr[index].checklist.length > 0) {
        // array with ul skeleton
        let htmlArray = [`<ul class="todo-card__checklist" id="checklist-$${todoArr[index].id}">`, `</ul>`]
        // push checklist steps into html array from todo object
        for (let i = 0; i < todoArr[index].checklist.length; i++) {
            htmlArray.splice(1, 0, `<li class="todo-card__checklist--item">${todoArr[index].checklist[i].step}</li>`)
        }
        // convert htmlArray to string
        checklistHtml = htmlArray.join('')
        
    }
        // insert html for todo card 
        document.getElementById('section-todo').insertAdjacentHTML("beforeend", todoHTML);
        //insert html for checklist if checklistHtml is not undefined
        if (checklistHtml) {document.getElementById(`todo-card-$${todoArr[index].id}`).insertAdjacentHTML("beforeend", checklistHtml);}
        


    
    
    // console.log(dateArr)
    // console.log(overdue);
    // console.log(todoObjectArr[index].dueDate)
    // console.log(parsedDate[2] - 1)
    // console.log(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])))
    console.log('todoarr position***************************')
    console.log(todoArr[0])
    console.log(todoArr)
    console.log(document.querySelectorAll('.checklist').length)
}


// render changes to todo form if a new project is added
const renderTodoForm = () => {
    let htmlArray = ['<p>Please select your project:</p>', `<input type="radio" id="todo-form__default" name="project" value="default">`, '<label for="todo-form__default">Default</label><br></br>',
`<input type="radio" id="todo-form__new" name="project" value="new-project">`, `<label for="todo-form__new">New Project</label>`, `<input type="text" id="todo-form__new--text" name="project" value=""><br></br>`]

    let projectArr = getProject(todoArr)
    for( let i = 0; i < projectArr.length; i++) {
        htmlArray.splice(3, 0, `<input type="radio" id="todo-form__${projectArr[i]}" name="project" value="${projectArr[i]}">`, `<label for="todo-form__${projectArr[i]}">${projectArr[i]}</label><br></br>`) 
    }

    let formHtml = htmlArray.join('');
    document.getElementById('form__radio').insertAdjacentHTML("beforeend", formHtml);
}
const renderTodoCard = () => {
    // sorts array by date and then priority to display on ui
    sortArray(todoArr);
    // removeChild('section-todo')
    // removeChild('form__radio')

    todoArr.forEach(generateTodoCardHtml);
    removeChild('form__radio')
    renderTodoForm();
    // console.log(todoObjectArr)
}

export default renderTodoCard;