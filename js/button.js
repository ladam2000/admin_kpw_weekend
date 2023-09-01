function megjelenitSzoveg(gombSzam) {
    var tartalomDiv = document.getElementById("tartalom");
    var iframe_sheet = document.getElementById("tablazat");
    var iframe_drive = document.getElementById("drive")

    switch (gombSzam) {
        case 1:
            iframe_sheet.style.display = "block";
            iframe_drive.style.display = "none";
            iframe_sheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsdLwFOE9nyXzrTl5ZoXOD08BqlPfpIVq4fUabT9Bj_sgDXl6Wk8m_ouECsNn3wQ/pubhtml?widget=true&amp;headers=false";
            break;
        case 2:
            iframe_sheet.style.display = "none";
            iframe_drive.style.display = "block";
            iframe_drive.src = "https://drive.google.com/embeddedfolderview?id=1hEq_MAF3St2ZljnMKJREASpp1C4kh553#list";
            break;
        case 3:
            // Harmadik gomb szövege és tartalma
            break;

        default:
            iframe_sheet.style.display = "none";
            iframe_drive.style.display = "none";
            break;
    }

    tartalomDiv.style.display = "block";
}