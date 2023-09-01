function ellenorizJelszo() {
    var jelszo = document.getElementById("jelszo").value;

    // Ellenőrzés
    if (jelszo === "kpw.etkd") { // Itt add meg a helyes jelszót
        document.getElementById("bejelentkezes").style.display = "none";
        document.getElementById("tartalom").style.display = "block";
        document.getElementById("gombok").style.display = "flex"; // Gombok megjelenítése
        return false; // Ne küldje el az űrlapot
    } else {
        alert("Hibás jelszó. Kérlek, próbáld újra.");
        return false; // Ne küldje el az űrlapot
    }
}
