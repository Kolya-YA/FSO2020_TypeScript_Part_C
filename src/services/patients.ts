import patients from '../../data/patientsData';

import { PatientsFullEntry, PatientsSafetyEntry } from '../types';

const getFullEntries = (): Array<PatientsFullEntry> => patients;

const getSafetyEntries = (): PatientsSafetyEntry[] => patients.map(
  ({ ssn: _ssn, ...safetyFields }) => safetyFields
);

const addEntries = (): null => null;

export {
  getFullEntries,
  getSafetyEntries,
  addEntries
}; 