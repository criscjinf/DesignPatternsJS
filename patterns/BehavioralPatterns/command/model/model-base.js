class ModelBase {
    constructor() {
        this.data = []
    }

    findOne(id) {
        return this.data.find(item => item['id'] === id)
    }

    create(data) {
        this.data.push(data)
    }

    upsert(data) {
        const idx = this.data.findIndex(item => item['id'] === data['id'])
        idx > -1 ? this.data[idx] = { ...data } : this.create({ ...data })
    }
}

module.exports = ModelBase;