// const text = document.querySelector('.text')
// const texts = document.querySelectorAll('p')
// console.log(texts)
// const text = document.querySelector('p')
// text.innerText = 'Hallo Oleksii'
// console.log(text.innerText)

// const text = document.querySelector('.text')
// text.innerText = 'Привет мир'
// console.log(text.innerText)

// const link = document.querySelector('#item')
// link.innerText = 'Googl'

// const texts = document.querySelectorAll('.text')
// texts[0].innerText ='Привет'
// texts[1].innerText ='Привет'
// texts[2].innerText ='Привет'
// texts[3].innerText ='Привет'

// for(let i = 0; i < texts.length; i++){
//     texts[i].innerText = 'Привет'
// }

// const texts = document.querySelectorAll('.item')

// for(let i = 0; i < texts.length; i++){
    
//     texts[i].innerText = i + 1
// }

const links = document.querySelectorAll('a')
for(let i = 0; i < links.length; i++){
    console.log(links[i].getAttribute('href'))
}
const youtubeLink = document.querySelector('.youtube')
youtubeLink.setAttribute('href', 'https://youtube.com')

const images = document.querySelectorAll('img')
for(let i = 0; i < images.length; i++){
    images[i].setAttribute('src', `./img${i + 1}.jpg`)
}