class ScreenPainter {
    constructor(config) {
        this.canvas = document.createElement('canvas');
        
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.canvas.color = config.color;

        this.ctx = this.canvas.getContext(config.context);
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
    this.paintQuadrilaterals({
        x: 0,
        y: 0,
        color: this.canvas.color,
        width: this.canvas.width,
        height: this.canvas.height
    });
}

ScreenPainter.prototype.paintQuadrilaterals = function(objs, immutableDimensions) {
    if (!Array.isArray(objs)) {
        objs = [objs];
    }

    if (immutableDimensions) {
        var immutableW = immutableDimensions.width;
        var immutableH = immutableDimensions.height;
    }

    for (let obj of objs) {
        this.ctx.fillStyle = obj.color;
        this.ctx.fillRect(
            obj.x, 
            obj.y, 
            immutableW ? immutableW : obj.width,
            immutableH ? immutableH : obj.height
        )
    }
}