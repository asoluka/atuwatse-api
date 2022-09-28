const { Speeches } = require("../models/speeches-model");

const getSpeeches = async () => {
  const speeches = await Speeches.find();
  return speeches;
};

const addSpeech = async (speech) => {
  const newSpeech = new Speeches({
    ...speech,
  });

  try {
    const speeches = await newSpeech.save();
    return speeches;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getSpeeches,
  addSpeech,
};
