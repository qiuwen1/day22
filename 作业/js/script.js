document.documentElement.style.fontSize=window.innerWidth/375*100+'px'
var mySwiper=new Swiper(".swiper-container",{
			autoplay:1000,  //时间
			pagination:".swiper-pagination",//分页
			loop:true,  //无缝
			autoplayDisableOnInteraction:true,//自动
			paginationClickable:true  //点击分页按钮
})

;(function($){
    //渲染
    var str='';
    $.ajax({
        url:"data/data.json",
        success:function(json){
          var data=json.data1;
           for(var i=0;i<data.length;i++){
             str+=`<dl>
                        <dt><img src="${data[i].src}" alt=""></dt>
                        <dd>
                           <h4>${data[i].tit}</h4>
                           <h5>${data[i].tits}</h5>
                           <p><span>${data[i].span}</span></p>
                           <p>可用卷价 <small>${data[i].sma}</small></p>
                           <p>会员价 <b>${data[i].bb}</b></p>
                           <span class="gou"><i class="iconfont">&#xe638;</i></span>
                        </dd>
                    </dl>`
                   
           }
            $(".dll").append(str);
            myScroll.refresh();
            mfScroll.refresh();
            mgScroll.refresh();
            mmScroll.refresh();
        }
     })
      //添加横向滚动事件
  	var scroller=new IScroll('.navv',{
  		scrollX:true
  	})
    //添加上下滚动事件
   var myScroll=new IScroll("#price"),
       mfScroll=new IScroll("#fruit"),
       mgScroll=new IScroll("#greens"),
       mmScroll=new IScroll("#milk");
      init();

   	function init(){
      //点击导航页跳转相应的页
   		$("a").on("tap",function(e){ 		     
     			  e.preventDefault();
            //以动画的方式跳转
       			var href=$(this).attr("href");
       			$(href).animate({"left":0}).siblings().css({"left":"100%"})
            //高亮随着变化
       			if($(this).parent().parent().is("ul")){
       				$(this).parent().addClass("bg").siblings().removeClass();
       			}
   		})     
   	} 
    //搜索页
      $(".so").on("click",function(){
        $(".seek").animate({"left":0})
      })
      $("#icon").on("click",function(){
        $(".seek").animate({"left":"100%"})
      })
     //全部分类
     ify();
     function ify(){
            $('#fixed').on('click',function(){
                var flag=$('#classify').css('display')=='none' ? true:false;
                if(flag){
                  $('#classify').css('display','flex')
                  $('#fixed').hide();
                }
            })
           $(".close").on("click",function(){
             $('#classify').css('display','none')
              $('#fixed').show();
           })

           $("#classify").on("click","li",function(e){
                  $('#classify').css('display','none')
                  $('#fixed').show();
                  e.preventDefault();
                  var href=$(this).attr("href");
                  $(href).animate({"left":0}).siblings().css({"left":"100%"})
                   var index=$(this).index();
                   $('.navv').find('li').eq(index).addClass("bg").siblings().removeClass();
           })
    }
             //地址页
            $("#address").on("click",function(){
              $("#site").animate({"left":0})
            })
            $("#closesite").on("click",function(){
              $("#site").animate({"left":"100%"})
            })
 })(Zepto)