let buttons =  document.querySelectorAll(".buttons")
let body = document.querySelector('body')
console.log(buttons)

Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        console.log("hello")
        body.style.backgroundColor = e.target.id;
    })
})



