//import sql_func from './sql_func';
///<reference path="C:\Development\node\events_cli\libs\event_class.ts" />
import event_class from './event_class';
//import main_menu from './..main-menu';
declare var require: any;

class export_to_html{
    private static output_file_path: string = "./output/output.html";
    private static pre_html: string = `
        <html>
        <head>  
        <style>
            @font-face {
            font-family: 'myFirstFont';
            src: url('http://johnnycampbell.x10host.com/eventsapp/fonts/typewrite-webfont.woff2') format('woff2'),
                url('http://johnnycampbell.x10host.com/eventsapp/fonts/typewrite-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            }
            body{
                background-color: black;
            }
            .event{
                background-color: grey;
                width: 300px;
                height: 175px;
                border: 2px white solid;
                border-radius: 10px;
                font-family:  'myFirstFont';
                text-align: left;
                margin:5px;    
            }
            .inner{
                margin-left: 20px;
            }
            #header{
                margin-left:20px;
            }
        </style>      
        <body>
        `;
    private static post_html: string = `
                </body>        
            </head>
        </html>
        `;
    
    public static file_content_builder(cls_arr: Array<event_class>): string{        
        var building: string = "";
        for(var event in cls_arr){
            building += `
            <div class="event">                
                <h3 id="header">` + cls_arr[event].notes + `</h3>
                <hr>
                <div class="inner">                
                    <span>Date: ` + cls_arr[event].date + `</span><br>
                    <span>Type: ` + cls_arr[event].type + `</span><br>            
                    <span>ID: ` + cls_arr[event].id + `</span><br>
                </div>              
            </div>
            <br>            
            `
        }       
        return this.pre_html + building + this.post_html;
    }
    public static export_main(cls_arr: Array<event_class>){
        var prom = new Promise(function(resolve, reject){
            var file_contents: string = export_to_html.pre_html + (export_to_html.file_content_builder(cls_arr)) + export_to_html.post_html;
            resolve(file_contents)
        }).then(function(file_contents){
            var fs = require('fs');
            fs.writeFile(export_to_html.output_file_path, file_contents, function(err){
                if(err){
                    throw err;
                }
                console.log("File created")
                return;
            }).then(function(){
                //move function call back to main-menu method
                //main_menu.mainmenu();
            })
        })
    }
}
export default export_to_html;