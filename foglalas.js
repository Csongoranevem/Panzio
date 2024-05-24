

function Kalkulacio() {
    let erkdat = new Date(document.getElementById("erkezes").value)
    let tavdat = new Date(document.getElementById("tavozas").value)

    let szobaosszeg;
    let ellatasosszeg;
    let szolgaltosszeg=0;
    let idotartam = (((+tavdat)-(+erkdat)) / 3600000)/24;
    let vendegsz=document.getElementById("vendegszam").value
    //Szoba típus
    let szobatipK = document.getElementsByName("rad2");
    let szobatip;
    for (let i = 0; i < szobatipK.length; i++) {
        if (szobatipK[i].checked){
            szobatip = szobatipK[i].value
            szobaosszeg=Number(szobatipK[i].id)
            break;
        }
        
    }
    let ellatasK = document.getElementsByName("rad");
    let ellatas;
    for (let i = 0; i < ellatasK.length; i++) {
        if (ellatasK[i].checked){
            ellatas = ellatasK[i].value
            ellatasosszeg=Number(ellatasK[i].id)

            break;
        }
        
    }

    let szolgaltatasK = document.getElementsByClassName("chbox")
    let szolgaltatas;
    let szolgfull="";
    for (let i = 0; i < szolgaltatasK.length; i++) {
        if (szolgaltatasK[i].checked) {
            szolgaltatas = szolgaltatasK[i].value
            szobaosszeg+=Number(szolgaltatasK[i].id)
            szolgfull +="\n"+szolgaltatas.value

        }
        
    }


    let osszeg = szobaosszeg+ellatasosszeg+szolgaltosszeg
    console.log(osszeg)
    
            //Kiiras
            alert(
                "Kedves Vendégünk!\n\n"+
                "Tájékoztatjuk a sikeres foglalásáról.\n\n"+
                "Érkezés: " + erkdat.getFullYear()+"."+ (erkdat.getMonth()+1)+"."+(erkdat.getDate())+"\n"+
                "Távozás: "+ tavdat.getFullYear()+"."+ (tavdat.getMonth()+1)+"."+(tavdat.getDate())+"\n"+
                "Szoba típusa: "+ szobatip+"\n"+
                "Vendégek száma: "+vendegsz+"\n"+
                "Ellátás: "+ellatas+"\n"+
                "Igényelt szolgáltatások: "+szolgfull +"\n"+
                "Teljes összeg: "+osszeg+" Ft"

            )

    
}

