const express = require('express')
const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
const dev = false;
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 5000;

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });