let todoArr = [];

const setLocalStorage = () => {
  localStorage.setItem('todoProjects', JSON.stringify(todoArr));
};

const retrieveLocalStorage = () => {
  const retrieveData = localStorage.getItem('todoProjects');
  if (retrieveData !== null) {
    todoArr = JSON.parse(retrieveData);
  }
};

export { todoArr, setLocalStorage, retrieveLocalStorage };
