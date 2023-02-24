//require build-in modules
const http = require('http'); //CommonJS module pattern (JS)
const fs = require('fs');
const mime = require('mime-types');

let lookup =mime.lookup; //alias for mime.lookup

const port = 3000;

//when we creat a server instanc it is IMMUTABLE = cant be changed until the server is restarted
const server = http.createServer(function(req,res)
{

    let path = req.url; //aliase for req.url

    if(path =="/" || path =="/home"){
        path = "/index.html";

    }

    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

    //console.log(`__dirname : ${__dirname}`);
    fs.readFile(__dirname +path,function(err, data) 
    {
        if(err)
        {
            res.writeHead(404);//status -file not found
            //console.log(`ERROR: ${err.message}`);
            return res.end(err.message);//o/p the error msg to the page
        }else{
            //no error
       // res.setHeader("X-Content-Type-Options","nosniff")//security guard
        res.writeHead(200,{'Content-Type': mime_type});//status - all ok
        //res.writeHead(200);
        //console.log(`DATA : ${data}`);
        return res.end(data);//o/p the file that was read to the page

        }
        
        
        
    })

});

server.listen(port,function(){

    console.log(`Server running at Port: ${port}`);
});

