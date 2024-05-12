




/*
1. Функція copy(),
приймає масив і повертає його копію.
Приклад: copy([15, 100, 55]) повертає [15, 100, 55]
*/
function copy(arr) {
  let res = [];
  for (let i in arr) {
    res[i] = arr[i];
  }
  return res;
}

const copiedArr = copy([15, 100, 55]);
console.log('1) copy([15, 100, 55]) returns:');
console.log(copiedArr);
console.log('');

/*
2. Функція push(),
яка приймає масив і додатковий елемент, і повертає копію вхідного масиву з доданим елементом в кінці цього масиву.
Приклад: push([15, 10, 7], 40) повертає [15, 10, 7, 40]
*/
function push(arr, el) {
  let res = copy(arr);
  res[res.length] = el;
  return res;
}

const pushedArr = push([15, 10, 7], 40);
console.log('2) push([15, 10, 7], 40) returns:');
console.log(pushedArr);
console.log('');

/*
3. Функція unshift(),
яка приймає масив і додатковий елемент, і повертає копію вхідного масиву з доданим елементом на початку цього масиву.
Приклад: unshift([5, 1, 33, 300], 8) повертає [8, 5, 1, 33, 300]
*/
function unshift(arr, el) {
  let res = [el];
  for (let i = 0; i < arr.length; i++) {
    res[i + 1] = arr[i];
  }
  return res;
}

const unshiftedArr = unshift([5, 1, 33, 300], 8);
console.log('3) unshift([5, 1, 33, 300], 8) returns:');
console.log(unshiftedArr);
console.log('');

/*
4. Функція pop(),
яка приймає масив і повертає його копію без останнього елемента.
Приклад: pop([8, 1, 10]) повертає [8, 1]
*/
function pop(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res[i] = arr[i];
  }
  return res;
}

const poppedArr = pop([8, 1, 10]);
console.log('4) pop([8, 1, 10]) returns:');
console.log(poppedArr);
console.log('');

/*
5. Функція shift(),
яка приймає масив і повертає його копію без першого елемента.
Приклад: shift([9, 20, 6]) повертає [20, 6]
*/

function shift(arr) {
  let res = [];
  for (let i = 1; i < arr.length; i++) {
    res[i - 1] = arr[i];
  }
  return res;
}

const shiftedArr = shift([9, 20, 6]);
console.log('5) shift([9, 20, 6]) returns:');
console.log(shiftedArr);
console.log('');

/*
6. Функція reverse(),
яка приймає масив і повертає його копію в зворотному порядку.
Приклад: reverse([11, 18, 17, 20]) повертає [20, 17, 18, 11]
*/

function reverse(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[arr.length - 1 - i];
  }
  return res;
}

const reversedArr = reverse([11, 18, 17, 20]);
console.log('6) reverse([11, 18, 17, 20]) returns:');
console.log(reversedArr);
console.log('');

/*
7. Функція concat(),
яка приймає два масиви і повертає їхнє об'єднання.
Приклад: concat([1, 16, 17, 10], [77, 58]) повертає [1, 16, 17, 10, 77, 58]
*/

function concat(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    res[arr1.length + i] = arr2[i];
  }
  return res;
}

const concatedArr = concat([1, 16, 17, 10], [77, 58]);
console.log('7) concat([1, 16, 17, 10], [77, 58]) returns:');
console.log(concatedArr);
console.log('');

/*
8. Функція slice(),
яка приймає масив, початковий і кінцевий індекси, і повертає копію вхідного масиву в заданому діапазоні.
Приклад: slice([17, 10, 11, 20, 18, 17, 20, 11], 2, 4) повертає [11, 20, 18]
*/

function slice(arr, start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    res[i - start] = arr[i];
  }
  return res;
}

const slicedArr = slice([17, 10, 11, 20, 18, 17, 20, 11], 2, 4);
console.log('8) slice([17, 10, 11, 20, 18, 17, 20, 11], 2, 4) returns:');
console.log(slicedArr);
console.log('');

/*
9. Функція includes(),
яка приймає масив і елемент, і повертає true, якщо елемент входить в масив, і false, якщо не входить.
Приклад: includes([15, 100, 55], 55) повертає true
Приклад: includes([15, 100, 55], 10) повертає false
*/

function includes(arr, el) {
  for (let i in arr) {
    if (arr[i] === el) {
      return true;
    }
  }

  return false;
}

const included1 = includes([15, 100, 55], 55);
console.log('9.1) includes([15, 100, 55], 55) returns:');
console.log(included1);
console.log('');

const included2 = includes([15, 100, 55], 10);
console.log('9.2) includes([15, 100, 55], 10) returns:');
console.log(included2);
console.log('');

/*
10. Функція indexOf(),
яка приймає масив і елемент, і повертає індекс елемента в масиві, або -1, якщо елемент не входить в масив.
Приклад: indexOf([15, 55, 100, 65, 54], 65) повертає 3
Приклад: indexOf([15, 55, 100, 65, 54], 10) повертає -1
*/

function indexOf(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }

  return -1;
}

const index1 = indexOf([15, 55, 100, 65, 54], 65);
console.log('10.1) indexOf([15, 55, 100, 65, 54], 65) returns:');
console.log(index1);
console.log('');

const index2 = indexOf([15, 55, 100, 65, 54], 10);
console.log('10.2) indexOf([15, 55, 100, 65, 54], 10) returns:');
console.log(index2);
console.log('');