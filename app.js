//External modules
//npm - global command, comes with node  
//npm  --version (geralmente é a mesma versão do node)

//local dependency - use it only in this particular project:
//npm i - <packageName>

//global dependency - use it in any project:
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file(stores important info about project/package) where will be the dependencies writed
//manual approach (create package.json in the root,  create properties ect)

//npm init (step by step, press enter to skip)
//npm init -y (everything default)
//automatic approach

//the name of the package will be the folder name, so it need to be unique if you want to publish it
//(nowhere in npm you can see a package with the same name)

// Quando instalamos algo localmente aparecerá no package.json a propriedade dependencies com o package(um objeto) que 
// instalamos para testar: npm i lodash (esse pacote tem apenas 1 dependência)
// Haverá uma pasta nova também chamada node_modules(em que estarão todas as dependências) 
// com uma pasta do package lodash com vários arquivos/módulos dentro.

// Se instalamos um pacote com mais dependências, para testar npm i bootstrap, haverá o nome do pacote na propriedade dependencies do package.json
// assim como o outro, porém na pasta node_modules haverá mais pacotes instalados que são dependências do bootstrap.
// Então precisamos do package.json para prover informações sobre nosso projeto


//A diferença é que os módulos externos você sempre tem que instalar antes
const _ = require('lodash'); //usando essa dependência

const items = [1,[2,[3,[4]]]]; //Array profundo/deep array
const newItems = _.flattenDeep(items); //método do módulo externo lodash que deixa um array raso
console.log(newItems);

//Depois de instalar você pode usar seus métodos e propriedades a vontade