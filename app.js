function verifyCaptcha() {
    const input = document.getElementById('captchaInput').value;
    const message = document.getElementById('message');

    if (input === "OSNWL") {
        message.style.color = "green";
        message.textContent = "認証";
    } else {
        message.style.color = "red";
        message.textContent = "もう一度入力してください";
    }
}
