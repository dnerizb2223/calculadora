function validarFormulario(){
    if(validarPersonas() && validarTotal() && validarValoracion()) {
        calcularPropina();
    }
    return false;
}

function validarPersonas(){
    const personas = document.getElementById("personasInput");
    const personasError = document.getElementById("personasError");
    let isValid = true;
    if (personas.value === "" || personas.value < 1) {
        personasError.innerHTML = "Com a mínim han de ser 1.";
        personas.classList.add("is-invalid");
        isValid = false;
    } else {
        personasError.innerHTML = "";
        personas.classList.remove("is-invalid");
    }
    return isValid;
}

function validarTotal(){
    const total = document.getElementById("totalInput");
    const totalError = document.getElementById("totalError");
    let isValid = true;
    if (total.value === "" || total.value < 1) {
        totalError.innerHTML = "Com a mínim han de ser 1.";
        total.classList.add("is-invalid");
        isValid = false;
    } else {
        totalError.innerHTML = "";
        total.classList.remove("is-invalid");
    }
    return isValid;
}

function validarValoracion(){
    const valoracion = document.getElementById("valoracioInput");
    const valoracionError = document.getElementById("valoracioError");
    let isValid = true;
    if (valoracion.value === "") {
        valoracionError.innerHTML = "Selecciona una opció";
        valoracion.classList.add("is-invalid");
        isValid = false;
    } else {
        valoracionError.innerHTML = "";
        valoracion.classList.remove("is-invalid");
    }
    return isValid;
}

function calcularPropina() {
    const personas = document.getElementById("personasInput").value;
    const total = parseFloat(document.getElementById("totalInput").value).toFixed(2);
    const valoracion = document.getElementById("valoracioInput").value; 
    let propina = 0;
    let propinaPerPersona;

    switch (valoracion) {
        case "mediocre":
            propina = total * 0.10;
            break;
        case "excelent":
            propina = total * 0.5;
            break;
    }
    if (propina < 0.50){
        propinaPerPersona = 0.50;
    } else {
        propinaPerPersona = propina / personas;
    }

    if (window.confirm("Propina per persona: " + parseFloat(propinaPerPersona.toFixed(2)))) {
        document.getElementById("calculatorForm").reset();
    }
}