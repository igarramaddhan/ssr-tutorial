import * as React from 'react';
import * as express from 'express';
import * as cors from 'cors';
import {renderToString} from 'react-dom/server';
import App from './App';
import * as serialize from 'serialize-javascript';
import {StaticRouter} from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  const name = 'Rama';
  const sheet = new ServerStyleSheet();
  const markup = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={{}}>
        <App name={name} />
      </StaticRouter>
    </StyleSheetManager>
  );

  const styleTags = sheet.getStyleTags();

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      ${styleTags}
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
  sheet.seal();
});

app.listen(3000, () => console.log('Server is running on port 3000'));
