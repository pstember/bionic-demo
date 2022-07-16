const express = require('express');
const app = express();

const routes = require('./src/api_routes/routes');
routes(app);

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

app.listen(PORT, HOST => {
console.log(`Listening to port http://${HOST}:${PORT}`);
});