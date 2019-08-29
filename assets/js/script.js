$(document).ready(function() {
    var navOpen = false;

    // $('.hidden').css("display", "none");
    $("#bar-div").click(function(){
        if (!navOpen) {
            $('#tiles-container').css("display", "block");
            setTimeout(function() {
                $('#hero-container').css("display", "none");
                $('.tiles').css("display", "flex");
            }, 750);
            navOpen = true;
        } else {
            $('#hero-container').toggleClass("hidden");
            // $(".tiles").toggleClass("hidden");
            $("#tiles-container").css("display", "none");
            setTimeout(function() {
                $('#hero-container').css("display", "block");
            }, 750);
            navOpen = false;
        }  
    });
      
});

