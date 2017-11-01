exports.data=function(){
	return[{
		route:'/main',
		handle:function(req,res,next,url){
			res.writeHead(200,{
				"Content-type":"application/json;charset=utf-8",
				"Access-Control-Allow-origin":"*"
			})
			var data={
           	   data:[{
                    id: 1,
                    name: "后街标配",
                    image: "/static/img/1.png",
                    addr: "北京",
                    state: true,
                    num: 1,
                    price: 1500,
                    size: "M",
                    color: "red"
                }, {
                    id: 2,
                    name: "后街舒适",
                    image: "/static/img/2.png",
                    addr: "北京",
                    state: true,
                    num: 1,
                    price: 2300,
                    size: "L",
                    color: "green"
                }, {
                    id: 3,
                    name: "后街豪华",
                    image: "/static/img/3.png",
                    addr: "北京",
                    state: false,
                    num: 1,
                    price: 3600,
                    size: "s",
                    color: "blue"
                }
            ],
           	  foot:[{
           	  	'icon':'&#xe6cd;',
           	  	'con':'首页'
           	  },
           	  {
           	  	'icon':'&#xe6cd;',
           	  	'con':'首页'
           	  },
           	  {
           	  	'icon':'&#xe6cd;',
           	  	'con':'首页'
           	  },
           	  {
           	  	'icon':'&#xe6cd;',
           	  	'con':'首页'
           	  },
           	  {
           	  	'icon':'&#xe6cd;',
           	  	'con':'首页'
           	  }
           	  ]
            }
			
			res.write(JSON.stringify(data));
			res.end();
		}
	}]
}