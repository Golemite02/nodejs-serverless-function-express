const express = require("express");
const app = express();
const {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  verifyKeyMiddleware,
} = require("discord-interactions");

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

require(`${process.cwd()}/events/interactionCreate.js`)(app);
app.listen(3000, () => {
  console.log("server started");
})
