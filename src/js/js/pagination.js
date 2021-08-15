import { arrayMoveImmutable } from 'array-move';
import { todoArr } from './data';
import { getProject } from './utilities';

// const arrayMove = require('array-move');

// *********************************NEED TO GET PROJECTS FROM TODO ARRAY USING UTILTY FUNCTION************************************
// let projectArray = getProject(todoArr)
// console.log(projectArray = '')
// change to positon of deafult d it is allways first look at w3scholls array method.

const arrayMove = arrayMoveImmutable;

let currentPage = 1;
const elPerPage = 4;

const resetFooterPage = () => {
  changePage(1);
};

const prevPage = () => {
  if (currentPage > 1) {
    currentPage -= 1;
    changePage(currentPage);
  }
};

const nextPage = (arr) => {
  if (currentPage < numPages(arr)) {
    currentPage += 1;
    changePage(currentPage);
  }
};

// GET ALL PROJECTS FROM TODO ARRAY
const getProjectArray = () => {
  let projectArray = getProject(todoArr);

  if (projectArray.length >= 1) projectArray.push('ALL PROJECTS');

  const defaultIndex = projectArray.indexOf('DEFAULT');
  const allProjectsIndex = projectArray.indexOf('ALL PROJECTS');

  projectArray = arrayMove(projectArray, defaultIndex, 0);
  projectArray = arrayMove(projectArray, allProjectsIndex, 0);

  return projectArray;
};

const changePage = () => {
  let page = currentPage;
  const projectArray = getProjectArray();

  const btnNext = document.getElementById('icon-advance');
  const btnPrev = document.getElementById('icon-return');
  let elementArray = [];
  // splice todo array using page number and elements per page
  // send new spliced array to footer render
  // remove footerRender form main render function
  // call changePage on page load

  // Validate page
  if (page < 1) page = 1;

  if (page !== 1 && page > numPages(projectArray)) {
    page = numPages(projectArray);
  }

  if (projectArray.length > elPerPage) {
    const startSlice = (page - 1) * elPerPage;
    const endSlice = page * elPerPage;
    elementArray = projectArray.slice(startSlice, endSlice);
  } else {
    elementArray = projectArray.slice(0, 4);
  }

  if (page === 1) {
    btnPrev.style.visibility = 'hidden';
  } else {
    btnPrev.style.visibility = 'visible';
  }

  if (page === numPages(projectArray)) {
    btnNext.style.visibility = 'hidden';
  } else if (projectArray.length > 4) {
    btnNext.style.visibility = 'visible';
  }

  return elementArray;
};

const numPages = (arr) => Math.ceil(arr.length / elPerPage);

export { changePage, prevPage, nextPage, resetFooterPage, getProjectArray };
