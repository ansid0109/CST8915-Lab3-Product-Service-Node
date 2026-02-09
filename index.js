const express = require('express');
const cors = require('cors');

const app = express();

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'Hello'})
});

const port = 3030;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});