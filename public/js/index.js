let item = document.querySelector(".items")
let regtDiv = document.querySelector(".mainDiv")
let loginDiv = document.querySelector(".loginMain")
let regtInput = document.querySelector(".inputs")
let regtSubmint = document.querySelector("button")

// addEventListener 
item.addEventListener("click", start);
regtInput.addEventListener("click",getVal);
regtSubmint.addEventListener("click",regter);


// Functions
function start(e){
let a = e.target
 if (a.textContent=== "LOGIN") {
    loginDiv.style.display="flex"
    regtDiv.style.display="none"
 }
 if( a.textContent==="REGISTER"){
    loginDiv.style.display="none"
    regtDiv.style.display="flex"
 }

 if(a.textContent==="HOME"){
    console.log("Home");
 }
}
 
function getVal(e) {
   let a = e.target
   console.log(a.value);
}
function regter(e) {
   console.log("oku");
}