const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST new entry
 */
router.post('/new', (req, res) => {
    console.log('in /api/event, with ', req.body);

    const postString = `INSERT INTO "entry" ("user_id", "date", "description", "photo_URL") 
        VALUES ($1, $2, $3, $4);`;
    const val = req.body;

    //ONCE AUTH is on this project, replace 1 on the next line with req.user.id!    
    pool.query(postString, [1, val.date, val.description, val.photoURL])
    .then(() => (
        res.sendStatus(200)
    )).catch((error) => (
        res.sendStatus(500),
        console.log(error)
    ))
});

module.exports = router;