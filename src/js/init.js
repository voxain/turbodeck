console.log("Welcome to PowerOS!");

let POS = {
    system: {
        apps: [],
        notification:{
            current: [],
            send: settings => {
                /*
                    settings{
                        title,
                        text,
                        text2,
                        image,
                        persistent,
                        duration,
                        priority,
                        sound,
                        actions [function/array of functions]
                    }
                */
               let parser = new DOMParser();
               let id = 'notification-' + Math.round(Math.random() * 0x1000);
               let notifyTemplate = `
                <div class="notification backdrop-blur" id="${id}">
                    <div class="notification-image">
                        <span class="iconify" data-icon="uil:shield-exclamation" data-inline="false"></span>
                    </div>
                    <div class="notification-content">
                        <span class="notification-title">::TITLE::</span><br>
                        <span class="notification-text">::TEXT::</span><br>
                        <span class="notification-text">::TEXT2::</span>
                    </div>
                </div>
                `.replace(/::TITLE::/gi, settings.title || 'NOTIFICATION TITLE MISSING')
                .replace(/::TEXT::/gi, settings.text || 'NOTIFICATION TEXT MISSING')
                .replace(/::TEXT2::/gi, settings.text2 || '');

                let HTMLnot = parser.parseFromString(notifyTemplate, 'text/html');

                $('#notifications').append(HTMLnot.body.childNodes);
                setTimeout(() => {
                    $('#' + id).css('animation', 'notificationOut 0.4s cubic-bezier(0.8 , 0 , 0.2 , 1)')
                }, 4000);
                setTimeout(() => {
                    $('#' + id).remove()
                }, 4380);
            }
        },
        wallpaper: {
            internal: [
                '/src/views/system/img/wallpapers/default.png',
                '/src/views/system/img/wallpapers/default-1.png',
                '/src/views/system/img/wallpapers/default-2.png',
                '/src/views/system/img/wallpapers/default-3.png',
                '/src/views/system/img/wallpapers/default-4.png',
                '/src/views/system/img/wallpapers/default-5.png',
                '/src/views/system/img/wallpapers/default-6.png'
            ],
            set: url => {
                $('.all-wrapper').css('background', `url('${url}') no-repeat center`);
                POS.system.notification.send({
                    title: 'Wallpaper changed',
                    text: 'Wallpaper successfully changed.'
                })
            }
        },
        toggleBlur: () => {
            $('#all-wrapper').append($('<style>').html('.backdrop-blur{backdrop-filter: none !important; background: #fff !important}'));
        },
        indicators: {
            mouse:{
                button1: false
            }
        }
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



parseScripts(["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js", "https://code.iconify.design/1/1.0.7/iconify.min.js", "js/REQUEST.js", "js/init/loadingScreen.js", "js/init/fs.js"]);