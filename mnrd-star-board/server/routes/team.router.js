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
    res.send(result.rows)
  ))
  .catch((error) => (
    res.sendStatus(500),
    console.log('error on teams get: ', error)
  ))
});

/**
 * PUT route to update the team associated with a user
 */
router.put('/:id', (req, res) => {
    const queryText = `UPDATE "user" SET "team_id" = $1 WHERE "id" = $2;`
    //once auth is added replace 1 with user.id;
    const inputs =[req.params.id, 1];
    pool.query(queryText, inputs)
    .then(() => (
      res.sendStatus(200)
    ))
    .catch((error) => (
      res.sendStatus(500),
      console.log("error on teams put: ", error)
    ))
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;