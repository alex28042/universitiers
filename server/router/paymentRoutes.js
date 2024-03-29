const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51LiOtxKEbbYpdkJ1bSGiqXTdl77TIx8QWA2iuY4Lt2MWOQxAzzITUVVh9SQ2WjDOANVFfDR6hzBjRU8A3PMSOiBC00MuCiyE4i"
);
router.post('/intents', async (req, res) => {
    try {
      // create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount, // Integer, usd -> pennies, eur -> cents
        currency: 'eur',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      // Return the secret
      res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  });