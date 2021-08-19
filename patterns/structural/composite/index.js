const CompositeDirectories = require('./compositeDirectories');

function mostrarPastas(ident, directory) {

    console.log(Array(ident++).join("--") + directory.name);

    for (var i = 0, len = directory.children.length; i < len; i++) {
        mostrarPastas(ident, directory.getChild(i));
    }
}

let root = new CompositeDirectories('root');
let home = root.add('home');

home.add('pasta 1');
home.add('pasta 2');

root.add('src').add('pasta 1')


mostrarPastas(1, root);