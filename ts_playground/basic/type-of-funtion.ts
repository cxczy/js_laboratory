//1、函数声明
//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2);
sum(1, 2, 3);//输入多余
sum(1);//输入少了

//2、函数表达式

let mySum1 = function (x: number, y: number): number {
    return x + y;
};
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
//如果需要我们手动给 mySum 添加类型，则应该是这样：

let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

//3、接口中函数的定义
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}

//4、可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

let cxczy = buildName('cx', 'czy');
let czy = buildName('cx');
//需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：

//5、参数默认值
//TypeScript 会将添加了默认值的参数识别为可选参数：

function buildName2(firstName: string, lastName: string = 'czy') {
    return firstName + ' ' + lastName
}
//此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName3(firstName: string = 'cx', lastName: string) {
    return firstName + ' ' + lastName
}

//6、剩余参数
//事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item)
    });
}

//7、重载
//我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}
//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果由包含关系，需要优先把精确的定义写在前面。