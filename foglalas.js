
function VszamCsok() {
    let vendegsz=document.getElementById("vendegszam").value
    let v1=document.getElementsByClassName("vendegkor");




    if(vendegsz==1){
        v1[0].disabled=false
        v1[1].disabled=true
        v1[1].value=null
        v1[2].disabled=true
        v1[2].value=null
        v1[3].disabled=true
        v1[3].value=null
    }
    else if(vendegsz==2){
        v1[0].disabled=false
        v1[1].disabled=false
        v1[2].disabled=true
        v1[2].value=null
        v1[3].disabled=true
        v1[3].value=null
    }
    else if(vendegsz==3){
        v1[0].disabled=false
        v1[1].disabled=false
        v1[2].disabled=false
        v1[3].disabled=true
        v1[3].value=null
        
    }
    else{
        v1[0].disabled=false
        v1[1].disabled=false
        v1[2].disabled=false
        v1[3].disabled=false

    }


}



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
    for (let i = szolgaltatasK.length-1; i >=0 ; i--) {
            if (szolgaltatasK[i].checked) {
                if(szolgaltatasK[i].name=="teljbelepo"){
                    
                    szobaosszeg+=Number(szolgaltatasK[i].id)
                    szolgaltatas = szolgaltatasK[i].value
                    szolgfull +="\n"+szolgaltatas
                    break;
                    
                }
                else{
                    szobaosszeg+=Number(szolgaltatasK[i].id)
                    szolgaltatas = szolgaltatasK[i].value
                    
                    szolgfull +="\n"+szolgaltatas
                }

                if (szolgfull==""){
                    szolgfull+="\n Nincs"
                }

            }



        }

    let osszeg = szobaosszeg+((ellatasosszeg+szolgaltosszeg)*vendegsz*idotartam)
    console.log(osszeg)
    
            //Kiiras
            alert(
                "Kedves Vendégünk!\n\n"+
                "Tájékoztatjuk a sikeres foglalásáról.\n\n"+
                "Érkezés: " + erkdat.getFullYear()+"-"+ (erkdat.getMonth()+1 <10 ? "0" : "")+(erkdat.getMonth()+1)+"-"+(erkdat.getDate() <10 ? "0" : "")+(erkdat.getDate())+"\n"+
                "Távozás: "+ tavdat.getFullYear()+"-"+ (tavdat.getMonth()+1 <10 ? "0" : "")+(tavdat.getMonth()+1)+"-"+(tavdat.getDate() <10 ? "0" : "")+(tavdat.getDate())+"\n"+
                "Szoba típusa: "+ szobatip+"\n"+
                "Vendégek száma: "+vendegsz+"\n"+
                "Ellátás: "+ellatas+"\n"+
                "Igényelt szolgáltatások: "+szolgfull +"\n"+
                "Teljes összeg: "+osszeg+" Ft"+"\n\n"+
                "Köszönjük megrendelését!"

            )

}

