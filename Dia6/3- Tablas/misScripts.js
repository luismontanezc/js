function multiplicar(){
  //Obtener el número
  let elementoTextoTabla = document.getElementById("textoTabla");
  let textoNumeroTabla = elementoTextoTabla.value;
  let numeroTabla = Number(textoNumeroTabla);
  
  //Obtener la tabla
  let elementoTablaMultiplicar = document.getElementById("listaTabla");

  //Producir y mostrar resultados
  for(x=1; x<=10; x++){
    //calcular el resultado
    let numeroResultado = numeroTabla * x;

    //Armar un String con el resulado
    let textoResultado = numeroTabla + " X " + x +" = " + numeroResultado;

    //Crear un elemento a la lista
    let itemLista = document.createElement("li");
    itemLista.innerText = textoResultado;
    elementoTablaMultiplicar.appendChild(itemLista);
  }
}