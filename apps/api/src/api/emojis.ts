import express from 'express';

const router: ReturnType<typeof express.Router> = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
