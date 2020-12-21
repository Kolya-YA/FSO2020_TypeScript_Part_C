import express from 'express';
import patientService from '../services/patients';
 
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getSafetyEntries());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation }  = req.body;
  const newPatient = patientService.addEntries({ name, dateOfBirth, ssn, gender, occupation });
  console.log(newPatient);
  res.json(newPatient);
});

export default router;