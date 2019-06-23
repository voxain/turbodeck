let HTTP = {
    get: url => {
        var request = $.ajax("http://localhost:5500/src/views/" + url, {
            async: false
        });
        return request.responseText;
    }
};