import express from 'express';
import getEntries from '../services/diagnoses';
 
const router = express.Router();

router.get('/', (_req, res) => {
  const diag = getEntries.getEntries();
  res.send(diag);
});

export default router;