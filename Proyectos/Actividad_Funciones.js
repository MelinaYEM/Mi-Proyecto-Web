function suma (numero1, numero2) {
    let resultado =  numero1 + numero2
    return resultado
  }
  function resta (numero1, numero2) {
    let resultado = numero1 - numero2
    return resultado
  }
  function multiplicacion (numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
  }
  function division (numero1, numero2) {
    let resultado = numero1 / numero2
    return resultado
  }
  if (oper = "+") {
    console.log(v1 + " + " + v2 + " = " + resultado1)
  } else if (oper = "-") {
    console.log(v1 + " - " + v2 + " = " + resultado2)
  } else if (oper = "*") {
    console.log(v1 + " x " + v2 + " = " + resultado3)
  } else if (oper = "/") {
    console.log(v1 + " / " + v2 + " = " + resultado4)
  } else {
    console.log("Operacion no disponible")
  }
  var v1 = prompt ("Valor 1")
  v1 = parseInt (v1)
  var v2 = prompt ("Valor 2")
  v2 = parseInt (v2)
  var oper = prompt ("Operacion")
  oper = parseInt (oper)
  var resultado1 = suma (v1, v2)
  var resultado2 = resta (v1, v2)
  var resultado3 = multiplicacion (v1, v2)
  var resultado4 = division (v1, v2)