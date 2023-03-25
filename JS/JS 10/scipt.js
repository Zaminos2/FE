// Обработка форм

/*
    При submit формы происходит событие по умолчанию, страница на которой расположена
    формы обновляется. Мы должны отменить действие по умолчанию

    у input, textarea есть свойство value - это свойство, в котором хранится значение, введеное
        пользователем в тег
*/

// Вывести данные из формы в консоль 
// const form = document.querySelector('form') // находим форму
// const userName = document.querySelector('.user-name') // нахожу input
// const userMessage = document.querySelector('.user-message') // нахожу textarea

// form.addEventListener('submit', function(event) {
//     event.preventDefault() // отменяем действия по умолчанию
    
//     console.log(userName.value, userMessage.value)
// })


// Создать форму в html. В форме должны быть два инпута - имя и цена товара.
// Добавить скрипт, который будет отображать данные из формы при ее отправке в консоли.
// сохранять введенные данные в массиве products в виде объекта

const products = [
    {
        name: "Iphone 13",
        price: 70000
    },
    {
        name: "Iphone 14",
        price: 80000
    }
]

const form = document.querySelector('form')
const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const notification = document.querySelector('.notification')
const productContainer = document.querySelector('.products-container')
const productSearch = document.querySelector('.search-product')

// слушаем отправку форму и вызываем функцию при отправке
form.addEventListener('submit', function(event) {
    event.preventDefault() // отменяем действия по умолчанию (перезагрузка страницы)
    // Собираем объект newProduct с данными из инпутов
    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value) // "25000" -> 25000; string -> number
    }
    // Добавляем объект newProduct в массив
    products.push(newProduct)
    // Очичащем поля ввода
    clearInputs()
    // Отображаем уведомление
    showNotification()
    // Заново отображаем карточки после добавления продукта
    renderProducts(products)
})

// Функция очистки полей
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}

function showNotification() {
    notification.style.display = 'block'
    setTimeout(function() {
        notification.style.display = 'none'
    }, 2000)
}
/*
    Метод браузерного планирования

    setTimeout(function() {}, 3000)
    Вызывает функцию переданную первым аргументом через определенный промежуток времени(в м/с)
*/

// Создать функцию, которая будет рендерить product-container для каждого объекта массива products
// forEach(), innerHTML 

function renderProducts(arr) {
    productContainer.innerHTML = ''
    arr.forEach(function(product, index) {
        productContainer.innerHTML += `
            <div class="product-container" id="${index}">
                <p class="product-card-name">${product.name}</p>
                <p class="product-card-price">${product.price}</p>
                <button class="delete-btn"> X </button>
            </div>
        `
    })
    // Вызываем функцию слушатель наведения
    onCardHover()
    // Вызываем удаление элемента
    deleteProduct()
}

renderProducts(products) // сразу отображаем пользователю продукты из product

function onCardHover() {
    const productCards = document.querySelectorAll('.product-container')
    productCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.querySelector('.delete-btn').style.display = 'block'
        })
        card.addEventListener("mouseout", function() {
            card.querySelector('.delete-btn').style.display = 'none'
        })
    })
}

function deleteProduct() {
    const deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const currentId = btn.parentElement.id
            btn.parentElement.remove()
            // удалить из массива элемент с индексом currentId
            console.log(currentId)
            products.splice(currentId, 1)
            // ререндер
            renderProducts(products)
        })
    })
}

productSearch.addEventListener('input', function(event) {
    const searchQuery = event.target.value // строка, по которой делаем поиск
    const filteredProducts = findProduct(searchQuery)
    renderProducts(filteredProducts)
})

function findProduct(value) {
    return products.filter(function(product) {
        return product.name.includes(value)
    })
}
/*
    Событие input происходит на каждый ввод символа в input

    filter - фильтрует массив по определенным признакам и возвращает отфильтрованный массив
    includes - проверяет наличие подстроки в строке. 
        Hello.includes('H') = true
        Hello.includes('R') = false
*/




// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers)
// // // Удалить элемент 30
// numbers.splice(2) // [10, 20, 40, 50]
// console.log(numbers) // [0, 1, 2, 3]
// // Удалить 20 и 40
// numbers.splice(1, 2)

/*
    splice(index, count)
         index - индекс элемента, с которого нужно начать удаление
         count - количество элементов, которое нужно удалить

    1. при наведении отображать Х
    2. при отведении скрывать

        Первый рендер
        <div class="product-container">
            <p class="product-card-name">Iphone 13</p>
            <p class="product-card-price">70000</p>
        </div>
        <div class="product-container">
            <p class="product-card-name">Iphone 13 Pro</p>
            <p class="product-card-price">80000</p>
        </div>
        const products = queryAll('products')
        products.addEventListener

        Продукт добавлен

        2й рендер
        <div class="product-container">
            <p class="product-card-name">Iphone 13</p>
            <p class="product-card-price">70000</p>
        </div>
        <div class="product-container">
            <p class="product-card-name">Iphone 13 Pro</p>
            <p class="product-card-price">80000</p>
        </div>
        <div class="product-container">
            <p class="product-card-name">Test</p>
            <p class="product-card-price">5000</p>
        </div>
        products = queryAll('products')
        products.addEvent
*/
