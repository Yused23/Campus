import { app } from "./app";

import db from './db/db';

const PORT = process.env.PORT || 3001;

// Authenticate database credentials
db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));


// Sync sequelize models
db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`);
});