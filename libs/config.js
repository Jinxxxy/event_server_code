"use strict";
class config_items {
    static get_database_table_string() {
        //add in call to database to retrieve db table name
        return "sql8140444.events_data";
    }
    static get_connection_info() {
        //add in calls to xml document to retrieve DB connection details.
        var conn_obj = {
            host: "sql8.freemysqlhosting.net",
            port: '3306',
            user: 'sql8140444',
            password: 'Umr7EDGELK'
        };
        return conn_obj;
    }
}
exports.config_items = config_items;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config_items;
