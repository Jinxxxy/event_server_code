export class config_items{
    public static get_database_table_string(): string{
        //add in call to database to retrieve db table name
        return "sql8140444.events_data"
    }
    public static get_connection_info():Object{
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

export default config_items;