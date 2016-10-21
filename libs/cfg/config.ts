export class config_items{
    public static prod_or_dev = "prod";
    public static get_database_table_string(): string{
        //add in call to database to retrieve db table name
        switch(config_items.prod_or_dev){
            case "prod":
            return "eventsapp.events_data"
            case "dev":
            return "devbox.events_data"
        }
        
        
    }
    public static get_connection_info():Object{
        //add in calls to xml document to retrieve DB connection details.
        var prod_conn_obj = {
            host: "mysql3.gear.host",
            user: 'eventsapp',
            password: 'Ji0w_877X0a?'
        };
        var dev_conn_obj = {
            host: "127.0.0.1",
            port: "3306",
            user: "root",
            password: "root"
        }
        switch(config_items.prod_or_dev){
            case "prod":
            return prod_conn_obj;
            case "dev":
            return dev_conn_obj;
        }
    }
    public static app_connection_string():string{
        switch(config_items.prod_or_dev){
            case "prod":
            return "https://eventappserver.herokuapp.com?"
            case "dev":
            return "http://127.0.0.1:80?"
        }
    }
}

export default config_items;