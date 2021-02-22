 const { CardDetails } = require("../models/cardDetails");

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


router.post("/card", (req, res) => {
  const { name, creditCardNumber, creditCardDate, creditCardCCV } = req.body;

  const CardDetails = new CardDetails({
    name,
    creditCardNumber,
    creditCardDate,
    creditCardCCV,
  });

  CardDetails.save()
    .then((user) => {
      console.log(user);
      return res.json({ result: user })
    }