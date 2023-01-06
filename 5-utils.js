const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};

//Posso simplesmente escrever module.exports = algo sem estar dentro de um objeto

module.exports = sayHi; //Uma coisa só sendo exportada