(function () {
    var canvas = document.getElementById('ballRange');
    var ctx = canvas.getContext('2d');
    var nowRange = 0;
    var mW = 60;
    var mH = 60;
    var lineWidth = 2;
    var r = mH / 2;
    var cR = r - 1 * lineWidth;
    var sX = 0;
    var axisLength = mW;
    var waveWidth = 0.1;
    var waveHeight = 3;
    var speed = 0.2;
    var xOffset = 0;
    ctx.lineWidth = lineWidth;
    var IsdrawCircled = false;
    var drawCircle = function () {
        ctx.beginPath();
        ctx.strokeStyle = '#1080d0';
        ctx.arc(r, r, cR, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r, r, cR, 0, 2 * Math.PI);
        ctx.clip();
    };
    var drawSin = function (xOffset) {
        ctx.save();
        var points = [];
        ctx.beginPath();
        for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
            var y = -Math.sin((sX + x) * waveWidth + xOffset);
            var dY = mH * (1 - nowRange / 100);
            points.push([x, dY + y * waveHeight]);
            ctx.lineTo(x, dY + y * waveHeight);
        }
        ctx.lineTo(axisLength, mH);
        ctx.lineTo(sX, mH);
        ctx.lineTo(points[0][0], points[0][1]);
        ctx.fillStyle = '#1c86d1';
        ctx.fill();
        ctx.restore();
    };
    var drawText = function () {
        ctx.save();
        var size = 0.8 * cR;
        ctx.font = size + 'px Microsoft Yahei';
        ctx.textAlign = 'center';
        ctx.fillStyle = ballRangeTextColor;
        if (nowRange > 65)
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillText(~~nowRange + '%', r, r + size / 2);
        ctx.restore();
    };
    var render = function () {
        ctx.clearRect(0, 0, mW, mH);
        if (IsdrawCircled == false) {
            drawCircle();
        }
        if (nowRange <= ballRangeValue) {
            var tmp = 1;
            nowRange += tmp;
        }
        if (nowRange > ballRangeValue) {
            var tmp = 1;
            nowRange -= tmp;
        }
        drawSin(xOffset);
        drawText();
        xOffset += speed;
        requestAnimationFrame(render);
    };
    render();
})();