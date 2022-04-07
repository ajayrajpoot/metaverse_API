"use strict";

Object.defineProperty(global, '__line', {
    get: function(){
        return ((new Error()).stack.split("\n")[2].trim().replace(/^(at\s?)(.*)/gim, "$2 >").replace(__dirname, ""));
    }
})

const DB = require('./db')

module.exports = ((env = process.env.NODE_ENV) => {

    global._config_ = {
        "mysql": {
            "host"      :   "62.171.178.135",
            "user"      :   "ajayt",
            "password"  :   "Asd@1234",
            "database"  :   "shop",
            "port"      :   "3307"
        }
    }

  
    global._config_ = {
        "mysql": {
            "host"      :   "localhost",
            "user"      :   "root",
            "password"  :   "",
            "database"  :   "metaverse",
            "port"      :   "4406"
        }
    }

    if (process.env.sqlHOST && process.env.sqlUSER && process.env.sqlPASS) {

        _config_.mysql.host = process.env.sqlHOST
        _config_.mysql.user = process.env.sqlUSER
        _config_.mysql.password = process.env.sqlPASS
        _config_.mysql.database = env != "production" ? (env === "staging" ? "node" : "staging") : "shyplitenode";
    }

    global.writeDB = new DB(_config_.mysql, 1);
    global.readDB = new DB(_config_.mysql, 5);

    if ('sqlSLREADHOST' in process.env) {

        const readonlyConfig = Object.assign({}, _config_.mysql);
        readonlyConfig.host = process.env.sqlSLREADHOST;

        global.readOnlyDB = new DB(readonlyConfig, 5);
        global.readDB = global.readOnlyDB;

        console.log("[read]", readonlyConfig.host);
    }
    else {

        global.readOnlyDB = global.readDB;
        console.log("[read]", _config_.mysql.host);
    }

    

})(process.env.NODE_ENV)
