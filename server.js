const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
       res.write("Welcome to some Page");
       res.end();
    }else if(req.url === '/About'){
       res.write("Welcome to About Page");
       res.end();
    }else if(req.url === '/Contact'){
       res.write("Welcome to Contact  Page");
       res.end();
    }else{
       res.write("404 Page Not Found");
       res.end();
}});
server.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000");
})