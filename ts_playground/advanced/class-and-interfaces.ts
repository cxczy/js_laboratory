//类实现接口
//举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
//这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：
interface Alarm {
    alert()
}

interface Light {
    lightOn();
    lightOff();
}

class Door {

}

class securityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert')
    }
}

//一个类可以实现多个接口：
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert')
    }
    lightOn() {
        console.log('Car light on')
    }
    lightOff() {
        console.log('Car light off')
    }
}

//2、接口继承接口
interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}

//3、接口继承类
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
}

//4、混合类型
//可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
    (source: string, substring: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (source: string, substring: string) {
    return source.search(substring) !== -1
}

//有时候，一个函数还可以有自己的属性和方法：
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter
}

let c = getCounter();
c.reset();
c.interval = 5.0;