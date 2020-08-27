let bulldock = document.createElement('div');


var request = new XMLHttpRequest();
request.open('GET', "/src/views/apps/bulldock/dock.html");

request.onload = () => {
    bulldock.innerHTML = request.response;
    $('.bulldock-icon').on('mouseenter', e => {
        let tooltip = document.createElement('div');
        console.dir(e.originalEvent.srcElement)
        tooltip.innerHTML = e.originalEvent.srcElement.dataset['name'];
        tooltip.classList = 'tooltip';
        $(tooltip).css('left', e.clientX - 80 > 20 ? e.clientX - 10 - 70 : 20);
        $(tooltip).css('bottom', 100);
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

$( bulldock ).sortable();
$( bulldock ).disableSelection();
$( bulldock ).sortable({
    items: "img:not(.ui-state-disabled)"
});

setInterval(() => {
    let time = new Date();
    $('#dockclock').html(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + '<br>' + time.toLocaleDateString());
}, 500);

parseStyles(["/src/views/apps/bulldock/css/bulldock.css"]);
$('#all-wrapper').append(bulldock);

