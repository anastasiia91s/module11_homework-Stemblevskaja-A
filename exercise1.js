//Задание 1
//
// В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
//
//     Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
//     то он учитывается и выводится отдельно.
//
//     При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
//
//     На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

const arr = [null, '1', '2', 2 , 3, 4, 8, true, NaN];

function getNum () {
    let even = 0;
    let  odd = 0;

    const zero= arr.filter(isNull);
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                even += 1;
            } else if (arr[i] % 2 === 1) {
                odd += 1;
            }
        }
    }
    console.log(`В массиве ${even} четных элемента`);
    console.log(`В массиве ${odd} четных элемента`);
}
getNum()
function isNull (elem) {
    return elem === null;
};
const zero= arr.filter(isNull);
console.log('В массиве ',zero.length,'null');