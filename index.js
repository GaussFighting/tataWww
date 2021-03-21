function setCopyright() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    if (currentYear === 2021) {
        document.getElementById("copyright").innerHTML = "<p><b>copyright &#169 " + currentYear + " zbigniew-kowerczyk.pl</b></p>";
    } else {
        document.getElementById("copyright").innerHTML = "<p><b>copyright &#169 2021 - " + currentYear + " zbigniew-kowerczyk.pl</b></p>";
    }
}
setCopyright();