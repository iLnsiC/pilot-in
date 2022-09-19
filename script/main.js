var btn = document.getElementsByClassName("button-transp");
var drop = document.getElementsByClassName("dropdown-products");
var body = document.getElementsByClassName("hero");
var i, j;
function dropdown() {

  var id = this.id;
  console.log(id);
  if(id === 'products'){
    drop[0].classList.toggle('show')
  }else{
    drop[1].classList.toggle('show')
  }
}
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", dropdown);
}
function takeoffDropdown() {
  for (j = 0; j < btn.length; j++) {
    if(drop[j].classList[1] === 'show'){
      drop[j].classList.remove('show');
    }
  }
}
window.addEventListener('load', takeoffDropdown);
window.addEventListener('resize', takeoffDropdown);
window.addEventListener('scroll', takeoffDropdown);
body[0].addEventListener("click", takeoffDropdown);
