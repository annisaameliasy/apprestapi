const express = require('express'); //var untuk memanggil library expressjs
const bodyParser = require('body-parser'); //untuk memanggil library bodyparser
const app = express(); //fungsi secara global untuk memanggil expressjs

//parse application/json
app.use(bodyParser.nodeurlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});