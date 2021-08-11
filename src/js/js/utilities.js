import format from 'date-fns/format'
import compareDesc from 'date-fns/compareDesc'
import { compareAsc } from 'date-fns'

const sortArray = (arr) => {
    // 1, Sort array by date
     arr.sort(function (a,b) {
        console.log(new Date(a.JSDate));
        console.log(new Date(b.dueDate))
        var c = new Date(a.JSDate); // converts dueDate into js date so can be sorted
        var d = new Date(b.JSDate);
    return c-d;
    });
    
    console.log(arr)
    // 2, Sort array by priority
    arr.sort(function (a,b) { 
        return b.priority-a.priority
    });

        console.log(arr)
    
    return arr
 }

const parseNumArr = (arr) => {
    
    
    const parsedArr =[]

    for(let i = 0; i < arr.length; i++) {
        parsedArr.push(parseInt(arr[i]));
    }
    return parsedArr;
}

const newDate = (y, m, d) => {
    return format(new Date(y, m, d), 'dd/MM/yyyy')
    
}

const removeChild = (element) => {
    const selector = document.querySelector(`.${element}`)

    if (selector.hasChildNodes) {
        while(selector.firstChild) {
            selector.removeChild(selector.lastChild);
        }
    }
}

const idIndex = (arr, elementId) => {

   

    let idArr = []

    for (let i = 0; i < arr.length; i++) {
    
        
        idArr.push(arr[i].id)
    };

    let idIndex = idArr.indexOf(elementId)
    
    return idIndex;
}

const newId = () => {
    
}

const getProject = (arr) => {
    let projectArr = []

    arr.forEach((element, index) => {
        if (projectArr.indexOf(arr[index].project) === -1) {
            projectArr.push(element.project);
        }
    });

    return projectArr;
}
export { sortArray, parseNumArr, newDate, removeChild, idIndex, getProject }