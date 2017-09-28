/**
 * Created by Administrator on 2017/9/28.
 */
var fs = require('fs')
var path = require('path')
var r = path.resolve

function copy_small_file(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src))
}

function copy_big_file(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function test() {
    copy_small_file(r('./assets/1.txt'), r('./assets/2.txt'))
    copy_big_file(r('./assets/1.txt'), r('./assets/3.txt'))
}

test()