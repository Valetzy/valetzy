

const express = require('express');
const app = express();

// Define a route to retrieve the flag
app.get('/api/getFlag', (req, res) => {
    // Logic to generate or retrieve the flag securely
    const flag = "selectCTF{myflag_i}";

    // Return the flag as JSON response
    res.json({ flag });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
