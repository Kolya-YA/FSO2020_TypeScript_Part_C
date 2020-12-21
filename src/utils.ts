/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Gender, NewPatientEntry } from "./types";

const isString = (text: any): text is string => typeof(text) === 'string';
const isDate = (date: string): boolean => !!Date.parse(date);
const isGender = (param: any): param is Gender => Object.values(Gender).includes(param);

const parseName = (name: any): string => {
  if(!name || !isString(name)) {
    throw Error(`Incorrect or missing name.`);
  }
  return name;
};

const parseDate = (date: any) => {
  if(!date || !isString(date) || !isDate(date)) {
    throw Error(`Incorrect or missing date.`);
  }
  return date;
};

const parseSsn = (ssn: any): string => {
  if(!ssn || !isString(ssn)) {
    throw Error(`Incorrect or missing name.`);
  }
  return ssn;
};

const parseGender = (gender: any): Gender => {
  if(!gender || !isGender(gender)) {
    throw Error(`Incorrect or missing name.`);
  }
  return gender;
};

const parseOccupation = (occupation: any): string => {
  if(!occupation || !isString(occupation)) {
    throw Error(`Incorrect or missing name.`);
  }
  return occupation;
};

const toNewPatientEntry = (newPatientObject: any): NewPatientEntry => {
  return {
    name: parseName(newPatientObject.name),
    dateOfBirth: parseDate(newPatientObject.dateOfBirth),
    ssn: parseSsn(newPatientObject.ssn),
    gender: parseGender(newPatientObject.gender),
    occupation: parseOccupation(newPatientObject.occupation)
  };
};

export default toNewPatientEntry;