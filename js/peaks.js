var btn = document.querySelector('.btns')
var top1; //滚动距离
//给window绑定滚动事件
window.onscroll = function() {
        //获取当前滚动距离
        top1 = document.documentElement.scrollTop
            //判断滚动距离是否大于500
        if (top1 > 500) {
            //修改header对象的行高
            btn.style = 'display:block'
        } else {
            //修改header对象的行高
            btn.style = 'display:none'
        }
    }
    //给按钮绑定点击事件
btn.onclick = function() {
    var dsq = setInterval(function() {
        //获取步长
        var speed = Math.ceil(top1 / 10)
            //设置滚动距离
        document.documentElement.scrollTop = (top1 - speed)
            //当滚动距离小于等于0时，清除定时器
        if (top1 <= 0) {
            clearInterval(dsq)
        }
    }, 20)
}