## 1a
1. Output: `values added: 20`
2. Output: `final result: 20`
3. Output: `values added: 20`
4. Error: `result` not deifned, because `result` is out of scope outside the if statement, because `let` defines it with block-scope.
5. Error: Assignment to const variable, because `result` is now a const variable, and we tried reassigining a const variable
6. Technically, line 13 is never running because reassignment of the const variable `result` caused a compile error, but if we removed the reassignment line (line 6) we would get a `result` not defined error, because even const defines variables with block scope and line 13 is outside the if statement.

## 1b
1. Output: 3, because after the three iterations and update of i from 2 to 3, loop condition is not maintained, so i stays 3 after the for loop.
2. Output: 150, because `discountedPrice` has the last assigned value from the last iteration (300*(1-0.5 = 150)
3. Output: 150, because `finalPrice` has the last assigned value from the last iteration (300*(1-0.5 = 150)
4. Returns: [ 50, 100, 150 ], because it returns the array `discounted` which has discounted prices pushed into it for the inputs 100, 200, and 300.
5. Error: `i` not defined, because let defines `i` with scope within the for loop, but we use the reference `i` outside the for loop.
6. Error: `discountedPrice` not defined, because let defines `discountedPrice` with scope within the for loop, but we use the reference `discountedPrice` outside the for loop.
7. Output: 150, because `finalPrice` was defined outside the for loop and hence has function-scope so can return its most recently assigned value at line 14, and it has the last assigned value at that line from the last iteration (300*(1-0.5 = 150)
8. Output: [ 50, 100, 150 ], because it returns the array `discounted` which has discounted prices pushed into it for the inputs 100, 200, and 300.
9. Error: `i` not defined, because const defines `i` with scope within the for loop, but we use the reference `i` outside the for loop.
10. Output: 3, because `length` was set as `prices.length` which is 3, and then it wasn't/can't be reassigned.
11. Output: [ 50, 100, 150 ], because it returns the array `discounted` which has discounted prices pushed into it for the inputs 100, 200, and 300.
12. A. student.name 
    B. student["Grad Year"] 
    C. student.greeting() 
    D. student["Favorite Techer"].name 
    E. student.courseLoad[0]
13. A. '32', integers map to their exact string representation
    B. 1, string map to their exact integers representation
    C. 3
    D. '3null', integers and null map to their exact string representation
    E. 4, true maps to 1
    F. 0, both false and null map to integer representation
    G. '3undefined', undefined maps to string representation
    H. NaN, '3' can but undefined cannot map to integer, Number(undefined) maps to NaN
14. A. true, '2' maps to 2
    B. false, because strings are compared lexicographically
    C. true, because '2' maps to 2
    D. false, because with strict data of different types are always unequal
    E. false, because true maps to 1
    F. true, Boolean(2) is true
15. For a and b of different types, `a== b` compares with type conversion, but `a===b` returns false always without attempting type convesion 
16. Added in part1b-question16.js:
```js
for (key in statistics){
    if(key[0] == 'r' || statistics[key]%2 == 1){
        console.log(statistics[key])
    }
}
```
17.  The function will return [ 2, 4, 6 ], `newArr` gets created, as we iterate through the `array`, which is [1,2,3], we push `callback(array[i])`, which just returns `arrays[i]` doubled.
18.  Added in part1b-question18.js:
```js
let d;
let time;
setInterval(function () {
  d = new Date();
  time = d.toLocaleTimeString();
  console.log(time);
}, 1000);
```
19.