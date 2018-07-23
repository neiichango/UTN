$("#C1").click(function(){
        $(this).css("background-color","#123463");
    });

$("#C2").click(function(){
        $(this).css("width","200px");
    });


$("#mostrar").click(function(){
         alert($("#txt1").val());
$(this).attr("value","obtener");
    });

$("#hide").click(function(){
        $("#nombre").hide();

    });
$("#show").click(function(){
        $("#nombre").show();
        
    });
$("#crear").click(function(){
        $("body").append("<h1>Hola!</h1>");
        
    });

