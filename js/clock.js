let myName = document.getElementById("myName");
myName.innerHTML = prompt("Lütfen Adınızı Giriniz:");


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let currentDay = today.getDay()
    let days = ["Pazar","Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + " " + days[currentDay];
    setTimeout(showTime, 1000);

}

function checkTime (i) {
    if (i < 10) (i = "0" + i);
    return i;

}

showTime()