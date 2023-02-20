const express = require('express');

const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
//const Thing = require('../models/thing');

//Commande pour créer un objet
router.post('/', stuffCtrl.creatThing);

//Commande pour modifier un objet
router.put('/:id', stuffCtrl.modifyThing);

//Commande pour afficher un objet
router.get('/:id', stuffCtrl.getOneThing);

//Commande pour afficher tous les objets 
router.get('/', stuffCtrl.getAllThings);

//Commande pour supprimer un objet
router.delete('/:id', stuffCtrl.deleteThing);
  

module.exports = router;