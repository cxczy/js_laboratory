/**
 * Created by Administrator on 2017/10/10.
 */
class Grid {
    constructor(size = 4) {
        this.size = size;
    }

    draw() {
        this.drawBlocks();
        this.drawLines();
    }

    drawLines() {
        let sw = stage.width, sh = stage.height;
        let gapX = sw / this.size;
        let gapY = sh / this.size;
        for (let i = 1; i < this.size; i++) {
            stage.drawLine(gapX * i, 0, gapX * i, sh)
            stage.drawLine(0, gapY * i, sw, gapY * i)
        }
    }

    drawBlocks() {
        let sw = stage.width, sh = stage.height;
        let gapX = sw / this.size;
        let gapY = sh / this.size;
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let color = (i + j) % 2 ? '#FFF' : '#EEE';
                stage.drawRect(gapX * i, gapY * j, gapX, gapY, color)
            }
        }
    }
}