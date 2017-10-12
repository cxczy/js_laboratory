//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

//定义一对值分别为 string 和 number 的元组：
let cxczy: [string, number] = ['cxczy', 25];

//当赋值或访问一个已知索引的元素时，会得到正确的类型：
let tp1: [string, number];
tp1[0] = 'cxczy';
tp1[1] = 25;

tp1[0].slice(1);
tp1[1].toFixed(2);

//也可以只赋值其中一项：
let tp2: [string, number];
tp2[0] = 'cxczy';

//但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let tp3: [string, number];
tp3 = ['cxczy', 25];

let tp4: [string, number] = ['cxczy'];//报错

//越界的元素
//当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型：
let tp5: [string, number];
//数组的第三项满足联合类型 string | number
tp5 = ['cxczy', 25, 'male'];
////数组的第三项不满足联合类型 string | number
tp5 = ['cxczy', 25, true];//报错
//当访问一个越界的元素，也会识别为元组中每个类型的联合类型：
let tp6: [string, number];
tp6 = ['cxczy', 25, 'male'];
tp6[2].slice(1);//报错,如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的属性或方法。