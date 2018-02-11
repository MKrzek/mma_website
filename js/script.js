document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".fa-bars");
  const navig = document.querySelector(".navigation");
  const ul = document.querySelector(".navigation>ul");
  const li = ul.querySelectorAll("li");
  const a = ul.querySelectorAll("li>a");
  const arrowUp = document.querySelectorAll(".fa-arrow-up");
  console.log(arrowUp)
  const arrowDown = document.querySelectorAll(".fa-arrow-down");
  console.log(arrowDown)
  const employeeInfo = document.querySelectorAll('.employeeDescription')

  

  bar.addEventListener("click", () => {
    if (window.innerWidth < "640") {
      if (navig.className === "col-8 navigation") {
        console.log("przycisk dziala");
        console.log(navig.className);
        navig.className = "visible";
        for (let i = 0; i < a.length; i++) {
          a[i].style.textDecoration = "none";
          a[i].style.color = "black";
          li[i].style.paddingBottom = "4vh";
          li[i].style.paddingLeft = "2vw";
        }
      } else {
        navig.className = "col-8 navigation";
        console.log("basic setting");
        console.log(navig.className);
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.outerWidth > 640) {
      navig.className = "col-8 navigation";
    }
  });

for (let i=0; i<arrowDown.length; i++){
    arrowDown[i].addEventListener('click', showMoreInfo)
}
function showMoreInfo(){
  console.log('click works')
  console.log (this.nextElementSibling.className)
  if (this.nextElementSibling.className === "hidden employeeDescription") {
    console.log("this", this);
    this.nextElementSibling.className ="employeeDescription"
  }

}


});
