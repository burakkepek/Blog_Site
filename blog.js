 //*************************************************************ÖRNEK1 ****************************************************//

var renkBtn=document.querySelector("#renkdegistir");
    renkBtn.onclick=()=>{
        var renk1=Math.round(Math.random()*255);
        var renk2=Math.round(Math.random()*255);
        var renk3=Math.round(Math.random()*255);
        
        document.body.style.background="rgb("+renk1+","+renk2+","+renk3+")";
    
    
    }






    //*************************************************************ÖRNEK2 ****************************************************//

 // tarih oluşturma fonksiyonu
 /*
 function dijitalSaat() {
    var dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();

    dakika = Tik(dakika);
    saniye = Tik(saniye);

    document.getElementById('dt').innerHTML = saat + ":" + dakika;
    document.getElementById('dt_saniye').innerHTML = saniye;

    if (saat > 12) { 
        document.getElementById('dt_saat').innerHTML = '😊'; 
    }
    else { 
        document.getElementById('dc_hour').innerHTML = '😴'; 
    }

    // her 1 saniyede bir yenileme yapılıyor.
    var time
    time = setInterval('dijitalSaat()', 1000);
}

function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}
*/