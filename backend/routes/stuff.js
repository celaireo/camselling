const express = require('express');

const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
//const Thing = require('../models/thing');

router.post('/', stuffCtrl.creatThing);

router.put('/:id', stuffCtrl.modifyThing);

router.get('/:id', stuffCtrl.getOneThing);

router.get('/', stuffCtrl.getAllThings);

router.delete('/:id', stuffCtrl.deleteThing);
  

module.exports = router;