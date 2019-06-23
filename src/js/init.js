console.log("Welcome to PowerOS!");

let POS = {
    system: {
        apps: []
    }
};

let parseScripts = scripts => {
    scripts.forEach(e => {
        let sc = document.createElement("script");
        sc.src = e;
        document.head.append(sc);
    });
};

let parseStyles = scripts => {
    scripts.forEach(e => {
        let sc = document.createElement("link");
        sc.href = e;
        sc.rel = "stylesheet";
        document.head.append(sc);
    });
};



parseScripts(["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js", "js/REQUEST.js", "js/init/loadingScreen.js"]);