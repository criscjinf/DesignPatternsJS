const Log = require('../../../commum/classes/log');
const NewLog = require('../../../commum/classes/newLog');
const AdapterLog = require('./adapterLog');

// Primeiro 
Log.message('Teste log antigo');

let newLog = new NewLog('http://www.saipos.com/v3/logs', 'asd654qwe321zxc987');
newLog.message('Teste novo log');


AdapterLog.message('Teste novo log');