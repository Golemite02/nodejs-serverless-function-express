import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  verifyKeyMiddleware,
} from "discord-interactions";

module.exports = (req, res) => {
  const { name = 'boy' } = req.query;
  res.status(200).json({
    message: `Hello ${name}!`,
  });
};
