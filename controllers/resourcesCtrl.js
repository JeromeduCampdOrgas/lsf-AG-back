//** */
//const { response } = require("../app");
const Resources = require("../models/resources");

exports.createResources = (req, res, next) => {
  let annee = req.body.annee;
  console.log(req.body);
  Resources.findOne({ annee: annee })
    .then((found) => {
      if (found) {
        res.status(200).json({ message: "L'année est déjà existante en base" });
      } else {
        const resource = new Resources({
          annee: annee,
          comptes: req.body.comptes,
        });
        resource
          .save()
          .then(() => res.status(201).json({ message: "Resource créée !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllResources = (req, res, next) => {
  Resources.find()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
