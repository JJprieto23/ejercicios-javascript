
function printMultiplesOfThree() {
    var output = document.getElementById('output');
    output.innerHTML = '';

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            output.innerHTML += i + '<br>';
        }
    }
}

document.getElementById('openModal').addEventListener('click', function() {
    printMultiplesOfThree();
    $('#myModal').modal('show');
});
// Cuando se cierra el modal
$('#myModal').on('hidden.bs.modal', function () {
    document.getElementById('output').innerHTML = '';
});

function printOddNumbers() {
    var num2 = document.getElementById('num2');
    num2.innerHTML = '';

    for (var i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            num2.innerHTML += i + '<br>';
        }
    }
}

document.getElementById('openModal2').addEventListener('click', function() {
    printOddNumbers();
    $('#myModal2').modal('show');
});
$('#myModal2').on('hidden.bs.modal', function () {
    document.getElementById('num2').innerHTML = '';
});


function printEvenNumbers() {
    var num3 = document.getElementById('num3');
    num3.innerHTML = '';

    for (var i = 2; i <= 100; i += 2) {
        num3.innerHTML += i + '<br>';
    }
}

document.getElementById('openModal3').addEventListener('click', function() {
    printEvenNumbers();
    $('#myModal3').modal('show');
});
$('#myModal3').on('hidden.bs.modal', function () {
    document.getElementById('num3').innerHTML = '';
});


function printSquares() {
    var num4 = document.getElementById('num4');
    num4.innerHTML = '';

    for (var i = 1; i <= 30; i++) {
      var square = i * i;
        num4.innerHTML += i + ' al cuadrado es ' + square + '<br>';
    }
}

document.getElementById('openModal4').addEventListener('click', function() {
    printSquares();
    $('#myModal4').modal('show');
});
$('#myModal4').on('hidden.bs.modal', function () {
    document.getElementById('num4').innerHTML = '';
});


function sumSquareNumbers() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
      sum += i * i;
    }
    return sum;
}

document.getElementById('openModal5').addEventListener('click', function() {
    var sum = sumSquareNumbers();
    document.getElementById('num5').innerHTML = sum;
    $('#myModal5').modal('show');
});
$('#myModal5').on('hidden.bs.modal', function () {
    document.getElementById('num5').innerHTML = '';
});

function generateAndShowNumbers() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    if (numero1 >= numero2) {
        alert('El primer número debe ser menor que el segundo.');
        return;
    }

    var output = document.getElementById('num6');
    output.innerHTML = '';

    for (var i = numero1; i <= numero2; i++) {
        output.innerHTML += i + '<br>';
    }

    $('#myModal6').modal('show');
}
document.getElementById('openModal6').addEventListener('click', function() {
    generateAndShowNumbers();
});


function sumNumbers() {
    var sum = 0;
    var input = 0;
    do {
        input = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
        sum += input;
    } while (input !== 0);

    sum -= 0;

    return sum;
}
document.getElementById('openModal7').addEventListener('click', function() {
    var sum = sumNumbers();
    document.getElementById('num7').innerHTML = 'La suma de los números ingresados es: ' + sum;
    $('#myModal7').modal('show');
});