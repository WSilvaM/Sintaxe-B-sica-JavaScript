// tipos premitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//nuber
var nemeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = 'wanderson';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'wanderson';
variavel = 'bruna';
console.log(variavel);

let variavel2 = 'wanderosn';
variavel2 = 'lucas';
console.log(variavel2);

//nao poder se trocado o valor
const constante = 'wanderson';
console.log(constante);

var escorpoGlobal = 'global';
console.log(escorpoGlobal);

function escorpoLocal(){
     let escorpoLocalInterno = 'local';
     console.log(escorpoLocalInterno);
     
}
escorpoLocal();

//atribuicao
var atribuicao = 'wanderson';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao indentica
var comparacaoIndentica = '0' === 0;
console.log(comparacaoIndentica);

//adicao
var adicao = 1 + 2;
console.log(adicao);

//subtracao
var subtracao = 6 - 2;
console.log(subtracao);

//divisao
var divisaoReal = 10 / 2;
console.log(divisaoReal);

//multiplicacao
var multiplicacao = 3 * 2;
console.log(multiplicacao);

//divisao inteira
var resto = 12 % 2;
console.log(resto);

//potenciacao
var potenciacao = 2 ** 10;

//maior que
 var maior = 10 > 3;
 console.log(maior);

 //menor que
 var menor = 15 < 3;
 console.log(menor);

 //maior ou igual
 var maiorOUigual = 10 >= 5;
 console.log(maiorOUigual);

 //menor ou igual
 var menorOUigual = 15 <= 5;
 console.log(menorOUigual);

 //Operadores logicos
 var e = true && true;
 console.log(e);

 var ou = false|| false;
 console.log(ou);

 var nao = !true;
 console.log(nao);