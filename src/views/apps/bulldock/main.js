let bulldock = document.createElement('div');


var request = new XMLHttpRequest();
request.open('GET', "/src/views/apps/bulldock/dock.html");

request.onload = () => {
    bulldock.innerHTML = request.response;
    $('.bulldock-icon').on('mouseenter', e => {
        let tooltip = document.createElement('div');
        tooltip.innerHTML = e.target.name;
        tooltip.classList = 'tooltip';
        $(tooltip).css('left', e.clientX - 10 - 70);
        $(tooltip).css('bottom', 80);
        $(bulldock).append(tooltip);
        $(e.target).on('mousemove', c => {
            $(tooltip).css('left', c.clientX - 10 - 70);
        });
        $(e.target).on('mouseleave', t => {
            $(tooltip).remove();
        });
    });
};
request.onerror = err => {
    console.log(err);
};

request.send();


bulldock.classList = 'bulldock';

parseStyles(["/src/views/apps/bulldock/css/bulldock.css"]);
$('#all-wrapper').append(bulldock);

