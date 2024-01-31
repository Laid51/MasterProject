function validerLogin() {
    var email = document.getElementById('email').value;

    if (email.includes('@isen.yncrea.fr')) {
        return true; // Soumission autorisée
    } else {
        document.getElementById('erreur-msg').innerText = 'Adresse e-mail incorrecte.';
        return false; // Bloquer la soumission
    }
}
