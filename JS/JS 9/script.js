const item1 = document.querySelector('.item-1')
item1.addEventListener('click', function(){
    item1.classList.add('rose')
})
const item2 = document.querySelector('.item-2')
item2.addEventListener('click', function(){
    item2.classList.remove('red')
})

const item3 = document.querySelector('.item-3')
item3.addEventListener('click', function(){
    item3.classList.toggle('activ')
})
const textContainer = document.querySelector('.text-container')
function createText (){
    for(let i = 0;i < 10; i++){
        textContainer.innerHTML += '<p class= "Yapppie">Hi</p>'
    }
}
createText()
const texts = document.querySelectorAll('.Yapppie')
texts.forEach(function(text){
    text.addEventListener('click', function(){
        text.classList.toggle('activ-text')
    })
})
const words = [
    {
        en: "car",
        ru: "Машина"
    },
    {
        en: "phone",
        ru: "телефон"

    },
    {
        en: "bycikle",
        ru: " Велосипед"

    },
    {
        en: "helmet",
        ru: "Шлем"

    }
]
/* <div class="word-container">
<p class="en-word">Car</p>
<p class="ru-word">Машина</p>
</div> */
function createWords () {
const wordsContainer = document.querySelector('.words-container')
words.forEach(function(item){
    wordsContainer.innerHTML += `
    <div class="word-container">
    <p class="en-word">${item.en}</p>
    <p class="ru-word">${item.ru}</p>
    </div> `
})

}
createWords()

const wordEn = document.querySelectorAll('.en-word')
wordEn.forEach( function(word){
    word.addEventListener('click', function(){
    word.style.display = 'none'
    word.nextElementSibling.style.display = 'block'})
})
const wordRu = document.querySelectorAll('.ru-word')
wordRu.forEach( function(word){
    word.addEventListener('click', function(){
    word.style.display = 'none'
    word.previousElementSibling.style.display = 'block'})
})