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
				console.log(clientWidth);
				list.forEach(function(o){
					body.append(
							"<div class='product-block'><img src='"+o.imageUrl+"' style='width:100px;height:100px;'/></div>"
						);
				});
			}
		});
	}
	getList();
})();