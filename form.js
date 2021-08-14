function isCaptchaChecked() {
    return grecaptcha && grecaptcha.getResponse().length !== 0;
}

function submit() {
    document.getElementById('name').style.borderBottomColor = 'black';
    document.getElementById('subject').style.borderBottomColor = 'black';
    document.getElementById('mail').style.borderBottomColor = 'black';
    document.getElementById("message").style.borderBottom = '0';
    var a = document.forms["Form"]["name"].value;
    var b = document.forms["Form"]["subject"].value;
    var c = document.forms["Form"]["mail"].value;
    var d = document.forms["Form"]["message"].value;
    if (isCaptchaChecked()) {
        if ((a != null && a != "") && (b != null && b != "") && (c != null && c != "") && (d != null && d != "")) {
            alert('name :' + document.getElementById('name').value +
                '\r\n subject : ' + document.getElementById('subject').value +
                '\r\n mail :' + document.getElementById('mail').value +
                '\r\n message : ' + document.getElementById('message').value);
        } else {
            if (a == null || a == "") {
                document.getElementById('name').style.borderBottomColor = 'red';
            }
            if (b == null || b == "") {
                document.getElementById('subject').style.borderBottomColor = 'red';
            }
            if (c == null || c == "") {
                document.getElementById('mail').style.borderBottomColor = 'red';
            }
            if (d == null || d == "") {
                document.getElementById("message").style.borderBottom = '1px solid red';
            }
        }
    }

}

function show_home_menu() {
    var home_menu = document.getElementById("home_menu");
    if (home_menu.classList == "close") {
        home_menu.style.display = 'block';
        home_menu.classList.add("open");
        home_menu.classList.remove("close");
    } else {
        home_menu.style.display = 'none';
        home_menu.classList.add("close");
        home_menu.classList.remove("open");
    }
}