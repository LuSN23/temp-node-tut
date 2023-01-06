//Built-in Modules:

//OS (Operating System)


const os = require('os'); //os sem ./ para acessar o módulo embutido/built-in

//A partir de então tenho acesso aos métodos e propriedades prontos
//Nesse caso temos um monte de informações sobre o sistema operacional
//Info about current user
const user = os.userInfo(); //Funciona melhor com Linux
console.log(user);

//method returns the system uptime in seconds (tempo que um computador tá ligado e funcionando)
console.log(`The System Uptime is ${os.uptime()} segundos`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);