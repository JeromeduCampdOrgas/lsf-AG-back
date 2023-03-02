//** */
//const { response } = require("../app");
const autresCharges = require("../models/autres-charges");

exports.createAutresCharges = (req, res, next) => {
  let annee = req.body.annee;
  console.log(req.body);

  const autreCharge = new autresCharges({
    annee: annee,
    comptes: req.body.comptes,
  });

  autreCharge
    .save()
    .then(() => res.status(201).json({ message: "autre Charge créée !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllAutresCharges = (req, res, next) => {
  autresCharges
    .find()
    .then((charges) => {
      res.status(200).json(charges);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
