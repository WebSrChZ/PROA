const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const ROOT_DIR = __dirname;

const BLOCKED_PATHS = [
  '/server.js',
  '/package.json',
  '/package-lock.json',
  '/node_modules',
];

app.use((req, res, next) => {
  let normalizedPath;
  try {
    normalizedPath = decodeURIComponent(req.path).toLowerCase();
  } catch {
    return res.status(400).send('Bad Request');
  }
  if (
    BLOCKED_PATHS.some(
      (blocked) =>
        normalizedPath === blocked || normalizedPath.startsWith(`${blocked}/`)
    )
  ) {
    return res.status(404).send('Not Found');
  }
  return next();
});

app.use(
  express.static(ROOT_DIR, {
    dotfiles: 'ignore',
    index: ['index.html', 'Index.html'],
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Static portfolio server listening at http://${HOST}:${PORT}`);
});
