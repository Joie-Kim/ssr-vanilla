import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SSR Practice</title>
    </head>
    <body>
    <div id="app">
      <h1>Hello SSR World</h1>
      <p>SSR is a server-side rendering framework</p>
      <p>It is a framework that allows you to render your HTML on the server side</p>
    </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
