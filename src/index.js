import "./scss/main.scss";
console.log('hello there')

var test = document.getElementsByClassName('btn__collapse');

console.log(test)

for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function() {
    //   this.classList.toggle("active");
      var content = document.querySelector('.todo-card__notes');
      var content2 = document.querySelector('.todo-card__checklist');
      var content3 = document.querySelector('.btn__collapse');

      if (content.style.display === "block" && content2.style.display === "block") {
        content.style.display = "none";
        content2.style.display = "none";

    
      } else {
        content.style.display = "block";
        content2.style.display = "block";
        content3.style.order = "3"
    
      }
    });
  }