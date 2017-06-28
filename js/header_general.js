;(function($){

	// ! 自动完成功能
	var resource = ['apple','苹果','香蕉','衣服','男士皮包','男士上衣','男士裤子','男士运动鞋','手表','女士皮包','女士上衣','女士裤子','女士运动鞋'];
	$('#search_txt').autocomplete({
		source: resource
	});


	// ! 菜单激活
	// 激活当前菜单
	$('#banner_menu li').mouseenter(function(){
		$(this).acOnly();
		$('.sider_menu_list>.sider_menu').eq($(this).index()).acOnly();
	});
	// 移出菜单区隐藏
	$('#sider_area').mouseleave(function(){
		$('.sider_menu_list>.sider_menu').removeClass('ac');
		$('#banner_menu li').removeClass('ac');
	});

	//!回到顶部
    $.backTop();
})(jQuery);