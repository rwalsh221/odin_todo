import { add } from 'date-fns';
import { addStep, submitForm} from './todo_form';
import { closeForm } from './todo_form'
import {removeChild} from './utilities'

const validateForm = (event) => {
    // DOM STRINGS

    let domStrings = {
        todoTitle: document.getElementById('todo-form__title'),
        tododescription: document.getElementById('todo-form__description'),
        todoDueDate: document.getElementById('todo-form__due-date'),
        todoNotes: document.getElementById('todo-form__notes'),
        todoChecklist: document.getElementById('todo-form__checklist'),
        todoNewProject: document.getElementById('todo-form__new--text'),
        todoNewProjectInput: document.getElementById('todo-form__new--text'),
        validationWarning : document.getElementById('validation-warning'),
        validationWarningContent : document.getElementById('validation-warning__content'),

    }

    // const validateAlert = (inputWarning) => {
    //     alert(`Please input a ${inputWarning} for the todo`)
    // }

    const validateAlert = (inputWarning) => {
        // style.display sets inline style not style in css file
        if (domStrings.validationWarning.style.display === 'none' || domStrings.validationWarning.style.display === '') {
            console.log('validatewarning if' )
            domStrings.validationWarning.style.display = 'block'
            domStrings.validationWarningContent.textContent = `Please input a ${inputWarning} for the todo`
            setTimeout(() => {
                domStrings.validationWarning.style.display = 'none'
            }, 3000);
        }
    }

    const validateContent = (element, defaultContent) => {
        element.value = `This ToDo does not have any additional ${defaultContent}`
    }

    const clearForm = (domStrings) => {
        submitForm(event)
        closeForm()
        
        Object.entries(domStrings).forEach(
            ([key, value]) => value.value = ''
        );
        
        removeChild('checklist')
        
    }

    if (domStrings.todoTitle.value === '') {
        validateAlert('title')
    } else if (domStrings.tododescription.value === '') {
        validateAlert('description')
    } else if (domStrings.todoDueDate.value === '') {
        validateAlert('duedate');
    } else if (domStrings.todoNotes.value === '' && domStrings.todoChecklist.value === '') {
        validateContent(domStrings.todoNotes, 'notes')
        addStep(true)
        clearForm(domStrings)
    } else if (domStrings.todoNotes.value === '') {
        validateContent(domStrings.todoNotes, 'notes');
        clearForm(domStrings)
    } else if (domStrings.todoChecklist.value === '') {
        addStep(true)
        clearForm(domStrings)
    } else {
        submitForm(event)
        clearForm(domStrings)
}
    }

    

export default validateForm;