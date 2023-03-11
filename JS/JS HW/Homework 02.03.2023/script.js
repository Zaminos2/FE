for(let i = 1; i < 11; i=i+2){
    console.log(i)
}
for(let i = 20; i <= 55; i++){
    console.log(i)
}
    const numbers = [3, 5, 11, 2, 8, 1, 6]
    const numbers_sqade = []
 
for(i = 0; i < numbers.length; i++){
    {
        numbers_sqade.push (numbers[i] * numbers[i])
    }
     console.log(numbers_sqade[i])
}
const {last_elem = numbers[6]} = numbers
console.log(last_elem)

const user = {
    fist_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    solary: 500,
}
console.log(`User name is ${user.fist_name} ${user.last_name} He is ${user.age} years old `)