const express = require('express');
require('dotenv').config();
const port = 3333;
const app = express();
const url = 'https://script.google.com/macros/s/AKfycbwMBLkAtUTsX2BbIoEITRy9mBQWdvwwApzhtmsmuc4nOzULyYYb7OmnOlsCe2SaBlgW/exec'
const bodyParser = require('body-parser');
const { fetch_url } = require('./fetch');
const access_token = process.env.ACCESS_TOKEN
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/webhook', async function (req, res) {
  const { headers, body } = req
  const signature = headers['x-zevent-signature']
  const { event_name } = body
  console.log(access_token);
  if (event_name === 'user_send_text') {
    const { sender, recipient, message } = body
    const { text } = message
    var formdata = new FormData();
    formdata.append("access_token", access_token);
    formdata.append("text", text.toUpperCase()); 
    formdata.append("platform", 'Zalo'); 
    formdata.append("uid", sender.id); 
    const response = await fetch_url({ url, method: 'post', headers: {}, body: formdata })
    console.log(response);
  }
  res.status(200).send({ message: 'Node.js and Express REST API' });
});

app.get('/webhook', function (req, res) {
  res.send({ message: 'Node.js and Express REST API' });
});


const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});