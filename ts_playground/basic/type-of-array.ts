//1、「类型 + 方括号」表示法
let fibonacci1: number[] = [1, 1, 2, 3, 5];

//数组的项中不允许出现其他的类型：
let fibonacci2: number[] = [1, '1', 2, 3, 5];//报错
//此时 [1, '1', 2, 3, 5] 的类型被推断为 (number | string)[]，这是联合类型和数组的结合。

let fibonacci3: number[] = [1, 1, 2, 3, 5];
fibonacci3.push('8');//报错

//2、数组的泛型
let fibonacci4: Array<number> = [1, 1, 2, 3, 5];

//3、用接口表示数组
interface NumberArray {
    [index: number]: number;
}
//只要 index 的类型是 number，那么值的类型必须是 number。

let fibonacci5: NumberArray = [1, 1, 2, 3, 5];

//4、any 在数组中的应用
let list: any[] = ['cxczy', 25, { gender: 'male' }];

//5、类数组
//类数组（Array-like Object）不是数组类型，比如 arguments：
function sum1() {
    let args: number[] = arguments;//报错
}
//事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum2() {
    let args: IArguments = arguments;//正确
}