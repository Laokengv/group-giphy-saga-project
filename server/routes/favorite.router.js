const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
  res.sendStatus(200);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO ("favorite")
  VALUES($1)`
  const queryValue = [
    newFavorite.favorite
  ];
  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(201); })
  .catch((err) => {
    console.log('Error completing SELECT favorite query', err);
  res.sendStatus(200);
  });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  let favId = req.body;
  
  const queryText = `
    UPDATE category
    SET favorite = $1
    WHERE id = $2;
  `;
  
  pool.query(queryText, favId)
  .then((result) => {
    res.send(result.rows);
  res.sendStatus(200);
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500);
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;


