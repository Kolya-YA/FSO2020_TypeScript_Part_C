import express from 'express';
import patientService from '../services/patients';
import toNewPatientEntry from '../utils';
 
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getSafetyEntries());
});

router.post('/', (req, res) => {
  try {
    const NewPatientEntry  = toNewPatientEntry(req.body);
    const newPatient = patientService.addEntries(NewPatientEntry);
    res.json(newPatient);    
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
});

export default router;