#### Links for additional info:

* https://itvdn.com/ru/blog/article/programing-javascript
* https://habrahabr.ru/post/138062/
* https://learn.javascript.ru/settimeout-setinterval
* https://learn.javascript.ru/promise#итого
* https://habrahabr.ru/company/zerotech/blog/317256/


## 1 task

Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное число. (используйте setTimeout)

## 2 task

Выполните 1 задание используя только setInterval

## 3 task

Создайте страницу с блоком таймера и 2 кнопки - Стоп, Старт и Пауза. <br/>
При нажатии на Старт - Создайте отсчет от 0 до бесконечности.<br/>
При нажатии на Стоп остновите отсчет и обнулите его.<br/>
При нажатии на Пауза остновите отсчет и поменяйте текст кнопки на Продолжить.<br/>
При нажатии на Продолжить возобновите отсчет.

## 4 task

Создайте часы, которые будут показывать текущее время: часы:минуты:секунды в формате 00:00:00.

## 5 task

Создайте таймер обратного отсчета c той же логикой что и во 2 задании. С кнопками и действиями на них.

## 6 task

Создайте отсчет в формате (часы:минуты:секунды)00:00:00 от текущего времени (через Date.now() или new Date()) до полуночи.

## 7 task

Создайте галерею с картинкаи - 4 фотографии в подряд которые будут меняться как в слайдере каждые 4 секунды
(соотвественно html css должен быть такой чтобы было вижно как они меняються)

## 8 task

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
