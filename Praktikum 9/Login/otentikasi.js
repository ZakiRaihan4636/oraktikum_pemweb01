function masuk() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
if (username == "ahmad2017" && password == "integrity") {
alert("Selamat Anda berhasil login!");
window.location = "berhasil.html"
}
else {
alert("Maaf, username atau password yang Anda masukkan salah.");
}
}