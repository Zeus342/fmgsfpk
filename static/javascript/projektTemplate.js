

function pageLoader() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const load = urlParams.get('load')
    
    if (load === "liam")
        document.getElementById("testBoxHigh").innerHTML="Liams Projekt";
        document.getElementById("testBoxLow").innerHTML="Projektbeschreibung von Liam";

}