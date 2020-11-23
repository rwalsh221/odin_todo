import {idIndex, removeChild} from './utilities';
import { cardIdFactory } from './factory';
import {todoArr} from './todo_form'
import renderTodoCard from './render';

const removeTodo = (e) => {
    const element = cardIdFactory(e);
  
    let removeId

    if (element.eventClass.includes('btn__delete')) {
        removeId = idIndex(todoArr, element.cardId)
        todoArr.splice(removeId, 1)
    }

    removeChild('section-todo');
    renderTodoCard();
}

export { removeTodo };