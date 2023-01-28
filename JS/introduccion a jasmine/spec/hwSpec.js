// Ejercicio 1

//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    // var sigma = 0;
    // for (let i = 0; i <= n; i++) {
    //     sigma+= i;
    // }
    // return sigma
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    // var sumaPrimeroFinal = arr[0] + arr[arr.length-1];
    // return sumaPrimeroFinal;
}

describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});



// Ejercicio 2.
// Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array. Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas. 

// No utilices más de 30 minutos en todo el ejercicio.

function sumMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    sum = max + min;
    return sum;
}

describe("sumMaxMin", function(){
    it ("should return 11 when we pass [1,3,10] as an argument", function(){
        expect(sumMaxMin([1,3,10])).toEqual(11);
    })
    it ("debería devolver -12 cuando le entregamos [-2,-5,-10] como argumento", function(){
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12);
    })
});
