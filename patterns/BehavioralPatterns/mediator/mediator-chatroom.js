class Chatroom {
    constructor() {
        this.participants = {}
    }
    register(participant) {
        this.participants[participant.name] = participant;
        participant.chatroom = this;
    }
    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            for (let key in this.participants) {
                if (this.participants[key] !== from) {
                    this.participants[key].receive(message, from)
                }
            }
        }
    }
}

module.exports = Chatroom;