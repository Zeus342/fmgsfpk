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

function back() {
    document.getElementById("menuBody").classList.remove("hidden");
    document.getElementById("projekteBody").classList.add("hidden");
}

function passTest1() {
    var url = new URL("http://127.0.0.1:5000/projekte.html");
    url.searchParams.set('load', 'test1');
    window.location.href = url;
}

function passTest2() {
    var url = new URL("http://127.0.0.1:5000/projekte.html");
    url.searchParams.set('load', 'test2');
    window.location.href = url;
}