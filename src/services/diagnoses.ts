import diagnoses from '../../data/diagnosesData';

import { DiagnosesEntry } from '../types';

const getEntries = (): Array<DiagnosesEntry> => diagnoses;

export default {
  getEntries
}; 