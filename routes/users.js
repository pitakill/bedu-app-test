const router = require("express").Router();

const {
  Create,
  Read,
  ReadById,
  Update,
  Delete,
} = require("../controllers/users");

router.get("/user", Read);
router.get("/user/:id", ReadById);
router.post("/user", Create);
router.put("/user/:id", Update);
router.delete("/user/:id", Delete);

module.exports = router;
