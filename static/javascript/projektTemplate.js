

function pageLoader() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const load = urlParams.get('load')

    if (load === "test1")
        document.getElementById("testBoxHigh").innerHTML="Test Projekt 1";
    
    if (load === "test2")
        document.getElementById("testBoxHigh").innerHTML="Test Projekt 2";
}