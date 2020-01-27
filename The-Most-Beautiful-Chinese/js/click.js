/* 鼠标点击特效*/
(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("最美中国人","弘扬最美", "表彰最美", "共建最美中国", "于敏", "申纪兰", "孙家栋", "李延年", "张富清", "袁隆平", "黄旭华", "屠呦呦");

        var heart = document.createElement("span");	//创建span元素
        heart.onselectstart = new Function('event.returnValue=false');	//防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx];		//将span元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;";	//给p元素设置样式

        var f = 12, 	// 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = "#ff6651"; // 颜色
        a = 1, 				// 透明度
            s = 1.2; 			// 放大缩小

        var timer = setInterval(function () {		//添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:12px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)

    }

}());