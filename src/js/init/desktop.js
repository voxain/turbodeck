var request = new XMLHttpRequest();
request.open('GET', "http://localhost:5500/src/views/system/desktop.html");

request.onload = () => {
    document.body.innerHTML = request.response;
    parseStyles(["http://localhost:5500/src/views/system/css/main.css", "http://localhost:5500/src/views/system/css/desktop.css", "http://localhost:5500/src/views/system/appbar/css/default.css", "https://materialdesignicons.com/cdn/light/0.2.63/css/materialdesignicons-light.min.css"]);
    // Auto-start services

    parseScripts(['/src/views/system/appbar/appHandler.js']);

    // Auto-start applications

    parseScripts(['/src/views/apps/bulldock/main.js']);
};
request.onerror = err => {
    console.log(err);
};

request.send();