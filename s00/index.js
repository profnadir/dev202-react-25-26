



function add(event) {
    console.log(event);
    
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultat = document.getElementById("resultat");


    if(isNaN(num1) || isNaN(num2)){
        resultat.textContent = "not valid"
    }else{
        resultat.innerText = num1 + num2;
    }

    
}

