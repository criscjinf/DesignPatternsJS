let _instance = Symbol();
let _singletonEnforcer = Symbol();

class SingletonConfigs {
    constructor(enforce) {
        if (enforce !== _singletonEnforcer) {
            throw ('Não utilize o constructor desta classe, ao invés disto utilize o getInstance.');
        }
        this.url = '';
        this.id_loja = 0;
    }

    load() {
        this.url = 'http://conta.orangejuice.com.br';
        this.id_loja = 18;
        console.log('Carregou dados');
    }

    static get getInstance() {
        if (!this[_instance]) {
            this[_instance] = new SingletonConfigs(_singletonEnforcer);
        }
        return this[_instance];
    }
}

module.exports = SingletonConfigs;