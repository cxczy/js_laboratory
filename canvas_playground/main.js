/**
 * Created by Administrator on 2017/10/10.
 */
window.log = console.log.bind(console);
const stage = new Stage('canvas', 600, 600);
const SIZE = 4;
stage.init();

//文字
// stage.addText('hello', 50, 50);
//图片
// var poison = new CImage('./image/poison.png');
// poison.drawImage(100, 100, 100, 100);

new Grid(SIZE);

