var express = require('express');
var app = express();

const PORT = 3000;
app.use(express.static(__dirname));
app.listen(PORT);

console.log('Server running on port: ' + PORT + '...')