(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../libs/cfg/config"], factory);
    }
})(function (require, exports) {
    "use strict";
    const config_1 = require("../libs/cfg/config");
    class config_test_functions {
        constructor() {
        }
        static test_function_get_database_table_string() {
            console.log(config_1.default.get_database_table_string());
        }
        static test_function_prod_or_dev() {
            console.log(config_1.default.prod_or_dev);
        }
        static test_function_get_connection_info() {
            console.log(config_1.default.get_connection_info());
        }
        static test_function_app_connections_string() {
            console.log(config_1.default.app_connection_string());
        }
    }
    class implementation {
        static main_method() {
            for (var x in config_test_functions) {
                config_test_functions[x]();
            }
        }
    }
    implementation.main_method();
});
