//codigo del cuadro

/*const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

//codigo del triangulo

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

//codigo del circulo

const radioCirculo = 4;*/

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

/*const diametroCirculo = radioCirculo * 2;

const PI = Math.PI;



// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * PI;

// Area

function areaCirculo(radio){
    return (radio * radio)  * PI;
}*/

// Aqui interatuamos con el html

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);

  alert(area);
}
