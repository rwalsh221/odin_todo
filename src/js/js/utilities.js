import format from 'date-fns/format';

const sortArray = (arr) => {
  // 1, Sort array by date
  arr.sort(function (a, b) {
    const c = new Date(a.JSDate); // converts dueDate into js date so can be sorted
    const d = new Date(b.JSDate);
    return c - d;
  });

  // 2, Sort array by priority
  arr.sort(function (a, b) {
    return b.priority - a.priority;
  });

  return arr;
};

const parseNumArr = (arr) => {
  const parsedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    parsedArr.push(parseInt(arr[i], 10));
  }
  return parsedArr;
};

const newDate = (y, m, d) => format(new Date(y, m, d), 'dd/MM/yyyy');

const removeChild = (element) => {
  const selector = document.querySelector(`.${element}`);

  if (selector.hasChildNodes) {
    while (selector.firstChild) {
      selector.removeChild(selector.lastChild);
    }
  }
};

const idIndex = (arr, elementId) => {
  const idArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    idArr.push(arr[i].id);
  }

  const elementIdIndex = idArr.indexOf(elementId);

  return elementIdIndex;
};

const getProject = (arr) => {
  const projectArr = [];

  arr.forEach((element, index) => {
    if (projectArr.indexOf(arr[index].project) === -1) {
      projectArr.push(element.project);
    }
  });

  return projectArr;
};
export { sortArray, parseNumArr, newDate, removeChild, idIndex, getProject };
