document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        showMessage("Formulário válido!", true);
    } else {
        showMessage("Formulário inválido! O número B deve ser maior que o número A.", false);
    }
});

function showMessage(message, isValid) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = "message " + (isValid ? "valid" : "invalid");
}