import {idIndex, removeChild} from './utilities';
import { cardIdFactory } from './factory';
import {todoArr, setLocalStorage} from './data'
import {render} from './render';

const removeTodo = (e) => {
    const element = cardIdFactory(e);
  
    let removeId

    if (element.eventClass.includes('btn__delete')) {
        removeId = idIndex(todoArr, element.cardId)
        todoArr.splice(removeId, 1)
    }

    removeChild('section-todo');
    setLocalStorage();
    render();
}

export { removeTodo };