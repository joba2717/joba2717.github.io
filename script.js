// TODO: Lots of work here... rewrite everything i guess?

$(document).ready(function () {
    // Following are some quick jQuery functions to show/hide the "show me more" articles in the projects page
    $("#show-me-dgp").click(function () {
        $("#hidden-1st").show();
        $("#show-less-dgp").show();
        $("#show-me-dgp").hide();
    });
    $("#show-less-dgp").click(function () {
        $("#hidden-1st").hide();
        $("#show-me-dgp").show();
        $("#show-less-dgp").hide();
    });  

    $("#show-me-alumni").click(function () {
        $("#hidden-2nd").show();
        $("#show-less-alumni").show();
        $("#show-me-alumni").hide();
    });
    $("#show-less-alumni").click(function () {
        $("#hidden-2nd").hide();
        $("#show-me-alumni").show();
        $("#show-less-alumni").hide();
    }); 


    $("#show-me-SQ").click(function () {
        $("#project-SQ").fadeIn("slow");
    });    
    $("#closeA").click(function () {
        $("#project-alumni").hide();
    });
    $("#closeSQ").click(function () {
        $("#project-SQ").hide();
    });

    // Change cursor over the "Show me more" buttons to indicate they are clickable
    $("#show-me-dgp").hover(function () {
        $("#show-me-dgp").css("cursor", "pointer");
    });
    $("#show-me-alumni").hover(function () {
        $("#show-me-alumni").css("cursor", "pointer");
    });
    $("#show-less-dgp").hover(function () {
        $("#show-less-dgp").css("cursor", "pointer");
    });
    $("#show-less-alumni").hover(function () {
        $("#show-less-alumni").css("cursor", "pointer");
    });
    

});

// These functions handles the images shown in the "Show me more" articles
var imgCountA = 1;
var imgCountSQ = 1;

function changeImgSrcAlumni(i) {
    imgCountA = imgCountA + i;
    if (imgCountA > 4) {
        imgCountA = 1;
    } else if (imgCountA < 1) {
        imgCountA = 4;
    }
    document.getElementById("alumn-img").src = "alumn" + imgCountA + ".png";
} 

function changeImgSrcSQ(i) {
    imgCountSQ = imgCountSQ + i;
    if (imgCountSQ > 4) {
        imgCountSQ = 1;
    } else if (imgCountSQ < 1) {
        imgCountSQ = 4;
    }
    document.getElementById("SQ-img").src = "SQ" + imgCountSQ + ".png";
} 
