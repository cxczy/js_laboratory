/**
 * Created by Administrator on 2017/9/28.
 */
var fs = require('fs');
var path = require('path');
var r = path.resolve;

var src = r('../assets/1.txt')
var dst = r('../assets/4.txt')
//当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，我们就需要用到数据流。
//NodeJS中通过各种Stream来提供对数据流的操作。

var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause()
    }
});

rs.on('end', function () {
    ws.end()
});

//Stream基于事件机制工作，所有Stream的实例都继承于NodeJS提供的EventEmitter。

//如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。
//我们可以根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，
//并根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。
//NodeJS直接提供了.pipe方法来做这件事情，其内部实现方式与上边的代码类似。