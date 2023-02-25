var homeButtonActiveClass = document.getElementById("homeButton").className
var projectsButtonActiveClass = document.getElementById("projectButton").className
var unserProjektButtonActiveClass = document.getElementById("unserProjektButton").className
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
    document.getElementById("projectsButton").className = "navButton";
    document.getElementById("unserProjektButton").className = "navButton";

    if (buttonsActiveClass === "moveUp");
        document.getElementById("header").className = "moveDown";
        document.getElementById("buttons").className = "moveDown";

    if (projectsButtonActiveClass === "navButton");
        document.getElementById("projectsContent").className = "contentHide";

    if (unserProjektButtonActiveClass === "navButton");
        document.getElementById("unserProjektContent").className = "contentHide";
}
function makeProjectsActiveButton() {
    document.getElementById("projectsButton").className = "activeButton";
    document.getElementById("homeButton").className = "navButton";
    document.getElementById("unserProjektButton").className = "navButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").classList = "moveUp";
    document.getElementById("buttons").className = "moveUp";

}
function makeUnserProjektActiveButton() {
    document.getElementById("unserProjektButton").className = "activeButton";
    document.getElementById("homeButton").className = "navButton";
    document.getElementById("projectsButton").className = "navButton";
    document.getElementById("homeButton").disabled = false;
    document.getElementById("header").classList.add("moveUp");
    document.getElementById("buttons").classList.add("moveUp");
}

function showProjectsContent() {

    if (projectsButtonActiveClass === "activeButton");
        document.getElementById("projectsContent").className = "showProjectsContent";

    if (unserProjektContentActiveClass === "contentHide");
        document.getElementById("unserProjektContent").className = "contentHide";

}
function showUnserProjektContent() {

    if (unserProjektButtonActiveClass === "activeButton");
        document.getElementById("unserProjektContent").className = "showUnserProjektContent";

    if (projectsContentActiveClass === "contentHide");
        document.getElementById("projectsContent").className = "contentHide";
        
}