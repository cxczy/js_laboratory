/**
 * Created by Administrator on 2017/9/28.
 */
var chai = require('chai') ,
    expect = chai.expect ,
    should = chai.should()

//JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造，例如：
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])

//Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节，例如：
expect(bin[0]).to.equal(0x68)

//Buffer与字符串能够互相转化，例如可以使用指定编码将二进制数据转化为字符串：
var str = bin.toString('utf-8');
expect(str).to.equal('hello')