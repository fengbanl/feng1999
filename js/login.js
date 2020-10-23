window.addEventListener('load', function() {
    var login = document.querySelector('.login');
    var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    var title = document.querySelector('#title');
    link.addEventListener('click', function() {
        mask.style.display = 'block'; //遮罩层显示
        login.style.display = 'block'; //登录框显示
    });
    closeBtn.addEventListener('click', function() {
        mask.style.display = 'none'; //遮罩层 隐藏
        login.style.display = 'none'; //登录框 隐藏
    });
    //开始拖拽
    //（1）当我们鼠标按下(mousedown)，就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function(e) {
        var x = e.pageX - login.offsetLeft; //鼠标在盒子内的 x 坐标   e.pageX为鼠标在页面中的 x 坐标
        var y = e.pageY - login.offsetTop; //鼠标在盒子内的 y 坐标 e.pageY为鼠标在页面中的 y 坐标
        document.addEventListener('mousemove', move); //将  194行到197行 function(e){……}里的方法 写成一个名为 move的方法
        function move(e) {
            login.style.left = e.pageX - x + 'px'; //要加px，切记
            login.style.top = e.pageY - y + 'px';
        }
        //（3）鼠标弹起，就让鼠标移动事件停止
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move);
        });
    });
})