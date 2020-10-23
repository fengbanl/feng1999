        //获取所有操作对象
        var box = document.querySelector('.box-left')
        var mark = document.querySelector('.mark')
        var rightbox = document.querySelector('.rightbox')
        var imgdiv = document.querySelector('.img')
        var imgs = imgdiv.querySelectorAll('img')

        //给每个小图片绑定一个点击事件
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                //清除当前img标签中所有的class属性
                for (let j = 0; j < imgs.length; j++) {
                    imgs[j].className = ''
                }
                //给指定的图片对象添加class属性值
                imgs[i].className = 'a1'
                    //修改左右两边大盒子中的图片
                var img1 = box.querySelector('img')
                var img2 = rightbox.querySelector('img')
                img1.setAttribute('src', '../images/magnifier/x' + (i + 1) + '.jpg')
                img2.setAttribute('src', '../images/magnifier/x' + (i + 1) + '.jpg')
            }
        }

        function show1(e) {
            //光标相对于小盒子居中显示
            var left1 = e.pageX - box.offsetLeft - (mark.offsetWidth / 2)
            var top1 = e.pageY - box.offsetTop - (mark.offsetHeight / 2)
                //设置小盒子的移动范围
            var minX = minY = 0
            var maxX = box.offsetWidth - mark.offsetWidth
            var maxY = box.offsetHeight - mark.offsetHeight
                //右边图片移动距离
            var tmpX, tmpY
                //水平移动
            if (left1 < minX) {
                mark.style.left = minX + 'px'
                tmpX = maxX
            } else if (left1 > maxX) {
                mark.style.left = maxX + 'px'
                tmpX = maxX
            } else {
                mark.style.left = left1 + 'px'
                tmpX = left1
            }

            //垂直方向移动
            if (top1 < minY) {
                mark.style.top = minY + 'px'
                tmpY = minY
            } else if (top1 > maxY) {
                mark.style.top = maxY + 'px'
                tmpY = maxY
            } else {
                mark.style.top = top1 + 'px'
                tmpY = top1
            }

            //获取右边图片对象
            var img = rightbox.querySelector('img')
            img.style.left = -2 * tmpX + 'px'
            img.style.top = -2 * tmpY + 'px'
        }

        //给box对象绑定鼠标移入、移出、移动事件
        box.onmouseover = function(e) {
            var e = e || window.event
            mark.style.display = 'block'
            rightbox.style.display = 'block'
            show1(e)
        }
        box.onmousemove = function(e) {
            var e = e || window.event
            show1(e)
        }
        box.onmouseout = function(e) {
            mark.style.display = 'none'
            rightbox.style.display = 'none'
        }