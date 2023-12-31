

const express = require('express')
var app = module.exports = express();

app.use('/api/v1', require('./controlador/api_v1'));
app.use('/api/v2', require('./controlador/api_v2'));

app.get('/', function(req, res) {
  res.send('Hello from root route ta.')
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
