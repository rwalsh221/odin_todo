import { cardIdFactory, todoFactory } from './factory';



const collapseTodo = (event) => {
    const newCardId = cardIdFactory(event)
    console.log(event.target.id)
    console.log(newCardId)
    if (newCardId.eventClass.includes('btn__collapse')) {
      const todoNotes = document.getElementById(`notes-$${newCardId.cardId}`);
      const todoChecklist = document.getElementById(`checklist-$${newCardId.cardId}`);
      const todoBTN = document.getElementById(`btn__collapse-$${newCardId.cardId}`)
      const todoCard = document.getElementById(newCardId.eventId);

      if (todoNotes.style.display === 'block' && todoChecklist.style.display === 'block') {
        todoNotes.style.display = 'none'
        todoChecklist.style.display = 'none'
        todoCard.style.height = '34.7rem'
        todoBTN.style.order = '4'
    
      } else {
        todoNotes.style.display = 'block'
        todoChecklist.style.display = 'block'
        todoCard.style.height = '66.7rem'
        todoBTN.style.order = '99'
      }
    }
    
  }

  export default collapseTodo;