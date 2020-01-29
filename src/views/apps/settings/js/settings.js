POS.settings = {
    loadCategory: id => {
        $('#settings_view').text('');
        document.getElementById('settings_view').innerHTML = HTTP.get('apps/settings/categories/' + id + '.html');
    }
};

POS.settings.loadCategory('general');