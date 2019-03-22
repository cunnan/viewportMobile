# viewportMobile
移动端浏览器适配
移动前端自适应适配布局解决方案
    方案：
        固定一个某些宽度，使用一个模式，加上少许的媒体查询方案
        使用flexbox解决方案
        使用百分比加媒体查询
        使用rem
    本文提到三种方法
        iphone4 320*480
        iphone6 375*667
        ipad 1024*768
    方法一
        1.典型的弹性布局：关键元素高宽和位置都不变，只有容器元素在做伸缩变换
            文字流式，控件弹性，图片等比缩放
            文字流式 
                流式排版（使用em设置文字大小，以及外边距、内边距、边框）
                    1.使用em设置文字大小
                        把页面的基准文字设置为100%，然后在其他元素中再用em单位放大或缩小文字
                        body{font-size: 100%;}
                        p {font-size: 0.9em;}
                    2.使用em设置外边距、内边距、边框
                        使用em之后，这些细节所占用的空间都会根据文字大小而缩放。 
            控件弹性
                理想视口
                    理想视口尺寸 = device-width = 设备的物理分辨率/(devicePixelRatio * scale)
                    <meta name="viewport" content="width=device-width"> 

                   