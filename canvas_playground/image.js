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

    drawImage(x, y, w, h) {
        this.loadImage()
            .then(img => {
                stage.ctx.drawImage(img, x, y, w, h)
            })
    }
}