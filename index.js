const express = require('express');
const db = require('./models');
const app = express();

const PORT = 5000;
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`);
    })
})
