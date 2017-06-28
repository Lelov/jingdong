;(function($){

	// banner_right区开关
	var show = true;

	// ! banner_right 的二级菜单
	$('.has_menu').hover(function(){
		if (show) {
			$('.has_menu').addClass('active');
			$('.banner_nav_menu').addClass('moveToTop');
		}
	},
	function(){
		show = true;
	});
	
	// 点击关闭二级菜单
	$('#banner_nav_btn').click(function(){
		$(this).parent().removeClass('moveToTop');
		$('.has_menu').removeClass('active');
		show = false;
	});	

	// 激活对应大标题
	$('.has_menu').mouseover(function(){
		$(this).acOnly();
		$('.banner_nav_menu_cont_list').eq($(this).index()).acOnly();	
	});

	// 激活小标题对应内容块
	$('.banner_nav_menu').on('mouseover','li',function(){
		$(this).acOnly();
		$(this).parent().next().children('.banner_cont_mid_list').eq($(this).index()).acOnly();
	});

	// 显示价格
	$('.banner_nav_menu').on('change','select',function(){
		var pVal = ($(this).val())*1;
		if(pVal<300){
			$(this).next().html('¥ '+(pVal-1.5).toFixed(1)+' ~ '+'¥ '+(pVal-0.5).toFixed(1));
		}else{
			$(this).next().html('¥ '+(pVal-Math.random()*10-50).toFixed(1)+' ~ '+'¥ '+(pVal-Math.random()*20-30).toFixed(1));
		}
		
	});

	// 往返单程切换
	$('.banner_cont_top').on('change','input',function(){
		if ($(this).hasClass('fangcheng_btn')) {
			$(this).parent().parent().find('input.fancheng').show();
			return;
		}else{
			$(this).parent().parent().find('input.fancheng').hide();
			return;
		}
	});



	// ! 侧栏菜单

    $(document).scroll(function(){
        var pTop = $('.main_floor').parent().offset().top;
        // 接近1楼且大于当前窗口一半的高度时显示
        var halfHeight = pTop-$(window).height()/2;

        if ($(this).scrollTop() > halfHeight) {
             $('#win_sider_nav').fadeIn(500);
        }else{
            $('#win_sider_nav').fadeOut(500);
        };
        // 楼层滚动对应的导航按钮跟着滚动
        $('.main_floor').each(function() {//内容区滚动到窗口一半时激活对应按钮
            var biHeight = $(document).scrollTop()+$(window).height()/2;
            var contTop = $(this).offset().top;

            if(contTop < biHeight){
                $('#win_sider_nav li:not(.last)').eq($(this).index()).acOnly();

            }
        });
    });

    // 点击li到达对应楼层
    $('#win_sider_nav li:not(.last)').click(function(){
        $(this).acOnly();
        var index = $(this).index();
        $('html,body').animate({'scrollTop':$('.main_floor').eq(index).offset().top-48},500);
    })

    // 回到顶部
    $('#win_sider_nav li.last').click(function(){
        $('body,html').stop().animate({scrollTop:0},500);
    });

    // ! 轮播图
    $('#ban_focus').tab({
		time:2000
	});

        
})(jQuery)