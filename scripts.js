function decisionSelector(){
  decision = Math.floor(Math.random() * 2);
  if(decision == 0){
    page = "yes.html";
  }else{
    page = "no.html"
  }
  window.open(page)
}