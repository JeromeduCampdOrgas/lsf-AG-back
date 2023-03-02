//** */
//const { response } = require("../app");
const Charges = require("../models/charges");

exports.createCharges = (req, res, next) => {
  let annee = req.body.annee;
  Charges.findOne({ annee: annee })
    .then((found) => {
      if (found) {
        res.status(200).json({ message: "L'année est déjà existante en base" });
      } else {
        const charge = new Charges({
          annee: annee,
          comptes: req.body.comptes,
        });
        charge
          .save()
          .then(() => res.status(201).json({ message: "Charge créée !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllCharges = (req, res, next) => {
  Charges.find()
    .then((charges) => {
      res.status(200).json(charges);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
