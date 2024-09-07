import { useState, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const startPolling = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-messages');
        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, ...data.newMessages]);

        // Immediately re-poll for new messages
        startPolling();
      } catch (error) {
        console.error('Polling error:', error);
        setTimeout(startPolling, 5000); // Retry after a delay if there's an error
      }
    };

    startPolling();

    return () => {
      // Optional: Cleanup
    };
  }, []);

  return (
    <div>
      <h1>Testing Long Polling</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
