const express = require('express');
const app = express();
const port = 3000;
var quotes = require('random-movie-quotes')

// Use express server to serve static html file in public folder
app.use(express.static('public'));

app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));

app.get('/quote', (req, res) => {
  res.json({
    quote: quotes.getQuote()
  });
});