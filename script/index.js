 $(function () {
     $("#link").click(function(){
         $("#link").attr("href", "game.html?id=" + Math.floor((Math.random() * 4) + 1));
     });
     
     setTimeout(function(){
        window.location.reload(1);
     }, 35000);
     
 });

