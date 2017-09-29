/**
 * Created by Administrator on 2017/9/28.
 */
var fs = require('fs')
var path = require('path');
var r = path.resolve;
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
//NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：
var src = r('../assets/1.txt')

//文件属性读写。
//其中常用的有fs.stat、fs.chmod、fs.chown等等。
fs.stat(src, function (err, data) {
    if (err) {
        console.log(err)
    }
    else {
        expect(data.ctime).to.exist //文件有创建时间
    }
})

//chmod是一条在Unix系统中用于控制用户对文件的权限的命令（change mode单词前缀的组合）和函数。see: https://zh.wikipedia.org/wiki/Chmod
//只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式，符号模式指定文件的权限
fs.chmod(src, 0, function (err, data) {
    if (err) {
        console.log(err)
    }
    else {

    }
})

//文件内容读写。
//其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。
fs.mkdir(r('../assets/mkdir'), function (err, data) {
    if (err) {
        if (err.code === 'EEXIST') {
            fs.rmdirSync(r('../assets/mkdir'))
        }
    }
    else {

    }
})


//底层文件操作。
//其中常用的有fs.open、fs.read、fs.write、fs.close等等。

//如上边代码所示，基本上所有fs模块API的回调参数都有两个。第一个参数在有错误发生时等于异常对象，第二个参数始终用于返回API方法执行结果。
//此外，fs模块的所有异步API都有对应的同步版本，用于无法使用异步操作时，或者同步操作更方便时的情况。
// 同步API除了方法名的末尾多了一个Sync之外，异常对象与执行结果的传递方式也有相应变化。同样以fs.readFileSync为例：
try {
    var data = fs.readFileSync(r('../assets/1.txt'));
    console.log(data)
} catch (err) {
    console.log(err)
}