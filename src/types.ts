export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientsFullEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type PatientsSafetyEntry = Omit<PatientsFullEntry, 'ssn'>;