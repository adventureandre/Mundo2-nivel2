// Funçao  trocar os valores de duas Posiçoes de um vetor
const swap = (array, p1, p2) => {
    const posicaosalva = array[p1];
    array[p1] = array[p2];
    array[p2] = posicaosalva
    return array
}
// const array = ['bora','ver','se','vai','certo'];
// console.log(swap(array,0,2))


//Função embaralhar os elementos de um vetor
const shuffle = (array, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let posicao1 = Math.floor(Math.random() * array.length);
        let posicao2 = Math.floor(Math.random() * array.length);
        let temp = array[posicao1];
        array[posicao1] = array[posicao2];
        array[posicao2] = temp;
    }

    return array
}

//const array = [1,2,3,4,5,6]
//console.log(shuffle(array,10))


// Funçao ordenar um vetor de inteiros com o algoritmo Bubble Sort, tendo como parâmetro de entrada o vetor de inteiros
const bubbleSort = (array) => {
    const quant = array.length;

    for (let i = 0; i < quant - 1; i++) {
        for (let y = 0; y < quant - i - 1; y++) {
            if (array[y] > array[y + 1]) {
                let temp = array[y];
                array[y] = array[y + 1];
                array[y + 1] = temp;
            }
        }
    }
    return array;
}

//console.log(bubbleSort([1445,26,38,4,5,6]))


// Funçao ordenar um vetor de inteiros utilizando o algoritmo Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros
 const selectionSort = (array) => {
    var temp;

    for (let i = 0; i < array.length; i++) {
        let mi = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[mi])
                mi = j;
        }

        temp = array[i];
        array[i] = array[mi];
        array[mi] = temp;
    }

    return array
};


// console.log(selectionSort([1445, 26, 38, 4, 5, 6]))


// Funçao ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo, tendo como parâmetros o vetor, posição inicial e posição final
const quickSort = (array, ini, fim) => {
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f)/2);

    while(i < f) {
        while(array[i] < array[m]) {
            i++;
        }

        while(array[f] > array[m]) {
            f--;
        }

        if(i <= f) {
            var temp = array[i];
            array[i] = array[f];
            array[f] = temp;
            i++;
            f--;
        }
    }

    if(f > ini) {
        quickSort(array, ini, f);
    }

    if(i < fim) {
        quickSort(array, i, fim);
    }

    return array
}

//const numeros = [15, 2, 8, 30, 1, 11, 5, 7];
//console.log(quickSort(numeros, 0, numeros.length - 1));



const particionamento = (array, inicio, fim, pivot) => {
        let esquerda = inicio;
        let direita = fim;

        while (esquerda <= direita) {
            // Encontra o primeiro elemento à esquerda do pivot que é maior ou igual a ele
            while (array[esquerda] < pivot) {
                esquerda++;
            }

            // Encontra o primeiro elemento à direita do pivot que é menor ou igual a ele
            while (array[direita] > pivot) {
                direita--;
            }

            // Se ainda não cruzou as posições, troca os elementos
            if (esquerda <= direita) {
                [array[esquerda], array[direita]] = [array[direita], array[esquerda]];
                esquerda++;
                direita--;
            }
        }

        // Retorna a posição do último elemento da partição à esquerda do pivot
        return esquerda - 1;
    }