
// const item = document.querySelector('.item')
// const text = document.createElement('p')
// text.innerText = 'hello'
// item.appendChild(text)
// item.innerHTML += "<p> Hallo World</p>"
// console.log(item.innerHTML)
// for(let i = 0; i < 10; i++){
//     item.innerHTML += '<p>"hello"</p>'

// }
// const item = document.querySelector('.item')
// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Facebook",
//         link: "https://fb.com"
//     },
//     {
//         name: "Instagram",
//         link: "https://instagram.com"
//     }
// ]
// for(let i = 0; i < links.length; i++){
//     item.innerHTML += 
//     `<a href ="${links[i].link}">${links[i].name}</a>`
// }

// const names = ["Oleksii","Volodymyr","Svitlana","Dmytro"]
// for(let i = 0; i < names.length; i++){
//     item.innerHTML +=
//     `<h4>${names[i]}</h4>`
// }
// const images = ["./img1.jpg","./img2.jpg","./img3.jpg"]
// for(let i = 0; i < images.length; i++){
//     .innerHTML += `<img "src = ${images[i]}">`
// }


    const info = [
        {
            question: "Какой тег используется для создания главного заголовка",
            answer: "Для создания главного заголовка используется тег h1",
            img: "./img1.jpg",
            views: 24 
        },
        {
            question: "Как добавить картинку в html?",
            answer: "Картинку в html можно добавить с помощью тега img"  , 
            img: "./img2.jpg",
            views: 21
        },
        {
            question: "Как изменить размер шрифта текста",
            answer: "Для изменения размера шрифта текста используется css свойство font-size",
            img: "./img3.jpg",
            views: 12
        }
    ]

//     <div class="qa-item">
//     <p class="qa-qestion"></p>
//     <p class="qa-answer"></p>
// </div>
const containerQa = document.querySelector('.qa')
for(let i = 0; i < info.length; i++){
    containerQa.innerHTML += `
    <div class="qa-item">
    <p class="qa-qestion">${info[i].question}</p>
    <img src= "${info[i].img}">
    <p class="qa-answer">${info[i].answer}</p>
    <p>${info[i].views}</p>
</div>`

}
const products = [
    {
        name: "Iphone 13",
        price: 50000
    },
    {
        name: "Iphone 14",
        price: 70000
    },
    {
        name: "Iphone 14 Pro",
        price: 80000
    }
]
const containerProdukts = document.querySelector('.products')
for(let i = 0; i < products.length; i++){
    if(products[i].price > 60000){
    containerProdukts.innerHTML += `
    <div class= "product">
        <h5 class= "product-name">${products[i].name}</h5>
        <p class= "product-price">${products[i].price}</p>
    </div>`
    }
}