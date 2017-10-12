# Домашнее задание по JS - контексты

## Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров

```javascript

function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.getName = function () {
       isContextEqualTo(window); // ??
       isContextEqualTo(user); // ??
       return this.name;
    };
}

Person.prototype.getAge = function () {
    isContextEqualTo(window); // ??
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.prototype.getAge;
var getName = user.getName;

consoe.log(getAge()); //  в каком контексте вызана функция?
consoe.log(getName()); //  в каком контексте вызана функция?
consoe.log(user.getName()); //  в каком контексте вызана функция?

Person.prototype.getAge = function() {
    isContextEqualTo(user); // ??
    return this.name;
}

consoe.log(user.getAge()); //  в каком контексте вызана функция?

```

