import { nanoid } from 'nanoid';
import { newDate } from './utilities';

const todoFactory = (
  title,
  description,
  dateDue,
  priority,
  notes,
  checklistElement,
  project,
) => {
  // generates id for html class/id
  const id = nanoid();
  // takes date input as string from form '2018-07-22'
  const dateArr = dateDue.split('-');
  const dueDate = newDate(
    parseInt(dateArr[0], 10),
    parseInt(dateArr[1] - 1, 10),
    parseInt(dateArr[2], 10),
  );
  const JSDate = dateDue; // need jsdate to sort todoArr by date for ui. takes date format from input form. dueDate is incorrect format

  const complete = false;
  const checklist = [];
  if (checklistElement.hasChildNodes()) {
    checklistElement.childNodes.forEach(function (value) {
      checklist.push({ step: value.textContent, complete: false });
    });
  }

  const completeDate = () => {
    const d = new Date();
    return newDate(d.getFullYear(), d.getMonth(), d.getDate());
  };

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    complete,
    completeDate,
    project,
    JSDate,
  };
};

const cardIdFactory = (event) => {
  const eventId = event.target.parentNode.id;
  const eventClass = event.target.className;

  const splitEventId = eventId.split('$');

  const cardId = splitEventId[1];

  return { cardId, eventClass, eventId };
};

export { cardIdFactory, todoFactory };
