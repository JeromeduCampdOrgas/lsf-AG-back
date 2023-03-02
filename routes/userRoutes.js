const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCtrl");

router.post("/", userCtrl.createUser);
router.post("/login", userCtrl.login);
/*router.get("/:id", donCtrl.getOneDon);
router.put("/:id", donCtrl.modifyDon);
router.delete("/:id", donCtrl.deleteDon);*/
module.exports = router;
