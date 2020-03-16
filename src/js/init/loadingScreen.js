var request = new XMLHttpRequest();
request.open('GET', "/src/views/system/loadingScreen.html");

request.onload = () => {
    document.body.innerHTML = request.response;
    parseStyles(["/src/views/system/css/main.css", "/src/views/system/css/loadingScreen.css"]);
    setTimeout(() => {
        parseScripts(["js/init/desktop.js"]);
    }, /*9000*/ 2000);
};
request.onerror = err => {
    console.log(err);
};

request.send();