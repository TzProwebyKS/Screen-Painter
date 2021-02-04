class ScreenPainter {
    constructor(canvasCfg) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = canvasCfg.width;
        this.canvas.height = canvasCfg.height;
        this.canvas.color = canvasCfg.color;

        this.ctx = this.canvas.getContext(canvasCfg.context);

        document.body.append(this.canvas);
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }
}

ScreenPainter.prototype.clearPaintings = function() {
    this.paintQuadrilateral({
        x: 0,
        y: 0,
        color: this.canvas.color,
        width: this.canvas.width,
        height: this.canvas.height
    });
}

ScreenPainter.prototype.paintQuadrilateral = function(that) {
    this.ctx.fillStyle = that.color;
    this.ctx.fillRect(that.x, that.y, that.width, that.height)
}