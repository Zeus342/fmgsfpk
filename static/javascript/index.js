var unserProjektButtonClass = document.getElementById("unserProjektButton").className
var projekteButtonClass = document.getElementById("projekteButton").className
var pxmButtonClass = document.getElementById("pxm").className
var pxbcButtonClass = document.getElementById("pxbc").className
var pxkureButtonClass = document.getElementById("pxkure").className
var pxgepButtonClass = document.getElementById("pxgep").className


function flaskRedirect() {
    window.location.href = "https://flask.palletsprojects.com";
}

function linodeRedirect() {
    window.location.href = "https://www.linode.com/";
}

function projekteDepress() {
    document.getElementById("menuBody").classList.add("hidden");
    document.getElementById("projekteBody").classList.remove("hidden");
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