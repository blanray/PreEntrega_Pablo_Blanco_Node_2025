const URL = 'https://fakestoreapi.com/products'

export const getProductos = async () =>{
  try{
    const response = await fetch(URL);
    console.log("Codigo respuesta HTTP: ", response.status);
    const data = await response.json();
    console.log(data);
    console.log("Se recibieron ", Object.keys(data).length , " registros.");
  } catch(error){
      console.log("Error recibiendo productos: ", error);
  } finally{
      console.log("Comando finalizado");
  }
}

export const postProducto = async (producto) =>{
  try{
    const configPost = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
    }
    const response = await fetch(URL, configPost);
    console.log("Codigo respuesta HTTP: ", response.status);
    const data = await response.json();
    console.log(data);
    console.log("Se insertó correctamente el registro con ID ", data.id);
  } catch(error){
      console.log("Error creando producto: ", error);
  } finally{

      console.log("Comando finalizado");
  }
}

export const getProducto = async (ID) =>{
  try{
    const miURLID = URL + "/" + ID
    const response = await fetch(miURLID);
    console.log("Codigo respuesta HTTP: ", response.status);
    const data = await response.json();
    console.log(data);
    console.log("Se recibio correctamente el producto con ID ", data.id);
  } catch(error){
      console.log("Error recibiendo producto con ID: ", ID);
  } finally{

      console.log("Comando finalizado");
  }
}

export const deleteProducto = async (ID) =>{
  try{
    const configDelete = {
      method: "DELETE",
    }
    const miURLID = URL + "/" + ID
    const response = await fetch(miURLID, configDelete);
    console.log("Codigo respuesta HTTP: ", response.status);
    const data = await response.json();
    console.log(data);
    console.log("Se eliminó correctamente el producto con ID ", data.id);
} catch(error){
      console.log("Error borrando el producto con ID: ", ID);
  } finally{
      console.log("Comando finalizado");
  }
}
