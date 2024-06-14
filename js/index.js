// ======================== 1 - misol =====================


// const words = ["1", "2", "3", "4", "5", "6", "7"];

// const res = words.filter(word => word.length => 5);

// constresults = res.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// console.log(result);



// ======================== 2 - misol =====================



// const person = [
//     { name: "ali", age: 18 },
//     { name: "jamoliddin", age: 22 },
//     { name: "shuhrat", age: 19 },
//     { name: "alisher", age: 21 }
// ];
//   function name(stydent) {
//     const stydent = stydent.find(stydent => stydent.ege > 20)
//     if (stydent) {
//         return stydent.name.toUpperCase();
//     }
//     return null;
//   }
//   const result = name(stydent);
// console.log(result);


// ======================== 3 - misol =====================

// const person = [
//         {nomi: "olma", soni: 10 },
//         {nomi: "nok", soni: 80 },
//         {nomi: "banan", soni: 113 },
//         {nomi: "ananas", soni: 99 }
//     ];

//     function nomi(mevalar) {
//         const mevalar = mevalar.filter(mevalar => mevalar.soni > 100 )
//         if (mevalar) {
//             return mevalar.nomi.reduce();
//         }
//         return null;
//     }
//     const result = nomi(mevalar);
//     console.log(result);



// ======================== 4 - misol =====================





// function isPositive (arr) {
//     let result = arr.every(function(value) {
//     return value > 0
//     })
//     let isExistOverHundred = arr.some (function(value) {
//     return value > 100
//     })
//     if(isExistOverHundred) {
//     console.log("Katta son bor");
//     }
//     if (result) {
//     return "Barcha sonlar musbat"
//     } else {
//     return "Musbat bo'lmagan sonlar bor"
//     }
//     }
//     console.log(isPositive ([4, 6, 10, 200, 5]));



// ======================== 5 - misol =====================

// let arr = [1, 2, 3, 4, 5]
// function sqrtArray(arg) {
// let result = arg.map(function(value) {
// return value ** 2;
// })
// console.log(result);
// }
// sqrtArray(arr); 


// // ======================== 6 - misol =====================


// let arr = [1400, 5000, 3000, 1000];
// function salary(arr) {
// let result = arr.map(function(value) {
// if (value>= 2000) {
// value = Math.floor(value * 1.1)
// }
// return value
// })
// return result;
// }
// console.log(salary(arr));

// // ======================== 7 - misol =====================


// let students = [
//     {name: "Okifxon", yoshi: 12, ball: 10},
//     {name: "Shuhratbek", yoshi: 17, ball: 50},
//     {name: "Ozodbek", yoshi: 13, ball: 40},
//     {name: "Zafarjon", yoshi: 43, ball: 90},
//     {name: "Saydillo", yoshi: 20, ball: 85},

//     function findStudent(arr) {
//         let result
//         arr.find(function(value) {
//         return value.ball >= 88
//         })
//         let success = arr.filter(function(value) {
//         return value.ball >= 80
//         })
//         console.log(success);
//         return [result.name, result.yoshi];
//         }
//         console.log(findStudent(students));
        
// yozuvga oid masalalar 

// // ======================== 1 - misol =====================



// function toUpperCaseString(str) {
//     return str.toUpperCase();
// }
// console.log(toUpperCaseString("salom"));


// // ======================== 2 - misol =====================



// function includesSubstring(str, substring) {
//     return str.includes(substring);
// }
// console.log(includesSubstrin("world")); 


// // ======================== 3 - misol =====================


// function replaceJavaScriptWithJS(str) {
//     return str.replace();
// }
// console.log(replaceJavaScriptWithJS("frontend")); 



// // ======================== 4 - misol =====================



// function reverseWords(str) {
//     return str.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("hello world from JavaScript"));




// // ======================== 5 - misol =====================


// function trimString(str) {
//     return str.trim();
// }

// console.log(trimString("   hello   "));

