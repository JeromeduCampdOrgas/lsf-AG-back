const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//Permet l'implémentation d'un nouveau don
exports.createUser = (req, res, next) => {
  console.log(req.body);
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(401).json({ error: "Utilisateur déjà existant" });
      } else {
        bcryptjs
          .hash(req.body.password, 10)
          .then((hash) => {
            const user = new User({
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then(() =>
                res.status(201).json({ message: "Utilisateur créé !" })
              )
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }); // on vérifie que l'adresse mail figure bien dans la bdd
    if (user === null) {
      return res.status(403).json({ error: "Connexion échouée" });
    } else {
      const hash = bcryptjs.compare(req.body.password, user.password); // on compare les mots de passes
      if (!hash) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      } else {
        res.status(200).send({
          // on renvoie le user et le token
          user: user,
          token: jwt.sign(
            {
              userId: user._id,
              email: user.email,
            },
            process.env.token_secret,
            {
              expiresIn: "24h",
            }
          ),
          message: "Bonjour Vous êtes connecté ",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: "Nouvelle Erreur serveur" });
  }
};
