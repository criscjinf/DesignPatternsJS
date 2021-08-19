class CompositeDirectories {
    constructor(name) {
        this.children = [];
        this.name = name;
    }

    add(name) {
        let dir = new CompositeDirectories(name);
        this.children.push(dir)
        return dir
    }


    remove(child) {
        let length = this.children.length;
        for (let i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.slice(1, 1);
                return
            }
        }
    }

    getChild(i) {
        return this.children[i];
    }

    hasChild() {
        return this.children.length > 0;
    }
}

module.exports = CompositeDirectories;