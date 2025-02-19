const input=document.getElementById("inputbox");
const list=document.getElementById("list");
 function add() {

    if(input.value==""){
        alert("PLS ENTER YOUT TEXT")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    arun();
 }
 
 list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        arun();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        arun();
    }
 },false);


 function arun(){
    localStorage.setItem("data",list.innerHTML);
 }

 function display(){
    list.innerHTML=localStorage.getItem("data");
 }
 display();