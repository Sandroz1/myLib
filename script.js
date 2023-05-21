// import myLib from "./myLib.js"

// import { assign }from "./node_modules/lodash";


//Методы массивов

//мутируют(изменяют) основной массив
let mas = [999999,1, NaN ,77777, ,5, 6, 4324,6, 5464,undefined ,77777, 999999];

let masNum = [7,3,34,23];

 let mas2 = [[99, 34,5],[54,99,5]];
let mas3 = [['a', 1], ['b', 2]];
let mas4 = [[99,54],[34,99],[5,5]]
var users = [
    { 'user': 'barney',  'active': true},
  
    { 'user': 'fred',    'active': false },
  
    { 'user': 'pebbles', 'active': true }
  ];
   
  // console.log(myLib.dropWhile(users, function(o) { return o.active; }))
 
//не мутируют(не изменяют) основной массив

// console.time()
// console.log(_.first(mas)) //возвращает первый элемент
// console.timeEnd()
// console.time()
// console.log(myLib.first(mas))
// console.timeEnd()

// console.time()
// console.log(_.compact(mas));
// console.timeEnd()
// console.time()
// console.log(myLib.compact(mas))
// console.timeEnd()
// console.log(myLib.fill(mas,masNum,1,5))

// console.log(myLib.difference(mas, mas2));
// console.log(mas)
// console.log(mas2)

// console.log(myLib.findIndex(mas, 0, 2));
// console.log(myLib.drop(mas, 3));
// console.log(myLib.chunk(mas,3));
// console.log(myLib.join(mas,"|"));
// console.log(myLib.concat(mas,mas2));
// console.log(myLib.sortedIndex(mas,masNum));
// console.log(myLib.uniq(mas));
// console.log(myLib.zip(mas,mas2,mas3));
// console.log(myLib.reverse(mas2));
// function pow(x) {

//   if (x == 10) {
//     return x;
//   } 
//   else {
//     return pow(x + 1);
//   }
// }

// console.log( pow(2) ); // 8
// console.log(myLib.flattenDip(mas2));
// console.log(myLib.last(mas1));
// console.log(myLib.pull(mas3,7,2));
// console.log(myLib.remove(mas3,1,5));
// var array = [1, 2, 3, 4];

// var evens = myLib.remove(array, function(n) {
//   return n % 2 == 0;
// });
 

// console.log(array);
// // => [1, 3]
 

// console.log(evens);
// => [2, 4]
// console.log(myLib.indexOff(mas3,99,2));
// console.log(myLib.union(mas2[0],mas2[1]));
// console.log(myLib.union(mas2[0],mas2[1],mas2[2]));
// console.log(myLib.unionContainer(mas2[0],mas2[1]));
// console.log(myLib.fromPairs(mas3));
// console.log(myLib.flatten(mas2));
// console.log(myLib.head(mas2));
// console.log(myLib.unzip(mas2));
// console.log(myLib.without(masNum,21,5,3));


  // function one() {
  //     this.a = 1;
  //   }
     
  //   function two() {
  //     this.c = 3;
  //   }
     
  //   one.prototype.b = 2;
  //   two.prototype.d = 4;

  // let object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
  // console.log(myLib.at(object,['a[0].b.c', 'a[1]']));
  // let object = { 'a': 23 }
  // console.log(myLib.invert(object));
    // _.at(object, ['a[0].b.c', 'a[1]']);
    // function Foo() {
    //   this.a = ('a');
    //   this.b = ('b');
    // }
    
    // Foo.prototype.c = ('c');
     
    // console.log(myLib.functions(new Foo));
    let object = { 'a': { 'b': 2 } };
    let other = _.create({ 'a': _.create({ 'b': 2 }) });
  //  console.log(myLib.has(object, 'a'))
   console.log(myLib.has(object, 'a.c'))  
// => true
 
_.has(object, 'a.b');
// => true
 
_.has(object, ['a', 'b']);
// => true
 
_.has(other, 'a');
// => false