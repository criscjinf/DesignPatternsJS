const faker = require("faker-br");

// Class seguindo o Pattern Factory
//Utilizado para executar testes de integração
const factory = new function () {
    this.createEmployee = function () {
        const employer = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            cpf: faker.br.cpf()
        };
        return employer
    }

    this.createRestaurant = function () {
        let restaurant = {
            name: faker.company.companyName(),
            address: faker.address.streetAddress(),
            phone: faker.phone.phoneNumber()
        };
        return restaurant
    }


}

module.exports = factory;