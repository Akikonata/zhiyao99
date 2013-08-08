(function(){
	var offset = null;
	var body = $("body");
	var getList = function(){
			$.ajax({
			url:"http://1.93.12.109:8080/pc",
			type:"get",
			dataType:"jsonp",
			jsonp:"jsoncallback",
			data:{method:"list",offset:offset},
			success:function(d){
				console.log(d);
				var list = d.list;
				offset = d.offset;

				list.forEach(function(o){
					body.append
				});
			}
		});
	}
	getList();
})();