const mongoose = require("mongoose");

const resourcesSchema = mongoose.Schema({
  annee: { type: String, required: true },
  comptes: [
    {
      Dons: { type: Number },
      Adhesions: { type: Number },
      Ventes: { type: Number },
      Calendriers: { type: Number },
      Icad: { type: Number },
      Adoptions: { type: Number },
      FraisDeRoute: { type: Number },
      ProduitsFinanciers: { type: Number },
      AutresProduits: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Resources", resourcesSchema);
