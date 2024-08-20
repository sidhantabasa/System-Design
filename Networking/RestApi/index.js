import express from "express";

const app= express();

app.all('/',(req,res) =>{
    console.log("request=>",req);
    console.log("response=>", res);
    res.send('Hello World!')
})

const PORT= 5111;
app.listen(PORT, () => {
    console.log('server running at port',PORT);
});