const app = require('./app');
require('dotenv').config()
const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
