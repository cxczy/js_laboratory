//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
//1、简单的例子
//首先，我们来实现一个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

createArray(3, 'x'); // ['x', 'x', 'x']
//上例中，我们使用了之前提到过的数组泛型来定义返回值的类型。
//这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：
//Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
//这时候，泛型就派上用场了：

function createArray2<T>(length: number, value: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

//接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来：
createArray2<string>(3, 'x'); // ['x', 'x', 'x']
createArray2(3, 'x'); // ['x', 'x', 'x']

//2、多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap([7, 'seven'])

//3、泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);//泛型 T 不一定包含属性 length
    return arg;
}
//这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface Lengthwise {
    length: number
}
//我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity2('seven');
loggingIdentity2(7);//报错

//多个类型参数之间也可以互相约束：
function copyFiles<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFiles(x, { b: 10, d: 20 });
//上例中，我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。

//4、泛型接口
//可以使用含有泛型的接口来定义函数的形状：
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc;
createArray3 = function <T>(length: number, value: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

createArray3(3, 'x')

//进一步，我们可以把泛型参数提前到接口名上：
interface CreateArrayFunc2<T {
    (length: number, value: T): Array<T>
}

//5、泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y };