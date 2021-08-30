class BasicIterable {
    constructor() {
        this.items = [1, 2, 3, 4];
    }
    [Symbol.iterator]() {
        const items = this.items;
        let index = -1;
        return {
            next: function () {
                index++;
                return {
                    value: items.length > index ? items[index] : null,
                    done: items.length <= index
                };
            }
        }
    }
}

module.exports = BasicIterable;




