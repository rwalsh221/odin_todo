import {todoArr} from './data'
import {renderFooter} from './render'
import {getProject} from './utilities'
const arrayMove = require('array-move');

// *********************************NEED TO GET PROJECTS FROM TODO ARRAY USING UTILTY FUNCTION************************************
// let projectArray = getProject(todoArr)
// console.log(projectArray = '')
// change to positon of deafult d it is allways first look at w3scholls array method.


let currentPage = 1
const elPerPage = 4

const prevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

const nextPage = () => {
    if (currentPage < numPages()) {
        currentPage++;
        changePage(currentPage);
    }
}

const changePage = (page) => {
    
    let projectArray = getProject(todoArr)
    if (projectArray.length >= 1) projectArray.push('ALL PROJECTS')
    console.log(projectArray)
    let defaultIndex = projectArray.indexOf('DEFAULT')
    let allProjectsIndex = projectArray.indexOf('ALL PROJECTS')
    console.log(defaultIndex)
    projectArray = arrayMove(projectArray, defaultIndex, 0)
    projectArray = arrayMove(projectArray, allProjectsIndex, 0)



    console.log(projectArray)
    const btnNext = document.getElementById('icon-advance')
    const btnPrev = document.getElementById('icon-return')
    let elementArray = []
    // splice todo array using page number and elements per page
    // send new spliced array to footer render
    // remove footerRender form main render function
    // call changePage on page load

    // Validate page
    if (page < 1) page = 1;
    
    if (page != 1 && page > numPages()) page = numPages();

    if (projectArray.length > elPerPage) {
        let startSlice = (page - 1) * elPerPage
        let endSlice = page * elPerPage
        elementArray = projectArray.slice(startSlice, endSlice)
        renderFooter(elementArray)
    } else {
        elementArray = projectArray.slice(0, 4);
        renderFooter(elementArray)
    }
    
    if (page === 1) {
        console.log('hidden')
        btnPrev.style.visibility = "hidden";
    } else {
        console.log('nothiddne')
        btnPrev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btnNext.style.visibility = "hidden";
    } else if (projectArray.length > 4) {
        btnNext.style.visibility = "visible";
    }

}

const numPages = () => {
    return Math.ceil(todoArr.length / elPerPage);
}

export { changePage, prevPage, nextPage }