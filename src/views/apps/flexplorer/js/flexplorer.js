POS.flexplorer = {

    refreshFS() {
        $('#flexplorer-sidebar').text('');

        POS.fs.sys.forEach((fs, i) => {
            let FSEntry = new DOMParser().parseFromString(`
            <div onclick="POS.flexplorer.showDir(${i})" class="app-window-category">
                <img class="icon" src="/src/views/system/icons/UI/hard-drive-outline.svg"> ::NAME::
            </div>`
            .replace(/::NAME::/g, fs.getInfo().name), 
            'text/html');

            $('#flexplorer-sidebar').append(FSEntry.body.children);
        });
    },

    showDir(dirShow) {
        $('#flexplorer-view').text('');

        let workDir;
        if(typeof dirShow != 'string') dirShow = dirShow.toString();
        if(dirShow.includes('>')) dirShow = dirShow.split('>');
        else if(dirShow.length == 1) {
            dirShow = [dirShow];
            workDir = POS.fs.sys[dirShow].get().root.get().content;
        }

        console.log(dirShow)

        $('#flexplorer-statusbar').text(workDir.length + ' Elements');

        workDir.forEach(entry => {
            let FSEntry = new DOMParser().parseFromString(`
            <div onclick="POS.flexplorer.showDir(${dirShow.join('>')}>::NAME::)" class="desktop-icon">
                <img class="desktop-icon-img" src="/src/views/system/icons/McMojave-circle-black-dark/places/48/custom-folder.svg">
                <nobr>::NAME::</nobr>
            </div>`
            .replace(/::NAME::/g, entry.getInfo().name), 
            'text/html');
            
            $('#flexplorer-view').append(FSEntry.body.children);
        });
    }
};

POS.flexplorer.refreshFS();
POS.flexplorer.showDir("0");

parseStyles(["/src/views/apps/flexplorer/css/flexplorer.css"]);