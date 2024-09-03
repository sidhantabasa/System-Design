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
    completed: true
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
    const { id } = req.params; // Get the id from the URL
    const updatedTodo = req.body; // Get the updated data from the request body
    const index = todos.findIndex(todo => todo.id === parseInt(id));

    if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        res.json({
            message: "Todo updated successfully",
            todo: todos[index],
        });
    } else {
        res.status(404).json({
            message: "Todo not found",
        });
    }
});

//delete
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));

    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        res.json({
            message: "Todo deleted successfully",
            todo: deletedTodo[0],
        });
    } else {
        res.status(404).json({
            message: "Todo not found",
        });
    }
});



const PORT = 5111;
app.listen(PORT, () => {
    console.log('server running at port', PORT);
});
