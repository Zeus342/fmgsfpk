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

function makeHomeActiveButton() {
    document.getElementById("homeButton").className = "activeButton";
    if (projectButtonVar === "activeButton");
        document.getElementById("projectButton").className = "navButton";
}
function makeProjectsActiveButton() {
    document.getElementById("projectButton").className = "activeButton";
    if (homeButtonVar === "activeButton");
        document.getElementById("homeButton").className = "navButton";
}