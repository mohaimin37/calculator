const input = document.querySelector(".input")
const btn = document.querySelectorAll(".btn");
let string = ""
btn.forEach((elem)=>{
elem.addEventListener('click',(e)=>{
if(e.target.innerHTML== "="){
    string = eval(string)
    input.value = string
}
else if(e.target.innerHTML=="ac"){
    string =""
    input.value = string
}
else if(e.target.innerHTML =="dlt"){
    string =string.toString().substring(0,string.length-1)
    input.value = string
}
else{
    string = string+e.target.innerHTML
    input.value = string
}

  
})
})
