const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url === "/")
    {
        res.end("this is arrow");
    }
    if(req.url==="/contact"){
        res.end("contact us");
    }
    
    res.end(`<h1>Hello User</h1>
    <p>Which Page You are finding its not available</p>
    <a href="#">click to this link</a>
    `);
    
    // res.end;
})
server.listen(8000);

