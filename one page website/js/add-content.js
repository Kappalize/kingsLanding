function printMsg() {
    document.getElementById('op').innerHTML = "5 seconds have passed";
}

function start() {
    window.setTimeout(printMsg, 5000);
}