
let myLib = {

    masSum: function (mas) {
        let Sum = 0

        for (let i = 0; i < mas.length; i++) {
            Sum = Sum + mas[i]
        }
        return Sum
    }
    ,

    // export default masSum



    masMultiplication: function (mas) {
        let Sum = 1

        for (let i = 0; i < mas.length; i++) {
            Sum = Sum * mas[i]
        }
        return Sum
    }
}
export default myLib


// export default masMultiplication

