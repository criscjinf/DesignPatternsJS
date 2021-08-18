const api = require('../api/api');

class NewLog {
    constructor(url, token) {
        this.token = token
        this.url = url
    }

    message(msg) {
        api.postLog(this.url, this.token, msg)
    }
}

module.exports = NewLog;