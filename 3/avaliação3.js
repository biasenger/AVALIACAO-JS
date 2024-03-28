window.onload = function() {
    let numero = document.getElementsByTagName("input");
    let bt = document.getElementsByClassName("ClassBt");
    console.log(numero[0].value);
   
    let tagSpan = document.querySelector(".ver");
    
    bt[0].onclick = function() {
        tagSpan.style.color = "#ff3399";
        tagSpan.style.border = "solid 2px #e60073";
        
        if (numero[0].value > 10) {
            tagSpan.innerHTML = "MAIOR";
        } else {
            tagSpan.innerHTML = "MENOR";
        }
      
        numero[0].value = "";
    }
}

