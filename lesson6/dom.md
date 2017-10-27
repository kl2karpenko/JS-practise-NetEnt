#### Links for additional info:
* https://learn.javascript.ru/browser-environment
* https://learn.javascript.ru/dom-nodes
* https://learn.javascript.ru/dom-console
* https://learn.javascript.ru/traversing-dom
* https://learn.javascript.ru/styles-and-classes
* https://learn.javascript.ru/attributes-and-custom-properties
* https://learn.javascript.ru/searching-elements-dom
* https://learn.javascript.ru/searching-elements-internals
* https://learn.javascript.ru/basic-dom-node-properties
* https://learn.javascript.ru/dom-polyfill
* https://learn.javascript.ru/attributes-and-custom-properties
* https://learn.javascript.ru/compare-document-position
* https://learn.javascript.ru/modifying-document
* https://learn.javascript.ru/document-write

# Домашнее задание по JS.

## 1 задание

Создать функцию которая будет создавать html таблицу с цветом фона подобным шахматной доске. 

Функция будет принимать три аргумента: 

1. fcolor – первый цвет таблицы
2. scolor – второй цвет ячеек таблицы
3. contents – массив, содержимое которого может выводиться в таблице.

* для закрашивания цветом ячейки воспользуйтесь своством style.backgroundColor,
например document.body.style.backgroundColor = 'red' закрасит цвет body в красный цвет то же самое и для ячейки 

## 2 задание

Напишите функцию которая вовращает html код таблицы размером NхM.

Каждая ячейка будет заполняться случайной буквой русского алфавита и случайным цветом фона

P.S. Для выполнения задания, воспользуйтесь методом random() объекта Math; кроме того создайте массив в элементами – буквами алфавита)


## 3 task

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
  </body>
</html> 
```

## 4 task

Here is a sample html file with a submit button. 
Modify the style of the paragraph text through javascript code.

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

## 5 задание

Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» — значит нет дочерних узлов, даже текстовых.

```javascript
if (/*...ваш код проверки elem... */)  {
 // узел elem пуст 
}
```

Что написать в условии if ?

## 6 задание

Напишите функцию createElementInBlock(blockLink, elementName) которая будет создавать элемент в блоке elementName (это может быть любой элемент селектор существующего блока на странице)

P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!

## 7 задание

Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент и добавять его в конец страницы! 

P.S.: Для клонирование элемента используйте метод cloneNode (в презентации есть примеры)

## 8 задание

Создайте функцию addChildrenTo(block, count, type) которая будет создавать внутри block count количество детей типа type ( type это будет тип блока например 'span, ul, li, div' и т.д.  )

## 9 задание

Напишите функцию replaceElBy(blockCurrent, blockToReplace) которая будет заменять blockCurrent на blockToReplace и выводить сообщение пользователю после успешного проведения операции!

## 10 задание

Создайте пару элементов с классом 'www'. Добавьте каждому элементу в название класса еще дополнительно название его тега в нижнем регистре.

## 12 task

Создайте ol. Вставьте ему в конец li с текстом 'пункт'.

## 13 task
 
Создайте функцию которая принимает массив с элементами, создайте на странице список ul и выведите все элементы массива в отдельный элемент списка li&

## 14 task

Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве.

Две соседние буквы не должны иметь одинаковый цвет.

## 15 task

Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве.

Две соседние буквы не должны иметь одинаковый цвет.

