// what is DOM
// Document object model

// Five Selectore

// 1. ID Selectore
// 2. query 
// 3. class
// 4. Tag
// 5. Query 

// 1.innerHtml-
// 2.innerText-
// 3.textrcontent-

let first= document.getElementById("text")
console.log(text)

let second =document.getElementsByTagName("h1")
console.log(second)

let third = document.getElementsByClassName("box")
console.log(third)  

// Q4............

let changetext = document.getElementsByClassName("changetext");

// console.log(changetext.innerHTML);
// console.log(changetext[0].innerHTML)
changetext[0].addEventListener('click',()=>{
    changetext[0].innerHTML='Hello World'
})

// Q5......
let textme = document.getElementsByClassName('textme')

function change(){
    textme[0].innerHTML = "Welcome to Elevation academy"
}

// Q6......
let head = document.getElementById('heading')

head.addEventListener('click',() => {
    head.style.color ='red'
})

// Q7......

let parent=document.querySelector('.cardmain');
let count = true;
function changedirection(){
    if(count){
     parent.style.display = 'block';
    count = false
    }else{
    parent.style.display = 'flex';
    count = true
    }
}

// Q9....
let display = document.querySelectorAll('h5');
display[0].addEventListener('click', () =>{
    function starttime(){
        let time = new Date();

let hrs = time.getHours();
let mins = time.getMinutes();
let secs = time.getSeconds();
let ampm = 'AM';
if (hrs > 12){
    hrs -= 12;
    ampm = "PM"
}

console.log("Time : ${hrs}:${mins}:${secs} ");
display[0].innerHTML = `${hrs}:${mins}:${secs} ${ampm}`
console.log(hrs+":"+mins+":"+secs)
}
setInterval(() => {
    starttime()
    console.log("")
},1000)
})

// let second = document.getElementsByClassName("child")
// console.log(second);

// function changetext(){
//     changetext[0].innerHTML = "Hello world"
// }

// changetext[0].addEventListener('click',()=>{
//     changetext[0].innerHTML = 'Hello world'
//     changetext[0].style.color= 'blue'
//     changetext[0].fontsize= '50px'
// })

// let count = 0;
// changetext[0].addEventListener('click',()=>{

//     if(count % 2=== 0){
//         changetext[0].innerHTML="Hello World"
//         changetext[0].style.color ="blue"
//     }
// }