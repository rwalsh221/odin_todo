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

export { sortArray }