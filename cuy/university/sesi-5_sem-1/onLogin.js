function onLogin() {
    let username = document.getElementById('inputUsername')
    let password = document.getElementById('inputPassword')
    let user = document.getElementById('user');
    let admin = document.getElementById('admin');
    let loginBut = document.getElementById('loginButton')
    let logoutBut = document.getElementById('logoutButton')

    loginBut.style.display = "none"
    logoutBut.style.display = "block"
    localStorage.setItem("username", username.value)

    if (username.value == "admin" && password.value == "123") {
        localStorage.setItem("role", "admin");
        username.style.display = "none";
        password.style.display = "none";
        user.style.display = "none"
        admin.style.display = "block"
    }
    else {
        localStorage.setItem("role", "user");
        username.style.display = "none";
        password.style.display = "none";
        user.style.display = "block"
        admin.style.display = "none"
    }

    if (localStorage.getItem('username')) {
        username.style.display = "none";
        password.style.display = "none";

        if (localStorage.getItem('role') == "admin") {
            user.style.display = "none"
            admin.style.display = "block"
        }
        else {
            user.style.display = "block"
            admin.style.display = "none"
        }
    }
}