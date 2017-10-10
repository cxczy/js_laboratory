/**
 * Created by Administrator on 2017/10/10.
 */
class Stage {
    constructor(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
    }

    loadImages(arr) {
        let PromiseAll = arr.map(src => {
            return new CImage(src).loadImage()
        })

        Promise.all(PromiseAll).then(() => {
            log('图片加载完毕...')
        })
    }

    init() {
        let container = document.querySelector('#' + this.id);
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.style = 'border: 1px solid #666';
        container.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
        this.loadImages(['./image/poison.png'])
    }

    drawLine(x1, y1, x2, y2, color = '#666', lineWidth = 1) {
        let ctx =  this.ctx;
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    drawRect(x, y, w, h, color) {
        let ctx =  this.ctx;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    addText(text, x, y, size = '24px', maxwidth = null) {
        let ctx =  this.ctx;
        ctx.font = size + " serif";
        maxwidth
            ? ctx.strokeText(text, x, y, maxwidth)
            : ctx.strokeText(text, x, y);
    }

}