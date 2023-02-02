function showHideUnserProjekt() {
    var x = document.getElementById("unserProjektDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

var projectButtonVar = document.getElementById("projectButton").className
var homeButtonVar = document.getElementById("homeButton").className
var unserProjektVar = document.getElementById("unserProjektButton").className
var headerHasMoveUp = document.getElementById("header").className
var buttonsHaveMoveUp = document.getElementById("buttons").className

function makeHomeActiveButton() {
    document.getElementById("homeButton").className = "activeButton";
    
    if (buttonsHaveMoveUp === "moveUp");
        document.getElementById("header").className = "center";
        document.getElementById("buttons").className = "center";

    if (projectButtonVar === "activeButton");
        document.getElementById("projectButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";

    if (unserProjektVar === "activeButton");
        document.getElementById("projectButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";
}
function makeProjectsActiveButton() {
    document.getElementById("projectButton").className = "activeButton";
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";

    if (homeButtonVar === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";

    if (unserProjektVar === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("unserProjektButton").className = "navButton";
}
function makeUnserProjektActiveButton() {
    document.getElementById("unserProjektButton").className = "activeButton";
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";

    if (homeButtonVar === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("projectButton").className = "navButton";

    if (projectButtonVar === "activeButton");
        document.getElementById("homeButton").className = "navButton";
        document.getElementById("projectButton").className = "navButton";
}