const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send a new event every second
  setInterval(() => {
    const data = `data: ${new Date().toLocaleTimeString()}\n\n`;
    res.write(data);
  }, 1000);

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});
 

app.listen(3000, () => {
  console.log('SSE server running on port 3000');
});
