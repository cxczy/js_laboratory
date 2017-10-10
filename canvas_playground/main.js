/**
 * Created by Administrator on 2017/10/10.
 */
window.log = console.log.bind(console);

const FPS = 24;
const stage = new Stage('canvas', 600, 600);
const SIZE = 4;
const MODE = 1;

stage.init();

switch (MODE) {
    case 1:
        new Classic().init();
        break;
}

