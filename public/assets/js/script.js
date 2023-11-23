/* ///////////////////////////////////////////
Plus d'informations liées à la solution  : 
////////////////////////////////////////////// 
*/

/*
Toutes le fonctions ci-dessous peuvent être optimisées
elles sont même volontairement non optimisées
Elles sont là juste pour vous présenter le concept à vous de les améliorer 
*/ 

function limiting(oEvent) {
    if(isNaN(this.maxLength) == false){ 
      let oDiv =  document.getElementById(this.name+"Error");
      if(oDiv){
        let oCnt = oDiv.children[0],
            iLongueur = this.value.length,
            iLimit = this.maxLength;
        if(iLimit - iLongueur < 0) {
          oCnt.classList.add("warning");
        }else{
          oCnt.classList.remove("warning");
        }//else
        //A vous d'adapter le message 
        oCnt.textContent = iLongueur;
      }
    }//if
  }//fct
  
  function limitingData(oEvent) {
    if(isNaN(this.dataset.maxlength) == false){ 
      let oDiv =  document.getElementById(this.name+"Error");
      if(oDiv){
        let oCnt =  oDiv.children[0], 
            iLongueur = this.value.length,
            iLimit = parseInt(this.dataset.maxlength);  
        if(iLimit - iLongueur < 0) {
          oCnt.classList.add("warning");
          //A vous d'adapter le message 
          oCnt.textContent = iLimit - iLongueur ;
        }else{
          oCnt.classList.remove("warning");
          //A vous d'adapter le message 
          oCnt.textContent = iLongueur ;
        }
      }//if
    }//if
  }//fct
  
  
  document.addEventListener('DOMContentLoaded',function(){
    let aTextarea = document.getElementsByTagName('msg');
    for(let oTextarea of aTextarea){
      if(oTextarea.maxLength != -1 && oTextarea.dataset.maxlength == null){
        //Avec un attribut maxlength
        oTextarea.addEventListener('input',limiting);
      }else if(oTextarea.maxLength == -1 && oTextarea.dataset.maxlength != null){
        //Sans limite bloquante
        oTextarea.addEventListener('input',limitingData); 
      }
    }
  });
  