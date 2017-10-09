/**
 * Created by Administrator on 2017/9/28.
 */
var path = require('path');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
//几个常用的API。

//1、path.normalize
//将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作为某些数据的索引，但又允许用户随意输入路径时，就需要使用该方法保证路径的唯一性。以下是一个例子：
var cache = {};

function store(key, value) {
    cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
expect(cache['foo\\bar']).to.equal(1);
store('foo//baz//../bar', 2);
expect(cache['foo\\bar']).to.equal(2);
////坑出没注意： 标准化之后的路径里的斜杠在Windows系统下是\，而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用.replace(/\\/g, '/')再替换一下标准路径。

//2、path.join
//将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符。以下是一个例子：
var temp = path.join('foo/', 'baz/', '../bar'); // => "foo/bar"
expect(temp).to.equal('foo\\bar');

//3、path.extname
//当我们需要根据不同文件扩展名做不同操作时，该方法就显得很好用。以下是一个例子：
var temp2 = path.extname('foo/bar.js');
expect(temp2).to.equal('.js');