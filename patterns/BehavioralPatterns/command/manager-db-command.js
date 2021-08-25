class ManagerDbCommand {
    constructor() {
        this.clearCommands();
    }

    clearCommands() {
        this.commands = []
    }

    execute(command, data) {
        try {
            command.execute(data)
            this.commands.push(command)
        } catch (error) {
            this.undo()
            throw error
        }
    }

    undo() {
        this.commands.forEach(command => command.undo())
        this.clearCommands();
    }
}

module.exports = ManagerDbCommand;