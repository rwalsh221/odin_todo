import format from 'date-fns/format'


const sortArray = (arr) => {
     
    // 1, Sort array by date
     arr.sort(function (a,b) {
        var c = new Date(a.dueDate); // converts dueDate into js date so can be sorted
        var d = new Date(b.dueDate);
    return c-d;
    });
    
    // 2, Sort array by priority
    arr.sort(function (a,b) { 
        return b.priority-a.priority});
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
export { sortArray, parseNumArr, newDate, removeChild }