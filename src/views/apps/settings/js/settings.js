POS.settings = {
    loadCategory: id => {
        $('#settings_view').text('');
        document.getElementById('settings_view').innerHTML = HTTP.get('apps/settings/categories/' + id + '.html');
        if(id == 'appearance'){
            POS.system.wallpaper.internal.forEach(wall => {
                let paper = new DOMParser().parseFromString(`<div onclick="POS.system.wallpaper.set('::URL::')" class="wallpaper-preview" style="background: url('::URL::') center"></div>`.replace(/::URL::/g, wall), 'text/html');
                $('#settings-wallpapers').append(paper.body.children);
            });
        }
    }
};

POS.settings.loadCategory('general');