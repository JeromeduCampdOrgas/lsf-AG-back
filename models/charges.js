const mongoose = require("mongoose");

const chargesSchema = mongoose.Schema({
  annee: { type: String, required: true },
  comptes: [
    {
      Achats: { type: Number },
      Veterinaire_Icad: { type: Number },
      Dons_Abyda: { type: Number },
      Dons_Ecija: { type: Number },
      Dons_Tobarra: { type: Number },
      Dons_FBM: { type: Number },
      Dons_Goodbowl: { type: Number },
      Dons_Divers: { type: Number },
      Fonctionnement: { type: Number },
      Communication: { type: Number },
      Transport_Chiens: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Charges", chargesSchema);
