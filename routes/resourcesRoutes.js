const express = require("express");
const router = express.Router();

const resourcesCtrl = require("../controllers/resourcesCtrl");

router.post("/", resourcesCtrl.createResources);
router.get("/", resourcesCtrl.getAllResources);
/*router.get("/:id", donCtrl.getOneDon);
router.put("/:id", donCtrl.modifyDon);
router.delete("/:id", donCtrl.deleteDon);*/
module.exports = router;
