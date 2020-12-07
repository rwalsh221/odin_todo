import { cardIdFactory, todoFactory } from './factory';
import {parseNumArr} from './utilities'
import isFuture from 'date-fns/isFuture'



const collapseTodo = (event) => {
    const newCardId = cardIdFactory(event)
    console.log('collapse-todo ------------------------------------------')
    console.log(newCardId)
    if (newCardId.eventClass.includes('btn__collapse')) {
      const todoNotes = document.getElementById(`notes-$${newCardId.cardId}`);
      const todoChecklist = document.getElementById(`checklist-$${newCardId.cardId}`);
      const todoBTN = document.getElementById(`btn__collapse-$${newCardId.cardId}`)
      const todoCard = document.getElementById(newCardId.eventId);

      if (todoNotes.style.display === 'block' && todoChecklist.style.display === 'block') {
        todoNotes.style.display = 'none'
        todoChecklist.style.display = 'none'
        todoCard.style.height = '50.7rem'
        todoBTN.style.order = '4'
    
      } else {
        todoNotes.style.display = 'block'
        todoChecklist.style.display = 'block'
        todoCard.style.height = '80.7rem'
        todoBTN.style.order = '99'
      }
    }
    
  }

  const rotateTodo = (event) => {
    console.log(event)
    const newCardId = cardIdFactory(event)
    console.log(newCardId)
    const todoFront = document.getElementById(`todo-card__front-$${newCardId.cardId}`)
    const todoBack = document.getElementById(`todo-card__back-$${newCardId.cardId}`)
    const todoNotes = document.getElementById(`notes-$${newCardId.cardId}`)
    const todoCheck = document.getElementById(`checklist-$${newCardId.cardId}`)

    console.log('press rotate')
    // console.log(todoFront.style.display)

    if (todoFront.style.transform === 'rotateY(180deg)') {
      todoFront.style.transform = 'rotateY(0deg)'
      todoBack.style.transform = 'rotateY(180deg)'
      todoNotes.style.overflowY = 'hidden'
      todoCheck.style.overflowY = 'hidden'

      console.log('if')
    } else {
      
      todoFront.style.transform = 'rotateY(180deg)'
      todoBack.style.transform = 'rotateY(0deg)'
      todoNotes.style.overflowY = 'scroll'
      todoCheck.style.overflowY = 'scroll'

      console.log('else')
      console.log(todoFront.style.transform)

    }
  }

  const checkComplete = (element) => {
    if(element.complete === true) {
      document.getElementById(`btn__label-$${element.id}`).textContent = 'Complete'
      document.getElementById(`btn__label-$${element.id}`).classList.remove('lg-default')
      document.getElementById(`btn__label-$${element.id}`).classList.add('lg-complete')
}
  }

  const checkOverdue = (element) => {
    
    const dateArr = element.dueDate.split('/')

    const overdue = parseNumArr(dateArr);

    
    if(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])) === false && element.complete === false) {
      // document.getElementById(`todo-card-$${element.id}`).insertAdjacentHTML('afterbegin', overdueHtml);
      document.getElementById(`btn__label-$${element.id}`).textContent = 'OverDue'
      document.getElementById(`btn__label-$${element.id}`).classList.remove('lg-default')
      document.getElementById(`btn__label-$${element.id}`).classList.add('lg-overdue')
  }
  }
  

  export { rotateTodo, collapseTodo, checkComplete, checkOverdue };