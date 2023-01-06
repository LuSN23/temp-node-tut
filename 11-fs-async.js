//FS(FileSystem) Module(Asyncronous) - Sem "blocking"
//Assíncrono precisa de callback
//É preciso acessar a callback(dentro de result) para usar o writeFile, 
//porque é o único lugar com os dados que eu quero, mas atenção que isso pode levar ao callback hell(como neste exemplo), 
//então aprenderemos de outra forma

const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second} \n`,
            {flag: 'a'},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
                //console.log(result);
            }
        )
    })
})
console.log('start next task');