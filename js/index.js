/*
* @Author: Administrator
* @Date:   2018-03-31 09:12:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-11 16:27:06
*/
var weather;
var city;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		
		console.log(weather);
	}
})
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
		
		console.log(city);
	}
})
function rendecity(city){
    for(var m in city){
        var h1=document.createElement("h1");
        h1.className="title1";
        h1.innerHTML=m;
        var city_box=document.querySelector(".city_box");
        city_box.appendChild(h1);

        var con1=document.createElement("div");
        con1.className="con1";
        city_box.appendChild(con1);
         for(var n in city[m])
         {
            //console.log(n);
         var son=document.createElement("div");
         son.className="son";
         son.innerHTML=n;
         con1.appendChild(son);
        }
    
    }
}



function updata(){
	//城市名称
	var city_name=document.querySelector(".city_name");
	city_name.innerHTML=weather.city_name;
	//温度
	var temperature=document.querySelector(".temperature");
	temperature.innerHTML=weather.current_temperature+"°";
	//状态
	var condition=document.querySelector(".condition");
	condition.innerHTML=weather.dat_condition;
	//今天的最高气温
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
    //今天的最低气温
    var dat_high_temperature=document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature;
    //今天的天气情况
    var day_condition=document.querySelector("#day_condition");
    day_condition.innerHTML=weather.day_condition;
    //明天的最高气温
    var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    //明天的最低气温
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_low_temperature;
    //今天的天气图片
    var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    //明天的天气图片
    var tomorrow_weather_icon_id=document.querySelector("#tomorrow_weather_icon_id");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
    for(var i in weather.hourly_forecast){
    //创建now元素
    //创建元素 
    var now=document.createElement("div");
    //添加类名now
    now.className="now";
    //插入到页面中
    var wrap=document.querySelector(".wrap");
    wrap.appendChild(now);
    //创建时间元素
    var h2=document.createElement("h2");
    h2.className="now_time";
    h2.innerHTML=weather.hourly_forecast[i].hour+":00";
    now.appendChild(h2);
    //各时间段天气情况

    var icon=document.createElement("div");
    icon.className="now_icon";
     icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
     now.appendChild(icon);
}
var str="";
weather.hourly_forecast.forEach((item,index)=>{
    str=str+`
    <div class="now">
                <h2 class="now_time">${item.hour}:00</h2>
                <div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <h2 class="now_temp">${item.temperature}°</h2>

    `

})
$(".wrap").html(str);
var str2="";
    weather.forecast_list.forEach((item,index)=>{
        // console.log(item,index);
        str2=str2+`
            <div class="con">
                <div class="con_date">
                    <span>${item.date.slice(5,7)}/${item.date.slice(8)}</span> 
                </div>
                <div class="con_weaH">${item.condition}</div>
                <div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png")></div>
        
                <div class="con_weaL">${item.low_temperature}°</div> 
                <div class="con_low">${item.wind_direction}</div>
                <div class="con_level">${item.wind_level}级</div>
            </div>
        `
    })
    $(".wrap1").html(str2);


/*for(var j in weather.forecast_list){
    
var con=document.createElement("div");
 con.className="con";
  var wrap1=document.querySelector(".wrap1");
    wrap1.appendChild(con);
    //日期
    var date=document.createElement("span");
    date.className="con_date";
    date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8,10);
    con.appendChild(date);
    //天气状态
    var con_weaH=document.createElement("div");
    con_weaH.className="con_weaH";
    con_weaH.innerHTML=weather.forecast_list[j].condition;
    con.appendChild(con_weaH);
    //天气情况
    var con_picH=document.createElement("div");
    con_picH.className="con_picH";
    con_picH.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
    con.appendChild(con_picH);
    //最高气温
    var con_high=document.createElement("div");
    con_high.className="con_high";
    con_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
    con.appendChild(con_high);
    //最低气温
    var con_low=document.createElement("div");
    con_low.className="con_low";
    con_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
    con.appendChild(con_low);

    var con_wind=document.createElement("div");
    con_wind.className="con_wind";
    con_wind.innerHTML=weather.forecast_list[j].wind_direction;
    con.appendChild(con_wind);
    //风的级数
    var con_level=document.createElement("div");
    con_level.className="con_level";
    con_level.innerHTML=weather.forecast_list[j].wind_level+"级";
    con.appendChild(con_level);
}*/
for(var m in city){
    	var h1=document.createElement("h1");
    	h1.className="title1";
    	h1.innerHTML=m;
    	var city_box=document.querySelector(".city_box");
    	city_box.appendChild(h1);

    	var con1=document.createElement("div");
    	con1.className="con1";
    	city_box.appendChild(con1);
    	 for(var n in city[m])
    	 {
    	 	//console.log(n);
     	 var son=document.createElement("div");
     	 son.className="son";
     	 son.innerHTML=n;
     	 con1.appendChild(son);
    	}
    
    }
}


function AJAX(str){
	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
	url:url1,
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		//获取数据
		weather=obj.data.weather;
		//渲染数据
		updata();
		//让城市盒子消失
		$(".location").css({"display":"none"});
		
	}
})
}
window.onload=function(){
	updata();
	$(".son").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})

}
window.onload=function(){
	updata();
	$(".son").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})

	$(".city_name").on("click",function(){
	
		 $(".location").css({"display":"block"});
	})
	//输入框获取焦点,按钮内容变搜索
	$("input").on("focus",function(){
		$(".btn").html("搜索");
	})
	//操作按钮
	var button=document.querySelector(".btn");
	console.log(button);
	//点击取消location消失
	button.onclick=function(){
		//获取btn文本内容
		var text=button.innerText;
		console.log(text);
		if(text=="取消"){
			$(".location").css({"display":"none"});
		}
		else{
			//获取input中输入的内容
			var str1=document.querySelector("input").value;
			for(var m in city){
				for(var n in city[m]){
					if(str1==n||str1==(n+"市")){
						AJAX(str1);
						return;
					}
				}
			}
			alert("没有该城市");
		}
	}
}