import {newDate} from './utilities'
import { nanoid } from 'nanoid'
import { getMonth } from 'date-fns'

// const todoObjectArr = [
//   {id: 1111, title: 'first Todo', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
//   {id: 1112, title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
//   {id: 1113, title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},

// ];

//  2018-07-22

const todoFactory = (title, description, dateDue, priority, notes) => {
  
  // generates id form html class/id
  const id = nanoid()
  
  // takes date input as string from form '2018-07-22'
  const dateArr = dateDue.split('-')
  const dueDate = newDate(parseInt(dateArr[0]), parseInt(dateArr[1]), parseInt(dateArr[2]))
  
  
  let complete = false

  const completeDate = () => {
    
    let d = new Date()

    return newDate(d.getFullYear(), d.getMonth(), d.getDate())

    
  }
  return {id, title, description, dueDate, priority, notes, complete, completeDate}
}

const cardIdFactory = (event) => {
    
    // console.log(event.target.parentNode.id)
    // console.log(event.target.className)
    const eventId = event.target.parentNode.id
    const eventClass = event.target.className

    const splitEventId = eventId.split('$')
    // console.log(splitEventId)

    const cardId = parseInt(splitEventId[1]);
    // console.log(cardId)
    return {cardId, eventClass, eventId}
  }

  export { cardIdFactory, todoFactory };