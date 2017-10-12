//类型断言（Type Assertion）可以用来绕过编译器的类型推断，手动指定一个值的类型（即程序员对编译器断言）。
//语法
//<类型>自豪 或 值 as 类型

//例子：将一个联合类型的变量指定为一个更加具体的类型

function getLength(sth: string | number): number {
    if ((<string>sth).length) {
        return (<string>sth).length
    } else {
        return sth.toString().length
    }
}

function getLength2(sth: string | number): number {
    if ((sth as string).length) {
        return (sth as string).length
    } else {
        return sth.toString().length
    }
}