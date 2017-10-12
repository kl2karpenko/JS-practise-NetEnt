# Домашнее задание по JS.

## 1 задание

Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -. Пример использования:

```javascript
var calc = new Calculator;

console.log( calc.calculate('3 + 7') ); // 10
```

Второй шаг — добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать. Например, добавим операции умножить , поделить / и возвести в степень *:

```javascript
var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8
```

* Поддержка скобок и сложных математических выражений в этой задаче не требуется.
* Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
* Предусмотрите обработку ошибок. Какая она должна быть – решите сами.


## 2 задание

У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName:

```javascript
function User(fullName) {
  this.fullName = fullName;
  
  // тут вы должны записать логику как вы будете в эти свойства записывать данные 
  // в свойства firstName/lastName через Object.defineProperty()
}

var vasya = new User('Александр Пушкин');
```

Имя и фамилия всегда разделяются пробелом.

Сделайте, чтобы свойства firstName и lastName были доступны не только на чтение, но и на запись, вот так:

```javascript
var vasya = new User('Александр Пушкин');

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой
```

#### Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName — реализованы через get/set из Object.defineProperty(). 
 
Лишнее дублирование здесь ни к чему.
