document.getElementById('somar').addEventListener('click', function () {
    let numero1 = parseFloat(
      document.getElementById('numero1').value
    );

    let numero2 = parseFloat(
      document.getElementById('numero2').value
    );

    if (isNaN(numero1)) {
      document.getElementById('numero1').style.border = '1px solid red';
      return;
    }

    if (isNaN(numero2)) {
      document.getElementById('numero2').style.border = '1px solid red';
      return;
    }

    document.getElementById('resultado').innerHTML = numero1 + parseFloat(numero2);
});

document.getElementById('numero1').addEventListener('keydown', function () {
  document.getElementById('numero1').style.border = '1px inset #EBE9ED';
});
