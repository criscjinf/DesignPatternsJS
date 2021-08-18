class BridgeDbConnection {
    constructor(driver) {
        this.driver = driver;
    }
    persist(model) {
        this.driver.persist(model);
    }
}

module.exports = BridgeDbConnection;