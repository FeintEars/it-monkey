class A {
  constructor(x) {
    this.x = x;
    this.y = 100;
  }
}

class ErrorNotA extends Error {
  constructor() {
    this.message = "This is not an instance of A";
  }
  static check(obj) {
    if (obj instanceof A) {
    } else {
      throw new ErrorNotA();
    }
  }
}

class B {
  constructor(a) {
    this.a = a;
    ErrorNotA.check(a);
  }
}

const a = new A(23);

console.log (a);
 
const b = new B (a)

console.log (b)

const t = new B (a)
 console.log (t)

/*




4. Створимо клас B, конструктор якого приймає 1 параметр. Властивість a (або this.a) цього класу буде
 прирівнюватись до цього параметру. Перш ніж ініціалізувати цю властивість в конструкторі, виконаємо 
 перевірку параметру за допомогою статичного методу ErrorNotA.check(a)
5. Створимо об'єкт класу А і використаємо його для створення об'єкту класу B.*/
