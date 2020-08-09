// 網頁版導覽列依序出現
window.addEventListener("load",function (){
  
  TweenMax.staggerTo('.navItem',3,
  { 
      opacity:1,
   
      
  },0.7);
  
  })



//導覽列依序出現

function animat(){
  
  TweenMax.staggerTo('.navItem',5,
  {    
    opacity:1,
       
      

  },0.7);
  
  }






//導覽列隱藏
    var header_active = function(){
  
        // 取得使用者滑了多少 px
        var scroll_top = $(window).scrollTop();
        
        // 將 scroll_top 數值放到 p.-pos 內容
        $("p.-pos").html(scroll_top);
        
        
        if(scroll_top >= 100){
          $("header .container").addClass("-on");
        }else{
          $("header .container").removeClass("-on");
        }
        
      };
      
      
      $(function(){
        
        // 第三步：偵測頁面滑動時會觸發
        $(window).scroll(function(){
          header_active();
        });
        
      });
