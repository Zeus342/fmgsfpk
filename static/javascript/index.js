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
    document.getElementById("menuButtons").classList.add("moveOutButtons");
    document.getElementById("menuButtons").classList.remove("moveInButtons");
    document.getElementById("pxButtons").classList.remove("hidden");
    document.getElementById("pxButtons").classList.add("moveInButtons");
    document.getElementById("pxButtons").classList.remove("moveOutButtons");
    document.getElementById("selectProjektkursPromt").classList.remove("hidden");
    document.getElementById("selectProjektkursPromt").classList.add("moveInUpWebsiteContent");
    

    if (unserProjektButtonClass === "activeButton");
        document.getElementById("unserProjektButton").className = "navButton";
        document.getElementById("unserProjekt").classList.add("hidden");
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
        document.getElementById("menuButtons").classList.add("moveInButtons");
        document.getElementById("menuButtons").classList.remove("moveOutButtons");
        document.getElementById("pxButtons").classList.remove("moveInButtons");
        document.getElementById("pxButtons").classList.add("moveOutButtons");
        document.getElementById("unserProjekt").classList.add("moveInUpWebsiteContent");
        document.getElementById("unserProjekt").classList.remove("moveOutDownWebsiteContent");
        document.getElementById("unserProjekt").classList.remove("hidden");

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
    document.getElementById("pxmProjekte").classList.add("moveInUpWebsiteContent");
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
    document.getElementById("pxbcProjekte").classList.add("moveInUpWebsiteContent");
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
    document.getElementById("pxkureProjekte").classList.add("moveInUpWebsiteContent");
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
    document.getElementById("pxgepProjekte").classList.add("moveInUpWebsiteContent");
}

function passTest1() {
    var url = new URL("http://127.0.0.1:5000/projekte.html");
    url.searchParams.set('load', 'test1');
    document.location.href = url;
}

function passTest2() {
    var url = new URL("http://127.0.0.1:5000/projekte.html");
    url.searchParams.set('load', 'test2');
    document.location.href = url;
}