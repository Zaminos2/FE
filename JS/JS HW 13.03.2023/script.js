const num = document.querySelector("body")
num.innerHTML += `<div class= "numbers"></div>`
num.innerHTML += `<div class= "strings_container"></div>`
num.innerHTML += `<div class= "users_container"></div>`

const numbers = document.querySelector(".numbers")
const strings_container = document.querySelector(".strings_container")
const users_container = document.querySelector(".users_container")


for(i = 100; i >= 50; i--){
    
    if ([i] % 10 === 0){
        numbers.innerHTML +=
        
       `<p>${[i]}</p>`
    }
}
const strings = ["В лесу родилась ёлочка", "В лесу она росла", "Зимой и летом стройная", "Зелёная была!!"]
for(i = 0; i < strings.length; i++){
    strings_container.innerHTML += `<p>${strings[i]}</p>`
}
const users = [
    {
        Fist_name: "Алексей",
        Last_name: "Курчаков",
        Age: 27
    },
    {
        Fist_name: "Татьяна",
        Last_name: "Сужкина",
        Age: 13

    },
    {
        Fist_name: "Ольга",
        Last_name: "Фокина",
        Age: 43

    },
    {
        Fist_name: "Ярослав",
        Last_name: "Кругин",
        Age: 16

    }
]
for(i = 0; i < users.length; i++){
    if(users[i].Age >= 18){
        users_container.innerHTML +=`
        <p class= "Fist_name">${users[i].Fist_name}</p>
        <p class= "Last_name">${users[i].Last_name}</p>
        <p class= "Age">${users[i].Age}</p>`
    }
}
