const express = require('express');
const router = express.Router();
const path = require('path');

/* Response data for end-points */
const testmock = require('./static/testMock.json');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

/**
 * Gets static details of all countries and currencies with names based on a given language.
 */
router.get('/testmock', (req, res) => buildJSONResponse(res, testmock));

function buildJSONResponse(res, data) {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(data, null, 3));
}

module.exports = router;
