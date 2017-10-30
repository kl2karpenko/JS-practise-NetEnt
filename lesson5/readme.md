#### Links for additional info:

##### Passing a function to another function as a callback:
* https://learn.javascript.ru/settimeout-setinterval 
* https://forum.freecodecamp.org/t/javascript-callback-functions/14658
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Tasks for callback functions
 
### 1 task

Create a function called: multiplyArray, that using map method (don't use cycles) will return all elements of array multiplied to passed value, e.g:
  
```javascript
function multiplyArray(array, number) {
  
}
multiplyArray([1,2,3], 6); // [ 6, 12, 18 ]
```
 
### 2 task

Please create function that will return object with the properties { name, last_name, age, gender }, from the string passed to it,
knowing that string will always be like this: "Last Name: last_name; Name: name; Age: age; Gender: gender" where last_name, name, age, gender will
be a string values, so the following code will work like this:

```javascript
function createPersonsGetter(strData) {
  // your code here
}

createPersonsGetter("Last Name: Karpenko; Name: Lily; Age: 24; Gender: female");  
// will return obj:
// {
//  name: "Lily",
//  last_name: "Karpenko",
//  age: 24,
//  gender: "female",
// }

createPersonsGetter("Last Name: Ugly; Name: Foo; Age: 102; Gender: male");  
// will return obj:
// {
//  name: "Ugly",
//  last_name: "Foo",
//  age: 102,
//  gender: "male",
// }
```
 
### 3 task

Create a function createPerson(data) that will create Persons inside array PersonsList, if person passed to function is already inside
the PersonsList please add the properties that are ont there inside the needed object by index in Array, eg:

```javascript
var PersonsList = [];

function createPerson(data) {
  // var personObject
  
  // check if have a person
  
  // PersonsList.push(personObject);
}

createPerson({ name: "Lily", age: 24 });
createPerson({ name: "Lily", last_name: "Karpenko" });
createPerson({ name: "Ivan", last_name: "Skoroglyad", age: 70 });

console.log(PersonsList) // [{name: "Lily", last_name: "Karpenko", age: 24}, { name: "Ivan", last_name: "Skoroglyad" }]
```
 
### 4 task

Create a function timeToRetire that check forEach person in PersonsList if his or her age is more than 50
where person - is object with person data, callback is function that will make some actions with the result of checking:

```javascript
function timeToRetire(person, callbackSuccess, callbackError) {
  // your code here
  
  // callbackSuccess is called when age is less then 50
  // callbackError is called when age is more then 50
}

timeToRetire(PersonsList[0], function( result ) {
  // result is true or false (when age is less than 50)
  alert( "You are young, still have to work" )
}, function( result ) {
  // result is true or false (when age is more than 50)
  alert( "Time to rest and read books =)" )
});
```