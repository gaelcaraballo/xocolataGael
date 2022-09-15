window.onload = function () {

    let boto2 = document.getElementById("boto2");
    boto2.addEventListener("click",demanarDades);


   function demanarDades(){

        let horizontal = document.getElementById("pecesHorizontals").value;
        let vertical = document.getElementById("pecesVertical").value;
        let peces = document.getElementById("numeroQuadrats").value;
        let d = new Date();

        if (validarNumero(horizontal) && validarNumero(vertical) && validarNumero(peces)){
            d.setDate(0);
            document.cookie = horizontal+"-"+vertical+"-"+peces+";"+d.toUTCString();
            window.close();
        }else{
            alert("Dades incorrectes");
        }
    }

    function validarNumero(numero){
       let regex = /^[1-9]+[0-9]*$/;
       if (numero!=null && numero !==""){
       return regex.test(numero);
       }
    }

}