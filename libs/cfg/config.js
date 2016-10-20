"use strict";
class config_items {
    static get_database_table_string() {
        //add in call to database to retrieve db table name
        switch (config_items.prod_or_dev) {
            case "prod":
                return "sql8140444.events_data";
            case "dev":
                return "devbox.events_data";
        }
    }
    static get_connection_info() {
        //add in calls to xml document to retrieve DB connection details.
        var prod_conn_obj = {
            host: "sql8.freemysqlhosting.net",
            port: '3306',
            user: 'sql8140444',
            password: 'Umr7EDGELK'
        };
        var dev_conn_obj = {
            host: "127.0.0.1",
            port: "3306",
            user: "root",
            password: "root"
        };
        switch (config_items.prod_or_dev) {
            case "prod":
                return prod_conn_obj;
            case "dev":
                return dev_conn_obj;
        }
    }
    static app_connection_string() {
        switch (config_items.prod_or_dev) {
            case "prod":
                return "https://eventappserver.herokuapp.com?";
            case "dev":
                return "http://127.0.0.1:80?";
        }
    }
}
config_items.prod_or_dev = "prod";
exports.config_items = config_items;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config_items;
