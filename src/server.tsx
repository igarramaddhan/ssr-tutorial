import * as React from 'react';
import * as express from 'express';
import * as cors from 'cors';
import {renderToString} from 'react-dom/server';
import App from './App';
import * as serialize from 'serialize-javascript';
import {StaticRouter} from 'react-router-dom';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  const name = 'Rama';
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App name={name} />
    </StaticRouter>
  );

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <script src="/bundle.js" defer></script>
      <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
    </head>
    <body>
      <div id="app">${markup}</div>
    </body>
  </html>
  `;

  res.send(html);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
