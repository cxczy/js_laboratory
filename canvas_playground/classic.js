/**
 * Created by Administrator on 2017/10/10.
 */
class Classic {
    constructor() {
        this.map = Utils.genRandomMap(SIZE, true);
    }

    init() {
        new Grid(SIZE).draw();
        this.bindEvents();

        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                let num = this.map[i][j], x = i, y = j, gap = stage.width / SIZE;
                if (num) {
                    stage.addText(num, x * gap + gap / 2, y * gap + gap / 2)
                }
            }
        }
    }

    bindEvents() {
        window.addEventListener('keyup', e => {
            switch (e.keyCode) {
                case 38:
                    this.handleUp();
                    break;
                case 40:
                    this.handleDown();
                    break;
                case 37:
                    this.handleLeft();
                    break;
                case 39:
                    this.handleRight();
                    break;
            }
        })
    }

    handleUp() {
        log('up')
    }

    handleDown() {
        log('down')
    }

    handleLeft() {
        log('left')
    }

    handleRight() {
        log('right')
    }


}