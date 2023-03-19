const express = require('express');
require('dotenv').config();
const port = 3002;
const app = express();
const url = 'https://script.google.com/macros/s/AKfycbwMBLkAtUTsX2BbIoEITRy9mBQWdvwwApzhtmsmuc4nOzULyYYb7OmnOlsCe2SaBlgW/exec'
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/', async function (req, res) {
  const { body } = req
  await fetch_url({ url, method: 'post', headers: {}, body: JSON.stringify(body) })
  return res.status(200).send({ message: 'Node.js and Express REST API' });
});

app.get('/', function (req, res) {
  res.send('<meta name="zalo-platform-site-verification" content="NFxX2jVxQ01IvTCuaD5v56d5-HY5kYj6E3K" />')
});


const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

const fetch_url = async ({ url, method, headers, body }) => {
  try {
      var requestOptions = {
          method: method,
          headers: headers,
          data: body,
      };
      const source = axios.request(url, requestOptions)
      console.log(response);
      return {
          status: true,
          message: source,
          error: null
      }

  } catch (error) {
      console.log(error);
      return {
          status: false,
          message: null,
          error: error
      }
  }
}