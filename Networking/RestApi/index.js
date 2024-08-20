import express from "express";

const app = express();

app.all('/', (req, res) => {
    res.send('Hello World!')
})

const todos = [{
    id: 1,
    title: 'Buy milk',
    completed: false
},
{
    id: 2,
    title: 'Buy coffee',
    completed: true
},


]

//read
app.get('/todos', (req, res) => {
    res.json(todos)


})

//create

//update

//delete




const PORT = 5111;
app.listen(PORT, () => {
    console.log('server running at port', PORT);
});