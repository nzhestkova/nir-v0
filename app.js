const DIST_PATH = '/dist';
const APPLICATION_PATH = `${DIST_PATH}/nir-v0`;

const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, APPLICATION_PATH)));

app.get('/mock-data/*', (req, res) => {
    res.sendFile(path.join(__dirname, `${APPLICATION_PATH}/index.html`));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, `${APPLICATION_PATH}/index.html`));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(`${port}`, () => console.log("[APP-NIR-V0] running"));
