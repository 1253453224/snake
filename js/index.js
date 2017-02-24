$(function(){
    $('.start').on('click',function(){
    	$(this).css({opacity:0})
    	$('.index').css({left:600,display:'none'})
        kaishi() 
    })
   for(var i=0;i<20;i++){
   	for(var j=0;j<20;j++){
   		$('<div>').addClass('back')
   		.attr('id', i+'-'+j)
   		.appendTo('.content')
   	}
   }
   var snake=[
   {x:0,y:0},
   {x:0,y:1},
   {x:0,y:2}
      ]
   for(var i=0;i<snake.length;i++){
   	 $('#'+snake[i].x+'-'+snake[i].y).addClass('snake')
   }
   var food=function(){
   	   var a=Math.floor(Math.random()*20);
   	   var b=Math.floor(Math.random()*20);
   	    $('#'+a+'-'+b).addClass('food')
   	     return {x:a,y:b};
   }
          var food1=food();
          var fangxiang='xia';
    
      function moving(){
      var oldtou=snake[snake.length-1];
    	if(fangxiang==='you'){
    	 newtou={x:oldtou.x,y:oldtou.y+1}
    	}
    	 if(fangxiang==='zuo'){
    	 newtou={x:oldtou.x,y:oldtou.y-1}
    	}
    	if(fangxiang==='shang'){
        newtou={x:oldtou.x-1,y:oldtou.y}
    	}
    	 if(fangxiang==='xia'){
        newtou={x:oldtou.x+1,y:oldtou.y}
    	}
    	
    	
      if(newtou.y>19||newtou.y<0||newtou.x<0||newtou.x>19){
        alert("撞晕");
         zanting();
         return;
      }
     
    	if(newtou.x===food1.x&&newtou.y===food1.y){
              
    	$('#'+food1.x+'-'+food1.y).removeClass('food')	
    	 food1=food();
    	  
    	}else{	
    	
    	var foot=snake.shift();
    	$('#'+foot.x+'-'+foot.y).removeClass('snake')
    	}
       snake.push(newtou)
    	 $('#'+newtou.x+'-'+newtou.y).addClass('snake')
    }
     $(document).on('keyup',function(e){
        var biao={'zuo':37,'you':39,'shang':38,'xia':40}
     	  if(Math.abs(e.keyCode-biao[fangxiang])===2){
          return;
        }
     	  if(e.keyCode===37){
             fangxiang='zuo'
     	  }
     	   if(e.keyCode===38){
             fangxiang='shang'
     	  }
     	  if(e.keyCode===39){
             fangxiang='you'
     	  }
     	   if(e.keyCode===40){
             fangxiang='xia'
     	  }
     	 moving()
     	  
           
     })
      // setInterval(moving,1000)
    
      var timerId;
      var kaishi=function(){
        timerId=setInterval(moving,500);
      }
      var zanting=function(){
        clearInterval(timerId);
      }
     
    










})
