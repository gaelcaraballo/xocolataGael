window.onload = function () {

    let boto = document.getElementById("boto");
    let boto3 = document.getElementById("boto3");
    let taules = document.getElementById("tableData");
    let primerTitol = document.getElementById("primerTitol");
    let segonTitol = document.getElementById("segonTitol");


    boto.addEventListener("click", obrirFormulari);
    boto3.addEventListener("click", eliminarCookies);

    function eliminarCookies() {
        location.reload();
    }

    function obrirFormulari() {
        let finestra = window.open("demanar.html");
        finestra.addEventListener("unload", function () {

            var cookies = document.cookie.split("-");
            console.log(cookies)

            let horizontal = cookies[0];
            let vertical = cookies[1];
            let peces = cookies[2];
            let residu;
            let divisio;
            let quadrats = horizontal * vertical;

            if (peces % quadrats !== 0) {
                divisio = peces / quadrats;
                residu = Math.floor(divisio) + 1;

            } else {
                divisio = peces / quadrats;
                residu = divisio;
            }
            console.log("divisio " + divisio)
            console.log("residu" + residu)
            createTable(vertical, horizontal, residu);
            mostrarDades(vertical, horizontal, residu, peces);

            console.log("quadrats" + quadrats);
            console.log("peces" + peces);

        })
    }

    function createTable(vertical, horizontal, resultat) {
        for (let i = 0; i < resultat; i++) {
            let taula = document.createElement("table");
            let tb = document.createElement("tbody");

            for (let y = 0; y < vertical; y++) {
                let tr = document.createElement("tr");

                for (let a = 0; a < horizontal; a++) {
                    let td = document.createElement("td");
                    tr.appendChild(td);
                }
                tb.appendChild(tr);
            }
            taula.appendChild(tb);
            taules.appendChild(taula);
        }

    }
    function mostrarDades(vertical, horizontal, resultat, residu) {
        primerTitol.innerHTML = "Vols " + residu + " peces de xocolate."
        segonTitol.innerHTML = "Necessites " + resultat + " Rajoles de " + vertical + " x " + horizontal;
    }
}