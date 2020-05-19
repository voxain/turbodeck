POS.settings = {
    loadCategory: id => {
        $('#settings_view').text('');
        document.getElementById('settings_view').innerHTML = HTTP.get('apps/settings/categories/' + id + '.html');
        if(id == 'appearance'){
            POS.system.wallpaper.internal.forEach(wall => {
                let paper = new DOMParser().parseFromString(`<div onclick="POS.system.wallpaper.set('::URL::')" class="wallpaper-preview" style="background: url('::URL::') center"></div>`.replace(/::URL::/g, wall), 'text/html');
                $('#settings-wallpapers').append(paper.body.children);
            });
            $('body').on('mousemove', e => {
                //var parentOffset = $(this).parent().offset(); 
                var parentOffset = $('.hover-ripple').offset(); 
                var relX = e.pageX - parentOffset.left;
                var relY = e.pageY - parentOffset.top;
                $('.hover-ripple').css('background', `radial-gradient(circle at ${relX}px ${relY}px, rgba(45,45,45,1) 0px, transparent ${POS.system.indicators.mouse.button1 ? '30px' : '60px'}`)
            });
            $('button').on('mouseout', e => {
                $(e.originalEvent.target).css('background', `transparent`)
            });
        }
    }
};

POS.settings.loadCategory('general');