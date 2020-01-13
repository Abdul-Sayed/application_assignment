In terminal:
`npm i random-movie-quotes && npm i`
`node index.js`

In index.js:
`var quotes = require('random-movie-quotes')`

    app.get('/quote', (req, res) => {
      res.json({
        quote: quotes.getQuote()
      });
    });
