//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
//TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

//1、简单的例子
interface Person1 {
    name: string;
    age: number;
}

let p1: Person1 = {
    name: 'cxczy',
    age: 25,
}
//形状必须和接口Person一致（定义的变量属性不能多也不能少）。

//2、可选属性
interface Person2 {
    name: string;
    age?: number;
}

let p2: Person2 = {
    name: 'cxczy',    
}
//可选属性的含义是该属性可以不存在。
//这时仍然不允许添加未定义的属性：

//3、任意属性
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let p3: Person3 = {
    name: 'cxczy',
    gender: 'male',
    qq: '10000',
}

//使用 [propName: string] 定义了任意属性取 string 类型的值。
//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: string;
}

let p4: Person4 = {
    name: 'cxczy',
    age: 25,
    gender: 'male',
}
//上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了

//4、只读属性
//对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let p5: Person5 = {
    id: 89757,
    name: 'cxczy',
    gender: 'male',
}

p5.id = 9527;//报错

//只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
let p6: Person5 = {//报错：对象赋值没有给id赋值
    name: 'cxczy'
}

p6.id = 89757;//报错：只读属性不能再赋值