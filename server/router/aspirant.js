const express = require("express");
const router = express.Router();
const Aspirant = require("../model/aspirant");
const formData = require("../utils/formData");

router.post("/formSubmit", async (req, res) => {
  const aspirant= new Aspirant(req.body);
  try {
    await aspirant.save();
    res.status(201).send(aspirant);
  } catch (error) {
    res.status(400).send(error);
  }
  // task.save().then(() => {
  //     res.send(task)
  // }).catch((e) => {
  //     res.status(400).send()
  // })
});

router.get("/formData", async (req, res) => {
  try {
    const data = await formData;
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
