import {todoFactory} from './factory'
import {newDate, removeChild} from './utilities'
import {todoArr, setLocalStorage} from './data'
import {render} from './render';


// let todoArr = [{id: '1111', title: 'test', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
// {id: '1112', title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
//     {id: '1113', title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},]
// let todoArr = []

const submitForm = (event) => {
    let title, description, dueDate, priority, notes, checkList, project, JSDate
    
    const radioChild = document.getElementById('form__radio')
    const newProject = document.getElementById('todo-form__new')
    
    title = document.getElementById('todo-form__title').value;
    description = document.getElementById('todo-form__description').value;
    dueDate = document.getElementById('todo-form__due-date').value;
    priority = 4;
    notes = document.getElementById('todo-form__notes').value;
    checkList = document.getElementById('checklist');
    
    
    if (newProject.checked === true) {
        project = document.getElementById('todo-form__new--text').value.toUpperCase()
    } else if (radioChild.hasChildNodes()){
        console.log(radioChild.childNodes)
        radioChild.childNodes.forEach( function(element) {
            if (element.type === 'radio' && element.checked === true) {
                            project = document.getElementById(element.id).value.toUpperCase()
                        } 
        })
    }

    // if (radioChild.hasChildNodes()){
    //     console.log(radioChild.childNodes)
    //     radioChild.childNodes.forEach( function(element) {
    //         if (element.type === 'radio' && element.id === 'todo-form__new' && element.checked === true) {
    //             project = document.getElementById('todo-form__new--text').value
    //         } else if (element.type === 'radio' && element.checked === true) {
    //             project = document.getElementById(element.id).value
    //         } 
    //     })}


    todoArr.push(todoFactory(title, description, dueDate, priority, notes, checkList, project))
    removeChild('section-todo')
    
    setLocalStorage()
    render();
}

const addStep = (validate) => {

    let newStep = document.getElementById('todo-form__checklist').value;
    const element = document.getElementById('checklist')

    const newP = document.createElement('p');
    
    if (validate === true) {
        console.log(validate)
        newStep = 'This ToDo does not contain any additional steps'
    }

    const newContent = document.createTextNode(newStep);
    console.log(newStep)
    newP.appendChild(newContent);

    element.insertAdjacentElement("beforeend", newP)

    console.log(element.childNodes[0].value)
}

const closeForm = () => {
    const formOpen = document.getElementById('form-toggle')

    if (formOpen.checked = true) {
        formOpen.checked = false
    }
}

export { todoArr, submitForm, addStep, closeForm }