const redSqare = document.querySelector('.red-sqare')

function redButton (){
    redSqare.innerHTML += `
    <button class="red-push">Нажми меня</button>
    <div class="red"></div>
`
}
redButton ()
const redPush = document.querySelector('.red-push')
const red = document.querySelector('.red')


redPush.addEventListener('click', function(){
    red.classList.toggle('red-2')
})

const pinkSqare = document.querySelector('.pink-sqare')

function pinkButton (){
    pinkSqare.innerHTML +=`
    <button class="pink-push">Нажми меня</button>
    <div class="pink"></div>
    `
}
pinkButton()
const pinkPush = document.querySelector('.pink-push')
const pink = document.querySelector('.pink')

pinkPush.addEventListener('click', function(event){
    pink.classList.toggle('pink-2')
    const pinkStyle = window.getComputedStyle(pink);
    const backgroundColor = pinkStyle.getPropertyValue("background-color");
    console.log(backgroundColor);
    
})

const blueSqare = document.querySelector('.blue-sqare')
function blueButton (){
    blueSqare.innerHTML += `
    <button class="blue-push">Нажми меня</button>
    <div class="blue"></div>`
}
blueButton()

const bluePush = document.querySelector('.blue-push')
const blue = document.querySelector('.blue')

bluePush.addEventListener('click', function(){
    const width = blue.offsetWidth
    const height = blue.offsetHeight
    blue.style.width = width + 20 + 'px'
    blue.style.height = height + 20 + 'px'

})

const rootHolder = document.querySelector('.root-holder')
function rootBox(){
    rootHolder.innerHTML += `

    <button class="par-but">Make more blue</button>
    <button class="nat-btn">Free the nature</button>
    <div class ="root"></div>`
}
rootBox()
const root = document.querySelector('.root')
const skyBtn = document.querySelector('.par-but')
skyBtn.addEventListener('click', function(){
    root.innerHTML += `
    <p class="par-push">Blue sky</p>`
})

const natBtn = document.querySelector('.nat-btn')
let colorIndex = 0
natBtn.addEventListener('click', function(){
    if(colorIndex % 2 === 0){
        root.innerHTML += `
        <p class="par-blue">Blue Ocean</p> `
    }
    else{
        root.innerHTML += `
        <p class="par-green">Green grass</p> `

    }
    colorIndex ++
})
