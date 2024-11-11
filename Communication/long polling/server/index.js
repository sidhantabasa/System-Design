const express = require('express');
const app = express();

// In-memory message queue (in a real app, this would be from a database)
let messages = [];

// Endpoint to handle long polling requests
app.get('/get-messages', (req, res) => {
  if (messages.length > 0) {
    res.json({ newMessages: messages });
    messages = [];
  } else {
    const interval = setInterval(() => {
      if (messages.length > 0) {
        res.json({ newMessages: messages });
        messages = [];
        clearInterval(interval);
      }
    }, 1000); // Check every 1 second     

    setTimeout(() => {
      clearInterval(interval);
      res.json({ newMessages: [] }); // Timeout after 30 seconds
    }, 30000);
  }
});

// Simulate new message every 10 seconds
setInterval(() => {
  const newMessage = 'New message at ' + new Date().toLocaleTimeString();
  messages.push(newMessage);
}, 5000);

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
