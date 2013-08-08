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
				var list = d.list;
				offset = d.offset;
				list.forEach(function(o){});
			}
		});
	}
	getList();
})();