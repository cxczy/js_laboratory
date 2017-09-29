/**
 * Created by Administrator on 2017/9/28.
 */
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

//JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造，例如：
var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

//Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节，例如：
expect(bin[0]).to.equal(0x68);

//Buffer与字符串能够互相转化，例如可以使用指定编码将二进制数据转化为字符串：
var str = bin.toString('utf-8');
expect(str).to.equal('hello');

//或者反过来，将字符串转换为指定编码下的二进制数据：
var bin1 = new Buffer('hello', 'utf-8');
expect(bin1).to.deep.equal(bin);//use deep-equal

//Buffer与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。
//而.slice方法也不是返回一个新的Buffer，而更像是返回了指向原Buffer中间的某个位置的指针
//因此对.slice方法返回的Buffer的修改会作用于原Buffer，例如：
var bin2 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var sub = bin2.slice(2);
sub[0] = 0x65;  //=> <Buffer 68 65 65 6c 6f>
expect(bin2).to.not.deep.equal(bin);

//也因此，如果想要拷贝一份Buffer，得首先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去。
//这个类似于申请一块新的内存，并把已有内存中的数据复制过去。以下是一个例子。
var dup = new Buffer(bin.length)
bin.copy(dup)
expect(dup).to.deep.equal(bin);
dup[0] = 0x48; //修改拷贝的新Buffer
expect(dup).to.not.deep.equal(bin);

//总之，Buffer将JS的数据处理能力从字符串扩展到了任意二进制数据。