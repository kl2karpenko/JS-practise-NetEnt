#### Links for additional info:

##### Passing a function to another function as a callback:
* https://learn.javascript.ru/settimeout-setinterval 
* https://forum.freecodecamp.org/t/javascript-callback-functions/14658
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Tasks for callback functions
 
### 1 task

Create a function called: multiplyArray, that using map method (don't use cycles) will return all elements of array multiplied to passed value%
e.g:
  
```javascript
function multiplyArray(array, number) {
  
}
multiplyArray([1,2,3], 6); // [ 6, 12, 18 ]
```
 
### 2 task

Please create function that will create object's with the same properties, eg:

```javascript
function createPersonsGetter( data ) {
  
}

createPersonsGetter({ name: "Lily", lastName: "Karpenko", age: 24, gender: "female" });  
// will return obj with methods:
// { 
//  getName: function => will return name property,
//  getLastName: function => will return lastName property,
//  getAge: function => will return age property,
//  getGender: function => will return age property,
// }
```
 