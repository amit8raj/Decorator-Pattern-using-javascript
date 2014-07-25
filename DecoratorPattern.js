/**
 * Created by amitraj on 28/6/14.
 */
var file=require("fs");
function getFile(filename){
    var stdin = process.openStdin();
//    stdin.addListener("data", function(d) {
//    d= d.toString().substr(0, d.toString().length-1)
    console.log(__dirname);
    console.log(">>>>>>>>>>>>>>>>>>>>>>jjjj>>>>>>>>>>>")
        file.stat("/home/amitraj/WebstormProjects/myTest/play_pause.js",function(err,data){
            if(err)
            {
                console.log("file doest not exist" + err);
            }else
            {
                if(){

                }
                else
                {
                console.log("file exist");
                file.readFile("/home/amitraj/WebstormProjects/myTest/play_pause.js",{flag:"r"},function(err,data){
                    if(err)
                    {
                        console.log("file doest not exist" + err);
                    }
                    else
                    {
                        console.log(data.toString());
                    }
                })
                }

            }


        })

}
getFile();
//    var finder = require('findit').find(d);
//    var dirSearch= finder.on('directory', function (dir)
//    {
//        console.log('Directory: ' + dir + '/');
//    })
//    var fileSearch= finder.on('file', function (file) {
//        console.log('File: ' + file);
//    })
//    var check;
//    if(check=="dirSearch")
//    {
//        console.log("Content of directory cannot be printed...Please enter a file name")
//    }
//    else if(check=="fileSearch")
//    {
//        fs.readFile('', function (err, data) {
//            if (err) throw err;
//            console.log(data);
//        });
//    }
//    else
//    {
//        console.log("No relative output...Please search for a new File");
//    }
//
//
