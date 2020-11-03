! function () {
    //设置canvas的高宽
    function set_canvas_size() {
        w = c.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        h = c.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        i();
    }

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    })

    //创建画布，并添加到body中
    var c = document.createElement("canvas"); //画布
    let x = c.getContext('2d');
    let w = c.width = c.offsetWidth;
    let h = c.height = c.offsetHeight;
    c.style.cssText = "position:fixed;top:0;left:0;z-index:-1;opacity:0.6;";
    document.getElementsByTagName("body")[0].appendChild(c);

    //初始化画布大小
    set_canvas_size();
    window.onresize = set_canvas_size;
    var f = 90,
        q,
        r = 0,
        u = Math.PI * 2,
        v = Math.cos,
        z = Math.random;

    function i() {
        x.clearRect(0, 0, w, h);
        q = [{ x: 0, y: h * .7 + f }, { x: 0, y: h * .7 - f }];
        while (q[1].x < w + f) d(q[0], q[1]);
    }

    function d(i, j) {
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        var k = j.x + (z() * 2 - 0.25) * f,
            n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r -= u / -50;
        x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16);
        x.fill();
        q[0] = q[1];
        q[1] = { x: k, y: n };
    }

    function y(p) {
        var t = p + (z() * 2 - 1.1) * f;
        return (t > h || t < 0) ? y(p) : t;
    }

    document.onclick = i;
    i();
}();