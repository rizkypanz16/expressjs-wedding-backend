require("dotenv").config();
const express = require('express');
const app = express();
const APP_PORT = process.env.APP_PORT;
const APP_NAME = process.env.APP_NAME;

// Import and use routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);
app.use('/api', apiRoutes);

app.listen(APP_PORT, () => {
    console.log(`${APP_NAME} is running on http://[::1]:${APP_PORT}`);
});
