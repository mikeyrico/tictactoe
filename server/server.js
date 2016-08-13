var express = require('express');
var app = express();
var authRouter = require('./routers/auth.router');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function(req, res) {
  res.send('hello world');
});

app.use('/auth', authRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000');
});
