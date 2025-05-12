function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "edu" && pass === "JESUS") {
        window.location.href = "menu.html";
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos!";
    }
}
