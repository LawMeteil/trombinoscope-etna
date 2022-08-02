function change() {
    var i = 0;
    var profile = document.getElementById("profil");
    var p = profile.getElementsByClassName("info");
    for (i = 0; i < p.length; i++) {
        var input = document.createElement("input");
    input.value = p[i].textContent;
    input.className = p[i].className;
    profile.replaceChild(input, p[i]);
    }
}