Pre Entrega - Pablo Blanco - Node

Controles: al momento de leer los argumentos indicados por consola, se valida la sintaxis (siempre mayuscula) de los verbos y la cantidad y calidad de argumentos adicionales en base a cada uno de ellos.

Implementacion: se utiliza "type: module" como se indica en la consigna, se aprovechan las funciones de arrays y cadenas (como split para obtener el "ID" del objeto a borrar o slice para separar los argv).

En el archivo node.js se encuentra la logica principal que selecciona la funcion a utilizar (getProductos, getProducto, postProducto o deleteProducto) en funcion de lo indicado por consola. Luego, en la carpeta "modulos" se encuentra el archivo "misModulos" con la implementación y exportación de cada una de las funciones que interactuan con la API indicada en la consigna.


