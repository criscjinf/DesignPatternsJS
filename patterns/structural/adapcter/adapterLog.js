const NewLog = require('../../../commum/classes/newLog');

class AdapterLog {
    static message(msg) {
        let newLog = new NewLog('http://www.saipos.com/v3/logs', 'asd654qwe321zxc987');

        newLog.message(msg);
    }
}

module.exports = AdapterLog;