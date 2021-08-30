const Chatroom = require("./mediator-chatroom");
const Participant = require("./colleagues-participant");

function executar() {
    let joao = new Participant('joao');
    let maria = new Participant('maria');
    let lucas = new Participant('lucas');
    let chatroom = new Chatroom();

    chatroom.register(joao)
    chatroom.register(maria)
    chatroom.register(lucas)

    joao.send('Galera, vamos ao shopping?')

    maria.send('Hoje não vai dar, to ocupada')

    lucas.send('To cheio de serviço')

    maria.send('Lucas, vamos a praia? Só não fala pro joão', lucas)

    lucas.send('Partiu praia', maria)


}

executar()