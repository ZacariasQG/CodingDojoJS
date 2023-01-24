// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function array255(){
    var arr = [];
    for (let i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return(arr);
}
console.log(array255());

// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function pares1000(){
    var sumapar = 0
    for (let i = 1; i <= 1000; i++) {
        if(i%2 == 0){
            sumapar += i;
        }
    }
    return(sumapar);
}
console.log(pares1000());

// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sumaimpares5000(){
    var sumaimpar = 0;
    for(let i = 1; i<=5000; i++){
        if(i%2 != 0){
            sumaimpar += i;
        }
    }
    return(sumaimpar);
}
console.log(sumaimpares5000());

// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).

function sumArr(arr){
    var suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma+= arr[i];
    }
    return(suma);
}
console.log(sumArr([1,2,5]));
console.log(sumArr([-5,2,5,12]));


// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).

function encuentraMayor(array){
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]){
            max = array[i];
        }
    }
    return max;
}
console.log(encuentraMayor([-3,3,5,7]));
// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function buscaProm(array) {
    var avg = 0
    var suma = 0
    for (let i = 0; i <array.length;i++){
        suma += array[i];
    }
    avg = suma /array.length;
    return avg;
}
console.log(buscaProm([1,3,5,7,20]));

// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function arrayImp(){
    var arr = [];
    for (i = 0; i<50; i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrayImp());

// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorqueY(y, arr){
    var mayores = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y){
            mayores.push(arr[i]);
        }
    }
    return mayores;
}

console.log(mayorqueY(3,[1,3,5,7]));

// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function arrayCuadrado(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i],2);
    }
    return arr;
}
console.log(arrayCuadrado([1,5,10,-2]));

// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function turnToNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr[i] = 0;
        }
        else{
            arr[i]*= -1;
        }
    }
    return arr;
}
console.log(turnToNegative([1,5,10,-2]));
// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function getMaxMinAvg(array){
    var max = array[0];
    var min = array[0];
    var sumatoria = 0;
    var avg;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]){
            max = array[i];
        }
        if (min > array[i]){
            min = array[i];
        }
        sumatoria += array[i];
    }
    avg = sumatoria / array.length;
    var maxMinAvg = [max, min, avg];
    return maxMinAvg;
}
console.log(getMaxMinAvg([1,5,10,-2]));
// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).

function intercambiaValores(array){
    var primero = array[0];
    var ultimo = array[array.length - 1];

    array[0] = ultimo;
    array[array.length - 1] = primero;
    return array;
}
console.log([1,5,10,-2])
console.log(intercambiaValores([1,5,10,-2]))

// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]

function deNumeroaString(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0){
            array[i] = 'Dojo';
        }
    }
    return array;
}
console.log(deNumeroaString([-1,-3,2]));