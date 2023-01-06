//FS(FileSystem) Module(Syncronous) - Com "blocking"

const {readFileSync, writeFileSync} = require('fs'); 
//Destructuring mas pode ser do outro jeito anterior também
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8'); //parâmetros: caminho, codificação
const second = readFileSync('./content/second.txt', 'utf8'); 

console.log(first, second);


writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second} \n`, 
    {flag: 'a'} //append gruda de novo o mesmo texto no arquivo(é um objeto para usar flags)
); 
//parâmetros: caminho + nome do arquivo novo, texto que será escrito dentro do arquivo, objeto para flag
//Cria um novo arquivo ou
//se houver texto em um arquivo especificado, ele escreve por cima apagando o texto anterior
//Outra possibilidade:
//writeFileSync('./content/result-sync.txt', 'algum texto aleatório');
console.log('done with this task');
console.log('starting the next one');