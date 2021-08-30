class Participant {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }
    send(message, to) {
        this.chatroom.send(message, this, to)
    }
    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

module.exports = Participant;