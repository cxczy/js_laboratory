//ECMAScript 的内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

//DOM 和 BOM 提供的内置对象有：
//Document、HTMLElement、Event、NodeList 等。
let body: HTMLElement = document.body;
let allDiv = NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
    //..
})

//当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：
Math.pow(10, '2');

// interface Math {
//     /**
//      * Returns the value of a base expression taken to a specified power.
//      * @param x The base value of the expression.
//      * @param y The exponent value of the expression.
//      */
//     pow(x: number, y: number): number;
//   }

//注意，TypeScript 核心库的定义中不包含 Node.js 部分。
//需要引入第三方声明文件： npm install @types/node --save-dev