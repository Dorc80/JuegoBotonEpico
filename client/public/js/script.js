let epicButton = document.querySelector('#epic_button');
let counterSpan = document.querySelector('#counter');
let resetCounterSpan = document.querySelector('#reset_counter');
let socket = io('http://localhost:8000');

epicButton.addEventListener('click', function () {
    socket.emit('push_epic_button', 'click');
});

resetCounterSpan.addEventListener('click', function() {
    socket.emit('reset_counter', 'click');
});

socket.on('epic_counter', function (data) {
    counterSpan.innerText = data;
});