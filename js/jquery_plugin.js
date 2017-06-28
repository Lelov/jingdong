;(function($){
    $.fn.extend({
        acOnly:function(){  //激活当前元素。this为需要激活的对象
            $(this).addClass('ac').siblings().removeClass('ac');
            return this;
        },
        magnPic:function(){ //放大镜
            $(this).mousemove(function(ev){
                // 获取位置
                var l=ev.pageX-$(this).offset().left-$('.drag').width()/2;
                var t=ev.pageY-$(this).offset().top-$('.drag').height()/2;
                //限制拖拽区域
                if(l < 0){
                    l = 0;
                };
                if(t < 0){
                    t=0;
                };
                var maxL=$(this).width()-$('.drag').width();
                var maxT=$(this).height()-$('.drag').height();
                if(l > maxL){
                    l = maxL
                };
                if(t > maxT){
                    t = maxT
                };
                //显示拖拽及图片区域
                $('.drag,.magn').show();
                $('.drag').css({"top":t,"left":l});
                $('.magn img').css({"top":-t*2,"left":-l*2});
            });
            //离开隐藏
            $(this).mouseleave(function(){
                $('.drag,.magn').hide();
            });
            return this;
        },
        //选项卡
        tabCard:function(contObj,fn){  //contObj:需要控制的内容区域  this:控制选项的元素 fn:回调函数
            return this.each(function(){
                $(this).click(function(){
                    //激活
                    $(this).acOnly();
                    contObj.eq($(this).index()).acOnly();

                    fn && fn(); //回调
                });
            });
        },
        tab:function(set){//set:设置参数 
        var def={//默认值 ,可设置的set参数
            auto:true,  //自动切换
            time:1000   //切换时间
        };
        var opt=$.extend(def,set);//合并对象
        return this.each(function(){
            var _this=$(this);
            var aLi=_this.find('span');
            var tabItem=_this.find('.pic_list li');
            var timer;
            var i=0;
            
            aLi.click(function(){
                i=$(this).index();
                $(this).acOnly();
                tabItem.eq(i).acOnly();
                
            }); 
            
            //自动播放
            
            if(opt.auto){
                function run(){
                    timer=setInterval(function(){
                        i++;
                        if(i==aLi.length){
                            i=0;
                        };
                        aLi.eq(i).acOnly();
                        tabItem.eq(i).acOnly();
                    },opt.time);
                };
                run();
                //鼠标 入清,出开
                _this.hover(
                    function(){
                        clearInterval(timer);
                    },
                    function(){
                        run();
                    }
                );
            }
        });
    }
        
    });

    $.extend({
        //回到顶部
        backTop:function(){
            //插入元素
            var oBackTop = $('<div Class="back_top"></div>');
            $('body').append(oBackTop);
            oBackTop.click(function(){
                $('body,html').animate({scrollTop:0},500);
            })
        }
    });
})(jQuery);
