import express from "express";
import bodyParser from "body-parser";

const app = express(); 
  
app.use(bodyParser.json())

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

app.post('/todos', (req, res) => {
    const newTodo = req.body
    todos.push(newTodo);
    res.json({
        message:"new todo added"
    })
})



//update
app.put('/todos/:id', (req, res) => {
     
    


})

//delete




const PORT = 5111;
app.listen(PORT, () => {
    console.log('server running at port', PORT);
});
