# Домашнее задание по JS.

## 1 task

Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

```html
<!DOCTYPE html>  
<html>
  <head>  
    <meta charset=utf-8 />  
  </head>  
  <body>  
    <p>
      <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a>
    </p>  
    <button onclick="getAttributes()">Click here to get  attributes value</button>  
  </body>
</html> 
```

## 2 task

Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.

```html
<!DOCTYPE html>  
<html>
  <head>  
    <meta charset=utf-8 />  
    <title>JS DOM paragraph style</title>  
  </head>   
  <body>  
    <p id ='text'>JavaScript Exercises - w3resource</p>   
    <div>  
    <button id="jsstyle"  
    onclick="js_style()">Style</button>  
    </div>  
  </body>  
</html>  
```

## 2 задание

Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» — значит нет дочерних узлов, даже текстовых.

```javascript
if (/*...ваш код проверки elem... */)  {
 узел elem пуст 
}
```

Что написать в условии if ?

## 3 задание

Создайте таблицу с 10 стороками и столбцами!
Напишите код, который выделит все ячейки в таблице по диагонали.
Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

```javascript
// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';

```

## 4 задание

В вашей html файле создайте кнопку "Up" которая будет находиться в правом нижнем углу страницы. Сделайте так чтобы эта кнопка была невидимая до тех пор, пока юзер не прокрутит страницу до самого низу ( сделайте высоту body своего доккмента хотябы 1500px)
При нажатии на кнопку вас будет пробрасывать вверх (либо найдите реализацию в интеренете либо сделайте это через якоря и ссылки)

## 5 задание

Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID 

P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!

## 6 задание

Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент и добавять его в конец страницы! 

## 7 задание

Создайте функцию addChildrenTo(block, count, type) которая будет создавать внутри block count количество детей типа type ( type это будет тип блока например 'span, ul, li, div' и т.д.  )

## 8 задание

Напишите функцию replaceElBy(blockCurrent, blockToReplace) которая будет заменять blockCurrent на blockToReplace и выводить сообщение пользователю после успешного проведения операции!

## 9 задание

Создайте элемент #test. По клику на него выведите название его тега.

## 10 задание

Создайте элемент #test. По клику на него выведите название его тега в нижнем регистре.

## 11 задание

Создайте пару элементов с классом .www. Добавьте каждому элементу в название класса еще дополнительно название его тега в нижнем регистре.

## 12 task

Создайте ol. Вставьте ему в конец li с текстом 'пункт'.

## 13 task
 
Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

## 14 task

Дан массив. Создайте div через createElement, затем вставьте каждый элемент этого массива в отдельный p 
внутри этого div, затем вставьте этот div в конец body.

## 15 task

Дан элемент #test. Вставьте перед ним абзац с текстом '!!!'.

## 16 task

Create function testNum() that will take 1 param: phone number string and define whether it have more than 8 symbols, 
contain only numbers (no slashes and spaces, if have replace them to empty string).

After that create an html page with input field and button, where user will write his/her phone number, 
after user press enter button on the right your function testNum() will check the phone number he enters 
and return to user ok (create span under the input field (color of text must be green)) - if pattern match, 
or error (the same create span with "error" text under (color of text must be red));

After 4 seconds delete the span and the input field should be empty again an the user can try again later.

```javascript
setTimeout(function () {
 // тут пишем наш код который будет выплняться через 4 секунды
}, 4000);
```

## 17 task

Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве.

Две соседние буквы не должны иметь одинаковый цвет.

## 18 task

Даны li. После каждой li вставьте точно такую же.

## 19 task

Дан ul. Вставьте в его начало li с текстом 'пункт' и классом 'www'. Решите задачу на чистом JavaScript.

