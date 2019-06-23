let HTTP = {
    get: url => {
        var request = $.ajax("/src/views/" + url, {
            async: false
        });
        return request.responseText;
    }
};