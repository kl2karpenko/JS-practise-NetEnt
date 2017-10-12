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

Write a JavaScript program to remove items from a dropdown list.

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

Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 5 сек. Элемент который вы будете показывать уже создан на вашей странице просто он невидим.


```javascript
setTimeout(function () {
 // тут пишем наш код который будет выполняться через 5 секунд
}, 5000);
```

```javascript
/**
 * Показывает уведомление, пропадающее через 5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
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
  top: 10,
  right: 10,
  show: true
});

// спрячет элемент
showNotification({
  show: false
});
```

## 6 task

Запретите водить некоторые символы в инпут (например, a, b, c, d, e). Любые другие символы должны вводится, а эти просто не будут появлятся, сколько бы мы ни жали на них.

## 7 task

Дан инпут. При введени в него числа он должен отделять тройки чисел пробелами (по мере ввода).

## 8 task

Даны 4 инпута. Сделайте так, чтобы, как только в первый инпут вводится 2 символа, фокус ввода переносился на второй инпут, потом на третий и потом на 4 тый.

## 9 task

Сделайте два поля ввода, в которые пользователь будет вводить ширину и высоту. Сделайте блок, который будет менять свои размеры на введённые.

## 10 task

Дана таблица произвольного размера. По нажатию на ячейку таблицы эта ячейка красится красным фоном ("активируется"). Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали, таблица блокировалась (то есть нельзя больше будет активировать ячейки) и выводилось сообщение "завершение активаций".

P.S. Хитрый прием с копировать и вставить из буфера обмена тоже нужно отловить, равно как и другие обходные пути.

## 11 task

Дан инпут. В него разрешено вводить N символов. При введение текста справа появляется счетчик такого типа - "Осталось ввести 10 символов". После того, как предел достигнут - текст все равно разрешено вводить, только надпись будет типа "Лимит превышен на 10 символов". Вместо 10-ти, конечно же, нужное число.
