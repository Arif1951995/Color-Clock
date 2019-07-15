function secondSetup() {
    let d = new Date();
    return d.getSeconds();

}

function minSetup() {
    let d = new Date();
    return d.getMinutes();
}

function hourSetup() {
    let d = new Date();
    return d.getHours();
}

let s, m, h;
let body = document.querySelector('body');
setInterval(function () {
    s = secondSetup();
    m = minSetup();
    h = hourSetup();

    if (s <= 9) {
        s = '0' + s;
    }
    if (m <= 9) {
        m = '0' + m;
    }
    if (h <= 9) {
        h = '0' + h;
    }

    body.style.backgroundColor = `rgb(${Math.floor(minSetup() * 13)} ${Math.floor(minSetup() * 4.2)} ${Math.floor(secondSetup() * 4.2)})`
    document.querySelector('.clock').innerHTML = `${h}:${m}:${s}`
    document.querySelector('.clock').style.color = `rgb(${Math.floor(minSetup() * 13) + 100} ${Math.floor(minSetup() * 4.2) + 100} ${Math.floor(secondSetup() * 4.2) + 100})`
}, 1000)