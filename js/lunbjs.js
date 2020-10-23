window.addEventListener('load', function() {
    //1.获取元素
    var chevron_left = document.querySelector('.chevron-left');
    var chevron_right = document.querySelector('.chevron-right');
    var showmain = document.querySelector('.showmain');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var focus2 = document.querySelector('.focus2');
    showmain.addEventListener('mouseenter', function() {
        chevron_left.style.display = 'block';
        chevron_right.style.display = 'block';
    });
    showmain.addEventListener('mouseleave', function() {
        chevron_left.style.display = 'none';
        chevron_right.style.display = 'none';
    });
    //3.动态生成小圆圈，有几张图片，我就生成几个圆圈  核心算法（无限动态追加精华）
    var ul = focus.querySelector('ul'); //focus.querySelector('ul');获取.focus--divd的ul这个容器--22行用的是ul的子级小li遍历
    var ol = focus.querySelector('.indicator');
    console.log(ul.children.length); //调试长度   ul的子级小li的长度
    for (var i = 0; i < ul.children.length - 8; i++) { //ul的子级小li遍历
        var li = ol.querySelector('li');
        //创建记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute('index', i);
        //把小li插入到ol里面
        ol.appendChild(li);
        //4.小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            //干掉所有人 把所有小li  清除  indicator-active  类名  
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //留下我自己 当前的小li 设置 indicator-active  类名 
            this.className = 'indicator-active';
            var index = this.getAttribute('index');
            focus2.style.display = 'block';
            if (index == 0) {
                focus2.style.display = 'none';
            }
        })
    }
    //把ol里面的第一个小li设置类名为 indicator-active
    ol.children[0].className = 'indicator-active';
    //7.点击右侧按钮，图片滚动一张  (这里可能后期有bug，按钮的显示层级没ul高注意一下出现再改（z-index）)
    var num = 0; //变量记录图片滚动的张数
    //circle 控制小圆圈的播放步骤8的组件之一
    var circle = 0;
    chevron_right.addEventListener('click', function() {
        focus2.style.display = 'block';
        //8.点击右侧的按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放（var circle = 0;）
        // circle--;
        // alert(circle);
        if (circle == 0) {
            circle = ol.children.length - 1;
            focus2.style.display = 'block';
            circleChange(); //类名样式赋于
        }
    });


    //9. 点击左侧按钮， 图片滚动一张（左侧按钮做法）
    chevron_left.addEventListener('click', function() {

        //10.点击左侧的按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放（var circle = 0;）
        if (circle == 1) {
            circle = ol.children.length - 2;
            focus2.style.display = 'none';
            circleChange(); //类名样式赋于
        }
        // circleChange(); //类名样式赋于
    });


    //10为了减少代码量提取左右按钮功能的一模一样的代码，进行封装调用减少代码量
    function circleChange() {
        //先清楚其余小圆圈的 indicator-active 样式类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈的indicator-active 样式类名
        ol.children[circle].className = 'indicator-active';
    }


})