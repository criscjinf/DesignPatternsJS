class BasicGenerator {
    constructor() {
        this.items = [1, 2, 3, 4]
    }


    *[Symbol.iterator]() {
        for (let index = 0; index < this.items.length; index++) {
            yield this.items[index]
        }
    }
}

module.exports = BasicGenerator;
