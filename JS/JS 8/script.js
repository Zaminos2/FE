
// button.addEventListener('click',gretteng
// )
// function gretteng (){
//     console.log("Hello")
// }
// const button = document.querySelector(".btn")

// const button2 = document.querySelector(".minus")

// button.addEventListener('click',num )
// button2.addEventListener('click', function(e){
//     number --
//     text.innerText = number
//     console.log(e)

// })
// let number = 0
// const text = document.querySelector(".count")
// function num (e){
//     number ++
//     text.innerText = number
//     console.log(e)

// }

// const redButton = document.querySelector('.red')
// const redItem = document.querySelector('.item')
// const green = document.querySelector('.green')

// redButton.addEventListener('click', function(){
//     redItem.style.backgroundColor = "red"
// })
// green.addEventListener('click', function(){
//     redItem.style.backgroundColor = 'green'
// })
// const buttons = document.querySelectorAll('button')
// const sqare = document.querySelector('.item')
// buttons.forEach(function(button){
//     button.addEventListener('click', function(event){
        
//         const color = event.target.className
//         sqare.style.backgroundColor = color
//     })
// })


// const numbers =[19, 45, 76, 12, 34, 67]
// numbers.forEach(function(number){
//     console.log(number * 2)
// })
const slides = document.querySelectorAll('.img-slide')
const full = document.querySelector('.img-full')
slides.forEach(function(slide){
    slide.addEventListener('click', function(event){
        const slidePath = event.target.getAttribute('src')
        full.setAttribute('src', slidePath)
    })
})