//任意值（Any）用来表示允许赋值为任意类型。

//1、什么是任意值类型
//如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let str1: string = 'seven';
str1 = 7;//报错

//但如果是 any 类型，则允许被赋值为任意类型。
let any1: any = 'clearlove';
any1 = 7;//clearlove

//2、任意值的属性和方法
//在任意值上访问任何属性都是允许的：
let any2: any = `hello`;
console.log(any2.foo);
console.log(any2.foo.bar);
//也允许调用任何方法：
any2.foo(1).bar.baz('666');
//可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

//3、未声明类型的变量
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let any3;
any3 = 'seven';
any3 = 7;
any3.foo.bar();