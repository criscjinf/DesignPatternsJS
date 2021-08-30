const Caretaker = require("./caretaker");
const UserOriginator = require("./user-originator");

function execute() {
    let user = new UserOriginator('Bruce Lee', 33, 'China')
    let caretaker = new Caretaker()

    console.log('Gerando primeiro backup: ', user)
    caretaker.add(1, user.getMemento())

    user.name = 'Bruce Willis'
    user.age = 66
    user.country = 'Germany'
    console.log('Gerando segundo backup: ', user)
    caretaker.add(2, user.getMemento())

    user.name = 'Bruce Wayne'
    user.age = 74
    user.country = 'USA'
    console.log('Gerando terceiro backup: ', user)
    caretaker.add(3, user.getMemento())


    user.restoreMemento(caretaker.get(1))
    console.log('Resturando primeiro backup: ', user)

    user.restoreMemento(caretaker.get(3))
    console.log('Resturando terceiro backup: ', user)

    user.restoreMemento(caretaker.get(2))
    console.log('Resturando segundo backup: ', user)

}

execute();