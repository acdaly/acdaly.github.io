const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/test-index.html');

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))