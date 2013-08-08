(function(){
	var offset = null;
	var body = $("body");
	var getList = function(){
			$.ajax({
			url:"http://www.zhiyao99.com/pc",
			type:"get",
			dataType:"jsonp",
			jsonp:"jsoncallback",
			data:{method:"list",offset:offset},
			success:function(d){
				console.log(d);
				var list = d.list;
				offset = d.offset;
				var clientWidth = document.body.clientWidth;
				//console.log(clientWidth);
				var imagesize = Math.ceil(clientWidth*0.465);
				list.forEach(function(o){
					body.append(
							"<div class='product-block'>"+
								"<a href='"+o.productUrl+"'><img src='"+o.imageUrl+"' style='width:"+imagesize+"px;height:"+imagesize+"px;'/></a>"+
								"<p class='product-name'>"+o.productName+"</p>"+
								"<div class='price'><span class='pull-left'>￥"+o.price+"</span><span class='pull-right'>包邮</span></div>"+
							"</div>"
						);
				});
			}
		});
	}
	getList();
})();