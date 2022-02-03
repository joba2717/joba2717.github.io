$(document).ready(function () {
    // Following are some quick jQuery functions to show/hide the "show me more" articles in the projects page
    $("#show-me-alumni").click(function () {
        $("#project-alumni").fadeIn("slow");
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
    $("#show-me-alumni").hover(function () {
        $("#show-me-alumni").css("cursor", "pointer");
    });
    $("#show-me-SQ").hover(function () {
        $("#show-me-SQ").css("cursor", "pointer");
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
