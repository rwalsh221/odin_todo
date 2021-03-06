import compareAsc  from 'date-fns/compareAsc'
import format from 'date-fns/format'
import { sortArray, parseNumArr, newDate, getProject, removeChild } from './utilities.js'
import isFuture from 'date-fns/isFuture'
import {todoArr} from './data'
import {changePage} from './pagination'
import {cardIdFactory} from './factory'
import { checkComplete, checkOverdue } from './todo_card.js'


const renderTodoCard = (element) => { 
    // 1, HTML SKELETON FOR TODO CARD
    const todoHTML = ` <div class="todo-card fade-in" id="todo-card-$${element.id}">
                            <div class="todo-card__front" id="todo-card__front-$${element.id}">
                                <h3 class="heading-tertiary todo-card__front--heading">${element.title}</h3>
                                <h4 class="todo-card__front--description heading-quaternary">${element.description}</h4>
                                <p class="todo-card__front--due-date">Due: <span class="todo-card__front--date-content">${element.dueDate}</span></p>
                                <button id="btn__front-$${element.id}" class="btn todo-card__front--btn"><p class="btn__label lg-default" id="btn__label-$${element.id}">ToDo</p></button>
                            </div>
                            <div class="todo-card__back" id="todo-card__back-$${element.id}">
                                <button type="button" class="btn btn__delete btn--small" id="btn__delete-$${element.id}">delete</button>
                                <button type="button" class="btn btn__complete btn--small" id="btn__complete-$${element.id}">complete</button>
                                <div class="break"></div>
                                <h4 class="todo-card__back--note-heading heading-quaternary">Notes</h4>
                                <p class="todo-card__back--notes" id="notes-$${element.id}">${element.notes}</p>
                                <h4 class="todo-card__back--checklist-heading heading-quaternary">Checklist</h4>
                                <ul class="todo-card__back--checklist" id="checklist-$${element.id}"></ul>
                                <button id="btn__back-$1111" class="btn todo-card__back--btn">todo</button>
                            </div>
                        </div>`
    
    // 2, RENDER TODO CARD CHECKLIST
    let checklistHtml = renderChecklist(element)

    // 3, INSERT HTML FOR TODO CARD
    document.getElementById('section-todo').insertAdjacentHTML("beforeend", todoHTML);
    
    // 4, INSERT HTML FOR CHECKLIST IF CHECKLISTHTML IS NOT UNDEFINED
    if (checklistHtml) {document.getElementById(`checklist-$${element.id}`).insertAdjacentHTML("beforeend", checklistHtml);}
    
    // 5, CHECK IF TODO IS COMPLETE
    checkComplete(element)
    
    // 6, CHECK IF TODO IS OVERDUE
    checkOverdue(element)
}

const renderChecklist = (element) => {
    let checklistHtml
    if(element.checklist.length > 0) {

        let htmlArray = []
        // push checklist steps into html array from todo object
        for (let i = 0; i < element.checklist.length; i++) {
            htmlArray.splice(1, 0, `<li class="todo-card__checklist--item">${element.checklist[i].step}</li>`)
        }
        // convert htmlArray to string
        checklistHtml = htmlArray.join('')
        
    }
    return checklistHtml
}

// render changes to todo form if a new project is added
const renderTodoForm = () => {
    let htmlArray = ['<p>Please select your project:</p>', `<input type="radio" id="todo-form__default" name="project" value="Default" checked>`, '<label for="todo-form__default">DEFAULT</label>']

    let projectArr = getProject(todoArr)
    for( let i = 0; i < projectArr.length; i++) {
        console.log('=====================')
        console.log(projectArr[i])
        if (projectArr[i] !== 'DEFAULT'){
        htmlArray.splice(3, 0, `<input type="radio" id="todo-form__${projectArr[i]}" name="project" value="${projectArr[i]}">`, `<label for="todo-form__${projectArr[i]}">${projectArr[i]}</label><br></br>`) }
    }

    let formHtml = htmlArray.join('');
    document.getElementById('form__radio').insertAdjacentHTML("beforeend", formHtml);
}

const renderFooter = (arr) => {
    // 1 Set Variables
    let projectArr = arr.reverse();
    console.log('renderfooter')
    console.log(arr)
    let headingContent;
    const projectDOM = document.getElementById('project-container')
    
    // create new elements inside for loop otherwise same element will be append over and over.
    for (let i = 0; i < projectArr.length; i++) {
        // 2 Create elements
        let projectDiv = document.createElement('div')
        let headingContent = document.createTextNode(`${projectArr[i]}`);
        let projectHeading = document.createElement('h5')
        // 3 add classlist to new elements
        projectDiv.classList.add('project-container__card')
        projectHeading.classList.add('heading-quinary')
        projectHeading.classList.add('project-container__card--heading')
         // 4 Insert new html into dom
        projectHeading.appendChild(headingContent);
        projectHeading.setAttribute('id', `footer-card__heading-$${projectArr[i].toLowerCase()}`)
        projectDiv.appendChild(projectHeading);
        projectDOM.insertBefore(projectDiv, projectDOM.childNodes[0])
    }
}

const renderSidebar = () => {
    // NEED TO REMOVE TODO THAT ARE COMPLETE foreach push if complete === fales
    const DOMSidebar = document.getElementById('sidebar-bottom')
    let sidebarArr = todoArr
    let sidebarTitleHtml = `<h4 class="heading-quaternary heading-sidebar">Due Soon</h4>`
    
    const render = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            console.log('render sidebar')
            let sidebarHtml = ` <div id="sidebar-card-$${arr[i].id}" class="sidebar-card">
                                <h4 class="heading-quaternary sidebar-card__heading" id="sidebar-card__heading-$${arr[i].id}">${arr[i].title}</h4>
                                <h4 class="heading-quaternary sidebar-card__date" id="sidebar-card__date-$${arr[i].id}">${arr[i].dueDate}</h4>
                            </div>`
            DOMSidebar.insertAdjacentHTML('beforeend', sidebarHtml);
        }
    
        DOMSidebar.insertAdjacentHTML("afterbegin", sidebarTitleHtml)
    }
    
    if (sidebarArr.length > 4) {
        
        render(sidebarArr.slice(0, 4));
    } else {
        render(sidebarArr)
    }
}

const renderProjectTodoCard = (project) => {
    console.log(project + 'dhksfjhdsjkhsjkdfhjkshfkjdhs')
    if (project === 'ALL PROJECTS') {
        console.log('all projects if')
        console.log(render)
        removeChild('section-todo');
        console.log('removed')
        console.log(todoArr)
        render();
        return
    }

    let projectArr = [];
    todoArr.forEach((element, index) => {
        console.log(typeof(project))
        console.log(typeof(element.project))
        if (element.project === project) {
            console.log(true)
            projectArr.push(element)
        }
        
        removeChild('section-todo');
    
        for (let i = 0; i < projectArr.length; i++) {
            renderTodoCard(projectArr[i])
        }
    });
}

const renderDueSoonTodocard = (event) => {
    
    const eventId = event.target.id
    console.log(eventId)
    const splitEventId = eventId.split('$')
    
    todoArr.forEach((element) => {
        if (element.id === splitEventId[1]) {
            removeChild('section-todo')
            renderTodoCard(element)
        }
    })
}

const render = () => {
    // sorts array by date and then priority to display on ui
    
    console.log(todoArr)
    if (todoArr.length >= 1) {
        sortArray(todoArr);
    }
    
    
    console.log('renderrrrrrrrrrrr')
    console.log(sortArray(todoArr))
    console.log('afetrsort')
    // removeChild('section-todo')
    // removeChild('form__radio')

    for (let i = 0; i < todoArr.length; i++) {
        renderTodoCard(todoArr[i])
    }
    // todoArr.forEach(renderTodoCard);
    removeChild('form__radio')
    renderTodoForm();
    removeChild('project-container')
    // renderFooter();
    changePage(1)
    removeChild('sidebar-bottom')
    renderSidebar()
    // console.log(todoObjectArr)
}

export { render, renderFooter, renderProjectTodoCard, renderDueSoonTodocard };