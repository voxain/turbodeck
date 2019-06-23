let bulldock = document.createElement('div');


var request = new XMLHttpRequest();
request.open('GET', "http://localhost:5500/src/views/apps/bulldock/dock.html");

request.onload = () => {
    bulldock.innerHTML = request.response;
};
request.onerror = err => {
    console.log(err);
};

request.send();


bulldock.classList = 'bulldock';

parseStyles(["/src/views/apps/bulldock/css/bulldock.css"]);
$('#all-wrapper').append(bulldock);