const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/About', (req, res) => {
  res.sendFile(__dirname + '/About.html');
});

app.get('/Contact', (req, res) => {
  res.sendFile(__dirname + '/Contact.html');
})

app.get('/Review',  (req, res) => {
  res.sendFile(__dirname + '/Reviews.html');
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${3000}`)
})
;
