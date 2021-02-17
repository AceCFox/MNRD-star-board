const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all teams data
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "team";`;
    pool.query(queryText)
  .then((result) => (
    res.send(result.rows),
    console.log('')
  ))
  .catch((error) => (
    res.sendStatus(500),
    console.log(error)
  ))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;