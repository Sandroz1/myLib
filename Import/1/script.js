let mas = [1,4,6,3,2,7]
function masSum(mas){
    let Sum = 0

    for(let i = 0; i < mas.length ; i++){
     Sum = Sum + mas[i]
    }
    return Sum
}
console.log(masSum(mas))
