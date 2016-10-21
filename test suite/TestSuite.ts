import config_items from "../libs/cfg/config";


class config_test_functions{
    public static test_function_get_database_table_string(){
        console.log(config_items.get_database_table_string());
    }
    public static test_function_prod_or_dev(){
        console.log(config_items.prod_or_dev);
    }
    public static test_function_get_connection_info(){
        console.log(config_items.get_connection_info());
    }
    public static test_function_app_connections_string(){
        console.log(config_items.app_connection_string());
    }
    constructor(){

    }
}

class implementation{
    public static main_method(){
        for(var x in config_test_functions){
            config_test_functions[x]();
        }
    }    
}

implementation.main_method();