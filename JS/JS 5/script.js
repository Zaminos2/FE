function numbers(a, b) {
    const minNum = Math.min(a, b);
    console.log(minNum);

};
numbers(33,56);

function numbers2(a, b){
    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);

    for(let i = maxNum; i >= minNum; i --){
        if(i % 2 == 0){console.log(i)}
    }

}
numbers2(45, 92)

function power(a, b){
     const powNum = Math.pow(a, b);
     console.log(powNum)
}
power(4, 3)

function sum(n){
    let number = 0
    
    for(i = 1;i <= n;i++)
    number += i
    console.log(number)
}
sum(20)

function numSum(m, n){
    let sum1 = 0;

    
    
    if(m < n){
        for(let i = m;i <= n; i++){

            sum1 += i;


        }
    }
    else  if (m == n){
        sum1 = (m + n)
    }
    else{
        for(let i = n;i <= m; i++){
            sum1 += i;


        }
    }
    console.log(sum1)

}


numSum( 10, 10)
function evenOdd(m, n){
    let minNum = Math.min(m, n);
    let maxNum = Math.max(m, n);
    let evenSum = 0;
    let  oddSum = 0;
    for(let i = minNum; i <= maxNum; i++){
        if(i % 2 == 0){
            evenSum += i
        }
        else{
            oddSum += i
        }
    }
    console.log(evenSum, oddSum)
    
}
evenOdd(30, 23)
 

const words = ["hello", "hi", "goodNight2", "goodDay", "goodNight1"];
function calkWords(a){
    
    let maxWords = 0;
    let maxSring = "";
    if(words.length == 0){
        maxSring = "null"
    }
    for(i = 0; i < words.length; i++){
        
        if(words[i].length > maxWords){
            maxWords = words[i].length;
            maxSring = words[i]

        }
    }
    console.log(maxSring)
}

calkWords(words)