$(function () {

    var filepath;
    var reader;
    
    $("#resolvexml").click(function () {
        filepath =  document.getElementById('fu').files[0];
        if (filepath) {
            // create reader
            reader = new FileReader();
            reader.readAsText(filepath);
            reader.onload = function(e) {
                // browser completed reading file - display it
                var text = e.target.result;
                alert(text);
                //Change all ilegar charakter
                text = text.replace(/"/g,"&quot;");
                text = text.replace(/</g,"&lt;");
                text = text.replace(/>/g,"&gt;");
                //Return back header
                text = text.replace(/&lt;\?xml/g,"<?xml");
                text = text.replace(/\?&gt;/g,"?>");
                text = text.replace(/&quot;1.0&quot;/g,"\"1.0\"");
                text = text.replace(/&quot;UTF-8&quot;/g,"\"UTF-8\"");
                //Return back tags
                text = text.replace(/&lt;Examples&gt;/g,"<Examples>");
                text = text.replace(/&lt;Row&gt;/g,"<Row>");
                text = text.replace(/&lt;Wording&gt;/g,"<Wording>");
                text = text.replace(/&lt;\/Examples&gt;/g,"</Examples>");
                text = text.replace(/&lt;\/Row&gt;/g,"</Row>");
                text = text.replace(/&lt;\/Wording&gt;/g,"</Wording>");
                text = text.replace(/&lt;selected&gt;/g,"<selected>");
                text = text.replace(/&lt;\/selected&gt;/g,"</selected>");
                text = text.replace(/&lt;Image&gt;/g,"<Image>");
                text = text.replace(/&lt;\/Image&gt;/g,"</Image>");
                text = text.replace(/&lt;work/g,"<work");
                text = text.replace(/&lt;\/work/g,"</work");
                text = text.replace(/1&gt;/g,"1>");
                text = text.replace(/2&gt;/g,"2>");
                text = text.replace(/3&gt;/g,"3>");
                text = text.replace(/4&gt;/g,"4>");
                text = text.replace(/5&gt;/g,"5>");
                text = text.replace(/6&gt;/g,"6>");
                text = text.replace(/7&gt;/g,"7>");
                text = text.replace(/8&gt;/g,"8>");
                text = text.replace(/9&gt;/g,"9>");
                text = text.replace(/0&gt;/g,"0>");
                $("#resolvedtext").text(text);
                //TODO </Wording>
                
            };
        }
     });
    
    
    //$(document).ready(function()
    //{
    //    $.ajax({
    //        type: "GET",
    //        url: file,
    //        dataType: "txt",
    //        success: parseXml,
    //        error: errorMsg
    //    });
    //});
});