import express from 'express';
import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import App from '../shared/App';

const app = express();

app.use(express.static('public'));

/**
 * none
 * TTFB ~ 41ms
 * Finish: 772ms | DOMContentLoaded: 771ms | Load: 895ms
 */
 // app.get('*', (req, res) => {
 //   res.send(`
 //     <!DOCTYPE html>
 //     <head>
 //       <title>Universal React</title>
 //       <link rel="stylesheet" href="/css/main.css">
 //       <script src="/bundle.js" defer></script>
 //     </head>
 //     <body>
 //       <div id="root"></div>
 //     </body>
 //     </html>
 //   `);
 // });

/**
 * renderToString
 * TTFB ~ 41ms
 * Finish: 828ms | DOMContentLoaded: 1.02s | Load: 1.12s
 */
app.get('*', (req, res) => {
  const htmlMarkup = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <head>
      <title>Universal React</title>
      <link rel="stylesheet" href="/css/main.css">
      <script src="/bundle.js" defer></script>
    </head>
    <body>
      <div id="root">${htmlMarkup}</div>
    </body>
    </html>
  `);
});

/**
 * renderToNodeStream
 * TTFB ~ 3ms
 * Finish: 768ms | DOMContentLoaded: 958ms | Load: 1.06s
 */
// app.get('*', (req, res) => {
//   res.write(`
//     <!DOCTYPE html>
//     <head>
//       <title>Universal React</title>
//       <link rel="stylesheet" href="/css/main.css">
//       <script src="/bundle.js" defer></script>
//     </head>
//     <body>
//   `);
//   res.write('<div id="root">')
//   const stream = renderToNodeStream(<App />);
//   stream.pipe(res, { end: false });
//   stream.on('end', () => {
//     res.write('</div></body></html>');
//     res.end();
//   });
// });

app.listen(3000, () => {
  console.log('Server is listening!');
});
