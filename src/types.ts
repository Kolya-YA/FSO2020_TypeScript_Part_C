export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface PatientsFullEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type PatientsSafetyEntry = Omit<PatientsFullEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientsFullEntry, 'id'>;