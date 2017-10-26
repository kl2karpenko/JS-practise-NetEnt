# Домашнее задание по JS.

#### Links for additional info:
* https://learn.javascript.ru/types-conversion

## 1 задание

Что будет в результате следующих операций:

```javascript
var one = "1" + 2 + 3;
var two = 4 + false + "5" + 6;
var three = 7 + true + 6 + "8";
var four = false + true;
```

## 2 задание

Каким будет результат следующих выражений:

```javascript
var t = 0;
var h = 8;

t && h && console.log(9);
```

## 3 задание

Каким будет результат следующих выражений:

```javascript
var pr = 9;
var g = 0;

(g || pr) && console.log(9);
```

## 4 задание

Каким будет результат следующих выражений:

```javascript
var i = '1';
var j = 8;
var m = 7;

(m - j) == j;
(m - j) === j;

(m - 6) && j && console.log('Hi');
```

## 5 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;
delete obj.i;

console.log(phrase);
```

## 6 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var num = obj.i.y;

obj.i.y = obj.i.y + 1;

console.log(num, obj.i.y);
```

## 7 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var arr = obj.h;

obj.h[1] = 9;

console.log(arr[1], obj.h[1]);
```
