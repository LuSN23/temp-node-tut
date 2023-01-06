//PATH module (Informações de caminhos)
const path = require('path');

console.log(path.sep); //Volta o caracter de separação do caminho

const filePath = path.join('/content', 'subfolder', 'test.txt'); 
//"Normalize a path" significa tira os . .. do caminho
console.log(filePath);

const base = path.basename(filePath); //Apenas o último item do caminho
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); 
console.log(absolute); //Volta o caminho absoluto