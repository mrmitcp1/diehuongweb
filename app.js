let http = require('http')
let url= require('url')
let fs=require('fs')
let handles={}
let server = http.createServer(function (req, res) {
    let urlPath=url.parse(req.url,true)
    let pathname=urlPath.pathname
    switch (pathname) {
        case '/users':
            handles.users(req,res)
            break;
        case '/products':
            handles.products(req,res)
            break;
        default:
            handles.notFound(req,res)
            break;
    }
})
server.listen(3000,()=>{
    console.log('server running')
})
handles.users=function (req,res) {
    fs.readFile('./views/users.html','utf-8',function (err, data) {
        if (err){
            console.log(err.message)
        }
        res.write(data)
        res.end()
    })
}
handles.products=function (req,res) {
    fs.readFile('./views/products.html','utf-8',function (err,data) {
        if (err){
            console.log(err.message)
        }
        res.write(data)
        res.end()
    })
}
handles.notFound=function (req,res) {
    fs.readFile('./views/notfound.html','utf-8',function (err, data) {
        if (err){
            console.log(err.message)
        }
        res.write(data)
        res.end()
    })
}