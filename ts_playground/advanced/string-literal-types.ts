//字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    //...
}

handleEvent(document.getElementById('hello'), 'scroll');
handleEvent(document.getElementById('world'), 'dvclick');//报错

//注意，类型别名与字符串字面量类型都是使用 type 进行定义。
