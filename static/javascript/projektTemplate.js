

function pageLoader() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const load = urlParams.get('load')

    if (load === "test1")
        document.getElementById("testBoxHigh").innerHTML="Test1 Projekt";
        document.getElementById("testBoxLow").innerHTML="Projektbeschreibung von Test1";
    
    if (load === "test2")
        document.getElementById("testBoxHigh").innerHTML="Test2 Projekt";
        document.getElementById("testBoxLow").innerHTML="Projektbeschreibung von Test2";
}