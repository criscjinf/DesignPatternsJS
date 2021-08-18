
class BaseModel {
    constructor() {
        this.fields = new Map();
    }
    addField(fieldName) {
        this.fields[fieldName] = '';
    }
}

module.exports = BaseModel;