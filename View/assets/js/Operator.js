
const calcTriangleArea = document.getElementById('calcTriangleArea')
const closeTriangleArea = document.getElementById('closeTriangleArea')

function triangleArea(){
    var num1 = document.getElementById('AreaTriangle1').value;
    var num2 = document.getElementById('AreaTriangle2').value;
    AreaT = num2 * num1 / 2

    const element = document.createElement("h2");
    var content = document.createTextNode(AreaT);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeTriangleArea(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcTriangleArea.addEventListener('click', triangleArea);
closeTriangleArea.addEventListener('click', removeTriangleArea);

const calcSum = document.getElementById('calcSum')
const closeSum = document.getElementById('closeSum')

function sum(){
    var num1 = document.getElementById('sum1').value;
    var num2 = document.getElementById('sum2').value;
    sum = parseInt(num1) + parseInt(num2)

    console.log(sum);
    const element = document.createElement("h2");
    var content = document.createTextNode(sum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeSum(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcSum.addEventListener('click', sum);
closeSum.addEventListener('click', removeSum);

const calcElevationSquared = document.getElementById('calcElevationSquared')
const closeElevationSquared = document.getElementById('closeElevationSquared')

function elevationSquared(){
    var num1 = document.getElementById('elev1').value;
    elevation = Math.pow(num1, 2)

    console.log(elevation);
    const element = document.createElement("h2");
    var content = document.createTextNode(elevation);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeElevationSquared(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcElevationSquared.addEventListener('click', elevationSquared);
closeElevationSquared.addEventListener('click', removeElevationSquared);

const calcConvertion = document.getElementById('calcConvertion')
const closeConvertion = document.getElementById('closeConvertion')

function euroConversion(){
    var num1 = document.getElementById('Euro').value;
    conv = num1 * 1.08

    console.log(conv);
    const element = document.createElement("h2");
    var content = document.createTextNode(conv);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeEuroConversion(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcConvertion.addEventListener('click', euroConversion);
closeConvertion.addEventListener('click', removeEuroConversion);

const calcAPSquare = document.getElementById('calcAPSquare')
const closeAPSquare = document.getElementById('closeAPSquare')

function calcAreaPerimeter(){
    var num1 = document.getElementById('side').value;
    AreaS = num1 * num1
    PerimeterS = parseInt(num1) + parseInt(num1) + parseInt(num1) + parseInt(num1)

    console.log(AreaS, PerimeterS);
    const element = document.createElement("h2");
    var content = document.createTextNode("Area: " + AreaS + " Perimetro: "+ PerimeterS);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeAreaPerimeter(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcAPSquare.addEventListener('click', calcAreaPerimeter);
closeAPSquare.addEventListener('click', removeAreaPerimeter);

const calcAVCilinder = document.getElementById('calcAVCilinder')
const closeAVCilinder = document.getElementById('closeAVCilinder')

function calcAreaVolume(){
    var num1 = document.getElementById('sideC').value;
    var num2 = document.getElementById('radiusC').value;
    const pi = 3.14;
    AreaC = parseInt(2 * pi * num2 * num1) + parseInt(2 * pi * Math.pow(num2, 2));
    VolumeC = parseInt(pi * Math.pow(num2, 2) * num1);

    console.log(AreaC, VolumeC);
    const element = document.createElement("h2");
    var content = document.createTextNode("Area: " + AreaC + " Volumen: "+ VolumeC);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeAreaVolume(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcAVCilinder.addEventListener('click', calcAreaVolume);
closeAVCilinder.addEventListener('click', removeAreaVolume);

const calcLACircumference = document.getElementById('calcLACircumference')
const closeLACircumference = document.getElementById('closeLACircumference')

function calcLengthArea(){
    var num1 = document.getElementById('radioCircumference').value;
    const pi = 3.14;
    lengthC = parseInt(2 * pi * num1);
    AreaC = parseInt(pi * Math.pow(num1, 2));

    console.log(lengthC, AreaC);
    const element = document.createElement("h2");
    var content = document.createTextNode("Longitud: " + lengthC + " Area: "+ AreaC);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeLengthArea(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcLACircumference.addEventListener('click', calcLengthArea);
closeAVCilinder.addEventListener('click', removeLengthArea);

const calcAverage = document.getElementById('calcAverage')
const closeAverage = document.getElementById('closeAverage')

function calcAverageNum(){
    var num1 = document.getElementById('average1').value;
    var num2 = document.getElementById('average2').value;
    var num3 = document.getElementById('average3').value;
    Average = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;  

    console.log(Average);
    const element = document.createElement("h2");
    var content = document.createTextNode("Promedio: " + Average);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeLengthArea(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcAverage.addEventListener('click', calcAverageNum);
closeAVCilinder.addEventListener('click', removeLengthArea);