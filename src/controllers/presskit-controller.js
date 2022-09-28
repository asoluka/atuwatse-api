const router = require("express").Router();
const { getPresskit } = require("../services/presskit-service");

router.get("/", (req, res) => {
  const presskit = getPresskit();
  res.json(presskit);
});

module.exports = router;
