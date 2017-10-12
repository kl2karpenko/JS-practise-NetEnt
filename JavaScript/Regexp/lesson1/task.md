## 1 task

Дана строка 'aaa@bbb@ccc@ddd@ggg@www@'. 

Найдите и замените все буквы находящиеся между символами "@ ... @" на пробелы.

## 2 task

Запишите в replace выражение которое вернет следующий результат:

```javascript
var date = "31/12/2025";

console.log(date.replace() ... ) // 31 - 12 - 2025
```

## 3 task

Напишите регулярное выражение которое для каждой картинки добавит закрывающий слеш в конце: 

```javascript
var text = '<img src="a">   <img src="b" id="c">';

text = text.replace(... place here your replacement ... )

// now text = '<img src="a"/>   <img src="b" id="c"/>'
```

## 4 task

Write a pattern that matches e-mail addresses.

The personal information part contains the following ASCII characters:
- Uppercase (A-Z) and lowercase (a-z) English letters.
- Digits (0-9).
- Characters ! # $ % & ' * + - / = ? ^ _ \` { | } ~
- Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

## 5 task

Write a JavaScript program to search a date within a string.

Example:

```javascript
 testForDate("Hello, my birthday is on 20/06/1993"); // returns [20/06/1993]
 testForDate("Hello, my favourite days are 20/06/1993 and 20/06/2010"); // returns [20/06/1993, 20/06/2010]
 
```
