// JavaScript for Womens Web 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log("I am active")
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log("I am hidden")
    } else {
      content.style.display = "block";
      console.log("I am displayed")
    }
  });
}





// document.querySelector("collapsible").addEventListener("DOMContentLoaded",function() {
//   console.log("I am collapsible")
//   var myCollapse = document.getElementsByClassName("collapsible");
//   myCollapse.addEventListener("hidden.bs.collapse", function(){
//     console.log("I am collapsed")
//   })
// });
