function megjelenitSzoveg(gombSzam) {
    var tartalomDiv = document.getElementById("tartalom");
    var iframe_sheet_friday = document.getElementById("tablazat_pentek");
    var iframe_sheet_saturday = document.getElementById("tablazat_szombat");
    var iframe_sheet_sunday = document.getElementById("tablazat_vasarnap")


    switch (gombSzam) {
        case 1:
            iframe_sheet_friday.style.display = "block";
            iframe_sheet_saturday.style.display = "none";
            iframe_sheet_sunday.style.display = "none";
            iframe_sheet_friday.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqXIL8rxq-i4odH8Q1xmoxQVmr-ik1Flhe5ISfQ3IWSEpuz9B8Px-lEuP8_AzBEA/pubhtml?gid=321834512&amp;single=true&amp;widget=true&amp;headers=false";
            break;
        case 2:
            iframe_sheet_friday.style.display = "none";
            iframe_sheet_saturday.style.display = "block";
            iframe_sheet_sunday.style.display = "none";
            iframe_sheet_saturday.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCfUhZGWiR-FZLODkfTA3ofrnf9KQRnAuUcVdGBszYdhnilrE7xzaQjdtiasmLMw/pubhtml?gid=817917473&amp;single=true&amp;widget=true&amp;headers=false";
            break;
        case 3:
            iframe_sheet_friday.style.display = "none";
            iframe_sheet_saturday.style.display = "none";
            iframe_sheet_sunday.style.display = "block";
            iframe_sheet_sunday.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_yOVE1sYGwis4QjH5DiHnWrM6wY2HWWPr2wy67QWKk684_b6G44lIs1r3J_fNzQ/pubhtml?gid=2007119411&amp;single=true&amp;widget=true&amp;headers=false";

            break;

        default:
            iframe_sheet_friday.style.display = "none";
            iframe_sheet_saturday.style.display = "none";
            iframe_sheet_sunday.style.display = "none";
            break;
    }

    tartalomDiv.style.display = "block";
}