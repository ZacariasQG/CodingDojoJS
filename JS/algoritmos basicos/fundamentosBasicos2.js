// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function grande(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0){
            array[i] = 'big';
        }
    }
    return array;
}

console.log(grande([-1,3,5,-5]))

// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

function printMinReturnMax(array){
    var min = array[0];
    var max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]){
            min = array[i];
        }
        if (max < array[i]){
            max = array[i];
        }
    }
    console.log(min);
    return max;
}

var prueba = printMinReturnMax([-5,-4,-3,-2,-1,0,1,2,3,4])
console.log (prueba);

// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function printOneReturnOther(array) {
    console.log(array.length-1);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            return array[i];
        }
    }
    return "no se encontraron impares";
}
console.log(printOneReturnOther([0,2,4,6,8,10,12,14,15,16,18]));

// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(array) {
    var newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i]*2)
    }
    return newArr;
}
console.log(doble([1,2,3]))

// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(array) {
    positivos = 0;
    for (let i = 0; i < array.length; i++) {
        if (0 < array[i]) {
            positivos++;
        }
    }
    array[array.length-1] = positivos;
    return array
}
console.log(contarPositivos([-1,1,1,1]));
// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function paresImpares(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] % 2 == 0 && array[i-1] % 2 == 0 && array[i-2] % 2 == 0) {
            console.log ("¡Es para bien!")
        }
        if (array[i] % 2 ==1 && array[i-1] % 2 ==1 && array[i-2] % 2 ==1) {
            console.log("¡Qué imparcial!")
        }
    }
}
paresImpares([1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,19,20,21,23,25]);

// Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
function incrementaImpar(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1){
            arr[i] = arr[i]+1;
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log (incrementaImpar([1,2,3,4,5,6,7,8,9,10]));

// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

function longitudesPrevias(array){
    for (i = array.length; i > 1 ; i--){
        array[i-1] = array[i-2].length;
    }
    return array;
}
console.log(longitudesPrevias(["programar","dojo", "genial"]))

// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function agregaSiete(array){
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push( array[i]+7 )
    }
    return newArr;
}

console.log(agregaSiete([1,2,3]));

// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function invertir(array){
    array.reverse();
    return array;
}
console.log(invertir([3,1,6,4,2]));

// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function valorNegativo(array){
    for (let i = 0; i < array.length; i++) {
        if (0 < array[i]) {
            array[i]*= -1
        }
    }
    return array;
}
console.log (valorNegativo([1,-3,5]));
// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function siempreHambriento(array){
    var food = false;
    for (let i = 0; i < array.length; i++) {
        if ("comida" == array[i]) {
            console.log("yummy")
            food = true;
        }
    }
    if (food == false){
        console.log("tengo hambre")
    }
}

siempreHambriento([1,2,3,4,"comida",6,7,8,9,10,"comida"]);
siempreHambriento([1,2,3,4,5])

// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambiarAlCentro(array) {
    for (let i = 0; i < array.length/2; i++) {
        if (i%2 == 0){
            let almacenar = array[i];
            array[i] = array[array.length-1-i];
            array[array.length-1-i] = almacenar;
        }
    }
    return array;
}

console.log(cambiarAlCentro(["pizza", 42, "Ada", 2, true]));
console.log(cambiarAlCentro([1,2,3,4,5,6]));



// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function propDistributiva(arr, num){
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
console.log(propDistributiva([1,2,3], 3));