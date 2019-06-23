var request = new XMLHttpRequest();
request.open('GET', "http://localhost:5500/src/views/system/loadingScreen.html");

request.onload = () => {
    document.body.innerHTML = request.response;
    parseStyles(["http://localhost:5500/src/views/system/css/main.css", "http://localhost:5500/src/views/system/css/loadingScreen.css"]);
    Array.from(document.getElementsByClassName("loading-ball")).forEach((b, i) => {
        b.style.animationDelay = i*50 + "ms";
    });
    setTimeout(() => {
        $('.loading-logo').css('opacity', 0);
    }, 4000);
    setTimeout(() => {
        $('.loading-ball').css('opacity', 0);
    }, 5000);
    setTimeout(() => {
        parseScripts(["js/init/desktop.js"]);
    }, 6000);
};
request.onerror = err => {
    console.log(err);
};

request.send();