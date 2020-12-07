import {idIndex, removeChild} from './utilities';
import { cardIdFactory } from './factory';
import {todoArr, setLocalStorage} from './data'
import {render} from './render';

const completeTodo = (e) => {
    const element = cardIdFactory(e);
  
    let completeId

    if (element.eventClass.includes('btn__complete')) {
        completeId = idIndex(todoArr, element.cardId)
        todoArr[completeId].complete = true
    }

    removeChild('section-todo');
    setLocalStorage();
    render();
}

export { completeTodo }