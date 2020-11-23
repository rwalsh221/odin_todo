import compareAsc  from 'date-fns/compareAsc'
import format from 'date-fns/format'
// import newDate from './date'
import { sortArray, parseNumArr, newDate } from './utilities.js'
import isFuture from 'date-fns/isFuture'
import {todoArr} from './todo_form'

const todoObjectArr = [
    {id: 1111, title: 'first Todo', description: 'this is the first todo', dueDate: newDate(2019, 11, 2), priority: 4, notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt', complete: true, completeDate: newDate(2019, 11, 8)},
    {id: 1112, title: 'second Todo', description: 'this is the second todo', dueDate: newDate(2020, 11, 8), priority: 5, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!',  complete: false},
    {id: 1113, title: 'third Todo', description: 'this is the third todo', dueDate: newDate(2020, 11, 1), priority: 4, notes: 'inventore exercitationem ipsam tenetur veniam natus repellat nemo cupiditate!' , complete: false},

 ];

// const generateTodoCardHtml = (value, index) => {

//     const todoHTML = `<div class="todo-card" id="todo-card-$${todoObjectArr[index].id}">
//                         <h3 class="heading-tertiary todo-card__heading">${todoObjectArr[index].title}</h3>
//                         <h4 class="todo-card__description heading-description">${todoObjectArr[index].description}</h4>
//                         <p class="todo-card__due-date">Due: <span class="todo-card__date-content">${todoObjectArr[index].dueDate}</span></p>
//                         <button type="button" class="btn btn__collapse" id="btn__collapse-$${todoObjectArr[index].id}">tO.dO</button>
//                         <p class="todo-card__notes" id="notes-$${todoObjectArr[index].id}">${todoObjectArr[index].notes}</p>
//                         <ul class="todo-card__checklist" id="checklist-$${todoObjectArr[index].id}">
//                             <li class="todo-card__checklist--item">Lorem ipsum dolor sit.</li>
//                             <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
//                             <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
//                             <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
//                             <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
//                         </ul>
//                     </div>`

//     const overdueHtml = `<div class="overdue"><h5 class="heading-overdue">ToDo Overdue</h5></div>`

//     const completeHtml = `<div class="complete"><h5 class="heading-complete">ToDo Complete</h5></div>`

//     document.getElementById('section-todo').insertAdjacentHTML("beforeend", todoHTML);

//     // const dateArr = todoObjectArr[index].dueDate.split('/')
//     // const parsedDate =[]

//     // for(let i = 0; i < dateArr.length; i++) {
//     //     parsedDate.push(parseInt(dateArr[i]));
//     //     console.log(parsedDate)
//     // }

//     const dateArr = todoObjectArr[index].dueDate.split('/')

//     const overdue = parseNumArr(dateArr);

//     if(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])) === false && todoObjectArr[index].complete === false) {
//         document.getElementById(`todo-card-$${todoObjectArr[index].id}`).insertAdjacentHTML('afterbegin', overdueHtml);
//     }

//     if(todoObjectArr[index].complete === true) {
//         document.getElementById(`todo-card-$${todoObjectArr[index].id}`).insertAdjacentHTML('afterbegin', completeHtml);
//     }
//     // console.log(dateArr)
//     // console.log(overdue);
//     // console.log(todoObjectArr[index].dueDate)
//     // console.log(parsedDate[2] - 1)
//     // console.log(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])))
// }

const generateTodoCardHtml = (value, index) => {

    const todoHTML = `<div class="todo-card" id="todo-card-$${todoArr[index].id}">
                        <h3 class="heading-tertiary todo-card__heading">${todoArr[index].title}</h3>
                        <h4 class="todo-card__description heading-description">${todoArr[index].description}</h4>
                        <p class="todo-card__due-date">Due: <span class="todo-card__date-content">${todoArr[index].dueDate}</span></p>
                        <button type="button" class="btn btn__collapse" id="btn__collapse-$${todoArr[index].id}">tO.dO</button>
                        <button type="button" class="btn btn__delete" id="btn__delete-$${todoArr[index].id}">delete</button>
                        <button type="button" class="btn btn__complete" id="btn__complete-$${todoArr[index].id}">complete</button>
                        <p class="todo-card__notes" id="notes-$${todoArr[index].id}">${todoArr[index].notes}</p>
                        <ul class="todo-card__checklist" id="checklist-$${todoArr[index].id}">
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                            <li class="todo-card__checklist--item">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>`

    const overdueHtml = `<div class="overdue"><h5 class="heading-overdue">ToDo Overdue</h5></div>`

    const completeHtml = `<div class="complete"><h5 class="heading-complete">ToDo Complete</h5></div>`

    document.getElementById('section-todo').insertAdjacentHTML("beforeend", todoHTML);

    // const dateArr = todoObjectArr[index].dueDate.split('/')
    // const parsedDate =[]

    // for(let i = 0; i < dateArr.length; i++) {
    //     parsedDate.push(parseInt(dateArr[i]));
    //     console.log(parsedDate)
    // }

    const dateArr = todoArr[index].dueDate.split('/')

    const overdue = parseNumArr(dateArr);

    if(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])) === false && todoArr[index].complete === false) {
        document.getElementById(`todo-card-$${todoArr[index].id}`).insertAdjacentHTML('afterbegin', overdueHtml);
    }

    if(todoArr[index].complete === true) {
        document.getElementById(`todo-card-$${todoArr[index].id}`).insertAdjacentHTML('afterbegin', completeHtml);
    }
    // console.log(dateArr)
    // console.log(overdue);
    // console.log(todoObjectArr[index].dueDate)
    // console.log(parsedDate[2] - 1)
    // console.log(isFuture(new Date(overdue[2], overdue[1] - 1, overdue[0])))
    console.log('todoarr position***************************')
    console.log(todoArr[0])


}





const renderTodoCard = () => {
    // change to for loop not foreach
    sortArray(todoArr);
    todoArr.forEach(generateTodoCardHtml)
    // console.log(todoObjectArr)
}

export default renderTodoCard;