//JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
//原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

//1、布尔值
//在 TypeScript 中，使用 boolean 定义布尔值类型：
let isDone: boolean = false;

//注意，使用构造函数 Boolean 创造的对象不是布尔值：
let createdByNewBoolean: boolean = new Boolean(1);////报错

//在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
//其他基本类型（除了 null 和 undefined）一样，不再赘述。

//2、数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNunber: number = Infinity;

//3、字符串
let myName: string = 'cxzcy';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next year`;

//4、空值
//JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is cxczy')
}
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unsuable: void = undefined;

//5、Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num1: number = undefined;
//而 void 类型的变量不能赋值给 number 类型的变量：
let num2: number = unsuable;////报错