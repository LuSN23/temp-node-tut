//CommonJS(library sobre a qual o node é baseada), every file is a module(by default)
//Modules - Encapsulated Code (only share minimum)

//const {john, peter} = require('./4-names'); //Usando o destructuring para usar as variáveis 
//sem dar erro ou posso chamar pelas variáveis do objeto names com fiz abaixo
const names = require('./4-names'); //Sempre escreve ./ para diferenciar de modules de terceiros 
const sayHi = require('./5-utils'); //e built-in modules. const sayHi tem o mesmo nome da função* ES6?!
//console.log(names);
const data = require('./6-alternative-flavor');
console.log(data);
//console.log(data.singlePerson);
//Acima posso nomear essas constantes da forma que eu quiser, mas tem que ser igual ao nome da função 
//exportada, já em names como é um objeto, não há necessidade

require('./7-mind-grenade'); //chamando direto e executando porque a chamada da função 
                             //está sendo feita no arquivo requerido, isso é usado numa aplicação 
                             //mais complexa que requeira o chamamento de uma ação ao chamar um módulo
//Se a função não for executada no módulo chamado, não é possível só com o require, sem atribuição a 
//uma variável executar a função nesse módulo principal                             

sayHi('susan');
sayHi(names.john);  //aqui tô chamando pela variáveis do objeto names
sayHi(names.peter);


//Nos ES6 modules é similar o export default a isso aqui que fizemos

//Estrutura melhor
//Arquivos menores
//Cada arquivo/módulo tem sua função
//Protege variáveis locais de serem expostas globalmente se assim não for desejado(encapsulamento)
//É exportado apenas o que deseja-se usar em outros arquivos/módulos (controle)

