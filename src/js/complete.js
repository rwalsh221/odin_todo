import {idIndex, removeChild} from './utilities';
import { cardIdFactory } from './factory';
import {todoArr} from './todo_form'
import renderTodoCard from './render';

const completeTodo = (e) => {
    const element = cardIdFactory(e);
  
    let completeId

    if (element.eventClass.includes('btn__complete')) {
        completeId = idIndex(todoArr, element.cardId)
        todoArr[completeId].complete = true
    }

    removeChild('section-todo');
    renderTodoCard();
}

export { completeTodo }