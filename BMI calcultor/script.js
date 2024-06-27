let button = document.querySelector('button')
// let weight = document.querySelectorAll('.weight')
// let height = document.querySelectorAll('.height')
// let hi = document.querySelector('.hi')

button.addEventListener('click' , (e)=>{

    let weight = Number.parseInt(document.querySelector('.weight').value)
    let height = Number.parseInt(document.querySelector('.height').value)
    let results = document.querySelector('.result')


    let bmi = weight / (height * height)
    console.log(bmi)
    
    
    results.innerHTML = "Your BMI is " + bmi;
    // results.rextContent = bmi;
    
})


