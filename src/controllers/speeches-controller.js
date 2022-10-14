const auth = require("../middlewares/auth");
const { getSpeeches, addSpeech } = require("../services/speeches-service");

const router = require("express").Router();

router.get("/", auth, async (req, res) => {
	const speeches = await getSpeeches();
	if (speeches) {
		res.json(speeches);
	}
});

router.post("/create", (req, res) => {
	const speech = addSpeech(req.body);
	res.json(speech);
});

module.exports = router;
