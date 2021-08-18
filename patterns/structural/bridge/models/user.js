const BaseModel = require("./baseModel");
class User extends BaseModel {
    constructor() {
        super();
        this.addField('nome');
        this.addField('cpf');
    }
}
module.exports = User;
