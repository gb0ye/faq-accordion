let arrow = document.querySelectorAll(".arrow");
let ans = document.querySelectorAll(".ans");
let questions = document.querySelectorAll(".question");
let beans = 1;

for( i=0; i < arrow.length; i++){
        arrow[i].addEventListener("click", ansHeight);
}




function ansHeight(){
  const isOpen = this.classList.contains("arrow-up"); // Check if the arrow clicked is already open
  if (isOpen) {
      // If the arrow clicked is already open, set beans to an even number to allow for closing
      beans = 2;
  } else {
      // If the arrow clicked is closed, reset beans to an odd number to allow for opening
      beans = 1;
  }
    checker();
    this.classList.add("arrow-up");
    for(i = 0; i < arrow.length; i++){
        if(arrow[i].classList.contains("arrow-up")){
            questions[i].classList.add("question-clicked")
            ans[i].classList.add("ans-clicked");
        }
    } 
    if(beans % 2 == 0 && this.classList.contains("arrow-up")){
      checker();
    }
    beans +=1
}

function checker(){
    for(i = 0; i < arrow.length; i++){
        arrow[i].classList.remove("arrow-up");
        questions[i].classList.remove("question-clicked");
        ans[i].classList.remove("ans-clicked");
    }
}



     
