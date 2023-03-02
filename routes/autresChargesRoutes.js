const express = require("express");
const router = express.Router();

const autresChargesCtrl = require("../controllers/autresChargesCtrl");

router.post("/", autresChargesCtrl.createAutresCharges);
router.get("/", autresChargesCtrl.getAllAutresCharges);
/*router.get("/:id", donCtrl.getOneDon);
router.put("/:id", donCtrl.modifyDon);
router.delete("/:id", donCtrl.deleteDon);*/
module.exports = router;
