var unserProjektButtonClass = document.getElementById("unserProjektButton").className
var projekteButtonClass = document.getElementById("projekteButton").className

function atHome() {
    document.getElementById("unserProjektButton").className = "activeButton";
}

function makeUnserProjektActiveButton() {
    document.getElementById("unserProjektButton").className = "activeButton";

    if (projekteButtonClass === "activeButton");
        document.getElementById("projekteButton").className ="navButton";
}

function makeProjekteActiveButton() {
    document.getElementById("projekteButton").className ="activeButton";
    document.getElementById("menuButtons").classList.add("moveOut");
    document.getElementById("menuButtons").classList.remove("moveIn");
    document.getElementById("pxButtons").classList.remove("hidden");
    document.getElementById("pxButtons").classList.add("moveIn");
    document.getElementById("pxButtons").classList.remove("moveOut");
    document.getElementById("selectProjektkursPromt").classList.remove("hidden");

    if (unserProjektButtonClass === "activeButton");
    document.getElementById("unserProjektButton").className = "navButton";
}

function backButton() {
    document.getElementById("projekteButton").className = "navButton";
    document.getElementById("pxm").className = "navButton";
    document.getElementById("pxbc").className = "navButton";
    document.getElementById("pxkure").className = "navButton";
    document.getElementById("pxgep").className = "navButton";
    document.getElementById("unserProjektButton").className = "activeButton";
    document.getElementById("selectProjektkursPromt").classList.add("hidden");
    document.getElementById("pxmProjekte").classList.add("hidden");
    document.getElementById("pxbcProjekte").classList.add("hidden");
    document.getElementById("pxkureProjekte").classList.add("hidden");
    document.getElementById("pxgepProjekte").classList.add("hidden");

    if (projekteButtonClass === "activeButton");
        document.getElementById("menuButtons").classList.add("moveIn");
        document.getElementById("menuButtons").classList.remove("moveOut");
        document.getElementById("pxButtons").classList.remove("moveIn");
        document.getElementById("pxButtons").classList.add("moveOut"); 
}

function showPxmProjekte() {
    document.getElementById("pxbc").classList = "navButton";
    document.getElementById("pxkure").classList = "navButton";
    document.getElementById("pxgep").classList = "navButton";
    document.getElementById("pxgepProjekte").classList.add("hidden");
    document.getElementById("pxbcProjekte").classList.add("hidden");
    document.getElementById("pxkureProjekte").classList.add("hidden");
    document.getElementById("pxm").classList = "activeButton";
    document.getElementById("selectProjektkursPromt").classList.add("hidden");
    document.getElementById("pxmProjekte").classList.remove("hidden");
}
function showPxbcProjekte() {
    document.getElementById("pxm").classList = "navButton";
    document.getElementById("pxkure").classList = "navButton";
    document.getElementById("pxgep").classList = "navButton";
    document.getElementById("pxmProjekte").classList.add("hidden");
    document.getElementById("pxgepProjekte").classList.add("hidden");
    document.getElementById("pxkureProjekte").classList.add("hidden");
    document.getElementById("pxbc").classList = "activeButton";
    document.getElementById("selectProjektkursPromt").classList.add("hidden");
    document.getElementById("pxbcProjekte").classList.remove("hidden");
}
function showPxkureProjekte() {
    document.getElementById("pxm").classList = "navButton";
    document.getElementById("pxbc").classList = "navButton";
    document.getElementById("pxgep").classList = "navButton";
    document.getElementById("pxmProjekte").classList.add("hidden");
    document.getElementById("pxbcProjekte").classList.add("hidden");
    document.getElementById("pxgepProjekte").classList.add("hidden");
    document.getElementById("pxkure").classList = "activeButton";
    document.getElementById("selectProjektkursPromt").classList.add("hidden");
    document.getElementById("pxkureProjekte").classList.remove("hidden");
}
function showPxgepProjekte() {
    document.getElementById("pxm").classList = "navButton";
    document.getElementById("pxbc").classList = "navButton";
    document.getElementById("pxkure").classList = "navButton";
    document.getElementById("pxmProjekte").classList.add("hidden");
    document.getElementById("pxbcProjekte").classList.add("hidden");
    document.getElementById("pxkureProjekte").classList.add("hidden");
    document.getElementById("pxgep").classList = "activeButton";
    document.getElementById("selectProjektkursPromt").classList.add("hidden");
    document.getElementById("pxgepProjekte").classList.remove("hidden");
}