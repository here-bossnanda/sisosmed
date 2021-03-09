const router = require('express').Router();
const sosialMediaController = require('../controllers/sosialMediaController')

router.get('/', sosialMediaController.getll);
router.post('/', sosialMediaController.store);
router.get('/:id', sosialMediaController.getOne);
router.put('/:id', sosialMediaController.update);
router.delete('/:id', sosialMediaController.destroy);


module.exports = router