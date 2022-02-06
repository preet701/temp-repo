const{ readFile,writeFile}=require("fs");
readFile("./dist/first.txt","utf-8",(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result;
    readFile("./dist/second.txt","utf-8",(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        const second=result;
        writeFile("./dist/async.txt",`here is result:${first},${second}`,(err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(result);
        });

    });
});

