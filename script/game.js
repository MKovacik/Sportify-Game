/// <reference path="../typings/jquery/jquery.d.ts"/>
 $(function () {
     var oldList, newList, item;
     
     var docid = _spGetQueryParam("id");
     
     $(".connectedSortable").sortable({
         start: function (event, ui) {
             item = ui.item;
             newList = oldList = ui.item.parent();
            //ui.item.toggleClass('red');
         },
         stop: function (event, ui) {
             if (newList.attr('id') == "sortable1") {
                 ui.item.addClass('answers');
                 ui.item.removeClass('questions');
                 //ui.item.toggleClass('answers');
                 //ui.item.toggleClass('questions');
             }
             if (newList.attr('id') == "sortable2") {
                 ui.item.addClass('questions');
                 ui.item.removeClass('answers');
                 //ui.item.toggleClass('questions')
                 //ui.item.toggleClass('answers');
             }
             //alert("Moved " + item.text() + " from " + oldList.attr('id') + " to " + newList.attr('id'));
         },
         change: function (event, ui) {
             if (ui.sender) newList = ui.placeholder.parent();
         },
         connectWith: ".connectedSortable"
     }).disableSelection();

     $("#target").click(function () {
         clearInterval(interval);
         var status = true;
         var count = 0;
         var correct = 0;
         var incoret = 0;
         $("#sortable1 li").each(function (i, el) {
             count = count + 1;
             if ($(el).attr('id') != $(el).index()) {
                 status = false;
                 incoret = incoret + 1;
             } else {
                 correct = correct + 1;
             }
         });
         if (count == 0) {
             status = false;
         }
         if (status == true) {
             $("#statusfield").html("Mission accomplished successful. Dark side welcomes you!");
             $("#canswers").html(correct);
             $("#ianswers").html(incoret);

         } else {
             $("#statusfield").html("Mission failed.");
             count = 0;
             $("#sortable2 li").each(function (i, el) {
                count = count + 1;
             });
             $("#canswers").html(correct);
             $("#ianswers").html(incoret + count);
         }
     });
     
     var interval;
     
     function timerstartFunction()
     {
        $("#gemediv_display").css("z-index", -10);
        $("#gemediv_display").css("opacity", 0);
         
        var hour = 0;
        var min = 0;
        var sec = 0;
        var counter = 0;
        interval = setInterval(function() {
            counter = counter + 1;
            sec = sec + 1;
            if (sec > 59) 
            {
                sec = 0;
                min = min + 1;
            }
            var msec = sec;
            if (sec<10){ msec = "0" + sec; }
            if (min > 59)
            {
                min = 0;
                hour = hour + 1;
            }
            var mmin = min;
            if (min<10){ mmin = "0" + min; }
            if (hour > 23)
            {
                hour = 0;
            }
            var mhour = sec;
            if (hour<10){ mhour = "0" + hour; }
            $("#timer").html(mhour + ": " + mmin + ": " + msec);
        }, 1000);

     }
     //Bind Timer function on page load
     $("#timerstart").bind("click", timerstartFunction);

     $("#timerstart").click(function () {
         //unbind timer function on page load
        $("#timerstart").unbind("click", timerstartFunction);
        //TODO: css update
        //$("#gemediv_display").css
     });
     
     function _spGetQueryParam(p) {
        ULSA13: ;
        var q = window.location.search.substring(1);
        if (q && q.length > 2) {
        var params = q.split("&");
        var l = params.length;
        for (var i = 0; i < l; i++) {
            var pair = params[i].split("=");
            if (pair[0].toLowerCase() == p)
                return pair[1];
            }
        }
     }
    
     //$.when(GameLoadDataNamespace.getData($("#sortable2"),"data/data.xml",1,deferred)).done(GameRandomizerNamespace.getRandomLi($("#sortable2"), 0, 5 , 10));
     GameLoadDataNamespace.getData($("#sortable2"),$("#imgsolution"),$("#wordingsolution"),$("#gemediv_display"), $("#gamediv"),"data/data.xml",docid);
     //GameRandomizerNamespace.getRandomLi($("#sortable2"), 0, 5 , 10);
     
 })