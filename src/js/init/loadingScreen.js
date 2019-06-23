var request = new XMLHttpRequest();
request.open('GET', "/src/views/system/loadingScreen.html");

request.onload = () => {
    document.body.innerHTML = request.response;
    parseStyles(["/src/views/system/css/main.css", "/src/views/system/css/loadingScreen.css"]);
    Array.from(document.getElementsByClassName("loading-ball")).forEach((b, i) => {
        b.style.animationDelay = i*50 + "ms";
    });
    setTimeout(() => {
        $('.loading-ball').css('opacity', 1);
    }, 2000);
    setTimeout(() => {
        $('.loading-logo').css('opacity', 0);
    }, 6000);
    setTimeout(() => {
        $('.loading-ball').css('opacity', 0);
    }, 7000);
    setTimeout(() => {
        parseScripts(["js/init/desktop.js"]);
    }, /*9000*/ 10);
};
request.onerror = err => {
    console.log(err);
};

request.send();