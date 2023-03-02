const mongoose = require("mongoose");

const autresChargesSchema = mongoose.Schema({
  annee: { type: String, required: true },
  comptes: [
    {
      Achats_consommes: { type: Number },
      Dotations_aux_amortissements: { type: Number },
      Autres_charges_exploitation: { type: Number },
    },
  ],
});

module.exports = mongoose.model("autresCharges", autresChargesSchema);
