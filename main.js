// este es el codigo js

// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los Lados del Cuadrado miden: " + ladoCuadrado + "cm");

const miParrafo = document.getElementById("mi-parrafo");

function perimetroCuadrado(lado) {
return lado * 4;
}
perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
return lado * lado
}
areaCuadrado()
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
function hipotenusaTriangulo(lado1, lado2) {
return Math.sqrt (lado1 * lado1 + lado2 * lado2)
}
hipotenusaTriangulo()

function perimetroTriangulo(lado1,lado2) {
return lado1 + lado2 + Math.sqrt (lado1 * lado1 + lado2 * lado2);
}
perimetroTriangulo()
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(lado1, lado2) {
return (lado1 * lado2) / 2;
}
//console.log("El area del Triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código de la cricunferencia
console.group("Circunferencias");

//const radioCircunferencia = 3;
//const diametroCircunferencia = radioCircunferencia * 2;
//console.log("Los Parametros de la Circunferencia miden: " + "rad=" + radioCircunferencia  + "cm, " + "dia=" + diametroCircunferencia  + "cm");
function perimetroCircunferencia(radio) {
return 2 * radio * Math.PI;
}
perimetroCircunferencia()
//console.log("El perimetro de la circunferencia es: " + perimetroCircunferencia + "cm");

function areaCircunferencia(radio) {
return radio * radio * Math.PI;
}
areaCircunferencia() 
//console.log("El area de la circunferencia es: " + areaCircunferencia + "cm2");

function areabaseCilindro(radio) {
    return radio * radio * Math.PI;
    }
areabaseCilindro()
    
function areatotalCilindro(radio,altura) {
    return 2 * radio * Math.PI * (radio + altura);
    }
areatotalCilindro()

function volumenCilindro(radio,altura) {
    return Math.PI * radio * radio * altura;
    }
volumenCilindro()

function generatrizCono(radio,altura) {
    return Math.sqrt((radio * radio) + (altura * altura));
    }
generatrizCono()

function areatotalCono(radio,altura) {
    return (Math.PI * radio * Math.sqrt((radio * radio) + (altura * altura))) + Math.PI * radio * radio;
    }
areatotalCono()

function arealateralCono(radio,altura) {
    return Math.PI * radio * Math.sqrt((radio * radio) + (altura * altura));
    }
arealateralCono()

function volumenCono(radio,altura) {
    return 1/3 * Math.PI * radio * radio * altura;
    }
volumenCono()

function volumenEsfera(radio) {
    return 4/3 * Math.PI * radio * radio * radio;
    }
volumenEsfera()

function areaEsfera(radio) {
    return 4 * Math.PI * radio * radio;
    }
areaEsfera()

function apotemaPrismaHexagonal(base) {
    return Math.sqrt (base* base - ((1/2 * base) * (1/2 * base)));
    }
apotemaPrismaHexagonal()

function perimetroPrismaHexagonal(base,n) {
    return base * n;
    }
perimetroPrismaHexagonal()

function areaBasePrismaHexagonal(base,n) {
    return (base * n * Math.sqrt (base* base - ((1/2 * base) * (1/2 * base))) / 2);
    }
areaBasePrismaHexagonal()

function areaLateralPrismaHexagonal(base,altura,n) {
    return base * altura * n;
    }
areaLateralPrismaHexagonal()

function areaTotalPrismaHexagonal(base,altura,n) {
    return base * n * Math.sqrt (base* base - ((1/2 * base) * (1/2 * base))) + (base * altura * n);
    }
areaTotalPrismaHexagonal()

function volumenPrismaHexagonal(base,altura,n) {
    return (base * n * Math.sqrt (base* base - ((1/2 * base) * (1/2 * base))) / 2) * altura;
    }
volumenPrismaHexagonal()

console.groupEnd();

//aqui interactuamos con HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    miParrafo.innerHTML = "el resultado es : " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    miParrafo.innerHTML = "el resultado es : " + area;
}

//Triangulo Rectangulo

function calcularHipotenusaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1= input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const hipotenusa = hipotenusaTriangulo(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + hipotenusa;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1= Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const perimetrodeTriangulo = perimetroTriangulo(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + perimetrodeTriangulo;
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const areadeTriangulo = areaTriangulo(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + areadeTriangulo;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCircunferencia(value);
    miParrafo.innerHTML = "el resultado es : " + perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCircunferencia(value);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularAreabaseCilindro() {
    const input = document.getElementById("InputCilindro");
    const value = input.value;
    const area = areabaseCilindro(value);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularAreatotalCilindro() {
    const input1 = document.getElementById("InputCilindro1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCilindro2");
    const value2 = Number(input2.value);
    const area = areatotalCilindro(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularVolumenCilindro() {
    const input1 = document.getElementById("InputCilindro3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCilindro4");
    const value2 = Number(input2.value);
    const volumen = volumenCilindro(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + volumen;
}

function calcularGeneratrizCono() {
    const input1 = document.getElementById("InputCono1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCono2");
    const value2 = Number(input2.value);
    const generatriz = generatrizCono(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + generatriz;
}

function calcularAreaTotalCono() {
    const input1 = document.getElementById("InputCono1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCono2");
    const value2 = Number(input2.value);
    const area = areatotalCono(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularAreaLateralCono() {
    const input1 = document.getElementById("InputCono1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCono2");
    const value2 = Number(input2.value);
    const area = arealateralCono(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularVolumenCono() {
    const input1 = document.getElementById("InputCono1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputCono2");
    const value2 = Number(input2.value);
    const volumen = volumenCono(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + volumen;
}

function calcularVolumenEsfera() {
    const input = document.getElementById("InputEsfera");
    const value = Number(input.value);
    const volumen = volumenEsfera(value);
    miParrafo.innerHTML = "el resultado es : " + volumen;
}

function calcularAreaEsfera() {
    const input = document.getElementById("InputEsfera");
    const value = Number(input.value);
    const area = areaEsfera(value);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularApotemaPrismaHexagonal() {
    const input = document.getElementById("InputPrisma");
    const value = Number(input.value);
    const apotema = apotemaPrismaHexagonal(value);
    miParrafo.innerHTML = "el resultado es : " + apotema;
}

function calcularPerimetroPrismaHexagonal() {
    const input1 = document.getElementById("InputPrisma1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputPrisma2");
    const value2 = Number(input2.value);
    const volumen = perimetroPrismaHexagonal(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + volumen;
}

function calculAreaBasePrismaHexagonal() {
    const input1 = document.getElementById("InputPrisma1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputPrisma2");
    const value2 = Number(input2.value);
    const area = areaBasePrismaHexagonal(value1,value2);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularAreaLateralPrismaHexagogal() {
    const input1 = document.getElementById("InputPrisma3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputPrisma4");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputPrisma5");
    const value3 = Number(input3.value);
    const area = areaLateralPrismaHexagonal(value1,value2,value3);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularAreaTotalPrismaHexagogal() {
    const input1 = document.getElementById("InputPrisma3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputPrisma4");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputPrisma5");
    const value3 = Number(input3.value);
    const area = areaTotalPrismaHexagonal(value1,value2,value3);
    miParrafo.innerHTML = "el resultado es : " + area;
}

function calcularVolumenPrismaHexagogal() {
    const input1 = document.getElementById("InputPrisma3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputPrisma4");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputPrisma5");
    const value3 = Number(input3.value);
    const volumen = volumenPrismaHexagonal(value1,value2,value3);
    miParrafo.innerHTML = "el resultado es : " + volumen;
}