const express = require('express');
const router = express.Router();

// Example PUT route
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  // Do something with id and updatedData, like updating the database
  res.send(`Stadium with ID ${id} updated`);
});

module.exports = router;
