//TypeScript 中类的用法

//1、public private 和 protected
//public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
//protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

//2、抽象类
abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

let a = new Animal('Jack');//报错，抽象类不可以被实例化

class Cat extends Animal {//报错，没有实现抽象方法sayHi
    public eat() {
        console.log(`${this.name} is eating.`);
    }
}

let cat = new Cat('Tom');

//3、类的类型
class Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    sayHi(): string {
        return `My name is ${this.name}`
    }
}

let b: Animal2 = new Animal2('Jack');
b.sayHi();