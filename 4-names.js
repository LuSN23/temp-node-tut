//local
const secret = 'SUPER SECRET'; //Não quero que seja acessada de fora desse arquivo
//share
const john = 'john';
const peter = 'peter'; //o nome do valor ser igual o nome da chave é sintaxe do ES6

//console.log(module); //exports é uma propriedade da variável global module e é um objeto

module.exports = { john, peter }; //aqui tá sendo enviado como objeto porque são múltiplas 
                                  //coisas a serem exportadas, há múltiplas formas de ser fazer isso