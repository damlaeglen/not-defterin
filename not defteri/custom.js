function tamamlanmis(){
    var listItems=document.getElementsByTagName("li");

for(var x = 0;x<listItems.length;x++){
    

    listItems[x].addEventListener("click",function(){
        this.classList.toggle("tamamlanmis");


    });
}
}

tamamlanmis();



/*Silinecek Buton yeri*/
function silinenGorevler(){
    var silButonlari = document.getElementsByTagName("span");

for(var i=0;i<silButonlari.length;i++)
{
    silButonlari[i].addEventListener("click", function(){

        var silinecek=this.parentElement;
        silinecek.remove();
    })
}
}

silinenGorevler();

/*Silinen görevler*/

var gorev = document.getElementsByTagName("input")[0];
gorev.addEventListener("keypress",function(e){

    if(e.keyCode===13){
    

        var yeniNot = document.createElement("li");
        yeniNot.innerHTML= gorev.value;
        var yeniSpan = document.createElement("span");
        var yeniIcon = document.createElement("i");
        yeniIcon.setAttribute("class", "fa fa-window-close","fa-solid fa-check" );

        yeniSpan.insertBefore(yeniIcon,yeniSpan.firstChild);
        yeniNot.insertBefore(yeniSpan,yeniNot.firstChild);


        var gorevler = document.getElementsByTagName("ul")[0];

        gorevler.insertBefore(yeniNot,gorev.lastChild);

        silinenGorevler();
        tamamlanmis();
        gorev.value ="";
    }


});



function myFunction() {
    idArray = new Array()
    idArray [1] = "Seni Çokkk Seviyorummm"
    idArray [2] = "AŞK TANEMSİNN"
    idArray [3] = "KALBİMMM"
    idArray [4] = "Haydi Not Defterine Yazma Vakti"
    idArray [5] = "Not'a Beni sevdiğini yazmayı unutma ;)"
    idArray [6] = "Minik Kedim hadi işşş"
    idArray [7] = "Yapılacakların hepsini tamamla bakalım"
  
    document.getElementById("select").onclick = myFunction;
    randomParagraph = Math.floor(Math.random()*7);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
  }