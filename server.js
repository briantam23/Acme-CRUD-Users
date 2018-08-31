const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db');
const { Users } = db.models;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

db.syncAndSeed();

