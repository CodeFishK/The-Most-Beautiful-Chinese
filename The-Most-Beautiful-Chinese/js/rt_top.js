window.onload=function () {
//返回顶部
    var btn = document.getElementById("rt_top");
    var timer = null;

    btn.onclick = function () {
        //加入定时器让它由快到慢滚动到顶部
        timer = setInterval(function () {
            //获取当前scrollTop的高度位置（兼容ie和chrom浏览器）
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //开平方根，速度呈抛物线缓慢降低
            var ySpeed = Math.sqrt(scrollTop);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop - ySpeed;
            if (scrollTop == 0) {
                clearInterval(timer);
                // btn.style.display='none';
            }
        }, 5);
    }
}