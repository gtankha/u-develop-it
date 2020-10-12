const express = require('express');
const db = require('./db/database');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');


app.use('/api', apiRoutes);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


 
// GET a single candidate
// Delete a candidate
/*db.run(`DELETE FROM candidates WHERE id = ?`, 1, function(err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result, this, this.changes);
  });*/

// Create a candidate
/*const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
// ES5 function, not arrow function, to use this
db.run(sql, params, function(err, result) {
if (err) {
console.log(err);
}
console.log(result, this.lastID);
});*/


// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});