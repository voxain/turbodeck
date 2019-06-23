var request = new XMLHttpRequest();
request.open('GET', "/src/views/system/desktop.html");

request.onload = () => {
    document.body.innerHTML = request.response;
    parseStyles(["/src/views/system/css/main.css", "/src/views/system/css/desktop.css", "/src/views/system/appbar/css/default.css", "https://materialdesignicons.com/cdn/light/0.2.63/css/materialdesignicons-light.min.css"]);
    // Auto-start services

    parseScripts(['/src/views/system/appbar/appHandler.js']);

    // Auto-start applications

    parseScripts(['/src/views/apps/bulldock/main.js']);
};
request.onerror = err => {
    console.log(err);
};

request.send();