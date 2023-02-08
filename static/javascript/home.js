var homeButtonActiveClass = document.getElementById("homeButton").className
var projectsButtonActiveClass = document.getElementById("projectButton").className
var unserProjektActiveClass = document.getElementById("unserProjektButton").className
var headerActiveClass = document.getElementById("header").className
var buttonsActiveClass = document.getElementById("buttons").className
var projectsContentActiveClass = document.getElementById("projectsContent").className
var unserProjektContentActiveClass = document.getElementById("unserProjektContent").className

function atHome() {
    document.getElementById("homeButton").className = "activeButton";
    document.getElementById("homeButton").disabled = true;
}

function makeHomeActiveButton() {
    document.getElementById("homeButton").className = "activeButton";
    document.getElementById("projectButton").className = "navButton";
    document.getElementById("unserProjektButton").className = "navButton";
    document.getElementById("projectsContent").className = "hideProjectsContent";
    document.getElementById("unserProjektContent").className = "hideUnserProjektContent";

    if (buttonsActiveClass === "moveUp");
        document.getElementById("header").className = "moveDown";
        document.getElementById("buttons").className = "moveDown";     
}
function makeProjectsActiveButton() {
    document.getElementById("projectButton").className = "activeButton";
    document.getElementById("homeButton").className = "navButton";
    document.getElementById("unserProjektButton").className = "navButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";
    document.getElementById("projectsContent").className = "showProjectsContent";

    if (unserProjektContentActiveClass === "showUnserProjektContent");
        document.getElementById("unserProjektContent").className = "hideUnserProjektContent";

}
function makeUnserProjektActiveButton() {
    document.getElementById("unserProjektButton").className = "activeButton";
    document.getElementById("homeButton").className = "navButton";
    document.getElementById("projectButton").className = "navButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").className = "moveUp";
    document.getElementById("buttons").className = "moveUp";
    document.getElementById("unserProjektContent").className = "showUnserProjektContent";

    if (projectsContentActiveClass === "showProjectsContent");
        document.getElementById("projectsContent").className = "hideProjectsContent";
}