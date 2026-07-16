


const express = require("express");
const router = express.Router();

const menuController = require("../controllers/MenuController");


// GET
router.get("/", menuController.getItems);


// POST
router.post("/", menuController.addItem);


// PUT
router.put("/:id", menuController.updateItem);


// DELETE
router.delete("/:id", menuController.deleteItem);


module.exports = router;