var GameRandomizerNamespace = {
    getRandomLi: function(ulobject, min, max, loss)
    {
        var childil = ulobject.children();
        if(min == null) min = 0;
        if(max == null) max = 5;
        var arr = new Array();
        for(var i = 0; i < loss; i++) { 
            var rid;
            rid = Math.floor(Math.random() * max) + min;
            $(ulobject).prepend($("#" + rid));
        }
    }
}


var GameLoadDataNamespace = {
    getData: function(ulobject, img, wording, modal, gheight, file, index)
    {
        $(document).ready(function()
        {
            $.ajax({
            type: "GET",
            url: file,
            dataType: "xml",
            success: parseXml,
            error: errorMsg
            });
        });
        
        
        function parseXml(xml)
        {
            var ii = 0;
            if (index == undefined){
                index = $(xml).find("selected").text();
            }
            $(xml).find("work"+index).each(function(){
                $(this).find("Row").each(function(){
                    ulobject.append('<li id='+ii+' class="questions">'+$(this).text()+'</li>');
                    ii++;
                });
                $(this).find("Image").each(function(){
                    img.attr("src", $(this).text());
                    ii++;
                });
                $(this).find("Wording").each(function(){
                    wording.text($(this).text());
                    ii++;
                });
            });
            
            var h = gheight.height()+60;
            modal.css("height", h);
            //var h = h - 60;
            //modal.css("line-height", h);
            
            
            GameRandomizerNamespace.getRandomLi($("#sortable2"), 0, ii , 10);
        }
        
        function errorMsg(xml, errortype, error)
        {
            alert(errortype +" - " + error.message);
        }
    }
}