// function sumValues(num1,num2,add){
//     if (add){
//         const result = 0;

//         console.log("alues added: ",result);
//         // result = num1 + num2;
//     }
//     else return;
//     console.log('final result: ',result)
// }

// sumValues(10,10,true)

// function discountPrices(prices,discount){
//     const discounted = [];
//     // const finalPrice = 0;
//     const length = prices.length;

//     for (let i  =0; i < length; i++) {
//         const discountedPrice = prices[i]*(1-discount);
//         // finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(discountedPrice);

//     }
//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);
//     console.log(length);
//     return discounted;
// }

// console.log(discountPrices([100,200,300],0.5))

// let key = prompt("question?","answer")

// let student={
//     'Grad Year':'2022',
//     name:'John',
//     'age':3,
//     greeting: function(){console.log('Hello');},
//     'Favorite Techer':{name:'Thomas',course:'110'},
//     courseLoad:['1','3']

// };

// for (key in student){
//     console.log(key,student[key])
// }

// student.greeting()
// console.log(student["Favorite Techer"].name)
// console.log(student.courseLoad[0])

// key2 = 'name'
// console.log(student["Grad Year"])
// console.log(student.age)
// console.log(student.f1)
// console.log(student[key2])

// let obj = {};
// obj.__proto__ = {grad:12}; // assign a number
// console.log(obj.__proto__);

// function modifyArray(array, callback){
//     const newArr = [];
//     for (let i = 0; i < array.length; i++){
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num){
//     return num*2;
// }
// console.log(modifyArray([1,2,3], doSomething));

function printNums() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printNums();
