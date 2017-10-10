/**
 * Created by Administrator on 2017/10/10.
 */
class CImage {
    constructor(src) {
        this.src = src;
    }

    loadImage() {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = this.src;
            img.addEventListener('load', () => {
                resolve(img)
            })
        })
    }

    drawImage(x, y, w = null, h = null) {
        this.loadImage()
            .then(img => {
                w && (img.width = w);
                h && (img.height = h);
                stage.ctx.drawImage(img, x, y)
            })
    }
}