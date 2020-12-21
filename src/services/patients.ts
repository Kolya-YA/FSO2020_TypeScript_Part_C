import patients from '../../data/patientsData';

import { NewPatientEntry, PatientsFullEntry, PatientsSafetyEntry } from '../types';

const getFullEntries = (): Array<PatientsFullEntry> => patients;

const getSafetyEntries = (): PatientsSafetyEntry[] => patients.map(
      ({ ssn: _ssn, ...safetyFields }) => safetyFields
    );
    
    const addEntries = (newPatientEntry: NewPatientEntry): PatientsSafetyEntry => {
      const newId = (Math.max(...patients.map(p => parseInt(p.id.split('-')[0], 16))) + 1)
      .toString(16)
      .concat(patients[0].id.slice(patients[0].id.indexOf('-'))
      );
    
    const newPatient = {
      id: newId,
      ...newPatientEntry
    };

    patients.push(newPatient);
    return newPatient;
  };

export default {
  getFullEntries,
  getSafetyEntries,
  addEntries
};