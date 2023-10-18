const express =  require('express');

const app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.use(express.json());

app.listen(9997,()=>{console.log("Server Started at 9997")});
