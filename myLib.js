// const { result } = require("lodash");



// const { property } = require("lodash");










let myLib = {
    first: function (mas) {
        return mas[0];
    },
    compact: function (mas) {
        let newArray = []
        // debugger
        for (let i = 0; i < mas.length; i++) {

            if (mas[i]) {
                newArray[newArray.length] = mas[i];
            }
        }
        return newArray;
    },
    fill: function (mas, masNum, first, last) {
        for (let i = first; i < last; i++) {
            mas[i] = masNum;
        }
        return mas;
    },
    difference: function (mas, mas2) {
        let mas3 = [];

        // debugger
        for (let i = 0; i < mas.length; i++) {
            for (let j = 0; j < mas2.length; j++) {
                if (mas[i] == mas2[j]) {
                    break
                }

                if (j == mas2.length - 1) {
                    mas3[mas3.length] = mas[i]
                }


            }
        }
        for (let i = 0; i < mas2.length; i++) {
            for (let j = 0; j < mas.length; j++) {
                if (mas2[i] == mas[j]) {
                    break
                }

                if (j == mas.length - 1) {
                    mas3[mas3.length] = mas2[i]
                }


            }
        }



        return mas3;
    },

    findIndex: function (mas, element, firstIndex = 0) {

        for (let i = firstIndex; i < mas.length; i++) {
            if (element == mas[i]) {
                return i;
            }
        }
        return -1

    },
    drop: function (array, count) {
        let result = []
        for (let i = count; i < array.length; i++) {

            // result[i-count] = array[i]
            result[result.length] = array[i]

        }
        return result

    },
    chunk: function (array, count = 1) {
        let result = []
        let cache = []
        for (let i = 0; i < array.length; i++) {

            if (count > cache.length) {
                cache[cache.length] = array[i]


            }
            if (count == cache.length) {
                result[result.length] = cache
                cache = []
            }
            if (i + 1 == array.length) {
                result[result.length] = cache

            }


        }
        return result

    },
    join: function (array, separator = ",") {

        result = ""

        for (let i = 0; i < array.length; i++) {

            result = result + array[i]
            if (i + 1 != array.length) {
                result = result + separator
            }

        }
        return result

    },

    concat: function (array, ...copyArray) {
        let result = []
        let cache = []
        for (let i = 0; i < copyArray.length; i++) {
            cache[cache.length] = copyArray[i]
            array[array.length] = cache[i]


        }
        return result
    },
    sortedIndex: function (mas, value) {
        for (let i = 0; i < mas.length; i++) {
            if (value < mas[i]) {
                return i
            }
        }
    },
    uniq: function (mas) {
        let mas2 = []

        // for (let i = 0; i < mas.length; i++) {

        //         if(!mas2.includes(mas[i])){
        //             mas2[mas2.length] = mas[i]

        //         }

        // }
        let unique = 0
        for (let i = 0; i < mas.length; i++) {
            unique = 0
            for (let j = i; j > 0; j--) {
                if (mas[i] == mas[j - 1]) {
                    unique = 1
                    break

                }



            }
            if (unique == 0) {
                mas2[mas2.length] = mas[i]
            }

        }
        return mas2
    },
    zip: function (...mas) {
        let unique = 0

        for (let i = 0; i < mas.length; i++) {
            if (mas[i].length > unique) {
                unique = mas[i].length
            }

        }
        let arr = []
        for (let i = 0; i < mas.length; i++) {
            for (let j = 0; j < unique; j++) {
                if (typeof mas[i][j] == "undefined") {
                    continue
                }
                arr[i][j] = mas[j][i]

            }
        }
        return arr
    },
    dropWhile: function (mas, func) {
        let newArray = []

        for (let i = 0; i < mas.length; i++) {
            if (func(mas[i]) == false) {
                newArray[newArray.length] = mas[i]
            }
        }
        return newArray
        console.log(func(mas[i]))
    },
    reverse: function (mas) {
        let mas1 = []
        for (let i = mas.length - 1; i >= 0; i--) {


            mas1[mas1.length] = mas[i]
        }
        return mas1
    },
    flattenDip: function (mas, mas1 = []) {


        for (let i = 0; i < mas.length; i++) {

            if (typeof mas[i] == "number") {

                mas1[mas1.length] = mas[i]
            }
            else {
                this.flattenDip(mas[i], mas1);
            }
        }
        return mas1
    },
    last: function (mas) {
        return mas[mas.length - 1]
    },
    pull: function (mas, ...arr) {
        for (let i = 0; i < mas.length; i++) {
            if (mas[i] == arr[arr.length - 1]) {
                mas.splice(i, 1)
                arr.pop()
                this.pull(mas, arr)
            }
        }
        return mas
    },
    remove: function (mas, fn) {
        let mas1 = []

        for (let i = 0; i < mas.length; i++) {

            if (fn(mas[i]) == true) {
                mas1[mas1.length] = mas[i]
                mas.splice(i, 1)

            }
        }

        return mas, mas1
    },
    indexOff: function (mas, value, index) {
        for (let i = index; i < mas.length; i++) {
            if (mas[i] == value) {
                return i
            }


        }
        return -1
    },
    union: function (...mas) {
        let result = []

        for (let i = 0; i < mas.length; i++) {
            result = this.unionContainer(mas[i], result)

        }
        return result



    },
    unionContainer: function (mas1, mas2) {
        let mas3 = []
        mas3 = mas1.concat(mas2)


        return this.uniq(mas3)
    },
    fromPairs: function (arr) {
        console.log(arr)
        let ob = {}
        console.log(ob[arr[0][0]])
        for (let i = 0; i < arr.length; i++) {
            ob[arr[i][0]] = arr[i][1]
        }
        return ob
    },
    fromPairs: function (arr) {
        console.log(arr)
        let ob = {}
        console.log(ob[arr[0][0]])
        for (let i = 0; i < arr.length; i++) {
            ob[arr[i][0]] = arr[i][1]
        }
        return ob
    },
    flatten: function (arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) == true) {
                for (let j = 0; j < arr[i].length; j++) {
                    result.push(arr[i][j])
                }
            }
            else {
                result.push(arr[i])
            }

        }
        return result
    },
    head: function (arr) {
        let result = []
        return result = arr[0]
    },
    // unzip: function (arr) {
    //     let arr2 = []
    //     let arr3 = []
    //     let count = 0

    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             if (j == count) {
    //                 arr2.push(arr[i][j])
    //                 if (arr.length == arr2.length) {
    //                     arr3.push(arr2)
    //                     arr2 = []
    //                     count++
    //                     i = 0
    //                 }
    //             }

    //         }

    //     }
    //     console.log(arr3)
    // },
    without: function (array, ...value) {
        console.log(array)
        let result = []


        for (let i = 0; i < array.length; i++) {
            let cheker = true
            for (let j = 0; j < value.length; j++) {
                if (value[j] == array[i]) {
                    cheker = false
                    break
                }

            }
            if (cheker) {
                result[result.length] = array[i]
            }
        }
        return result

    },
    tail: function (array) {
        let result = []
        for (let i = 0; i < array.length; i++) {
            if (i != 0) {
                result[result.length] = array[i]
            }
        }
        return result
    },
    take: function (array, count = 1) {
        let result = []

        if (count > array.length) {
            for (let i = 0; i < array.length; i++) {
                result[result.length] = array[i]

            }
            return result
        }

        for (let i = 0; i < count; i++) {
            result[result.length] = array[i]
        }
        return result
    },
    xor: function (...array) {

        let cheker = false

        // result = array1.concat(array2)
        // console.log(array)
        // for (let i = 0; i < result.length; i++) {
        //     cheker = false
        //     for (let j = 0; j < result.length; j++) {
        //         if (result[i] == result[j] && i != j) {
                    
        //             cheker = true
        //             break
        //         }

        //     }
        //     if(cheker == false){
        //         result2[result2.length] = result[i]
        //     }

        // }
        this.insideXor(array)
    
    },
    insideXor : function(mas,count = false, result = []){
      
  


        // console.log(count, " count")
            // console.log(mas[count])
            // result.concat(mas[count])
            // console.log(result)
        for(let i = 0;i < mas.length;i++){
            if(typeof mas[i] == "object"){

                if(count){
                    console.log(mas," mas")
                    result.push(mas[i])
                    
                }
                console.log(result,"result")
                this.insideXor( mas[i], true, result)

            }
            
        }

        
    },
    assign : function ( three,...ob){
        for(const key in ob){
            if(Object.hasOwnProperty.call(ob,key)){

                this.assignValue(three,ob[key])
            }

            
        }
       return three
        
    },
    assignValue : function (three, ob){
        for( const key in ob){
            if(Object.hasOwnProperty.call(ob,key)){
                three[key] = ob[key]

            }
        }
    },
    at: function (ob, mas){
    let lk = mas[0].split(/\[(.*)\]/);
    // let lk = mas[0].split(/\[(.*)\]/);
      let result = ob[lk]
      console.log(lk)
    },
    invert: function(ob){



        let result = {}
        for (const key in ob){

           result[ob[key]] = key

        }   
        
        return result
        
    },
    functions: function(obj){
        let result = []
        for(const key in obj ){
        if(Object.hasOwnProperty.call(obj,key)){
            result[result.length] = obj[key]
        }
    }
        return result

    },
    has: function(obj,path){
        let mas2 = []
        if(typeof path == "string"){
          mas2 =  this.stringTransform(path)

        }

        for(const key in mas2){
       
           if(obj[mas2[key]] ){
            console.log(obj)
            this.has(obj[mas2[key]],mas2)
             obj = obj[mas2[key]]
           }
           else{
            return false
           }

        }
        return true
    },
    stringTransform: function(path){
        let str = ""
        let mas = []
        for(let i = 0; i < path.length; i++){
            if(path[i] == "."){
                mas[mas.lenght] = str
                str = ""
            }
            else{
                str += path[i]
            }
            
        }
        return mas
    }
}






