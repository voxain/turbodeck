POS.openAppWindow = appID => {
    if(POS.system.apps.filter(n => n.name == appID).length){
        $(POS.system.apps.filter(n => n.name == appID)).css('animation', 'popIn .3s ease');
        return $(POS.system.apps.filter(n => n.name == appID)).removeClass('minimized');
    }
    else{
        let appInformation = JSON.parse(HTTP.get('apps/' + appID + '/app.json'));


        let appWindow = document.createElement('div');
        appWindow.name = appID
        appWindow.state = 'active'
        appWindow.classList = 'app-window';
        appWindow.append(createAppBar(appID, appInformation, appWindow));

        let appView = document.createElement('div');
        appView.classList = 'app-window-inner';
        appView.innerHTML = HTTP.get('apps/' + appID + '/index.html');
        appWindow.append(appView);

        // parseScripts(['/src/views/apps/' + appID + '/main.js']);

        POS.system.apps.push(appWindow)
        $('#all-wrapper').append(appWindow);

        $(appWindow).draggable({
            handle: 'div.appbar'
        });
    }
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
        systemIcons.push(document.createElement('img'));
        systemIcons[i].classList = 'appbar-icon-small';
    }

    systemIcons[0].src = '/src/views/system/icons/UI/close-outline.svg';
    systemIcons[1].src = '/src/views/system/icons/UI/chevron-up-outline.svg';
    systemIcons[2].src = '/src/views/system/icons/UI/chevron-down-outline.svg';

    systemIcons[0].onclick = () => {
        POS.system.apps.splice( POS.system.apps.findIndex(a => a == appWindow) , 1);
        $(appWindow).remove();
    }
    systemIcons[2].onclick = () => {
        appWindow.state = 'minimized';
        $(appWindow).css('animation', 'popIn .3s ease reverse');
        $(appWindow).addClass('minimized');
    }

    $(appBar).append(icon, text);
    systemIcons.forEach(i => {
        $(appBar).append(i);
    });

    return appBar;
}