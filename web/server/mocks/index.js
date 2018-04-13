const express = require('express');
const router = express.Router();
const path = require('path');

const romsMock = require('./static/rooms.json');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

/**
 * Gets static details of all countries and currencies with names based on a given language.
 */

router.get('/rooms', (req, res) => buildJSONResponse(res, romsMock));

function buildJSONResponse(res, data) {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(data, null, 3));
}

module.exports = router;
