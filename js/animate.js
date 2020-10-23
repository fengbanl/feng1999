//简单动画函数封装   想让动画动起来必须给css样式加定位
//obj 是目标对象（谁要动画） target 目标位置（停止时所在的位置）
//实际中需要不同的元素调用不同的定时器 （由obj.timer实行谁调用了执行谁）
//222...引入回调函数（核心注意点一定是写在定时器结束的里面）（callback（）---实参里面调用回调函数）
//222...引入回调函数核心算法（目标值-现在的位置）/10做为每次移动的距离  步长(callback)
//333...停止的条件是：让当前的盒子位置等于目标位置就停止定时器
function animate(obj, target, callback) {
    //当我们不断的点击按钮这个元素的速度回越来越快，因为没按一次都开启一次定时器
    //解决方案就是  让我们元素只有一个定时器执行  clearInterval(obj.timer)
    //先清除以前的定时器，只保留一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //把步长值写到定时器的里面
        //把我们步长值改为整数  不要出现小数问题注意（math.ceil）和（math.floor）
        //问题为什么除以10，因为 除 10 可以让动画形成 慢慢的移动距离和速度变小  是一个缓动动画公式 eg（100-0）/10=10 （100-10）/10=9  （100-19）/10=8.1
        var step = (target - obj.offsetLeft) / 10; //offsetLeft表示向左偏移的像素值。
        //如果回来的值（下面这行代码）为负值（向下取整--倒着走）如-8.1我需要的是  小的值为-9不是-8 则步长向着小取整
        //如果回来的值（下面这行代码）为正值（向上取整--正这走）如8我需要的是  大的值为8 则步长向着大取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画 本质就是停止定时器
            clearInterval(obj.timer);
            //添加回调函数callback（核心注意点一定是写在定时器结束的里面）
            if (callback) {
                //调用函数
                callback();
            }
            //以上3行代码也能做优化用（3目运算符）+++以下1行代码 可以实现  结果等价+++++
            //callback && callback(); //运行过程：如果callback回调函数里面有参数那么执行 右边的callback();，如果没有逻辑中段不运行callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px'; //每次移动向左  step   像素
    }, 15);
}