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


    if (unserProjektButtonClass === "activeButton");
    document.getElementById("unserProjektButton").className = "navButton";
}

function backButton() {
    document.getElementById("projekteButton").className = "navButton";
    document.getElementById("unserProjektButton").className = "activeButton";
    if (projekteButtonClass === "activeButton");
        document.getElementById("menuButtons").classList.add("moveIn");
        document.getElementById("menuButtons").classList.remove("moveOut");
        document.getElementById("pxButtons").classList.remove("moveIn");
        document.getElementById("pxButtons").classList.add("moveOut");
    
}