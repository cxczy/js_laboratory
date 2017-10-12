//联合类型（Union Types）表示取值可以为多种类型中的一种。
//1、简单的例子
let union1: string | number;
union1 = 'seven';
union1 = 7;
union1 = false;//报错

//2、 访问联合类型的属性或方法
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(param1: string | number): number {
    return param1.length
}
//上例中，length 不是 string 和 number 的共有属性，所以会报错。
//而访问 string 和 number 的共有属性是没问题的：
function getString(param1: string | number): string{
    return param1.toString()
}

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let clearlove: string | number;
clearlove = 'seven';
console.log(clearlove.length);
clearlove = 7;
console.log(clearlove.length);//报错