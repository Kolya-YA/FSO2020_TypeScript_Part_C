import express from 'express';
import { getSafetyEntries } from '../services/patients';
 
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getSafetyEntries());
});

export default router;