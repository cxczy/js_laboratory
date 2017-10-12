//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

//1、简单的例子
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

//事实上，上面的例子会被编译为：
// var Days;
// (function (Days) {
//   Days[Days["Sun"] = 0] = "Sun";
//   Days[Days["Mon"] = 1] = "Mon";
//   Days[Days["Tue"] = 2] = "Tue";
//   Days[Days["Wed"] = 3] = "Wed";
//   Days[Days["Thu"] = 4] = "Thu";
//   Days[Days["Fri"] = 5] = "Fri";
//   Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));

//2、手动赋值
enum Days2 { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };

console.log(Days2["Sun"] === 7); // true
console.log(Days2["Mon"] === 1); // true
console.log(Days2["Tue"] === 2); // true
console.log(Days2["Sat"] === 6); // true
//上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。
//如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
//所以使用的时候需要注意，最好不要出现这种覆盖的情况。

//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查 (编译出的js仍然是可用的)：
enum Days3 { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S" };

//当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
enum Days4 { Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat };

console.log(Days4["Sun"] === 7); // true
console.log(Days4["Mon"] === 1.5); // true
console.log(Days4["Tue"] === 2.5); // true
console.log(Days4["Sat"] === 6.5); // true

//3、常数项和计算所得项
//一个典型的计算所得项的例子：
enum Color { Red, Green, Blue = "blue".length };
//上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错


//4、常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
//上例的编译结果是：
//var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

//5、外部枚举
declare enum Directions2 {
    Up,
    Down,
    Left,
    Right
}

let directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//上例的编译结果是：
//var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//外部枚举与声明语句一样，常出现在声明文件中。

//同时使用 declare 和 const 也是可以的：

declare const enum Directions3 {
    Up,
    Down,
    Left,
    Right
}

//TypeScript 的枚举类型的概念来源于 C#。