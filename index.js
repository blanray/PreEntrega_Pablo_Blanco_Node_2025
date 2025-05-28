import {getProductos, getProducto, deleteProducto, postProducto} from './modulos/misModulos.js'

const misArgumentos = process.argv.slice(2)

switch(misArgumentos[0]){
  case "GET":{
    try{
      const misArgumentosTemp = misArgumentos[1].toLowerCase().split("/");
      if (misArgumentosTemp.length > 2){
        console.log("Error en el comando GET, demasiados parametros, consulte la consigna :)");
      }
      else{
        if (misArgumentosTemp.length == 1){
          if (misArgumentosTemp[0] == 'products'){ getProductos()}
          else {console.log("Comando no reconocido en GET, consulte la consigna :)")}
        }
        else{
          if (isNaN(misArgumentosTemp[1])){console.log("Error en el ID del producto a obtener, debe ser un numero")}
          else{
          const miID = parseInt(misArgumentosTemp[1],10);
          getProducto(miID);
        }
        }
      }
    } catch{
      console.log("Error procesando el comando GET, faltan argumentos, consulte la consigna :)");
    }
    break;
  }
  case "POST":{
    try{
      if(misArgumentos.length != 5){console.log("Error en la cantidad de parametros del comando POST, consulte la consigna :)")}
      else{
        if (misArgumentos[1] != 'products'){console.log("Error en los parametros del comando POST, consulte la consigna :)")}
        else{
          if (isNaN(misArgumentos[3])){console.log("Error en el Precio del producto, debe ser un numero")}
          else{
            const miProducto = {
            title: misArgumentos[2],
            price: parseFloat(misArgumentos[3],10),
            category: misArgumentos[4]
          }
          postProducto(miProducto);
        }
        }
      }
    } catch{
        console.log("Error procesando el comando POST, consulte la consigna :)");
    }
    break;
  }
  case "DELETE":{
   try{
      const misArgumentosTemp = misArgumentos[1].toLowerCase().split("/");
      if (misArgumentosTemp.length > 2){
        console.log("Error en el comando DELETE, demasiados parametros, consulte la consigna :)");
      }
      else{
        if (misArgumentosTemp.length == 1){
          console.log("Error en el comando DELETE, faltan parametros, consulte la consigna :)");
        }
        else{
          if (isNaN(misArgumentosTemp[1])){console.log("Error en el ID del producto a borrar, debe ser un numero")}
          else{
          const miID = parseInt(misArgumentosTemp[1],10);
          deleteProducto(miID);
        }
        }
      }
    } catch{
      console.log("Error procesando el comando DELETE, faltan argumentos, consulte la consigna :)");
    }
    break;
  }
  default: {
    console.log("Error, comando no reconocido, por favor consulte la consigna :)");
    break;
  }
}

