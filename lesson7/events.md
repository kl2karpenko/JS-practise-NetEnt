#### Links for additional info:

* https://learn.javascript.ru/introduction-browser-events
* https://learn.javascript.ru/events-and-timing-depth
* https://learn.javascript.ru/obtaining-event-object
* https://learn.javascript.ru/event-bubbling
* https://learn.javascript.ru/event-delegation
* https://learn.javascript.ru/default-browser-action
* https://learn.javascript.ru/dispatch-events
* https://learn.javascript.ru/onload-ondomcontentloaded
* https://learn.javascript.ru/onload-onerror
* https://learn.javascript.ru/onscroll
* https://learn.javascript.ru/keyboard-events
* https://learn.javascript.ru/mouse-clicks
* https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
* https://learn.javascript.ru/mousewheel
* https://learn.javascript.ru/fixevent
* http://javascript.ru/tutorial/events/comparison
* http://javascript.ru/tutorial/events/crossbrowser
* http://javascript.ru/tutorial/events/properties
* http://javascript.ru/tutorial/events/intro

## task form lesson 

```html
  <form action="">
    <div>
      <input type="text">
      <!-- here is text -->
    </div>

    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <!-- here is text -->
    </div>

    <div>
      <input type="checkbox">
      <!-- this is checked = true -->
    </div>

    <button>Submit</button>
  </form>

  <script>
    document.querySelector('form').addEventListener('submit', function (evt) {
      // if all the conditions true do noting
      // else if something is false we should do this:
      // evt.preventDefault();
    });
  </script>
```

## 1 task

Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. 

```html
<!DOCTYPE html>  
<html>
 <head>
 <meta charset=utf-8 />  
 <title>Change the content of a cell</title>  
 </head>
 <body>  
  <table id="myTable" border="1">  
  <tr><td>Row1 cell1</td>  
  <td>Row1 cell2</td></tr>  
  <tr><td>Row2 cell1</td>  
  <td>Row2 cell2</td></tr>  
  <tr><td>Row3 cell1</td>  
  <td>Row3 cell2</td></tr>  
  </table><form>  
  <input type="button" onclick="changeContent()" value="Change content">  
  </form>
 </body>
</html>  
```

## 2 task

Write a JavaScript program to remove selected item from a dropdown list.

```html
<!DOCTYPE html>  
<html>
 <head>  
  <meta charset=utf-8 />  
  <title>Remove items from a dropdown list</title>  
 </head>
 <body>
  <form>  
   <select id="colorSelect">  
    <option>Red</option>  
    <option>Green</option>  
    <option>White</option>  
    <option>Black</option>  
   </select>
   <input type="button" onclick="removecolor()" value="Select and Remove">
  </form>
 </body>
</html>  
```

## 3 task

Write a JavaScript program to highlight the bold words with yellow background of the following paragraph, on mouse over on it. 

Text example:

```html
<strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
```

## 4 task

Write a JavaScript function to add rows to a table. 

```html
<!DOCTYPE html>  
<html>
    <head>
        <meta charset=utf-8 />  
        <title>Insert row in a table - w3resource</title>  
    </head>
    <body>  
        <table id="sampleTable" border="1">  
        <tr><td>Row1 cell1</td>  
        <td>Row1 cell2</td></tr>  
        <tr><td>Row2 cell1</td>  
        <td>Row2 cell2</td></tr>  
        </table>
        
        <input type="button" onclick="insert_Row()" value="Insert row">   
    </body>
</html>  
```

## 5 task

Напишите функцию showNotification(options), которая показывает/скрывает уведомление. 
Элемент уведомление (попап) создайте с помощью html,css и добавьте на страницу, по началу он будет невидимый.

Создайте также 2 кнопки при нажатии на 1 = мы показываем елемент, при нажатии на 2 - скрываем


```javascript
setTimeout(function () {
 // тут пишем наш код который покажет наш элемент пользователю
}, 5000);
```

```javascript
/**
 * Показывает или прячет уведомление
 *
 * @param options.show {boolean} показать.скрыть элемент
 */
function showNotification(options) {
  // ваш код
}
```

Example of usage:

```javascript
// покажет элемент справа-сверху окна
showNotification({
  show: true
});

// прячет элемент
showNotification({
  show: false
});
```

## 6 task

На html странице создайте input[type=text]. Запретите водить в инпут символы a, b, c, d, e. 
Любые другие символы должны вводится.

## 7 task

Дан инпут. При введени в него числа он должен отделять тройки чисел точкой (по мере ввода).
Например, если я ввожу число: 
1 = без изменений
10 = без изменений
100 = без изменений
1000 = число измениться на 1.000

## 8 task

На html странице создайте 4 input[type=text]
Сделайте так, чтобы, в инпут можно было вводить не более 2 символов, когда в инпут ввели 2 или более символов, фокус ввода переносился на следующий инпут, и так со всеми остальными. 
Если это полседний инпут фокус переноситься на 1 = если у него длинна символов < 2, или по аналогии на 2-3 и тд. 
Если во всех инпутах длинна символов превишает 2 то тогда мы просто убираем фокус с инпута и говорим пользователю через alert("Вы ввели все данные")

## 9 task

Сделайте два поля ввода, в которые пользователь будет вводить ширину и высоту. Сделайте блок, который будет менять свои размеры когда вы будете менять данные в input которые отвечают за ширину и высоту.

## 10 task

Дана таблица произвольного размера. По нажатию на ячейку таблицы эта ячейка красится красным фоном ("активируется"). Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали, таблица блокировалась (то есть нельзя больше будет активировать ячейки) и выводилось сообщение "завершение активаций".

## 11 task

Дан инпут. В него разрешено вводить N символов. При введение текста справа появляется счетчик такого типа - "Осталось ввести 10 символов". После того, как предел достигнут - текст все равно разрешено вводить, только надпись будет типа "Лимит превышен на 10 символов". Вместо 10-ти, конечно же, число в вашем конкретном случае.

## 12 task

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

## 13 task

```javascript
/* TODO: add task with form */
```