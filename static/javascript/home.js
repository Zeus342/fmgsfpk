function showHideUnserProjekt() {
    var x = document.getElementById("unserProjektDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

var projectButtonActiveClass = document.getElementById("projectButton").className
var homeButtonActiveClass = document.getElementById("homeButton").className
var unserProjektActiveClass = document.getElementById("unserProjektButton").className
var headerActiveClass = document.getElementById("header").className
var buttonsActiveClass = document.getElementById("buttons").className

function atHome() {
    document.getElementById("homeButton").className = "activeButton";
    document.getElementById("homeButton").disabled = true;
}

function makeHomeActiveButton() {
    document.getElementById("homeButton").className = "activeButton";


    if (buttonsActiveClass === "moveUp");
        document.getElementById("header").className = "moveDown";
        document.getElementById("buttons").className = "moveDown";

    if (projectButtonActiveClass === "activeButton");
        document.getElementById("projectButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";

    if (unserProjektActiveClass === "activeButton");
        document.getElementById("projectButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";
}
function makeProjectsActiveButton() {
    document.getElementById("projectButton").className = "activeButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";

    if (homeButtonActiveClass === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";

    if (unserProjektActiveClass === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";
}
function makeUnserProjektActiveButton() {
    document.getElementById("unserProjektButton").className = "activeButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";

    if (homeButtonActiveClass === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("projectButton").className = "navButton";

    if (projectButtonActiveClass === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("projectButton").className = "navButton";
}