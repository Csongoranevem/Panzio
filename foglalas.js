

function Kalkulacio() {
    let erkdat = new Date(document.getElementById("erkezes").value)
    let tavdat = new Date(document.getElementById("tavozas").value)
    let idotartam = (((+tavdat)-(+erkdat)) / 3600000)/24;
    //Szoba típus
    szobatipK = document.getElementsByName("rad2");
    let szobatip;
    for (let i = 0; i < szobatipK.length; i++) {
        if (szobatipK[i].checked ==true){
            szobatip = szobatipK[i]
            break;
        }
        
    }

    alert(erkdat, );


    
}

