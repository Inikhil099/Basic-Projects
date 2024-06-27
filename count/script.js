let button = document.querySelector('.btn')
let count = 0
// button.innerHTML = count;

button.addEventListener('click' , ()=>{
    count += 1;
    button.innerHTML = count;



    console.log("hello")
})