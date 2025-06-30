const express = require('express');
const router = express.Router();
const {
  getPlayers,
  createPlayer,
  deletePlayer,
} = require('../controllers/playerController');

router.get('/', getPlayers);         // ✅ Fetch all players
router.post('/', createPlayer);      // ✅ Create new player
router.delete('/:id', deletePlayer); // ✅ Delete player by ID

module.exports = router;
