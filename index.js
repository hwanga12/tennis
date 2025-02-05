let sever = require('./sever');
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

sever.start(router.route, requestHandler.handle);