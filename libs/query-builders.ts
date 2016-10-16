declare var require: any;
import event_class from './event_class'
import date_functions from './date_functions'
var mysql = require('mysql');

class query_builders{
    public static insert_query_builder(ins_eve: event_class): string{
        return "insert into devbox.events_data(dateandtime, type, notes, recurring) values(" + mysql.escape(ins_eve.date) + "," + mysql.escape(ins_eve.type) + "," + mysql.escape(ins_eve.notes) + "," + mysql.escape(ins_eve.recurring) + ")";
    }
    public static update_query_builder(upd_eve: event_class): string{
        console.log(upd_eve);
        var pre_string: string = "UPDATE devbox.events_data SET ";
        var add_date: string = "dateandtime = " + upd_eve.date + ", ";
        var add_type: string = "type = " + mysql.escape(upd_eve.type) + ", ";
        var add_notes: string = "notes = " + mysql.escape(upd_eve.notes) + ", ";
        var add_recurring: string = "recurring = " + mysql.escape(upd_eve.recurring);
        var end_string: string = " WHERE idkey = " + mysql.escape(upd_eve.id);    
        var output_string: string = pre_string + add_date + add_type + add_notes + add_recurring + end_string;
        console.log(output_string);     
        return output_string;
    }
    public static delete_query_builder(id: string){
        return 'DELETE from devbox.events_data where idkey = ' + id;
    }
    public static week_query_builder(): string{
        var orig_date: Date = new Date();
        var pre_month: string = date_functions.single_date_to_double_date(orig_date.getMonth() + 1);
        var pre_date: string = date_functions.single_date_to_double_date(orig_date.getDate());
        var full_pre_string = orig_date.getFullYear().toString() + pre_month + pre_date;
        
        orig_date.setDate(orig_date.getDate() + 7);
        
        var post_month: string = date_functions.single_date_to_double_date(orig_date.getMonth() + 1);
        var post_date: string = date_functions.single_date_to_double_date(orig_date.getDate());
        var full_post_string: string = orig_date.getFullYear().toString() + post_month + post_date;
        
        var pre_string: string = `
        SELECT *
        FROM devbox.events_data
        WHERE
        ((dateandtime > ` + full_pre_string + ` AND dateandtime < ` + full_post_string + `) AND recurring = 0) OR
        (((MONTH(dateandtime) = ` + post_month + ` AND DAY(dateandtime) < ` + post_date + ` AND (MONTH(dateandtime) = ` + pre_month + ` AND DAY(dateandtime) > ` + pre_date + `))) AND recurring = 1)

        `;
        return pre_string;
    }
    public static day_query_builder(): string{
        var query_string: string = "";
        var now_date: Date = new Date();
        var dd: string = date_functions.single_date_to_double_date(now_date.getDate());
        var mm: string = date_functions.single_date_to_double_date(now_date.getMonth() + 1);
        var yyyy: string = now_date.getFullYear().toString();
        
        query_string = yyyy + mm + dd;
        var output_string = `
        SELECT *
        FROM devbox.events_data
        WHERE
        (dateandtime = ` + query_string + ` AND recurring = 0) OR ((MONTH(dateandtime) = ` + mm + ` AND DAY(dateandtime) = ` + dd + `) AND recurring = 1);
        `
        return output_string;
        
    }
    public static month_query_builder(){
        var orig_date = new Date();
        var orig_string = orig_date.getFullYear().toString() + date_functions.single_date_to_double_date(((orig_date.getMonth() + 1))) + orig_date.getDate().toString();
        var start_month: string = date_functions.single_date_to_double_date(orig_date.getMonth() + 1);
        var end_month: string = date_functions.single_date_to_double_date(orig_date.getMonth() + 2);
        var day_val: string = orig_date.getDate().toString();
        orig_date.setMonth(orig_date.getMonth() + 2);        
        var out_string = orig_date.getFullYear().toString() + date_functions.single_date_to_double_date(orig_date.getMonth()) + orig_date.getDate().toString();        
                
        var pre_string: string = `
        SELECT * FROM devbox.events_data WHERE         
        (((dateandtime >= `+ orig_string + `) AND (dateandtime < ` + out_string + `)) AND recurring = 0) 
        OR	
        ((MONTH(dateandtime) = ` + end_month +  ` AND DAY(dateandtime) <= ` + day_val + `)
        OR
        (MONTH(dateandtime) = ` + start_month + ` AND DAY(dateandtime) >= ` + day_val + `)) AND recurring = 1;`        
        return pre_string;        
    }
    public static all_query_builder(){
        return "SELECT * FROM devbox.events_data";
    }
}

export default query_builders;