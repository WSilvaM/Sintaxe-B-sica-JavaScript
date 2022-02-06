// o que são vetores ou arrays

// como declarar um array

let array = ['string',1 , true];
console.log(array);

//pode guarda vários tipos de dados
let array = ['string', 1, true,['array1'],['array2'],['array3']];
console.log(array[0]);

//forEach-intera um array;
array.forEach(function(item, index){console.log(item, index)});

//push-add item no final do array;
array.push([]);
console.log(array);

//pop-remove item no final do array;
array.pop();
console.log(array);

//shift-remove item no inicio do array;
array.shift();
console.log(array);

//indexOf-retorna a indice de um valor;
console.log(array.findIndexindexOf(true));

//splice-remove ou substituir um item pelo indece;
array.splice(0, 3);
console.log(Array);

//slice-retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);
console.log(novoArray);



