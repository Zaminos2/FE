// const obj = {};
// const laptop = {
//     mark: "HP",
//     model: "Pavilion-15g",
//     price: 51000,
//     cpu: "intelcore-i5",
//     material: ["Аллюминий", "Пластик"],

// }
// console.log(laptop.mark)
// const phone = {
//     price: 45000,
//     name: "xiomi",
// }
// console.log(phone.price,phone.name)

// const laptops = [
//     {
//            mark: "HP",
//         model: "Pavilion-15g",
//         price: 51000,
//         cpu: "intelcore-i5",
//         material: ["Аллюминий", "Пластик"],
 
//     },{
//         mark: "acier",
//         price: 20000,
//         cpu: "intelcore-i6",
//         material: ["aluminium","plastic"]
//     }
// ]
// console.log(laptops[1].material[0])
// console.log(`Название ${laptops[0].mark}, а цена ${laptops[0].price}`)
// console.log(`Модель ${laptops[1].mark} и у него процессор ${laptops[1].cpu}`)
// for(i = 0; i < laptops.length; i++){
//     console.log(laptops[i].mark, laptops[i].price)
// }
// const prices = [laptops[0].price, laptops[1].price]
// let sum = 0
// for(let i = 0; i < laptops.length; i++){
//     sum = sum + laptops[i].price
// }
// console.log(sum)

// for(let i = 0; i < laptops.length; i++){
//   {  if(laptops[i].price > 35000)
//     console.log(`<h1>${laptops[i].mark}</h1>`)}
// }

const produkts = [
    {
        name: "Iphone 14",
        price: 100000,
        category: "phone",
    },
    {
        name: "Iphone 13",
        price: 60000,
        category: "phone",
    },
    {
        name: "LG 3210",
        price: 100000,
        category: "tv",
    },
    {
        name: "Samsung 236",
        price: 20000,
        category: "tv",
    },
    {
        name: "playstation 5",
        price: 80000,
        category: "console",
    },
    {
        name: "X-Box One",
        price: 50000,
        category: "console",
    }

]
// for(let i = 0; i < produkts.length; i++){
//   {  if(produkts[i].category == "tv")
//         console.log(produkts[i])
//     }
// }

const user = {
    name: "Oleksii",
    login: "Oleksii_456",
    email: "Oleksii@gmail.com"
}
// const userNme = user.name

// const {name: userNme} = user
const {email} = user
console.log(email)
