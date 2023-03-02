const express = require("express");
const router = express.Router();

const chargesCtrl = require("../controllers/chargesCtrl");

router.post("/", chargesCtrl.createCharges);
router.get("/", chargesCtrl.getAllCharges);
/*router.get("/:id", donCtrl.getOneDon);
router.put("/:id", donCtrl.modifyDon);
router.delete("/:id", donCtrl.deleteDon);*/
module.exports = router;
