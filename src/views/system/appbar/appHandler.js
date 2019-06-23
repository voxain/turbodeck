POS.openAppWindow = appID => {
    let appInformation = JSON.parse(HTTP.get('apps/' + appID + '/app.json'));

    let appWindow = document.createElement('div');
    appWindow.classList = 'app-window';
    appWindow.append(createAppBar(appID, appInformation, appWindow));

    let appView = document.createElement('div');
    appView.classList = 'app-window-inner';
    appView.innerHTML = HTTP.get('apps/' + appID + '/index.html');
    appWindow.append(appView);

    // parseScripts(['/src/views/apps/' + appID + '/main.js']);

    $('#all-wrapper').append(appWindow);

    $(appWindow).draggable({
        handle: 'div.appbar'
    });
};

function createAppBar(name, info, appWindow){
    let appBar = document.createElement('div');
    appBar.classList = 'appbar';

    let icon = document.createElement('img');
    icon.classList = 'appbar-icon';
    icon.src = '/src/views/apps/' + name + '/icon.svg';

    let text = document.createTextNode(info.name);

    let systemIcons = [];
    for (let i = 0; i < 3; i++) {
        systemIcons.push(document.createElement('span'));
        systemIcons[i].classList = 'appbar-icon-small right mdil ';
    }

    systemIcons[0].classList += 'mdil-chevron-double-down';
    systemIcons[1].classList += 'mdil-chevron-up';
    systemIcons[2].classList += 'mdil-chevron-down';

    systemIcons[0].onclick = () => {
        $(appWindow).remove();
    }

    $(appBar).append(icon, text);
    systemIcons.forEach(i => {
        $(appBar).append(i);
    });

    return appBar;
}